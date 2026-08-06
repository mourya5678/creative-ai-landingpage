"use client";
import React, { useEffect, useRef, useState } from "react";

export default function WordPressSandbox({ bodyContent, stylesheets, inlineStyles, bodyClasses, style }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState("600px");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!iframeRef.current) return;

    // Reset loading state on content change
    setIsLoading(true);

    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Generate link tags with onload and onerror events to track stylesheet loading
    const linkTags = (stylesheets || [])
      .map((url) => `<link rel="stylesheet" href="${url}" onload="stylesheetLoaded()" onerror="stylesheetLoaded()" />`)
      .join("\n");

    // Generate style tags for inline WordPress CSS
    const styleTags = (inlineStyles || [])
      .map((css) => `<style>${css}</style>`)
      .join("\n");

    // Write HTML content directly to the iframe document
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <base target="_parent" />
          ${linkTags}
          ${styleTags}
          <style>
            html, body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              background: transparent;
            }
            /* Hide vertical scrollbars inside the iframe document */
            body::-webkit-scrollbar {
              display: none;
            }
            body {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            /* 
              Fix WordPress negative margins cropping layout at top.
              Set top container margin to 0 and add padding to clear our absolute header (height ~100px).
            */
            .elementor > .elementor-element:first-child,
            #iframe-wrapper > .elementor-element:first-child,
            #iframe-wrapper > div > .elementor-element:first-child {
              margin-top: 0px !important;
              padding-top: 140px !important;
            }
          </style>
        </head>
        <body class="${bodyClasses || ''}">
          <div id="iframe-wrapper" style="opacity: 0; transition: opacity 0.4s ease; width: 100%;">
            ${bodyContent || ''}
          </div>
          <script>
            let totalStylesheets = ${(stylesheets || []).length};
            let loadedCount = 0;

            function stylesheetLoaded() {
              loadedCount++;
              if (loadedCount >= totalStylesheets) {
                showIframeContent();
              }
            }

            function showIframeContent() {
              const wrapper = document.getElementById('iframe-wrapper');
              if (wrapper) {
                wrapper.style.opacity = '1';
              }
              window.parent.postMessage({ type: 'iframe-loaded' }, '*');
              sendHeight();
            }

            // Inform the parent window about height changes
            function sendHeight() {
              const wrapper = document.getElementById('iframe-wrapper');
              if (wrapper) {
                const height = wrapper.offsetHeight || document.documentElement.scrollHeight;
                window.parent.postMessage({ 
                  type: 'resize-iframe', 
                  height: height
                }, '*');
              }
            }
            
            // Listen for document load, images load and resize
            window.addEventListener('load', () => {
              // Fallback to ensure everything becomes visible even if some links fail/cache
              showIframeContent();
            });
            window.addEventListener('resize', sendHeight);
            
            // Periodically check height for dynamic changes
            setInterval(sendHeight, 300);
          </script>
        </body>
      </html>
    `);
    doc.close();

    // Listen for messages from the iframe
    const handleMessage = (event) => {
      if (event.data) {
        if (event.data.type === 'resize-iframe') {
          setIframeHeight(event.data.height + "px");
        } else if (event.data.type === 'iframe-loaded') {
          setIsLoading(false);
        }
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [bodyContent, stylesheets, inlineStyles, bodyClasses]);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "600px", backgroundColor: "#020202", ...style }}>
      {isLoading && (
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#020202",
            minHeight: "500px",
            zIndex: 10
          }}
        >
          <div 
            className="spinner-border" 
            role="status" 
            style={{ width: "3.5rem", height: "3.5rem", color: "#5d5cff" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-white ct_fs_18">Loading Blog Design...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        style={{
          width: "100%",
          height: iframeHeight,
          border: "none",
          background: "transparent",
          overflow: "hidden",
          display: "block",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.4s ease"
        }}
        scrolling="no"
        title="WordPress Blog Sandbox"
      />
    </div>
  );
}
