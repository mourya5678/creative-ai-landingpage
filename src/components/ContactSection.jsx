const defaultBuildOptions = [
  { id: "ctiWebsite", label: "Website", defaultChecked: true },
  { id: "ctiMobile", label: "Mobile App" },
  { id: "ctiSaas", label: "SaaS Platform" },
  { id: "ctiEcommerce", label: "E-Commerce" },
  { id: "ctiWebapp", label: "Web App" },
];

export default function ContactSection({
  title,
  description,
  trustedAvatars = ["/img/client_3.webp", "/img/client_4.webp", "/img/client_2.webp", "/img/james.webp"],
  trustedLabel = "Trusted by 1000+ Businesses",
  buildOptions = defaultBuildOptions,
  onSubmit,
}) {
  return (
    <section className="cti_contact_bg_new">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ct_home_titles_cnt">
              <span>Contact Us</span>
              <h2 className="contact_heading">{title}</h2>
              <p style={{ maxWidth: "533px" }}>{description}</p>
            </div>
            <div className="cti_trusted_wrap">
              <div className="cti_user_images">
                {trustedAvatars.map((src, i) => (
                  <img key={src + i} alt="Trusted client profile avatar" src={src} loading="lazy" />
                ))}
              </div>
              <div className="cti_trusted_content">
                <div className="cti_rating_stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <h5>{trustedLabel}</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <form className="cti_contact_form" onSubmit={onSubmit}>
              <div className="ct_input_group ct_mb_43">
                <input className="input" id="ct_full_name" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="ct_full_name">
                  Full Name <span className="text-danger">*</span>
                </label>
              </div>

              <div className="ct_input_group ct_mb_43">
                <input className="input" id="ct_email" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="ct_email">
                  Email <span className="text-danger">*</span>
                </label>
              </div>

              <div className="cti_build_section">
                <h5>What Would You Like To Build?</h5>
                <div className="cti_option_wrap">
                  {buildOptions.map((option) => (
                    <div key={option.id} style={{ display: "contents" }}>
                      <input
                        defaultChecked={!!option.defaultChecked}
                        className="d-none"
                        id={option.id}
                        name="build"
                        type="radio"
                      />
                      <label className="cti_option_btn" htmlFor={option.id}>
                        <span></span>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ct_input_group ct_mb_43">
                <textarea className="input text-dark" id="ct_message" required rows="3"></textarea>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="ct_message">
                  Tell us about your idea, goals, and requirements...
                  <span className="text-danger">*</span>
                </label>
              </div>

              <button className="cti_submit_btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}