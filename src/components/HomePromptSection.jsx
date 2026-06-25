"use client";

import React, { useState } from "react";

const SUGGESTIONS = [
  {
    label: "Food Delivery App",
    prompt: "Create a food delivery app with user authentication, restaurant listings, cart, and order tracking."
  },
  {
    label: "CRM Dashboard",
    prompt: "Build a CRM dashboard with leads, contacts, deals, and activity tracking."
  },
  {
    label: "AI Chatbot",
    prompt: "Create an AI chatbot with natural language understanding and a modern UI."
  },
  {
    label: "Fitness Platform",
    prompt: "Build a fitness platform with workout plans, progress tracking, and user profiles."
  },
  {
    label: "Marketplace App",
    prompt: "Create a marketplace app with product listings, user profiles, and secure payments."
  }
];

export default function HomePromptSection() {
  const [prompt, setPrompt] = useState("");
  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("prompt", prompt);
      window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL || "http://72.60.203.98/login";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="cti_prompt_main">
        <textarea
          className="form-control"
          id="home_prompt_textarea"
          placeholder="What would you like to build today?"
          rows="5"
          aria-label="What would you like to build today?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="cti_home_prompt_action_btns">
          <div className="ctiprompt_left_btns">
            <button type="button" aria-label="Attach file">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00081e-06 7.46897C-0.000220456 7.59275 0.0363151 7.7138 0.104976 7.81679C0.173636 7.91978 0.27133 8.00006 0.385672 8.04745C0.500014 8.09485 0.625854 8.10723 0.747239 8.08302C0.868625 8.05881 0.980089 7.99911 1.0675 7.91147L6.81125 2.16522C7.39738 1.57909 8.19234 1.24981 9.02125 1.24981C9.43169 1.24981 9.8381 1.33065 10.2173 1.48772C10.5965 1.64479 10.941 1.875 11.2313 2.16522C11.5215 2.45544 11.7517 2.79999 11.9088 3.17918C12.0658 3.55837 12.1467 3.96479 12.1467 4.37522C12.1467 4.78566 12.0658 5.19207 11.9088 5.57127C11.7517 5.95046 11.5215 6.295 11.2313 6.58522L4.6025 13.214C4.36675 13.4417 4.051 13.5677 3.72325 13.5648C3.3955 13.562 3.08199 13.4305 2.85023 13.1987C2.61847 12.967 2.48701 12.6535 2.48416 12.3257C2.48131 11.998 2.6073 11.6822 2.835 11.4465L9.46375 4.81772C9.52186 4.75961 9.56796 4.69063 9.59941 4.6147C9.63085 4.53878 9.64704 4.4574 9.64704 4.37522C9.64704 4.29304 9.63085 4.21167 9.59941 4.13574C9.56796 4.05982 9.52186 3.99083 9.46375 3.93272C9.40564 3.87461 9.33666 3.82852 9.26073 3.79707C9.18481 3.76562 9.10343 3.74943 9.02125 3.74943C8.93907 3.74943 8.8577 3.76562 8.78177 3.79707C8.70585 3.82852 8.63686 3.87461 8.57875 3.93272L1.95 10.5627C1.71123 10.7933 1.52077 11.0692 1.38975 11.3742C1.25872 11.6792 1.18976 12.0073 1.18687 12.3392C1.18399 12.6712 1.24724 13.0004 1.37295 13.3076C1.49865 13.6148 1.68428 13.894 1.91901 14.1287C2.15375 14.3634 2.43287 14.5491 2.74012 14.6748C3.04736 14.8005 3.37656 14.8637 3.7085 14.8608C4.04045 14.858 4.3685 14.789 4.67351 14.658C4.97852 14.527 5.25438 14.3365 5.485 14.0977L12.1138 7.46897C12.9343 6.64846 13.3952 5.5356 13.3952 4.37522C13.3952 3.21484 12.9343 2.10199 12.1138 1.28147C11.2932 0.46096 10.1804 0 9.02 0C7.85962 0 6.74676 0.46096 5.92625 1.28147L0.183751 7.02647C0.125749 7.08462 0.079776 7.15363 0.0484614 7.22956C0.0171467 7.30549 -0.000145683 7.38684 1.00081e-06 7.46897Z"
                  fill="white"
                />
              </svg>
            </button>
            <button type="button" aria-label="Voice input">
              <i className="fa-solid fa-microphone"></i>
            </button>
            <button type="button" aria-label="Enhance with AI">✨</button>
          </div>
          <div className="ctiprompt_right_btns">
            <a
              href={process.env.NEXT_PUBLIC_LOGIN_URL || "http://72.60.203.98/login"}
              onClick={handleSend}
              style={{ textDecoration: 'none' }}
            >
              <button
                type="button"
                aria-label="Submit prompt"
                style={{ pointerEvents: 'none' }}
              >
                <svg
                  style={{ transform: "rotate(90deg)" }}
                  fill="none"
                  height="18"
                  viewBox="0 0 15 19"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.19824 17.1986V1.19855M1.19824 7.19855L7.19824 1.19855L13.1982 7.19855"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.39705"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="cti_suggestions">
        {SUGGESTIONS.map((item, idx) => (
          <div
            key={idx}
            className="cti_tag"
            onClick={() => setPrompt(item.prompt)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}
