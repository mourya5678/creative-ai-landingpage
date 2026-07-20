import Link from "next/link";

export default function FreeDemoBanner({
  eyebrow = "Struggling to Choose?",
  title = "Discover Your Ideal Development Plan in Minutes",
  subtitle = "Quick & Easy Assessment",
  buttonText = "Find My Perfect Plan",
  href = "/pricing",
}) {
  return (
    <section className="ct_pt_50 ct_pb_50">
      <div className="container">
        <div className="col-md-12">
          <div className="ct_free_demo_bg">
            <h3 className="ct_fs_20 text-white text-center mb-2 ct_fw_600">{eyebrow}</h3>
            <h2 className="ct_fs_38 text-center text-white ct_fw_700 mb-2">{title}</h2>
            <p className="ct_fs_17 mb-0 text-center text-white">{subtitle}</p>
            <div className="text-center mt-4">
              <Link href={href} className="ct_blue_btn_fill ct_white_btn">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}