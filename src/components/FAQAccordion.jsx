"use client";

import { useState } from "react";

export default function FAQAccordion({
  items,
  accordionId = "accordion",
  accordionClass = "",
  itemClass = "",
  btnClass = "",
  bodyClass = "",
  defaultOpenIndex = 0,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`accordion ${accordionClass}`} id={accordionId}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`accordion-item ${itemClass}`} key={index}>
            <h2 className="accordion-header">
              <button
                type="button"
                className={`accordion-button ${isOpen ? "" : "collapsed"} ${btnClass}`}
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen ? "true" : "false"}
              >
                {item.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            >
              <div className={`accordion-body ${bodyClass}`}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
