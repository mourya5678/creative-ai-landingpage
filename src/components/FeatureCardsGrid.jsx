import { LOGIN_URL } from "@/config";

export default function FeatureCardsGrid({ title, description, features = [] }) {
  return (
    <section className="everything_one-plat_sec">
      <div className="container">
        <div className="ct_home_titles_cnt ct_mb_34">
          <h2 className="">{title}</h2>
          <p className="" style={{maxWidth:"850px"}}>{description}</p>
        </div>

        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-4 col-md-6 mb-4" key={feature.id}>
              <div className="everything_one-plat_desc">
                <div>
                  <div className="everything_one-plat_icon_box">{feature.icon}</div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
                <div>
                  <a href={feature.href || LOGIN_URL} className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}