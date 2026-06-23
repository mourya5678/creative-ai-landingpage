"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Helper to wait for JQuery and plugins to load before initialization via dynamic imports
const safeInit = async (name, initFn) => {
  if (typeof window !== "undefined") {
    try {
      let $ = window.jQuery || window.$;
      if (!$) {
        $ = (await import("jquery")).default;
        window.jQuery = $;
        window.$ = $;
      }
      // Polyfill $.camelCase if missing (deprecations or bundler resolution issues)
      if (!$.camelCase) {
        $.camelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      }
      // Polyfill $.type if missing (removed in newer jQuery versions, but needed by older Owl Carousel)
      if (!$.type) {
        $.type = (obj) => {
          if (obj === null) return "null";
          if (obj === undefined) return "undefined";
          const type = typeof obj;
          if (type === "object") {
            if (Array.isArray(obj)) return "array";
            if (obj instanceof Date) return "date";
            if (obj instanceof RegExp) return "regexp";
          }
          return type;
        };
      }
      if (!$.fn.owlCarousel) {
        await import("owl.carousel");
      }
      console.log(`[Carousel] ${name}: jQuery and Owl Carousel initialized via npm.`);
      initFn($);
    } catch (err) {
      console.error(`[Carousel] ${name}: Failed to dynamically load jQuery/OwlCarousel:`, err);
    }
  }
};

export function SmoothScrollInit() {
  return null;
}

export function HomeInit() {
  const pathname = usePathname();

  useEffect(() => {
    let animationFrame1 = 0;
    let animationFrame2 = 0;
    let retryTimer = 0;
    let stickyResizeTimer = 0;
    let stickyInitialTimer = 0;
    let stickyObserver = null;

    const restartHomeAnimation = () => {
      const centerRow = document.querySelector(".center-row");
      if (!centerRow) return false;

      // Re-mount the animated block so SVG SMIL and CSS animations restart
      // when navigating back to the home page or restoring from bfcache.
      const clone = centerRow.cloneNode(true);
      centerRow.replaceWith(clone);
      return true;
    };

    const scheduleRestart = (attempt = 0) => {
      window.cancelAnimationFrame(animationFrame1);
      window.cancelAnimationFrame(animationFrame2);
      window.clearTimeout(retryTimer);

      animationFrame1 = window.requestAnimationFrame(() => {
        animationFrame2 = window.requestAnimationFrame(() => {
          const didRestart = restartHomeAnimation();
          if (!didRestart && attempt < 20) {
            retryTimer = window.setTimeout(() => scheduleRestart(attempt + 1), 100);
          }
        });
      });
    };

    // 1. Owl Carousel
    safeInit("Home Testimonial Slider", ($) => {
      const $el = $(".cti_testimonial_slider");
      if ($el.length) {
        console.log("[Carousel] Home Testimonial Slider element found, instantiating owlCarousel.");
        if ($el.hasClass('owl-loaded')) {
          $el.owlCarousel('destroy');
        }
        $el.owlCarousel({
          loop: true,
          margin: 40,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 4000,
          smartSpeed: 800,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 },
            1326: { items: 4 },
            1600: { items: 5 }
          }
        });
      } else {
        console.log("[Carousel] Home Testimonial Slider element not found on page.");
      }
    });

    // 2. Sticky Scroll cards
    const stickySection =
      document.querySelector("#stickybox") ||
      document.querySelector(".ct_sticky_scroll_main");

    const syncStickyLayout = () => {
      if (!stickySection) {
        return;
      }

      const stickyBoxes = stickySection.querySelectorAll(".cti_saas_card");
      if (!stickyBoxes.length) {
        return;
      }

      const isDesktop = window.matchMedia("(min-width: 992px)").matches;
      const firstCardSpace = isDesktop ? 100 : 0;
      const offset = isDesktop ? 70 : 0;

      stickyBoxes.forEach((box, index) => {
        const topValue =
          index === 0
            ? firstCardSpace
            : firstCardSpace + offset * index;

        box.style.setProperty("--stick-top", `${topValue}px`);
        box.style.zIndex = String(index + 1);
      });
    };

    syncStickyLayout();
    window.requestAnimationFrame(syncStickyLayout);
    stickyInitialTimer = window.setTimeout(syncStickyLayout, 150);

    window.addEventListener("resize", syncStickyLayout);
    window.addEventListener("load", syncStickyLayout);

    const onPageShow = (event) => {
      if (event.persisted) {
        scheduleRestart();
        return;
      }

      scheduleRestart();
    };

    scheduleRestart();
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("resize", syncStickyLayout);
      window.removeEventListener("load", syncStickyLayout);
      window.cancelAnimationFrame(animationFrame1);
      window.cancelAnimationFrame(animationFrame2);
      window.clearTimeout(retryTimer);
      window.clearTimeout(stickyInitialTimer);
    };
  }, [pathname]);
  return null;
}

export function InnerTestimonialInit() {
  useEffect(() => {
    safeInit("Inner Testimonial Slider", ($) => {
      const $el = $(".ct_testimonial_slider");
      if ($el.length) {
        console.log("[Carousel] Inner Testimonial Slider element found, instantiating owlCarousel.");
        if ($el.hasClass('owl-loaded')) {
          $el.owlCarousel('destroy');
        }
        $el.owlCarousel({
          loop: true,
          margin: 15,
          nav: true,
          autoHeight: true,
          responsive: {
            0: { items: 1 },
            575: { items: 1 },
            767: { items: 2 },
            1000: { items: 3 }
          }
        });
      } else {
        console.log("[Carousel] Inner Testimonial Slider element not found on page.");
      }
    });
  }, []);
  return null;
}

export function RetailSliderInit() {
  useEffect(() => {
    safeInit("Retail App Slider", ($) => {
      const $el = $("#ct_retaial_app_slider");
      if ($el.length) {
        console.log("[Carousel] Retail App Slider element found, instantiating owlCarousel.");
        if ($el.hasClass('owl-loaded')) {
          $el.owlCarousel('destroy');
        }
        $el.owlCarousel({
          loop: true,
          margin: 50,
          nav: true,
          autoPlay: true,
          slideSpeed: 1000,
          smartSpeed: 1000,
          autoplayTimeout: 2000,
          autoplaySpeed: 3000,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 3 }
          }
        });
      } else {
        console.log("[Carousel] Retail App Slider element not found on page.");
      }
    });
  }, []);
  return null;
}

export function PricingSliderInit() {
  useEffect(() => {
    safeInit("Pricing Slider", ($) => {
      const $el = $(".ct_pricing_works");
      if ($el.length) {
        console.log("[Carousel] Pricing Slider element found, instantiating owlCarousel.");
        if ($el.hasClass('owl-loaded')) {
          $el.owlCarousel('destroy');
        }
        $el.on("initialized.owl.carousel changed.owl.carousel", function (e) {
          if (!e.namespace) return;
          $("#counter").text(
            e.relatedTarget.relative(e.item.index) + 1 + " of " + e.item.count
          );
        }).owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
          }
        });
      } else {
        console.log("[Carousel] Pricing Slider element not found on page.");
      }
    });
  }, []);
  return null;
}

export function BlogDetailsSliderInit() {
  useEffect(() => {
    safeInit("Blog Details Slider", ($) => {
      const $el = $(".ct_related_article");
      if ($el.length) {
        console.log("[Carousel] Blog Details Slider element found, instantiating owlCarousel.");
        if ($el.hasClass('owl-loaded')) {
          $el.owlCarousel('destroy');
        }
        $el.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
      } else {
        console.log("[Carousel] Blog Details Slider element not found on page.");
      }
    });
  }, []);
  return null;
}

export function OurStorySlidersInit() {
  useEffect(() => {
    safeInit("Our Story Sliders", ($) => {
      const $el1 = $(".ct_team_slider_1");
      if ($el1.length) {
        console.log("[Carousel] Our Story Team Slider 1 element found, instantiating.");
        if ($el1.hasClass('owl-loaded')) {
          $el1.owlCarousel('destroy');
        }
        $el1.owlCarousel({
          loop: true,
          center: true,
          nav: false,
          margin: 20,
          autoplay: true,
          slideTransition: "linear",
          autoplaySpeed: 6000,
          smartSpeed: 6000,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
          }
        });
      } else {
        console.log("[Carousel] Our Story Team Slider 1 element not found on page.");
      }

      const $el2 = $(".ct_featured_slider");
      if ($el2.length) {
        console.log("[Carousel] Our Story Featured Slider element found, instantiating.");
        if ($el2.hasClass('owl-loaded')) {
          $el2.owlCarousel('destroy');
        }
        $el2.owlCarousel({
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplaySpeed: 1000,
          smartSpeed: 1000,
          nav: false,
          responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 6 }
          }
        });
      } else {
        console.log("[Carousel] Our Story Featured Slider element not found on page.");
      }
    });
  }, []);
  return null;
}

export function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Auto-animate all elements with 'aos-init' class using IntersectionObserver
    // This mimics AOS behavior without requiring data-aos on every element
    let style = document.getElementById('aos-init-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'aos-init-style';
      style.textContent = `
        .aos-init {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .aos-init.ct_row_reverse_767 > *,
        .aos-init > *:not([class*="aos-init"]) {
          /* inherit */
        }
        .aos-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.aos-init:not(.aos-visible)');
      elements.forEach((el) => observer.observe(el));
    };

    // Observe initially
    observeElements();

    // Since nextjs transitions might render elements asynchronously, run checks
    const timers = [
      setTimeout(observeElements, 50),
      setTimeout(observeElements, 200),
      setTimeout(observeElements, 500),
      setTimeout(observeElements, 1000)
    ];

    // Set up a MutationObserver to automatically detect newly added .aos-init elements
    const mutationObserver = new MutationObserver((mutations) => {
      let needsObserve = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          needsObserve = true;
          break;
        }
      }
      if (needsObserve) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);
  return null;
}

export function EntrepreneursAnimationInit() {
  useEffect(() => {
    let scrollTriggerInstance = null;
    let registeredScrollListener = false;

    const initGSAP = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        return false;
      }

      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // 1. Image parallax scrolling effect driven by ScrollTrigger & Lenis
      const images = document.querySelectorAll(".ct_creative_single_img img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { y: -35 },
          {
            y: 35,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 2. Smooth reveal animations for rows (fading in and sliding up as they scroll)
      const animatedElements = document.querySelectorAll(".aos-init");
      animatedElements.forEach((el) => {
        // Remove active class to let GSAP animate them from initial state
        el.classList.remove("aos-animate", "aos-visible");

        // Set starting styles dynamically via GSAP (invisible & shifted down)
        gsap.set(el, { opacity: 0, y: 40 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%", // Trigger when top of element reaches 88% of screen height
            toggleActions: "play none none none",
          },
        });
      });

      // Synchronize ScrollTrigger updates with Lenis scroll events
      if (window.cti_lenis) {
        window.cti_lenis.on("scroll", ScrollTrigger.update);
        registeredScrollListener = true;
      }

      // Refresh ScrollTrigger to calculate initial positions
      ScrollTrigger.refresh();
      return true;
    };

    // Retry initialization in case GSAP scripts are loading asynchronously
    let retries = 50;
    const tryInit = () => {
      if (!initGSAP() && retries > 0) {
        retries--;
        setTimeout(tryInit, 100);
      }
    };
    tryInit();

    // Trigger a resize on the global Lenis instance to update smooth scroll bounds
    if (window.cti_lenis) {
      setTimeout(() => {
        window.cti_lenis.resize();
      }, 100);
    }

    // Cleanup: kill ScrollTrigger instances when the component is unmounted
    return () => {
      if (window.ScrollTrigger) {
        if (registeredScrollListener && window.cti_lenis) {
          window.cti_lenis.off("scroll", window.ScrollTrigger.update);
        }
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return null;
}
