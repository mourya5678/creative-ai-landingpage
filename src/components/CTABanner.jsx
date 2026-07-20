export default function CTABanner({
  title = "Build Your Next Website, App or Business Platform with AI",
  description = "From professional websites to enterprise applications, Creative AI helps you build, customize, and launch complete digital products in minutes without coding.",
  buttonText = "Start Building Free",
  onClick,
}) {
  return (
    <section className="cti_build_proj_banner">
      <div className="container">
        <h3 className="ct_fs_38 ct_fw_400 mx-auto text-white text-center mb-3" style={{ maxWidth: "620px" }}>
          {title}
        </h3>
        <p className="ct_fs_16 ct_text_bebfc2 text-center mx-auto mb-0" style={{ maxWidth: "620px" }}>
          {description}
        </p>
        <button className="start_build_btn ct_mt_40 mx-auto" onClick={onClick}>
          {buttonText} <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  );
}