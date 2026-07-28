/**
 * HowItWorksSection
 * ------------------
 * Reusable "How Creative AI Works" 4-step block.
 * Used on: Home page, Restaurant (and every other industry) page.
 *
 * Props:
 *  - title        : string   (section heading, default provided)
 *  - steps        : Array<{ badge, heading, description, image }>
 *  - className    : string   (extra wrapper classes, e.g. to add ct_pb_150 on industry pages)
 */
export default function HowItWorksSection({
  title = "How Creative AI Works",
  steps = [],
  className = "",
}) {
  return (
    <section className={`cti_how_creative_ai_work ${className}`}>
      <div className="container">
     <div className="ct_home_titles_cnt">
         <h2 className=" mx-auto text-center pb-5">{title}</h2>
     </div>

        <div className="row mt-5">
          {steps.map((step, idx) => (
            <div
              className="col-xl-3 col-md-6 mb-4 mb-5 pb-3 mb-xl-0 pb-xl-0"
              key={step.badge || idx}
            >
              <div className="creative-ai-work-card">
                <div className="step_badges_nain">
                  <div className="step-badge">{step.badge}</div>
                </div>
                <div className="content">
                  <div className="creative-ai-work-card-desc">
                    <h2>{step.heading}</h2>
                    <p>
                      {step.descriptionLines?.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i !== step.descriptionLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="generator">
                    <img src={step.image} alt={step.heading} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}