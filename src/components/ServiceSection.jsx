"use client";

import React from "react";

export default function ServiceSection({ websitePrompts, loginUrl }) {
  return (
    <section className="ct_service_section">
      <div className="container">
        <div className="row">
          {(websitePrompts || []).map((item, index) => (
            <div
              key={item.title}
              className={`col-xxl-3 col-lg-4 col-md-6 ${
                index !== websitePrompts.length - 1 ? "ct_mb_26" : ""
              }`}
            >
              <a
                href={loginUrl}
                className="ct_service_card"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.setItem("prompt", item.prompt);
                  }
                }}
              >
                <span>{item.title}</span>
                <div className="ct_arrow_btn">
                  <svg
                    fill="none"
                    height="11"
                    viewBox="0 0 10 11"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

