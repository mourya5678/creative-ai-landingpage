"use client";

import { useEffect } from "react";

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

      if (isLocalhost) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });
        return;
      }

      // Register the service worker after the page is loaded completely
      const handleRegister = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      };

      if (document.readyState === "complete") {
        handleRegister();
      } else {
        window.addEventListener("load", handleRegister);
        return () => window.removeEventListener("load", handleRegister);
      }
    }
  }, []);

  return null;
}
