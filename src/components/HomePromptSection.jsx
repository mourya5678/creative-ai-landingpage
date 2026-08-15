"use client";

import React, { useState } from "react";
import { LOGIN_URL } from "@/config";

const SUGGESTIONS = [
  {
    label: "Food Delivery App",
    icon: <i className="fa-solid fa-motorcycle me-2" style={{ color: "#e4773b" }}></i>,
    prompt: "Design a premium food delivery platform focused on a fast and delightful ordering experience. Include restaurant discovery, curated menus, smart search, personalized recommendations, a seamless cart, secure checkout, real-time order tracking, favorites, user profiles, notifications, and order history. Prioritize a modern, intuitive interface with scalable architecture, excellent performance, and a polished user experience."
  },
  {
    label: "CRM Dashboard",
    icon: <i className="fa-solid fa-users me-2" style={{ color: "#6882fe" }}></i>,
    prompt: "Create a modern CRM workspace that helps sales teams organize leads, manage customer relationships, track deals, schedule follow-ups, and visualize sales performance. Focus on an intuitive workflow, clean data organization, insightful analytics, and a productivity-first MVP rather than a complex enterprise system."
  },
  {
    label: "Hospital Management System",
    icon: <i className="fa-solid fa-square-plus me-2" style={{ color: "#ff4d4d" }}></i>,
    prompt: "Build a modern hospital management platform focused on improving the patient journey. Include appointment booking, doctor discovery, patient records, prescriptions, visit history, and treatment tracking with a calm, trustworthy interface. Deliver a practical MVP that simplifies everyday healthcare interactions."
  },
  {
    label: "Fitness Platform",
    icon: <i className="fa-solid fa-dumbbell me-2" style={{ color: "#2ecc71" }}></i>,
    prompt: "Design a premium fitness platform that helps users build healthy habits through personalized workout plans, progress tracking, activity insights, goal setting, nutrition guidance, and motivational challenges. Create an inspiring, modern experience centered around engagement and long-term consistency."
  },
  {
    label: "Marketplace App",
    icon: <i className="fa-solid fa-bag-shopping me-2" style={{ color: "#9b59b6" }}></i>,
    prompt: "Create a modern online marketplace where people can discover, explore, and purchase products from independent sellers. Include advanced search, categories, collections, rich product pages, seller profiles, wishlists, secure checkout, messaging, reviews, ratings, order tracking, and account management. Focus on a clean, premium experience with scalable design, high usability, and smooth user interactions."
  }
];

export default function HomePromptSection() {
  const [prompt, setPrompt] = useState("");
  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("prompt", prompt);
      window.location.href = LOGIN_URL;
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
        <img src="/img/flag_curve_img.png" alt="" />
        <textarea
          className="form-control"
          id="home_prompt_textarea"
          placeholder="Type your idea here..."
          rows="4"
          aria-label="Type your idea here..."
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="cti_home_prompt_action_btns">
          <div className="ctiprompt_left_btns">
            <button
              onClick={handleSend}
              type="button"
              className="cti_voice_btn"
              aria-label="Voice input"
            >
              <i className="fa-solid fa-microphone"></i>
            </button>
          </div>
          <div className="ctiprompt_right_btns">
            <span className="cti_word_counter">{prompt.length} chars</span>
            <a
              href={LOGIN_URL}
              onClick={handleSend}
              style={{ textDecoration: 'none' }}
            >
              <button
                type="button"
                aria-label="Submit prompt"
                style={{ pointerEvents: 'none' }}
                className="cti_submit_prompt_btn"
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
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}
