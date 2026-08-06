import { LOGIN_URL } from "@/config";

export default function CTABanner({
  title,
  description,
  buttonText = "Start Building Free",
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
        <a className="start_build_btn ct_mt_40 mx-auto text-decoration-none" href={LOGIN_URL} style={{ width: "fit-content" }}>
          {buttonText} <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
}