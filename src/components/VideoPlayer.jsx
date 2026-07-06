"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play and mute settings programmatically to ensure compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch((err) => {
        console.warn("Autoplay failed or was blocked:", err);
      });
    };

    // Initial play attempt
    playVideo();

    const handleLoadedMetadata = () => {
      console.log("[VideoPlayer] Loaded metadata. Duration:", video.duration);
    };

    // Force replay on end (fallback for loop attribute failing)
    const handleEnded = () => {
      console.log("[VideoPlayer] Event: ended. Looping to 0.");
      video.currentTime = 0;
      playVideo();
    };

    // Timeupdate listener to loop before the absolute end to prevent browser freeze
    const handleTimeUpdate = () => {
      // Loop at 9.0s to prevent reaching the corrupted audio packet at 9.68s
      if (video.currentTime >= 9.0) {
        console.log("[VideoPlayer] Loop threshold (9.0s) reached. Resetting to 0.");
        video.currentTime = 0;
        playVideo();
      }
    };

    // Event listener to restart/play if the browser or user activity causes a pause
    const handlePause = () => {
      console.log("[VideoPlayer] Event: pause. CurrentTime:", video.currentTime);
      if (video.paused) {
        if (video.currentTime >= 9.0) {
          video.currentTime = 0;
        }
        playVideo();
      }
    };

    // If video load stalls, force reload and play to prevent freeze
    const handleStalled = () => {
      console.warn("[VideoPlayer] Event: stalled, reloading...");
      video.load();
      playVideo();
    };

    const handleWaiting = () => {
      console.log("[VideoPlayer] Event: waiting (buffering)...");
    };

    const handlePlay = () => {
      console.log("[VideoPlayer] Event: play. CurrentTime:", video.currentTime);
    };

    const handleError = () => {
      const err = video.error;
      console.warn("[VideoPlayer] Event: error occurred. Code:", err ? err.code : "unknown", "Message:", err ? err.message : "");
      console.log("[VideoPlayer] Attempting self-healing recovery: resetting currentTime to 0 and reloading stream.");
      video.currentTime = 0;
      video.load();
      playVideo();
    };

    // Attempt to play on user interactions anywhere on the document (safari/chrome bypass)
    const handleInteraction = () => {
      if (video.paused) {
        if (video.currentTime >= 9.0) {
          video.currentTime = 0;
        }
        playVideo();
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("error", handleError);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("pause", handlePause);
    video.addEventListener("stalled", handleStalled);
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("error", handleError);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("stalled", handleStalled);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      autoPlay
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
