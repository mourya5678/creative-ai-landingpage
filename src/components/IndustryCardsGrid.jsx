import Link from "next/link";

export default function IndustryCardsGrid({ title, description, industries = [] }) {
  return (
    <section className="ct_pt_50 ct_pb_50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="ct_fs_44 ct_fw_700 mb-3 text-center">{title}</h2>
            {description && <p className="text-center ct_fs_16">{description}</p>}
          </div>
        </div>

        <div className="row mt-5">
          {industries.map((industry) => (
            <div className="col-md-6 mb-4" key={industry.id}>
              <div className="ct_types_app_card">
                <div className="ct_app_types_img">
                  <img loading="lazy" src={industry.image} alt={industry.name} />
                </div>
                <div className="ct_app_types_cnt">
                  <h3 className="ct_fs_22 text-white ct_fw_700 mb-2">{industry.name}</h3>
                  <p className="ct_fs_14">{industry.description}</p>
                  <div className="mt-4">
                    <Link
                      href={industry.href}
                      className="ct_blue_outline_btn ct_white_outline_border w-100 text-center"
                    >
                      {industry.linkText}
                    </Link>
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