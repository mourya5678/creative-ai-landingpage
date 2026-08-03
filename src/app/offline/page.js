"use client";
import React, { useEffect, useState } from "react";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);

      const handleOnline = () => {
        setIsOnline(true);
        // Automatically redirect back to the home page or reload the page when connection is restored
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      };
      
      const handleOffline = () => {
        setIsOnline(false);
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  const handleRetry = () => {
    if (typeof window !== "undefined") {
      if (navigator.onLine) {
        window.location.href = "/";
      } else {
        // Simple shake animation effect on button
        const button = document.getElementById("retry-btn");
        if (button) {
          button.classList.add("shake");
          setTimeout(() => button.classList.remove("shake"), 500);
        }
      }
    }
  };

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: styles.keyframes }} />
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          {/* Creative AI Logo Icon in SVG */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.logoSvg}
          >
            <path
              d="M10 20C10 14.4772 14.4772 10 20 10H40C45.5228 10 50 14.4772 50 20V40C50 45.5228 45.5228 50 40 50H20C14.4772 50 10 45.5228 10 40V20Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M20 22C20 20.8954 20.8954 20 22 20H38C39.1046 20 40 20.8954 40 22V38C40 39.1046 39.1046 40 38 40H22C20.8954 40 20 39.1046 20 38V22Z"
              fill="white"
              fillOpacity="0.15"
            />
            <circle cx="30" cy="30" r="6" fill="#FFFFFF" />
            <path
              d="M30 18V24M30 36V42M18 30H24M36 30H42"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="10"
                y1="10"
                x2="50"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 style={styles.heading}>You're Offline</h1>
        
        <p style={styles.subtext}>
          It looks like your internet connection is unavailable. Please check your network settings and try again.
        </p>

        <div style={styles.statusBox}>
          <span
            style={{
              ...styles.statusDot,
              backgroundColor: isOnline ? "#10B981" : "#EF4444",
              boxShadow: isOnline
                ? "0 0 10px rgba(16, 185, 129, 0.6)"
                : "0 0 10px rgba(239, 68, 68, 0.6)",
            }}
          />
          <span style={styles.statusText}>
            {isOnline ? "Connection Restored! Redirecting..." : "No Connection"}
          </span>
        </div>

        <button
          id="retry-btn"
          onClick={handleRetry}
          style={{
            ...styles.button,
            opacity: isOnline ? 0.7 : 1,
            cursor: isOnline ? "not-allowed" : "pointer",
          }}
          disabled={isOnline}
        >
          Retry Connection
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
    fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#F8FAFC",
    padding: "20px",
  },
  card: {
    maxWidth: "460px",
    width: "100%",
    background: "rgba(30, 41, 59, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "24px",
    padding: "40px 30px",
    textAlign: "center",
    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  logoContainer: {
    marginBottom: "24px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoSvg: {
    filter: "drop-shadow(0 8px 16px rgba(99, 102, 241, 0.3))",
    animation: "float 6s ease-in-out infinite",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "12px",
    background: "linear-gradient(to right, #FFFFFF, #E2E8F0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },
  subtext: {
    fontSize: "15px",
    color: "#94A3B8",
    lineHeight: "1.6",
    marginBottom: "28px",
  },
  statusBox: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 16px",
    borderRadius: "30px",
    background: "rgba(15, 23, 42, 0.5)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    marginBottom: "32px",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  statusText: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#E2E8F0",
  },
  button: {
    width: "100%",
    padding: "14px 28px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
    transition: "all 0.3s ease",
    outline: "none",
  },
  keyframes: `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .shake {
      animation: shake-anim 0.5s ease-in-out;
    }
    @keyframes shake-anim {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
  `,
};
