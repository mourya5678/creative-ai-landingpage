const CACHE_NAME = "creative-ai-offline-v1";
const OFFLINE_URL = "/offline";

// Files to cache on install
const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  "/creative_icon.png",
  "/robots.txt",
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Warm up the cache with critical assets
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  const { request } = event;
  
  // Only handle GET requests
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // Bypass chrome-extension files, webpack dev sockets, and other protocols
  if (!url.protocol.startsWith("http")) {
    return;
  }

  // 1. DONT CACHE API REQUESTS: Always go straight to the network
  // This satisfies: "api wala data humesa api s get kr k dikhana h ... isko cache m save mt krana"
  if (
    url.pathname.includes("/api/") || 
    url.hostname.includes("api.") ||
    url.pathname.includes("getAllPlans") ||
    url.pathname.includes("getBlogs")
  ) {
    // Network Only
    event.respondWith(fetch(request));
    return;
  }

  // 2. Navigation requests (HTML pages) - Network First, fallback to offline page
  if (request.mode === "navigate" || (request.headers.get("accept") || "").includes("text/html")) {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(OFFLINE_URL).then((offlineResponse) => {
          if (offlineResponse) {
            return offlineResponse;
          }
          // Generic fallback text if even cache fails to respond
          return new Response("Offline. Please check your internet connection.", {
            headers: { "Content-Type": "text/html" },
          });
        });
      })
    );
    return;
  }

  // 3. Static assets (JS, CSS, Images, Fonts) - Stale-while-revalidate or Cache-First
  // For standard next static files or images, we use Cache-First / Cache Falling Back to Network.
  if (
    url.origin === self.location.origin && 
    (url.pathname.startsWith("/_next/static/") || 
     url.pathname.startsWith("/img/") || 
     url.pathname.startsWith("/assets/") || 
     url.pathname.endsWith(".js") || 
     url.pathname.endsWith(".css") || 
     url.pathname.endsWith(".webp") || 
     url.pathname.endsWith(".png") ||
     url.pathname.endsWith(".svg") ||
     url.pathname.endsWith(".jpg") ||
     url.pathname.endsWith(".jpeg") ||
     url.pathname.endsWith(".ico"))
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache but fetch in background to keep it updated (Stale-While-Revalidate)
          fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          }).catch(() => {
            // Ignore errors when fetching background updates offline
          });
          return cachedResponse;
        }

        // Cache miss: fetch from network and cache
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
