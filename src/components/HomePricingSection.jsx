"use client";

import React, { useState, useEffect } from "react";
import { LOGIN_URL, API_URL } from "@/config";

const formatCurrency = (val) => {
  if (val === undefined || val === null) return "";
  const num = parseFloat(val);
  return num.toFixed(2);
};

const getCurrencySymbol = (currency) => {
  if (!currency) return "₹";
  const clean = currency.trim();
  if (clean.length === 1 || !/^[A-Za-z0-9]+$/.test(clean)) {
    return clean;
  }
  const upper = clean.toUpperCase();
  const symbolMap = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
  };
  return symbolMap[upper] || clean;
};

export default function HomePricingSection({ monthlyPlans: initialMonthlyPlans, yearlyPlans: initialYearlyPlans }) {
  const [billingInterval, setBillingInterval] = useState("MONTH");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [monthlyPlans, setMonthlyPlans] = useState(initialMonthlyPlans);
  const [yearlyPlans, setYearlyPlans] = useState(initialYearlyPlans);

  useEffect(() => {
    let active = true;
    const detectAndFetch = async () => {
      try {
        const detectCountry = async () => {
          try {
            const res = await fetch("https://ipapi.co/json/");
            if (res.ok) {
              const data = await res.json();
              if (data && data.country_code) {
                return data.country_code.toUpperCase();
              }
            }
          } catch (e) {
            console.warn("ipapi.co fetch failed, falling back to timezone:", e);
          }
          
          try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "IN";
            const offset = new Date().getTimezoneOffset();
            if (offset === -330) return "IN";
          } catch (e) {
            console.error("Timezone fallback failed:", e);
          }
          return "US";
        };

        const countryCode = await detectCountry();
        const targetCurrency = countryCode === "IN" ? "INR" : "USD";
        
        // Find current currency from plans
        const currentCurrency = initialMonthlyPlans?.free?.[0]?.display_currency || 
                                initialMonthlyPlans?.pro?.[0]?.display_currency || 
                                "USD";

        console.log("Client-side detected country:", countryCode, "Target Currency:", targetCurrency, "Current Currency:", currentCurrency);

        if (currentCurrency !== targetCurrency) {
          console.log(`Currency mismatch detected client-side. Current: ${currentCurrency}, Target: ${targetCurrency}. Fetching correct plans...`);
          const [mRes, yRes] = await Promise.all([
            fetch(`${API_URL}/api/user/getAllPlans?billing_interval=MONTH&currency=${targetCurrency}`),
            fetch(`${API_URL}/api/user/getAllPlans?billing_interval=YEAR&currency=${targetCurrency}`)
          ]);
          
          if (mRes.ok && yRes.ok && active) {
            const mJson = await mRes.json();
            const yJson = await yRes.json();
            if (mJson.success && yJson.success) {
              setMonthlyPlans(mJson.data);
              setYearlyPlans(yJson.data);
            }
          }
        }
      } catch (error) {
        console.error("Error checking/fetching plans client-side:", error);
      }
    };

    setMonthlyPlans(initialMonthlyPlans);
    setYearlyPlans(initialYearlyPlans);
    detectAndFetch();
    
    return () => {
      active = false;
    };
  }, [initialMonthlyPlans, initialYearlyPlans]);

  const plans = billingInterval === "MONTH" ? monthlyPlans : yearlyPlans;

  const freePlan = plans?.free?.[0] || plans?.free || {};
  const proPlans = plans?.pro || [];
  const standardPlan = proPlans[selectedPlanIndex] || {};
  const enterprisePlan = plans?.business?.[0] || plans?.business || {};

  // Free Plan pricing fields
  const freeCurrency = getCurrencySymbol(freePlan.display_currency);
  const freePrice = freePlan.display_amount ? `${freeCurrency}${formatCurrency(freePlan.display_amount)}` : `${freeCurrency}0.00`;
  const freeCredits = freePlan.credits_per_cycle ? `${freePlan.credits_per_cycle} Credits` : "50 Credits";

  // Standard Plan pricing fields
  const standardCurrency = getCurrencySymbol(standardPlan.display_currency);
  let standardPrice = `${standardCurrency}199.00`;
  let standardPrevPrice = null;

  if (standardPlan.has_intro_offer) {
    standardPrice = `${standardCurrency}${formatCurrency(standardPlan.intro_amount)}`;
    standardPrevPrice = `${standardCurrency}${formatCurrency(standardPlan.display_amount)}/month`;
  } else if (standardPlan.display_amount) {
    standardPrice = `${standardCurrency}${formatCurrency(standardPlan.display_amount)}`;
  } else {
    standardPrice = billingInterval === "MONTH" ? `${standardCurrency}199.00` : `${standardCurrency}18349.00`;
  }

  const standardCredits = standardPlan.credits_per_cycle 
    ? `${standardPlan.credits_per_cycle} Credits${billingInterval === "YEAR" ? "/month" : ""}` 
    : `100 Credits${billingInterval === "YEAR" ? "/month" : ""}`;

  // Enterprise Plan pricing fields
  const enterpriseCurrency = getCurrencySymbol(enterprisePlan.display_currency);
  const enterprisePrice = enterprisePlan.display_amount
    ? `${enterpriseCurrency}${formatCurrency(enterprisePlan.display_amount)}`
    : (billingInterval === "MONTH" ? `${enterpriseCurrency}35000.00` : `${enterpriseCurrency}385199.00`);
  const enterpriseCredits = enterprisePlan.credits_per_cycle 
    ? `${enterprisePlan.credits_per_cycle} Credits${billingInterval === "YEAR" ? "/month" : ""}` 
    : `2000 Credits${billingInterval === "YEAR" ? "/month" : ""}`;

  const intervalText = billingInterval === "MONTH" ? "/month" : "/year";

  { console.log({ plans }) }
  return (
    <>
      <div className="ct_pricing_toggle ct_pricing_toggle_home">
        <button
          className={billingInterval === "MONTH" ? "active" : ""}
          type="button"
          onClick={() => setBillingInterval("MONTH")}
        >
          Monthly
        </button>
        <button
          className={billingInterval === "YEAR" ? "active" : ""}
          type="button"
          onClick={() => setBillingInterval("YEAR")}
        >
          Annually
        </button>
      </div>

      <div className="row ct_pt_60 justify-content-center">
        {/* Free Plan */}
        {billingInterval === "MONTH" && (
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

            <div className="cti_pricing_card">
              <div>
                <h3 className="cti_plan_title">Free Plan</h3>
                <p className="cti_plan_desc">
                  Best for exploring the platform startups.
                </p>
                <div className="cti_price_wrap">
                  <h2>{freePrice}/month</h2>
                  <span>{freeCredits}</span>
                </div>
                <ul className="cti_feature_list">
                  <li>
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 17 17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                        fill="white"
                      ></path>
                    </svg>
                    Create your first project (25 credits)
                  </li>
                  <li>
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 17 17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                        fill="white"
                      ></path>
                    </svg>
                    Use remaining credits for minor edits &amp; tweaks
                  </li>
                  <li>
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 17 17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                        fill="white"
                      ></path>
                    </svg>
                    Access to basic AI generation
                  </li>
                  <li>
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 17 17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                        fill="white"
                      ></path>
                    </svg>
                    Single agent processing
                  </li>
                  <li>
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 17 17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                        fill="white"
                      ></path>
                    </svg>
                    Chat-based interaction only
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <a className="cti_pricing_btn" href={LOGIN_URL}>
                  Start Free
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Standard Plan */}
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="cti_pricing_card cti_pricing_card_active">
            <div>
              <h3 className="cti_plan_title">Standard Plan</h3>
              <p className="cti_plan_desc">
                Perfect to build your first real product
              </p>
              <div className="cti_price_wrap">
                {standardPrevPrice && (
                  <span className="ct_price_previous mb-2" style={{ fontSize: "14px", textDecoration: "line-through", color: "#c8c4d5", display: "block", marginBottom: "4px" }}>
                    {standardPrevPrice}
                  </span>
                )}
                <h2>{standardPrice}{intervalText}
                  {billingInterval === "MONTH" && selectedPlanIndex === 0 && <small className="text-white opacity-75 fw-semibold ct_fs_12"> ( 1st Month Only )</small>}</h2>
                <span>{standardCredits}  </span>

                <div className="position-relative mt-3">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      fontSize: "14px",
                      fontWeight: "600",
                      width: "100%",
                      cursor: "pointer"
                    }}
                  >
                    {standardPlan.credits_per_cycle || 100} credits {standardPlan?.credit_grant_interval === "MONTH" ? "/month" : "/year"}
                    <svg
                      className="ct_show_eye"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" fillRule="evenodd"></path>
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        backgroundColor: "#1a244d",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        zIndex: 100,
                        marginTop: "4px",
                        padding: "6px 0",
                        maxHeight: "220px",
                        overflowY: "auto"
                      }}
                    >
                      {proPlans
                        ?.map((plan, index) => ({ plan, originalIndex: index }))
                        ?.filter((item) => item.originalIndex !== selectedPlanIndex)
                        ?.map(({ plan, originalIndex }) => {
                          const planCurrency = getCurrencySymbol(plan?.display_currency);
                          const price = plan?.has_intro_offer
                            ? `${planCurrency}${formatCurrency(plan?.intro_amount)}`
                            : `${planCurrency}${formatCurrency(plan?.display_amount)}`;
                          const intervalLabel = plan?.billing_interval === "MONTH" ? "/month" : "/year";
                          return (
                            <button
                              key={plan.id}
                              type="button"
                              onClick={() => {
                                setSelectedPlanIndex(originalIndex);
                                setIsDropdownOpen(false);
                              }}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "10px 16px",
                                background: "transparent",
                                border: 0,
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: "500",
                                cursor: "pointer",
                                display: "block",
                                transition: "background 0.2s"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                              }}
                            >
                              {plan.credits_per_cycle} credits - {price} {intervalLabel}
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>

              <ul className="cti_feature_list">
                <li>
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 17 17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                      fill="white"
                    ></path>
                  </svg>
                  Create full-scale projects
                </li>
                <li>
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 17 17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                      fill="white"
                    ></path>
                  </svg>
                  Basic deployment access
                </li>
                <li>
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 17 17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                      fill="white"
                    ></path>
                  </svg>
                  Standard customization (credit-based)
                </li>
                <li>
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 17 17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                      fill="white"
                    ></path>
                  </svg>
                  Faster generation vs free plan
                </li>
                <li>
                  <svg
                    fill="none"
                    height="17"
                    viewBox="0 0 17 17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z"
                      fill="white"
                    ></path>
                  </svg>
                  Clean production-ready outputs
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <a className="cti_pricing_btn cti_pricing_btn_white" href={LOGIN_URL}>
                Get Started
              </a>

            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="cti_pricing_card">
            <div>
              <h3 className="cti_plan_title">Enterprise Plan</h3>
              <p className="cti_plan_desc">
                For agencies &amp; enterprise teams
              </p>
              <div className="cti_price_wrap">
                <h2>{enterprisePrice}{intervalText}</h2>
                <span>{enterpriseCredits}</span>
              </div>
              <ul className="cti_feature_list">
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Unlimited scale project creation
                </li>
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Enterprise-grade deployment infrastructure
                </li>
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Full customization freedom (no limitations)
                </li>
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Chat + Email + Phone Support
                </li>
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Maximum speed &amp; priority processing
                </li>
                <li>
                  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path></svg>
                  Optimized for large-scale automation
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <a className="cti_pricing_btn" href="/contact"> Contact Sales </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
