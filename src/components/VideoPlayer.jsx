"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Initial sync
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch((err) => {
        if (err.name !== "AbortError") {
          console.warn("Play failed:", err);
        }
      });
    } else {
      video.pause();
    }
  };

  const showButton = !isPlaying || isHovered;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto" }}
    >
      <video
        ref={videoRef}
        playsInline
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        preload="auto"
        className={className}
        style={{ display: "block", width: "100%", borderRadius: "10px" }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 1. Full Height Visual Overlay (Pointer events: none, no click blockage) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: showButton ? "rgba(0, 0, 0, 0.35)" : "transparent",
          transition: "background 0.3s ease",
          borderRadius: "10px",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9,
        }}
      >
        {/* Play/Pause Button in Center (Pointer events: auto, clickable) */}
        <div
          onClick={handlePlayPause}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#5e5ff5", // Theme primary purple/blue
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 25px rgba(94, 95, 245, 0.4)",
            transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s ease, opacity 0.3s ease, visibility 0.3s ease",
            opacity: showButton ? 1 : 0,
            visibility: showButton ? "visible" : "hidden",
            pointerEvents: showButton ? "auto" : "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.12)";
            e.currentTarget.style.backgroundColor = "#4c4df0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#5e5ff5";
          }}
        >
          {isPlaying ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                fill="#ffffff"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "4px" }}
            >
              <path
                d="M8 5v14l11-7z"
                fill="#ffffff"
              />
            </svg>
          )}
        </div>
      </div>

      {/* 2. Invisible Click Catcher for Play/Pause (Covers top video body, leaves bottom 60px controls) */}
      <div
        onClick={handlePlayPause}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100% - 60px)",
          cursor: "pointer",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      />
    </div>
  );
}

