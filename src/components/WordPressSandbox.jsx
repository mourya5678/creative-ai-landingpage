"use client";
import React, { useEffect, useRef } from "react";

export default function WordPressSandbox({ bodyContent, stylesheets, inlineStyles, bodyClasses, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get or attach shadow root
    let shadowRoot = containerRef.current.shadowRoot;
    if (!shadowRoot) {
      shadowRoot = containerRef.current.attachShadow({ mode: "open" });
    }

    // Build markup inside shadow DOM
    const linkTags = (stylesheets || [])
      .map((url) => `<link rel="stylesheet" href="${url}" />`)
      .join("\n");

    const styleTags = (inlineStyles || [])
      .map((css) => `<style>${css}</style>`)
      .join("\n");

    shadowRoot.innerHTML = `
      ${linkTags}
      ${styleTags}
      <div class="${bodyClasses || ''}" style="width: 100%; min-height: 100%;">
        ${bodyContent || ''}
      </div>
    `;
  }, [bodyContent, stylesheets, inlineStyles, bodyClasses]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: "100%", minHeight: "500px", overflow: "visible", ...style }} 
    />
  );
}
