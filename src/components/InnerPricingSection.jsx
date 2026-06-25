"use client";

import React, { useState } from "react";

const formatCurrency = (val) => {
  if (val === undefined || val === null) return "";
  const num = parseFloat(val);
  return num.toFixed(2);
};

export default function InnerPricingSection({ monthlyPlans, yearlyPlans }) {
  const [billingInterval, setBillingInterval] = useState("MONTH");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const plans = billingInterval === "MONTH" ? monthlyPlans : yearlyPlans;

  const freePlan = plans?.free?.[0] || plans?.free || {};
  const proPlans = plans?.pro || [];
  const standardPlan = proPlans[selectedPlanIndex] || {};
  const enterprisePlan = plans?.business?.[0] || plans?.business || {};

  // Free Plan pricing fields
  const freePrice = freePlan.display_amount ? `₹${formatCurrency(freePlan.display_amount)}` : "₹0.00";
  const freeCredits = freePlan.credits_per_cycle ? `${freePlan.credits_per_cycle} Credits` : "50 Credits";

  // Standard Plan pricing fields
  let standardPrice = "₹199.00";
  let standardPrevPrice = null;

  if (standardPlan.has_intro_offer) {
    standardPrice = `₹${formatCurrency(standardPlan.intro_amount)}`;
    standardPrevPrice = `₹${formatCurrency(standardPlan.display_amount)}/month`;
  } else if (standardPlan.display_amount) {
    standardPrice = `₹${formatCurrency(standardPlan.display_amount)}`;
  } else {
    standardPrice = billingInterval === "MONTH" ? "₹199.00" : "₹18349.00";
  }

  const standardCredits = standardPlan.credits_per_cycle ? `${standardPlan.credits_per_cycle} Credits` : "100 Credits";

  // Enterprise Plan pricing fields
  const enterprisePrice = enterprisePlan.display_amount
    ? `₹${formatCurrency(enterprisePlan.display_amount)}`
    : (billingInterval === "MONTH" ? "₹35000.00" : "₹385199.00");
  const enterpriseCredits = enterprisePlan.credits_per_cycle ? `${enterprisePlan.credits_per_cycle} Credits` : "2000 Credits";

  const intervalSuffix = billingInterval === "MONTH" ? "/month" : "/year";

  return (
    <>
      <div className="ct_pricing_toggle">
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
            <a className="ct_price_cta" href="http://72.60.203.98/login">Start Free</a>
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
            <div className="ct_price_value ct_price_value_compact ct_price_value_with_old">
              {standardPrevPrice && (
                <span className="ct_price_previous">{standardPrevPrice}</span>
              )}
              <span className="ct_price_current">{standardPrice}</span>
              <span className="ct_price_suffix">{intervalSuffix}</span>
            </div>
            <div className="ct_price_offer_slot">
              <div className="ct_price_offer_wrap">
                <div className="ct_price_offer">{standardPrice}</div>
              </div>
            </div>
            <p>Perfect to build your first real product</p>
            <a className="ct_price_cta" href="http://72.60.203.98/login">Get Started</a>

            <div className="position-relative mt-3">
              <button
                className="ct_starter_plan"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ marginTop: "0px" }}
              >
                {standardPlan.credits_per_cycle || 100} credits {billingInterval === "MONTH" ? "/month" : "/year"}
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
                      const price = plan.has_intro_offer
                        ? `₹${formatCurrency(plan.intro_amount)}`
                        : `₹${formatCurrency(plan.display_amount)}`;
                      const intervalLabel = billingInterval === "MONTH" ? "/month" : "/year";
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
                          {plan.credits_per_cycle} credits - {price}{intervalLabel}
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
            <a className="ct_price_cta" href="http://72.60.203.98/login">Get Started</a>
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
