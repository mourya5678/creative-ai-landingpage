import Header from "@/components/Header";
import Link from "next/link";
import { HomeInit } from "@/components/PageInitializers";

export const metadata = {
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  keywords: "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
};

export default function Page() {
  return (
    <>
      <HomeInit />

      <div className="cti_home_banner">
        <Header />



        <div className="cti_home_banner_cnt">
          <h1>The complete AI business builder</h1>
          <p>
            Describe your idea and let AI turn it into a real product in seconds.
          </p>
          <div className="cti_prompt_main">
            <textarea className="form-control" placeholder="Type your idea… we’ll build it for you" rows="5"></textarea>
            <div className="cti_home_prompt_action_btns">
              <div className="ctiprompt_left_btns">
                <button>
                  <svg fill="none" height="17" viewBox="0 0 9 17" width="9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.56629 3.35218C8.47893 3.2645 8.3675 3.20474 8.24612 3.18047C8.12475 3.1562 7.9989 3.16851 7.88454 3.21585C7.77017 3.26318 7.67243 3.34341 7.60372 3.44636C7.53501 3.54931 7.49841 3.67035 7.49856 3.79413L7.50033 11.9188C7.50033 12.7477 7.17105 13.5427 6.58492 14.1288C6.2947 14.419 5.95015 14.6492 5.57096 14.8063C5.19177 14.9634 4.78535 15.0442 4.37492 15.0442C3.96448 15.0442 3.55807 14.9634 3.17888 14.8063C2.79968 14.6492 2.45514 14.419 2.16492 14.1288C1.8747 13.8386 1.64448 13.494 1.48741 13.1148C1.33035 12.7356 1.24951 12.3292 1.24951 11.9188L1.24951 2.54431C1.2552 2.21661 1.38938 1.90424 1.62315 1.67451C1.85691 1.44477 2.17156 1.31604 2.49932 1.31604C2.82708 1.31604 3.14172 1.44477 3.37549 1.67451C3.60925 1.90424 3.74343 2.21661 3.74913 2.54432L3.74913 11.9188C3.74913 12.001 3.76531 12.0823 3.79676 12.1583C3.82821 12.2342 3.87431 12.3032 3.93242 12.3613C3.99053 12.4194 4.05951 12.4655 4.13544 12.4969C4.21136 12.5284 4.29274 12.5446 4.37492 12.5446C4.4571 12.5446 4.53847 12.5284 4.6144 12.4969C4.69032 12.4655 4.75931 12.4194 4.81742 12.3613C4.87553 12.3032 4.92162 12.2342 4.95307 12.1583C4.98452 12.0823 5.00071 12.001 5.00071 11.9188L4.99982 2.54343C5.00559 2.21152 4.9452 1.88178 4.82217 1.57346C4.69915 1.26514 4.51595 0.984409 4.28326 0.747646C4.05058 0.510884 3.77307 0.322832 3.46694 0.194465C3.1608 0.0660979 2.83216 -1.3891e-05 2.5002 -1.38067e-05C2.16824 -1.38067e-05 1.83961 0.0660984 1.53347 0.194465C1.22733 0.322833 0.949824 0.510883 0.717141 0.747646C0.484458 0.984409 0.301257 1.26514 0.17823 1.57346C0.0552021 1.88178 -0.00518924 2.21152 0.000579486 2.54343L0.000579149 11.9179C0.000578811 13.0783 0.461539 14.1911 1.28205 15.0116C2.10257 15.8322 3.21542 16.2931 4.3758 16.2931C5.53618 16.2931 6.64904 15.8322 7.46955 15.0116C8.29007 14.1911 8.75103 13.0783 8.75103 11.9179L8.74926 3.79501C8.74915 3.71288 8.73286 3.63157 8.70132 3.55574C8.66977 3.47991 8.62447 3.41016 8.56629 3.35218Z" fill="white"></path>
                  </svg>
                </button>
                <button>
                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M7.99967 1.33331C6.51234 1.33331 5.33301 2.50465 5.33301 3.88531V8.11465C5.33301 9.49465 6.51234 10.6666 7.99967 10.6666C9.48701 10.6666 10.6663 9.49465 10.6663 8.11465V3.88531C10.6663 2.50531 9.48701 1.33331 7.99967 1.33331Z" fill="white" fillRule="evenodd"></path>
                    <path d="M8.66667 13.9633V15.3333C8.66667 15.5101 8.59643 15.6797 8.4714 15.8047C8.34638 15.9297 8.17681 16 8 16C7.82319 16 7.65362 15.9297 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V13.9633C5.86652 13.7993 4.51162 13.1004 3.5277 12.0003C2.54378 10.9001 1.99988 9.47593 2 7.99998C2 7.82317 2.07024 7.6536 2.19526 7.52858C2.32029 7.40355 2.48986 7.33331 2.66667 7.33331C2.84348 7.33331 3.01305 7.40355 3.13807 7.52858C3.2631 7.6536 3.33333 7.82317 3.33333 7.99998C3.33333 8.61282 3.45404 9.21965 3.68856 9.78584C3.92308 10.352 4.26683 10.8665 4.70017 11.2998C5.13351 11.7332 5.64796 12.0769 6.21414 12.3114C6.78033 12.5459 7.38716 12.6666 8 12.6666C8.61284 12.6666 9.21967 12.5459 9.78586 12.3114C10.352 12.0769 10.8665 11.7332 11.2998 11.2998C11.7332 10.8665 12.0769 10.352 12.3114 9.78584C12.546 9.21965 12.6667 8.61282 12.6667 7.99998C12.6667 7.82317 12.7369 7.6536 12.8619 7.52858C12.987 7.40355 13.1565 7.33331 13.3333 7.33331C13.5101 7.33331 13.6797 7.40355 13.8047 7.52858C13.9298 7.6536 14 7.82317 14 7.99998C14.0001 9.47593 13.4562 10.9001 12.4723 12.0003C11.4884 13.1004 10.1335 13.7993 8.66667 13.9633Z" fill="white"></path>
                  </svg>
                </button>
              </div>
              <div className="ctiprompt_right_btns">
                <button type="submit">
                  <svg fill="none" height="18" viewBox="0 0 15 19" width="13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.19824 17.1986V1.19855M1.19824 7.19855L7.19824 1.19855L13.1982 7.19855" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.39705"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cti_brands_logo_slider">
        <div className="logo-slider">
          <div className="logo-slider__track">

            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_1.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_2.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_3.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_4.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_5.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_6.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_7.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_8.png" />
            </div>

            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_1.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_2.avif" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_3.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_4.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_5.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_6.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_7.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="Best AI app builder for startups and businesses" loading="lazy" src="/img/brand_logo_8.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="ct_pt_145px" style={{ overflowX: "unset" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <h2>What Can You Build with Creative AI?</h2>
                <p>Choose the package that fits your current ambition.</p>
              </div>
              <div style={{ height: "111px" }}></div>
              <div className="ct_sticky_scroll_main">
                <section className="cti_saas_card cti_sass_card_reverse">
                  <div className="ct_sass_card_img">
                    <img alt="" className="img-fluid" src="/img/build-sass-product-img.webp" />
                  </div>
                  <div className="cti_content">
                    <span className="cti_badge">SaaS Platforms</span>
                    <h2 className="cti_heading">Build SaaS Products Faster</h2>
                    <p className="cti_desc">
                      Create complete SaaS applications with authentication,
                      dashboards, payments, subscriptions, and user management.
                    </p>
                    <div className="cti_stats_wrapper">
                      <div className="cti_stat_box">
                        <span>Projects Built</span>
                        <h3>100+</h3>
                      </div>
                      <div className="cti_stat_box">
                        <span>Launch Speed</span>
                        <h3>10x Faster</h3>
                      </div>
                    </div>
                    <button className="cti_build_btn">
                      Buid
                      <svg fill="none" height="27" viewBox="0 0 27 27" width="27" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="white" height="27" rx="13.5" transform="rotate(90 27 0)" width="27" x="27"></rect>
                        <path d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496" stroke="#8396FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61801"></path>
                      </svg>
                    </button>
                  </div>
                </section>
                <section className="cti_saas_card is_skin">
                  <div className="cti_content">
                    <span className="cti_badge">AI Applications</span>
                    <h2 className="cti_heading">Turn AI Ideas Into Products</h2>
                    <p className="cti_desc">
                      Build AI chatbots, agents, content tools, automation
                      systems, and custom AI-powered applications.
                    </p>
                    <div className="cti_stats_wrapper">
                      <div className="cti_stat_box">
                        <span>AI Apps</span>
                        <h3>50+</h3>
                      </div>
                      <div className="cti_stat_box">
                        <span>Integration Ready</span>
                        <h3>100%</h3>
                      </div>
                    </div>
                    <button className="cti_build_btn">
                      Buid
                      <svg fill="none" height="27" viewBox="0 0 27 27" width="27" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="white" height="27" rx="13.5" transform="rotate(90 27 0)" width="27" x="27"></rect>
                        <path d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496" stroke="#8396FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61801"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="ct_sass_card_img">
                    <img alt="" src="/img/turn-ai-into-img.webp" />
                  </div>
                </section>
                <section className="cti_saas_card is_sky cti_sass_card_reverse">
                  <div className="ct_sass_card_img">
                    <img alt="" src="/img/professional-websites-img.webp" />
                  </div>
                  <div className="cti_content">
                    <span className="cti_badge">Business Websites</span>
                    <h2 className="cti_heading">Professional Websites in Minutes</h2>
                    <p className="cti_desc">
                      Generate modern business websites with responsive design,
                      SEO optimization, and lead capture forms.
                    </p>
                    <div className="cti_stats_wrapper">
                      <div className="cti_stat_box">
                        <span>Websites Built</span>
                        <h3>500+</h3>
                      </div>
                      <div className="cti_stat_box">
                        <span>Conversion Focus</span>
                        <h3>95%</h3>
                      </div>
                    </div>
                    <button className="cti_build_btn">
                      Buid
                      <svg fill="none" height="27" viewBox="0 0 27 27" width="27" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="white" height="27" rx="13.5" transform="rotate(90 27 0)" width="27" x="27"></rect>
                        <path d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496" stroke="#8396FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61801"></path>
                      </svg>
                    </button>
                  </div>
                </section>
                <section className="cti_saas_card is_green">
                  <div className="cti_content">
                    <span className="cti_badge">Business Websites</span>
                    <h2 className="cti_heading">Launch Your Marketplace</h2>
                    <p className="cti_desc">
                      Create platforms for buyers and sellers with listings,
                      payments, reviews, and messaging systems.
                    </p>
                    <div className="cti_stats_wrapper">
                      <div className="cti_stat_box">
                        <span>Marketplace Features</span>
                        <h3>20+</h3>
                      </div>
                      <div className="cti_stat_box">
                        <span>Setup Time</span>
                        <h3>Hours, Not Weeks</h3>
                      </div>
                    </div>
                    <button className="cti_build_btn">
                      Buid
                      <svg fill="none" height="27" viewBox="0 0 27 27" width="27" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="white" height="27" rx="13.5" transform="rotate(90 27 0)" width="27" x="27"></rect>
                        <path d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496" stroke="#8396FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61801"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="ct_sass_card_img">
                    <img alt="" src="/img/launch-marketplace-img.webp" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_service_section">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>E-Commerce Stores</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Doctor &amp; Clinic Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Portfolio Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Portfolio Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Restaurant Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Real Estate Platforms</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 ct_mb_26">
              <a className="ct_service_card" href="#">
                <span>Law Firm Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <a className="ct_service_card" href="#">
                <span>Portfolio Websites</span>
                <div className="ct_arrow_btn">
                  <svg fill="none" height="11" viewBox="0 0 10 11" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.110019 10.1693L7.01588 1.12767L0.181229 2.04301L-0.000270947 1.13306L8.46168 -0.000217624L9.59495 8.46173L8.66931 8.52606L7.75397 1.69141L0.848113 10.7331L0.110019 10.1693Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_smart_product_design_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt text-center text-white">
                <h2 className="mx-auto text-white">
                  Smarter Products, Powered by AI
                </h2>
                <p className="mx-auto text-white ct_opacity_80">
                  Choose the package that fits your current ambition.
                </p>
              </div>
            </div>
          </div>
          <div className="ct_pt_105">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>From Idea to Product</h3>
                    <p>Turn simple ideas into fully functional apps instantly.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/1.webp" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Build Apps in Seconds</h3>
                    <p>Generate complete apps with just a single prompt.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/2.webp" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Just Describe It</h3>
                    <p>No coding. Just tell AI what you want.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/3.webp" />
                  </div>
                </div>
              </div>
            </div>
            <div className="center-row">
              <div className="orb">
                <svg fill="none" viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M16.8691 67.241C18.3569 66.3948 19.7746 65.4428 21.1116 64.3955C25.0587 66.2704 29.4864 67.3213 34.1638 67.3213C42.8086 67.3213 50.6005 63.7314 56.0816 57.9849C56.9896 59.192 57.977 60.338 59.0362 61.4153C52.7471 67.8129 43.9279 71.7908 34.1638 71.7908C27.8635 71.7908 21.9567 70.1347 16.8691 67.241Z" fill="white" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M4.43359 35.8954C4.43359 25.5375 9.346 16.3798 16.8668 10.832C15.5621 9.86959 14.1789 9.01577 12.7293 8.2832C4.97187 14.7481 0 24.7144 0 35.8954C0 47.0761 4.97165 57.0423 12.7288 63.5071C14.1784 62.7745 15.5616 61.9208 16.8663 60.9584C9.34583 55.4106 4.43359 46.253 4.43359 35.8954Z" fill="white" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M34.1639 4.4696C42.8086 4.4696 50.6005 8.05958 56.0816 13.806C56.9897 12.5988 57.9771 11.4528 59.0362 10.3755C52.7471 3.97796 43.928 0 34.1639 0C27.8636 0 21.9568 1.65621 16.8691 4.55C18.3569 5.39616 19.7745 6.3482 21.1116 7.39557C25.0587 5.52066 29.4865 4.4696 34.1639 4.4696Z" fill="white" fillRule="evenodd"></path>
                </svg>
              </div>
              <div className="connectors-layer">
                <svg className="conn-vline" fill="none" height="465" viewBox="0 0 3 465" width="3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.28906 0V464.942" stroke="url(#paint0_linear_120_2507)" strokeWidth="2.57824"></path>
                  <defs>
                    <lineargradient gradientUnits="userSpaceOnUse" id="paint0_linear_120_2507" x1="1.28906" x2="2.28906" y1="232.471" y2="232.471">
                      <stop stopColor="#5D5CFF"></stop>
                      <stop offset="1" stopColor="#222266"></stop>
                    </lineargradient>
                  </defs>
                </svg>
                <div className="ball-v-down"></div>
                <div className="ball-v-up"></div>
                <div className="conn-tl" style={{ position: "absolute", right: "calc(50% - 1px)", bottom: "calc(50% - 2px)", width: "400px", height: "178px" }}>
                  <svg fill="none" height="178" style={{ display: "block", overflow: "visible" }} viewBox="0 0 309 178" width="350" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <lineargradient gradientUnits="userSpaceOnUse" id="grad-tl" x1="308.959" x2="1.28915" y1="107.427" y2="107.427">
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </lineargradient>
                      <filter id="glow">
                        <fegaussianblur result="blur" stdDeviation="3"></fegaussianblur>
                        <femerge>
                          <femergenode in="blur"></femergenode>
                          <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                      </filter>
                    </defs>
                    <path d="M308.959 176.18H247.777C242.803 176.18 237.901 174.984 233.485 172.694C230.256 171.02 227.346 168.792 224.889 166.111L212.094 152.153C204.535 143.906 193.893 139.164 182.706 139.057L27.1802 137.569C22.8739 137.528 18.6407 136.451 14.8376 134.431L13.942 133.955C9.35665 131.519 5.69215 127.653 3.50563 122.943C2.04557 119.798 1.28916 116.373 1.28916 112.906V38.6736V0" fill="none" id="path-tl" stroke="url(#grad-tl)" strokeWidth="2.57824"></path>
                    <circle fill="#C56EFF" filter="url(#glow)" r="5">
                      <animatemotion dur="3s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-tl"></mpath>
                      </animatemotion>
                    </circle>
                  </svg>
                </div>
                <div className="conn-tr" style={{ position: "absolute", left: "calc(50% - 1px)", bottom: "calc(50% - 2px)", width: "309px", height: "178px" }}>
                  <svg fill="none" height="178" style={{ display: "block", overflow: "visible" }} viewBox="0 0 309 178" width="450" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <lineargradient gradientUnits="userSpaceOnUse" id="grad-tr" x1="0" x2="307.67" y1="107.427" y2="107.427">
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </lineargradient>
                      <filter id="glow-tr">
                        <fegaussianblur result="blur" stdDeviation="3"></fegaussianblur>
                        <femerge>
                          <femergenode in="blur"></femergenode>
                          <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                      </filter>
                    </defs>
                    <path d="M0 176.18H61.1818C66.1564 176.18 71.0582 174.984 75.4744 172.694C78.7031 171.02 81.6125 168.792 84.0701 166.111L96.8645 152.153C104.424 143.906 115.066 139.164 126.253 139.057L281.779 137.569C286.085 137.528 290.318 136.451 294.121 134.431L295.017 133.955C299.602 131.519 303.267 127.653 305.453 122.943C306.913 119.798 307.67 116.373 307.67 112.906V38.6736V0" fill="none" id="path-tr" stroke="url(#grad-tr)" strokeWidth="2.57824"></path>
                    <circle fill="#C56EFF" filter="url(#glow-tr)" r="5">
                      <animatemotion dur="3s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-tr"></mpath>
                      </animatemotion>
                    </circle>
                  </svg>
                </div>
                <div className="conn-bl" style={{ position: "absolute", right: "calc(50% - 1px)", top: "calc(50% - 2px)", width: "400px", height: "178px" }}>
                  <svg fill="none" height="178" style={{ display: "block", overflow: "visible" }} viewBox="0 0 309 178" width="350" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <lineargradient gradientUnits="userSpaceOnUse" id="grad-bl" x1="308.959" x2="1.28915" y1="70.0421" y2="70.0421">
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </lineargradient>
                      <filter id="glow-bl">
                        <fegaussianblur result="blur" stdDeviation="3"></fegaussianblur>
                        <femerge>
                          <femergenode in="blur"></femergenode>
                          <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                      </filter>
                    </defs>
                    <path d="M308.959 1.2891H247.777C242.803 1.2891 237.901 2.48438 233.485 4.77427C230.256 6.4484 227.346 8.67675 224.889 11.3577L212.094 25.3153C204.535 33.5624 193.893 38.3046 182.706 38.4117L27.1802 39.9C22.8739 39.9412 18.6407 41.0174 14.8376 43.0378L13.942 43.5135C9.35665 45.9495 5.69215 49.8161 3.50563 54.5255C2.04557 57.6703 1.28916 61.0957 1.28916 64.5629V138.795V177.469" fill="none" id="path-bl" stroke="url(#grad-bl)" strokeWidth="2.57824"></path>
                    <circle fill="#C56EFF" filter="url(#glow-bl)" r="5">
                      <animatemotion dur="3s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-bl"></mpath>
                      </animatemotion>
                    </circle>
                  </svg>
                </div>
                <div className="conn-br" style={{ position: "absolute", left: "calc(50% - 1px)", top: "calc(50% - 2px)", width: "309px", height: "178px" }}>
                  <svg fill="none" height="178" style={{ display: "block", overflow: "visible" }} viewBox="0 0 309 178" width="450" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <lineargradient gradientUnits="userSpaceOnUse" id="grad-br" x1="0" x2="307.67" y1="70.0421" y2="70.0421">
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </lineargradient>
                      <filter id="glow-br">
                        <fegaussianblur result="blur" stdDeviation="3"></fegaussianblur>
                        <femerge>
                          <femergenode in="blur"></femergenode>
                          <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                      </filter>
                    </defs>
                    <path d="M0 1.2891H61.1818C66.1564 1.2891 71.0582 2.48438 75.4744 4.77427C78.7031 6.4484 81.6125 8.67675 84.0701 11.3577L96.8645 25.3153C104.424 33.5624 115.066 38.3046 126.253 38.4117L281.779 39.9C286.085 39.9412 290.318 41.0174 294.121 43.0378L295.017 43.5135C299.602 45.9495 303.267 49.8161 305.453 54.5255C306.913 57.6703 307.67 61.0957 307.67 64.5629V138.795V177.469" fill="none" id="path-br" stroke="url(#grad-br)" strokeWidth="2.57824"></path>
                    <circle fill="#C56EFF" filter="url(#glow-br)" r="5">
                      <animatemotion dur="3s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-br"></mpath>
                      </animatemotion>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row mt-lg-0 mt-3 gy-lg-0 gy-4">
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Design That Works</h3>
                    <p>AI creates clean, modern, user-friendly interfaces.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/4.webp" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Smarter Decision</h3>
                    <p>AI improves performance with real insights.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/5.webp" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Launch Faster</h3>
                    <p>Go live quickly and scale without limits.</p>
                  </div>
                  <div className="card-preview">
                    <img src="/img/6.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_py_98">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Action</span>
                <h2 className="text-center" style={{ maxWidth: "100%" }}>
                  See How Creative AI Works
                </h2>
                <p className="text-center mx-auto" style={{ maxWidth: "545px" }}>
                  Watch how Creative AI turns simple ideas into powerful web and
                  mobile apps in minutes.
                </p>
              </div>
              <div className="ct_video_banner">
                <img alt="Video Thumbnail" src="/img/video_thumb_img.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_blog_new_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span>Blogs</span>
                <h2>Insights &amp; Ideas on AI-Powered Building</h2>
                <p>
                  Explore how AI is transforming the way we design, build, and
                  launch digital products.
                </p>
              </div>
            </div>
          </div>
          <div className="row ct_pt_76">

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="cti_blog_card">
                <div className="cti_blog_img">
                  <img alt="Blog Image" className="img-fluid" src="/img/new_blog_1.webp" />
                </div>
                <div className="cti_blog_content">
                  <h3>The Shift from SaaS to Custom AI-Built Applications</h3>
                  <p>
                    The future of software is AI-built. Discover how custom AI
                    applications offer more control, efficiency, and business
                    growth than SaaS.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="cti_blog_card">
                <div className="cti_blog_img">
                  <img alt="Blog Image" className="img-fluid" src="/img/new_blog_2.webp" />
                </div>
                <div className="cti_blog_content">
                  <h3>
                    Lovable vs Replit vs Creative AI Compared: Best AI App Builder
                  </h3>
                  <p>
                    Compare Lovable, Replit, and Creative AI. See which AI app
                    builder is best for your needs, workflow, and technical level.
                    Fair comparison with real metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="cti_blog_card">
                <div className="cti_blog_img">
                  <img alt="Blog Image" className="img-fluid" src="/img/new_blog_3.webp" />
                </div>
                <div className="cti_blog_content">
                  <h3>Claude Sonnet 4.5 Is Now Live in Creative AI</h3>
                  <p>
                    Claude Sonnet 4.5 is now live in Creative AI, helping startups
                    and businesses build smarter, faster, and more advanced
                    AI-powered applications with improved performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_testimonal_new_section ct_pb_150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Testimonial</span>
                <h2 className="text-center mx-auto">Trusted By Founders Worldwide</h2>
                <p className="text-center mx-auto">
                  See how startups are launching faster and growing smarter with
                  our help.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel cti_testimonial_slider mt-4 pt-4">

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              Outstanding experience working with this team. They delivered our
              custom software on time, with exceptional quality and attention to
              detail. Communication was smooth throughout the project. Highly
              recommended!
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/client_4.webp" />
              <div>
                <h5>Stefan Roger</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              We hired them for a complete website redesign and were impressed
              with their professionalism and technical expertise. Our new site is
              fast, modern, and user-friendly. We've already seen an increase in
              traffic and leads!
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/client_5.webp" />
              <div>
                <h5>Eric J.</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              Working with Creative AI has been a game changer for us. Their
              AI-powered platform helped us design and launch our app in record
              timewithout the usual hassle of long development cycles. What
              impressed us most was the ease of use, flexibility, and the
              professional support provided by the team. Within days, we had a
              functional prototype ready to test with our users, and the final
              product exceeded expectations. Creative AI not only saved us time
              and costs but also gave us the confidence to scale quickly. Highly
              recommended for startups and enterprises looking to build apps
              smarter and faster.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/sam.webp" />
              <div>
                <h5>Sam Buah</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              Creative AI helped us build a robust financial and insurance
              platform faster than we imagined. Their AI-powered system made the
              entire process seamless from prototyping to deployment. We were able
              to integrate secure payment options, compliance-ready features, and
              track progress at every stage. What really stood out was how
              intuitive the platform was, saving us both time and cost while
              ensuring enterprise-level quality.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/james.webp" />
              <div>
                <h5>James Pollard</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              Creative AI makes app building so simple! The platform is super easy
              to use, even for someone with no coding background. I could design,
              make payments, and track progress all in one place without any
              hassle. The transparency and smooth workflow really set it apart
              from other tools I’ve tried.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/paul.webp" />
              <div>
                <h5>Paul Calleja</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>

          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              We initially partnered with Builder.ai to create our sustainability
              solution platform but were left midway through the project. Creative
              AI stepped in at a critical moment and exceeded our expectations.
              Their team not only salvaged the project but also brought in fresh
              ideas and an AI-powered approach that streamlined the entire
              development process. The level of professionalism, transparency, and
              continuous support we received was outstanding. Thanks to Creative
              AI, we were able to launch a robust, scalable platform on time, and
              with greater confidence in our technology partner. Their dedication
              to client success truly sets them apart.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/nirdesh.webp" />
              <div>
                <h5>Nirdesh Badjatiya</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>
          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              Very nice people! they become like family for me. They helped me
              with my website and they delivered good work. The communication is
              great. You always get a fast responds. I definitely recommend them.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/client_2.webp" />
              <div>
                <h5>Justine Pogroske</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>
          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              They did an amazing work on a very large and challenging project. We
              do appreciate the great effort and creativity their team put in
              creating the base for our social marketplace. CTIS is an amazing and
              very professional fellow. Keep up the great work folks!
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/client_1.webp" />
              <div>
                <h5>Ady Bui</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>
          <div className="cti_testimonial_card">
            <p className="cti_testimonial_text">
              I would recommend this company for any upcoming projects and I will
              use them in the future. They were very much in contact during the
              whole process and kept me up to date with the progress of work. This
              was my first time using this platform and I'd say I'm pleased with
              the work in general.
            </p>
            <div className="cti_testimonial_user">
              <img alt="User" src="/img/client_3.webp" />
              <div>
                <h5>Phillipe Dastous</h5>
                <span>Our Happy Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_price_main_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt text-center text-white">
                <span className="mx-auto">Pricing</span>
                <h2 className="mx-auto text-white" style={{ maxWidth: "100%" }}>
                  No Subscriptions. Just Results.
                </h2>
                <p className="mx-auto text-white ct_opacity_80">
                  Choose the package that fits your current ambition.
                </p>
              </div>
            </div>
          </div>
          <div className="ct_pricing_toggle">
            <button className="active" type="button">Monthly</button><button type="button">Annually</button>
          </div>
          <div className="row ct_pt_60">

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="cti_pricing_card">
                <div>
                  <h3 className="cti_plan_title">Free Plan</h3>
                  <p className="cti_plan_desc">
                    Best for exploring the platform startups.
                  </p>
                  <div className="cti_price_wrap">
                    <h2>₹0.00/month</h2>
                    <span>50 Credits</span>
                  </div>
                  <ul className="cti_feature_list">
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Create your first project (25 credits)
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Use remaining credits for minor edits &amp; tweaks
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Access to basic AI generation
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Single agent processing
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Chat-based interaction only
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a className="cti_pricing_btn" href="#">
                    Start Free
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="cti_pricing_card cti_pricing_card_active">
                <div>
                  <h3 className="cti_plan_title">Standard Plan</h3>
                  <p className="cti_plan_desc">
                    Perfect to build your first real product
                  </p>
                  <div className="cti_price_wrap">
                    <h2>₹199/month</h2>
                    <span>100 Credits</span>
                  </div>
                  <ul className="cti_feature_list">
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Create full-scale projects
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Basic deployment access
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Standard customization (credit-based)
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Faster generation vs free plan
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Clean production-ready outputs
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a className="cti_pricing_btn cti_pricing_btn_white" href="#">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="cti_pricing_card">
                <div>
                  <h3 className="cti_plan_title">Enterprise Plan</h3>
                  <p className="cti_plan_desc">For agencies &amp; enterprise teams</p>
                  <div className="cti_price_wrap">
                    <h2>₹35000 / month</h2>
                    <span>3000 Credits</span>
                  </div>
                  <ul className="cti_feature_list">
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Unlimited scale project creation
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Enterprise-grade deployment infrastructure
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Full customization freedom (no limitations)
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Chat + Email + Phone Support
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Maximum speed &amp; priority processing
                    </li>
                    <li>
                      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5424 5.66486C15.3634 5.13645 15.7877 4.60095 15.4845 3.81895C15.182 3.03624 14.2768 2.63745 13.4622 2.92786C12.212 3.3727 11.0326 4.21491 10.0126 5.11449C8.97491 6.02966 8.00733 7.09003 7.18778 8.07816C6.67381 8.69928 6.17824 9.33541 5.7017 9.9857C5.34612 9.60816 5.00399 9.32057 4.68099 9.10382C4.17524 8.76382 3.60503 8.52228 2.99091 8.49961C2.12178 8.49961 1.41699 9.17607 1.41699 10.0112C1.41699 11.0624 2.20466 11.1275 2.87545 11.5794C3.1262 11.7473 3.67162 12.2169 4.37924 13.4048C4.52 13.636 4.71756 13.8273 4.95312 13.9606C5.18868 14.0939 5.45443 14.1647 5.72508 14.1663C5.99588 14.1711 6.26344 14.1069 6.50251 13.9796C6.74159 13.8523 6.94428 13.6662 7.09145 13.4388C7.09145 13.4388 7.50158 12.8141 7.79483 12.3954C8.3813 11.5599 9.00039 10.7478 9.65066 9.96091C10.4107 9.04432 11.2657 8.11286 12.1426 7.34007C13.0365 6.5517 13.8801 6.08986 14.5424 5.66486Z" fill="white"></path>
                      </svg>

                      Optimized for large-scale automation
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a className="cti_pricing_btn" href="#"> Contact Sales </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_home_faq_bg_new ct_pt_150 ct_pb_150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2 className="mx-auto text-center">Your Questions Answered!</h2>
              </div>
              <div className="accordion cti_faq_accordion" id="ctiFaqAccordion">

                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button aria-expanded="true" className="accordion-button cti_faq_btn" data-bs-target="#ctiFaqOne" data-bs-toggle="collapse" type="button">
                      Can I build apps without coding using AI?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse show" data-bs-parent="#ctiFaqAccordion" id="ctiFaqOne">
                    <div className="accordion-body cti_faq_body">
                      Yes, with AI app generators from Creative AI, anyone can
                      build apps without technical skills using no-code or
                      low-code platforms.
                    </div>
                  </div>
                </div>

                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed cti_faq_btn" data-bs-target="#ctiFaqTwo" data-bs-toggle="collapse" type="button">
                      What is an AI app builder?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" data-bs-parent="#ctiFaqAccordion" id="ctiFaqTwo">
                    <div className="accordion-body cti_faq_body">
                      An AI app builder helps users create web and mobile
                      applications using artificial intelligence with minimal
                      coding effort.
                    </div>
                  </div>
                </div>

                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed cti_faq_btn" data-bs-target="#ctiFaqThree" data-bs-toggle="collapse" type="button">
                      Why choose Creative AI for app development?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" data-bs-parent="#ctiFaqAccordion" id="ctiFaqThree">
                    <div className="accordion-body cti_faq_body">
                      Creative AI enables faster development, automation, and
                      scalable solutions tailored to your business requirements.
                    </div>
                  </div>
                </div>

                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed cti_faq_btn" data-bs-target="#ctiFaqFour" data-bs-toggle="collapse" type="button">
                      Is AI app development fast and cost-effective?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" data-bs-parent="#ctiFaqAccordion" id="ctiFaqFour">
                    <div className="accordion-body cti_faq_body">
                      Yes, AI-driven development significantly reduces development
                      time and costs compared to traditional software development.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_contact_bg_new">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="ct_home_titles_cnt">
                <span>Contact Us</span>
                <h2>Let's Build Something Amazing</h2>
                <p style={{ maxWidth: "533px" }}>
                  Have an idea for an app, website, or SaaS product? Our
                  AI-powered platform helps you design, build, launch, and scale
                  digital products faster than traditional development.
                </p>
              </div>
              <div className="cti_trusted_wrap">
                <div className="cti_user_images">
                  <img alt="" src="/img/client_3.webp" />
                  <img alt="" src="/img/client_4.webp" />
                  <img alt="" src="/img/client_2.webp" />
                  <img alt="" src="/img/james.webp" />
                </div>
                <div className="cti_trusted_content">
                  <div className="cti_rating_stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h5>Trusted by 1000+ Businesses</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form className="cti_contact_form">
                <div className="ct_input_group ct_mb_43">
                  <input className="input" required="" type="text" />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Full Name <span className="text-danger">*</span></label>
                </div>
                <div className="ct_input_group ct_mb_43">
                  <input className="input" required="" type="text" />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email <span className="text-danger">*</span></label>
                </div>
                <div className="cti_build_section">
                  <h5>What Would You Like To Build?</h5>
                  <div className="cti_option_wrap">
                    <input defaultChecked={true} hidden="" id="ctiWebsite" name="build" type="radio" />
                    <label className="cti_option_btn" htmlFor="ctiWebsite">
                      <span></span>
                      Website
                    </label>
                    <input hidden="" id="ctiMobile" name="build" type="radio" />
                    <label className="cti_option_btn" htmlFor="ctiMobile">
                      <span></span>
                      Mobile App
                    </label>
                    <input hidden="" id="ctiSaas" name="build" type="radio" />
                    <label className="cti_option_btn" htmlFor="ctiSaas">
                      <span></span>
                      SaaS Platform
                    </label>
                    <input hidden="" id="ctiEcommerce" name="build" type="radio" />
                    <label className="cti_option_btn" htmlFor="ctiEcommerce">
                      <span></span>
                      E-Commerce
                    </label>
                    <input hidden="" id="ctiWebapp" name="build" type="radio" />
                    <label className="cti_option_btn" htmlFor="ctiWebapp">
                      <span></span>
                      Web App
                    </label>
                  </div>
                </div>
                <div className="ct_input_group ct_mb_43">
                  <textarea className="input" required="" rows="3" type="text"></textarea>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Tell us about your idea, goals, and requirements...
                    <span className="text-danger">*</span></label>
                </div>
                <button className="cti_submit_btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      Main Sections E










    </>
  );
}
