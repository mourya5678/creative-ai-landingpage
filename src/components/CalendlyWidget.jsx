"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function CalendlyWidget({ url }) {
  const containerRef = useRef(null);

  const initCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly && containerRef.current) {
      try {
        // Clear any previous content/iframe to prevent duplicate rendering
        containerRef.current.innerHTML = "";
        
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: containerRef.current,
          prefill: {},
          pageSettings: {},
        });
      } catch (err) {
        console.error("Failed to initialize Calendly inline widget:", err);
      }
    }
  };

  useEffect(() => {
    // If Calendly has already loaded from previous page visits, initialize it on mount
    if (typeof window !== "undefined" && window.Calendly) {
      initCalendly();
    }
  }, [url]);

  return (
    <>
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "900px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initCalendly}
      />
    </>
  );
}

