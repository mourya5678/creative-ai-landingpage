"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function LenisBridge() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || typeof window === "undefined") {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.cti_lenis = lenis;

    const updateStickyHeader = ({ scroll }) => {
      const header = document.querySelector(".ct_header_main");
      if (!header) {
        return;
      }

      header.classList.toggle("ct_sticky_menu", scroll >= 300);
    };

    lenis.on("scroll", updateStickyHeader);
    updateStickyHeader({ scroll: lenis.scroll ?? window.scrollY ?? 0 });

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.off("scroll", updateStickyHeader);
      window.history.scrollRestoration = previousScrollRestoration;
      if (window.cti_lenis === lenis) {
        window.cti_lenis = null;
      }
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis || typeof window === "undefined") {
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [lenis, pathname]);

  return null;
}

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        autoRaf: true,
        stopInertiaOnNavigate: true,
        syncTouch: true,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <LenisBridge />
      {children}
    </ReactLenis>
  );
}
