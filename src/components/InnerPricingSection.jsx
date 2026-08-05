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

export default function InnerPricingSection({ monthlyPlans: initialMonthlyPlans, yearlyPlans: initialYearlyPlans }) {
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
  console.log({ monthlyPlans, yearlyPlans })
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

  const standardCredits = standardPlan.credits_per_cycle ? `${standardPlan.credits_per_cycle} Credits` : "100 Credits";

  // Enterprise Plan pricing fields
  const enterpriseCurrency = getCurrencySymbol(enterprisePlan.display_currency);
  const enterprisePrice = enterprisePlan.display_amount
    ? `${enterpriseCurrency}${formatCurrency(enterprisePlan.display_amount)}`
    : (billingInterval === "MONTH" ? `${enterpriseCurrency}35000.00` : `${enterpriseCurrency}385199.00`);
  const enterpriseCredits = enterprisePlan.credits_per_cycle ? `${enterprisePlan.credits_per_cycle} Credits` : "2000 Credits";

  const intervalSuffix = billingInterval === "MONTH" ? "/month" : "/year";

  return (
    <>
      <div className="text-center">
        <div className="ct_pricing_toggle justify-content-center">
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
      </div>

      <div className="ct_pricing_grid mt-5">
        {/* Free Plan */}
        <div className="ct_price_card">
          <div className="ct_price_card_top">
            <span className="ct_price_badge">FREE PLAN</span>
            <h3 className="ct_price_credits">
              {freeCredits}
            </h3>
            <div className="ct_price_value">
              <span className="ct_price_current">{freePrice}</span>
              <span className="ct_price_suffix">/month</span>
            </div>
            <p>Best for exploring the platform</p>
            <div className="ct_price_offer_slot"></div>
            <a className="ct_price_cta" href={LOGIN_URL}>Start Free</a>
          </div>
          <div className="ct_price_card_bottom">
            <h4>Features you will get:</h4>
            <ul>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Create your first project (at 25 credits)</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Use remaining credits for minor edits &amp; tweaks</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Access to basic AI generation</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Single agent processing</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Chat-based interaction only</span>
              </li>
            </ul>
            <p className="ct_price_note">
              Upgrade anytime or buy credits directly
            </p>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="ct_price_card ct_price_card_featured">
          <div className="ct_price_card_top">
            <span className="ct_price_badge">STANDARD PLAN</span>
            <h3 className="ct_price_credits">{standardCredits}</h3>
            <div className="ct_price_value d-block text-center ct_price_value_compact ct_price_value_with_old">
              {standardPrevPrice && (
                <span className="ct_price_previous d-block">{standardPrevPrice}</span>
              )}
              <div className="d-flex flex-wrap align-items-center gap-1 justify-content-center">
                <div>
                  <span className="ct_price_current">{standardPrice}</span>
                  <span className="ct_price_suffix">{intervalSuffix}</span>
                </div>
                {billingInterval === "MONTH" && selectedPlanIndex === 0 && <small className="text-dark opacity-50 fw-semibold ct_fs_12 "> ( 1st month only )</small>}
              </div>
            </div>
            <div className="ct_price_offer_slot">
              <div className="ct_price_offer_wrap">
                <div className="ct_price_offer">{standardPrice}</div>
              </div>
            </div>
            <p>Perfect to build your first real product</p>
            <a className="ct_price_cta" href={LOGIN_URL}>Get Started</a>

            <div className="position-relative mt-3">
              <button
                className="ct_starter_plan"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ marginTop: "0px" }}
              >
                {standardPlan.credits_per_cycle || 100} credits{" "}
                {standardPlan.credit_grant_interval
                  ? `/${standardPlan.credit_grant_interval.toLowerCase()}`
                  : billingInterval === "MONTH"
                    ? "/month"
                    : "/year"}
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
                    backgroundColor: "#ffffff",
                    border: "1px solid #cddcff",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0, 100, 255, 0.15)",
                    zIndex: 100,
                    marginTop: "4px",
                    padding: "6px 0",
                    maxHeight: "220px",
                    overflowY: "auto"
                  }}
                >
                  {proPlans
                    .map((plan, index) => ({ plan, originalIndex: index }))
                    .filter((item) => item.originalIndex !== selectedPlanIndex)
                    .map(({ plan, originalIndex }) => {
                      const planCurrency = getCurrencySymbol(plan.display_currency);
                      const price = plan.has_intro_offer
                        ? `${planCurrency}${formatCurrency(plan.intro_amount)}`
                        : `${planCurrency}${formatCurrency(plan.display_amount)}`;
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
                            color: "#444444",
                            fontSize: "14px",
                            fontWeight: "500",
                            cursor: "pointer",
                            display: "block",
                            transition: "background 0.2s"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f6f9ff";
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
          <div className="ct_price_card_bottom">
            <h4>Features you will get:</h4>
            <ul>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Create full-scale projects</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Basic deployment access</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Standard customization (credit-based)</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Faster generation vs free plan</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Clean production-ready outputs</span>
              </li>
            </ul>
            <p className="ct_price_note">
              Auto-upgrades to Standard plan next month.
            </p>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="ct_price_card">
          <div className="ct_price_card_top">
            <span className="ct_price_badge">ENTERPRISE PLAN</span>
            <h3 className="ct_price_credits">
              {enterpriseCredits}
            </h3>
            <div className="ct_price_value">
              <span className="ct_price_current">{enterprisePrice}</span>
              <span className="ct_price_suffix">{intervalSuffix}</span>
            </div>
            <div className="ct_price_offer_slot"></div>
            <p>For agencies &amp; enterprise teams</p>
            <a className="ct_price_cta" href={LOGIN_URL}>Get Started</a>
          </div>
          <div className="ct_price_card_bottom">
            <h4>Pro Features and you will get:</h4>
            <ul>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Unlimited scale project creation</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Enterprise-grade deployment infrastructure</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Full customization freedom (no limitations)</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Chat + Email + Phone Support</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Maximum speed &amp; priority processing</span>
              </li>
              <li>
                <img alt="pricing icon" className="me-2" height="20" src="/img/pricing_check_icon.svg" width="20" />
                <span>Optimized for large-scale automation</span>
              </li>
            </ul>
            <p className="ct_price_note">
              Tailored for high-end business workflows
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
