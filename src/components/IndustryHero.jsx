export default function IndustryHero({
  title,
  description,
  image,
  features = ["No Coding", "AI Powered", "Mobile Ready", "SEO Optimized", "Source Code"],
  buttonText = "Start Building",
}) {
  return (
    <div className="cti_build_banner">
      <div>
        <section className="hero_section">
          <div className="row">
            <div className="col-xl-7">
              <div className="hero_content">
                <h1 className="ct_fw_400 ct_fs_66 text-white mx-auto mb-3">{title}</h1>

                <p className="ct_fw_200 ct_fs_18 ct_text_bebfc2" style={{ maxWidth: "560px" }}>
                  {description}
                </p>

                <button className="start_build_btn ct_mt_34">
                  {buttonText} <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>

                <div className="hero_features">
                  {features.map((feature, idx) => (
                    <span key={feature} style={{ display: "contents" }}>
                      <span>{feature}</span>
                      {idx !== features.length - 1 && <div className="divider"></div>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-5 d-none d-xl-block">
              <div className="d-flex justify-content-end">
                <div className="step-image mt-lg-0 mt-3">
                  <img src={image} alt="Industry hero illustration" className="accordian-right-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}