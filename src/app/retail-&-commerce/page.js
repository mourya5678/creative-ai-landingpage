import Header from "@/components/Header";
import Link from "next/link";
import { InnerTestimonialInit, RetailSliderInit, PricingSliderInit, BlogDetailsSliderInit } from "@/components/PageInitializers";

export const metadata = {
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  keywords: "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
};

export default function Page() {
  return (
    <>
      <Header />
      <InnerTestimonialInit />
      <RetailSliderInit />
      <PricingSliderInit />
      <BlogDetailsSliderInit />

      <div className="">


        <section className="ct_py_70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="ct_hero_banner_left_cnt">
                  <h1 className="ct_fs_44 ct_fw_700" style={{ maxWidth: "600px" }}>
                    AI-Powered E-commerce Development Made Simple
                  </h1>
                  <p>
                    Creative AI is a no-code AI app builder that helps startups
                    and businesses create custom retail apps, simplify workflows,
                    and launch projects faster with complete end-to-end support.
                  </p>
                  <div className="ct_btn_group mt-5">
                    <a className="ct_blue_btn_fill" href={process.env.NEXT_PUBLIC_LOGIN_URL || "http://72.60.203.98/login"}>Build Your App</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="ct_hero_right_main">
                  <div className="position-relative">
                    <img alt="AI-powered app and web development" className="ct_img_w_80" src="/img/retail-solution-1.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <hr className="ct_break_line" />
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ct_fw_700 ct_fs_44 text-center mb-3">
                How Creative AI Helps E-commerce <br />
                <span className="ct_orange_gredient_text"> Businesses Grow</span>
              </h2>

              <p className="ct_fw_18 text-center mb-2 ct_fw_500 mx-auto" style={{ maxWidth: "800px" }}>
                Creative AI is a no-code AI app builder that helps ecommerce
                businesses create custom apps, manage workflows more easily, and
                launch digital products faster with complete end-to-end support.
              </p>
            </div>
          </div>
          <div className="row align-items-center pt-5">
            <div className="col-md-4 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI-powered app and web development" loading="lazy" src="/img/retail_img_1.webp" />
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate offset-md-1">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                  Build ecommerce apps without coding
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  Creative AI lets you create fully functional ecommerce
                  applications without writing code. You simply share your idea,
                  and the system turns it into a working digital product, saving
                  time and technical effort.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0 ct_row_reverse_767">
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                  Easy store design and customization
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  It helps you design your online store with simple tools and
                  flexible options. You can adjust layouts, features, and user
                  flows to match your brand and customer needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 offset-md-1 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI-powered app and web development" loading="lazy" src="/img/retail_img_2.webp" />
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0">
            <div className="col-md-4 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI-powered app and web development" loading="lazy" src="/img/retail_img_3.webp" />
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate offset-md-1">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                  Automate daily business workflows
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  Creative AI automates key tasks such as order management,
                  inventory tracking, and user handling. This reduces manual work
                  and helps your business run more smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0 ct_row_reverse_767">
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                  Faster product launch
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  From idea to live store, the platform speeds up the entire
                  process. You can launch your ecommerce business quickly and
                  start selling without long development delays.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 offset-md-1 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI-powered app and web development" loading="lazy" src="/img/retail_img_4.webp" />
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0">
            <div className="col-md-4 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI-powered app and web development" loading="lazy" src="/img/retail_img_5.webp" />
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate offset-md-1">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                  Complete end-to-end support
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  It provides full support at every stage: planning, development,
                  and deployment. You also get expert help when needed to scale
                  and improve your ecommerce platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_latest_project_bg ct_olw_nav_show_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ct_fs_44 ct_fw_700 text-center mb-5">
                Why
                <span className="ct_orange_gredient_text">Retail Businesses</span>
                Choose Us
              </h2>
              <div className="owl-carousel owl-theme ct_dot_nav_hover" id="ct_retaial_app_slider">
                <div className="item">
                  <div className="ct_retail_app_card_12">
                    <figure>
                      <div className="ct_retail_app_icon">
                        <svg fill="none" height="30" viewBox="0 0 33 30" width="33" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.582 22.0833L30.6654 15L23.582 7.91667M9.41536 7.91667L2.33203 15L9.41536 22.0833M19.332 2.25L13.6654 27.75" stroke="#FEFEFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333"></path>
                        </svg>
                      </div>
                      <figcaption>
                        <h3 className="ct_fs_22 ct_fw_700 text-center">
                          Fast development
                        </h3>
                        <p className="mb-0 ct_fs_18 ct_line_h_25 text-center">
                          Build retail apps quickly without coding and save time
                          from idea to launch.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_retail_app_card_12">
                    <figure>
                      <div className="ct_retail_app_icon">
                        <svg fill="none" height="26" viewBox="0 0 25 26" width="25" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0846 7.41536H3.0013V4.58203H10.0846V1.7487H6.54297V0.332031H3.70964V1.7487H0.167969V10.2487H7.2513V13.082H0.167969V15.9154H3.70964V17.332H6.54297V15.9154H10.0846V7.41536ZM22.2538 13.8187L14.2355 21.8229L10.2263 17.8137L8.2288 19.8254L14.2355 25.832L24.2513 15.8162L22.2538 13.8187Z" fill="white"></path>
                        </svg>
                      </div>
                      <figcaption>
                        <h3 className="ct_fs_22 ct_fw_700 text-center">
                          Custom solutions
                        </h3>
                        <p className="mb-0 ct_fs_18 ct_line_h_25 text-center">
                          Create apps tailored to your business needs, features,
                          and design.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_retail_app_card_12">
                    <figure>
                      <div className="ct_retail_app_icon">
                        <svg fill="none" height="35" viewBox="0 0 34 35" width="34" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.25 25.9102C21.25 28.2574 23.1528 30.1602 25.5 30.1602C27.8472 30.1602 29.75 28.2574 29.75 25.9102C29.75 23.5629 27.8472 21.6602 25.5 21.6602C23.1528 21.6602 21.25 23.5629 21.25 25.9102ZM21.25 25.9102C17.8685 25.9102 14.6255 24.5669 12.2344 22.1758C9.8433 19.7847 8.5 16.5417 8.5 13.1602M8.5 13.1602C10.8472 13.1602 12.75 11.2574 12.75 8.91016C12.75 6.56295 10.8472 4.66016 8.5 4.66016C6.15279 4.66016 4.25 6.56295 4.25 8.91016C4.25 11.2574 6.15279 13.1602 8.5 13.1602ZM8.5 13.1602V30.1602" stroke="#FEFEFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333"></path>
                        </svg>
                      </div>
                      <figcaption>
                        <h3 className="ct_fs_22 ct_fw_700 text-center">
                          Full support
                        </h3>
                        <p className="mb-0 ct_fs_18 ct_line_h_25 text-center">
                          Get help at every step, from planning to launch and
                          scaling your app.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <h2 className="ct_fs_44 ct_fw_700 text-center">
                Explore Our
                <span className="ct_orange_gredient_text">Retail E-commerce Project</span>
                Built <br />
                with Creative AI
              </h2>
            </div>
          </div>
          <div className="owl-carousel owl-theme ct_pricing_works ct_dot_nav_hover">
            <div className="item">
              <div className="row align-items-center pb-0">
                <div className="col-md-8 mb-4 mb-md-0 aos-init aos-animate">
                  <div className="ct_flexible_serivce_cnt">
                    <h4 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                      Second stage
                    </h4>
                    <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                      This ecommerce project is designed for a premium bikini
                      designer brand that showcases and sells exclusive swimwear
                      collections online. Built on React JS, Node JS, MySQL, and
                      hosted on AWS, the platform lets designers feature their
                      collections with professional model shots, manage inventory,
                      and sell directly to customers worldwide.
                    </p>

                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 aos-init aos-animate">
                  <div className="ct_creative_single_img">
                    <img alt="AI-powered app and web development" loading="lazy" src="/img/ecommerse_section_img.webp" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4 className="ct_fs_26 ct_fw_700 mb-4">
                  Some of the features they used:
                </h4>
                <div className="row">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Stunning Product Displays
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          Each bikini collection is presented with high-quality
                          model shots, detailed product views, and easy-to-browse
                          image galleries to attract buyers and boost sales.
                        </p>
                      </details>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Seamless Cart &amp; Checkout
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          A simple, secure add-to-cart and checkout flow lets
                          customers place orders effortlessly, with real-time
                          stock updates powered by MySQL and Node.js.
                        </p>
                      </details>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Designer-Friendly Admin Panel
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          An easy backend dashboard helps designers upload new
                          collections, manage product details, update images, and
                          track orders all with secure AWS hosting for smooth
                          performance.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="item">
              <div className="row align-items-center pb-0">
                <div className="col-md-8 mb-4 mb-md-0 aos-init aos-animate">
                  <div className="ct_flexible_serivce_cnt">
                    <h4 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">
                      My Rashan Mart
                    </h4>
                    <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                      My Rashan Mart is a modern ecommerce platform designed to
                      make grocery shopping easy, affordable, and super fast. From
                      farm-fresh fruits and vegetables to daily household
                      essentials, customers can find everything they need under
                      one digital roof with exclusive offers and guaranteed
                      quality, delivered straight to their doorstep.
                    </p>

                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 aos-init aos-animate">
                  <div className="ct_creative_single_img">
                    <img alt="AI-powered app and web development" loading="lazy" src="/img/ecommerse_section_img.webp" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4 className="ct_fs_26 ct_fw_700 mb-4">
                  Some of the features they used:
                </h4>
                <div className="row">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Always Fresh Fruits &amp; Veggies
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          We source fresh produce directly from trusted suppliers
                          so customers get the best quality fruits and vegetables
                          every single day.
                        </p>
                      </details>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Exciting Offers &amp; Daily Discounts
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          Shoppers can enjoy big savings with special deals, combo
                          packs, and regular discounts on groceries and
                          essentials.
                        </p>
                      </details>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_compare_table ct_some_feature_detail_box">
                      <details className="">
                        <summary className="d-flex align-items-center gap-2 position-relative">
                          <svg fill="none" height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#3778fa" height="32" rx="16" width="32" x="0.5" y="0.761719"></rect>
                            <path d="M19.7377 20.0003L22.9758 16.7622L19.7377 13.5241M13.2615 13.5241L10.0234 16.7622L13.2615 20.0003M17.7949 10.9336L15.2044 22.5907" stroke="#FCFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29524"></path>
                          </svg>
                          <h5 className="mb-0 ct_fs_18 ct_fw_600">
                            Quick Delivery with Live Tracking
                          </h5>
                          <div className="ct_compare_collapse_icon">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.68506 8.573L6.71006 3.54847C6.77592 3.48252 6.86529 3.44546 6.9585 3.44546C7.0517 3.44546 7.14108 3.48252 7.20693 3.54847L12.2319 8.573" stroke="#3C3E49" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </summary>
                        <p className="mb-0 mt-3">
                          Our fast delivery network ensures your orders reach you
                          on time. Customers can track their orders in real time
                          and shop worry-free.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ct_break_line" />
      <section className="ct_grey_bg ct_py_70 ct_olw_nav_show_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="text-center">
                  <h4 className="ct_fs_34 ct_fw_700 mb-2">
                    See How We've Transformed Ideas into <br />
                    <span className="ct_orange_gredient_text">Digital Success Stories</span>
                  </h4>
                  <p className="ct_fs_18 ct_fs_600">
                    Discover how we've helped businesses like yours achieve their
                    goals through innovative and customized app and web
                    development. Our recent projects showcase our commitment to
                    delivering exceptional solutions that address unique
                    challenges and drive tangible results.
                  </p>
                </div>
              </div>
              <div className="owl-carousel owl-theme ct_testimonial_slider mt-4">
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/i_white.webp" />
                      <p>
                        Working with Creative AI has been a game changer for us.
                        Their AI-powered platform helped us design and launch our
                        app in record timewithout the usual hassle of long
                        development cycles. What impressed us most was the ease of
                        use, flexibility, and the professional support provided by
                        the team. Within days, we had a functional prototype ready
                        to test with our users, and the final product exceeded
                        expectations. Creative AI not only saved us time and costs
                        but also gave us the confidence to scale quickly. Highly
                        recommended for startups and enterprises looking to build
                        apps smarter and faster.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/sam.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Sam Buah</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/jameslogo.webp" />
                      <p>
                        Creative AI helped us build a robust financial and
                        insurance platform faster than we imagined. Their
                        AI-powered system made the entire process seamless from
                        prototyping to deployment. We were able to integrate
                        secure payment options, compliance-ready features, and
                        track progress at every stage. What really stood out was
                        how intuitive the platform was, saving us both time and
                        cost while ensuring enterprise-level quality.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/james.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">James Pollard</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/paullogo.svg" />
                      <p>
                        Creative AI makes app building so simple! The platform is
                        super easy to use, even for someone with no coding
                        background. I could design, make payments, and track
                        progress all in one place without any hassle. The
                        transparency and smooth workflow really set it apart from
                        other tools I’ve tried.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/paul.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Paul Calleja</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/nirdeshlogo.webp" />
                      <p>
                        We initially partnered with Builder.ai to create our
                        sustainability solution platform but were left midway
                        through the project. Creative AI stepped in at a critical
                        moment and exceeded our expectations. Their team not only
                        salvaged the project but also brought in fresh ideas and
                        an AI-powered approach that streamlined the entire
                        development process. The level of professionalism,
                        transparency, and continuous support we received was
                        outstanding. Thanks to Creative AI, we were able to launch
                        a robust, scalable platform on time, and with greater
                        confidence in our technology partner. Their dedication to
                        client success truly sets them apart.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/nirdesh.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Nirdesh Badjatiya</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/clinet_logo-1.webp" />
                      <p>
                        Very nice people! they become like family for me. They
                        helped me with my website and they delivered good work.
                        The communication is great. You always get a fast
                        responds. I definitely recommend them.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_2.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Justine Pogroske</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/clinet_logo-2.webp" />
                      <p>
                        They did an amazing work on a very large and challenging
                        project. We do appreciate the great effort and creativity
                        their team put in creating the base for our social
                        marketplace. CTIS is an amazing and very professional
                        fellow. Keep up the great work folks!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_1.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Ady Bui</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/clinet_logo-3.svg" />
                      <p>
                        I would recommend this company for any upcoming projects
                        and I will use them in the future. They were very much in
                        contact during the whole process and kept me up to date
                        with the progress of work. This was my first time using
                        this platform and I'd say I'm pleased with the work in
                        general.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_3.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Phillipe Dastous</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/SmartLoanCalc.webp" />
                      <p>
                        Outstanding experience working with this team. They
                        delivered our custom software on time, with exceptional
                        quality and attention to detail. Communication was smooth
                        throughout the project. Highly recommended!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_4.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Stefan Roger</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/life_moment.webp" />
                      <p>
                        We hired them for a complete website redesign and were
                        impressed with their professionalism and technical
                        expertise. Our new site is fast, modern, and
                        user-friendly. We've already seen an increase in traffic
                        and leads!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_5.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Eric J.</h5>
                        <p className="mb-0">Our Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="ct_fs_44 ct_fw_700 text-center">
                Related <span className="ct_orange_gredient_text">Blogs</span>
              </h3>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme ct_related_article ct_dot_nav_hover">
                <div className="item">
                  <div className="ct_related_article_card">
                    <figure>
                      <div className="ct_article_img" tabIndex="0">
                        <img alt="AI app builder for mobile and web" src="https://api.creativethoughts.ai/blog_image/Frame_2147228019-1780904378323.png" style={{ aspectRatio: "16 / 5 !important" }} />
                      </div>
                      <figcaption className="mt-4 px-3">
                        <div>
                          <p className="mb-0 ct_fs_14 ct_fw_600">2026-06-08</p>
                          <h4 className="ct_fs_18 ct_fw_700 text-truncate w-100 overflow-hidden" style={{ maxWidth: "300px" }}>
                            Top 6 AI App Builders: Tested &amp; Reviewed for 2026
                          </h4>
                          <p className="mb-0 ct_fs_14">
                            We tested the best AI app builders for 2026. Compare
                            Creative AI, Base44, Bubble, Glide, Softr &amp; Adalo
                            to find the right no-code AI app builder for you.
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Link className="ct_blue_btn_fill w-100 mt-4" href="/blog-details" tabIndex="0">
                            Learn More
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_related_article_card">
                    <figure>
                      <div className="ct_article_img" tabIndex="0">
                        <img alt="AI app builder for mobile and web" src="https://api.creativethoughts.ai/blog_image/Frame_2147228014-1780649688909.png" style={{ aspectRatio: "16 / 5 !important" }} />
                      </div>
                      <figcaption className="mt-4 px-3">
                        <div>
                          <p className="mb-0 ct_fs_14 ct_fw_600">2026-06-05</p>
                          <h4 className="ct_fs_18 ct_fw_700 text-truncate w-100 overflow-hidden" style={{ maxWidth: "300px" }}>
                            Lovable vs Replit vs Creative AI Compared: Best AI App Builder
                          </h4>
                          <p className="mb-0 ct_fs_14">
                            Compare Lovable, Replit, and Creative AI. See which AI app builder is best for your needs, workflow, and technical level. Fair comparison with real metrics
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Link className="ct_blue_btn_fill w-100 mt-4" href="/blog-details" tabIndex="0">
                            Learn More
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_related_article_card">
                    <figure>
                      <div className="ct_article_img" tabIndex="0">
                        <img alt="AI app builder for mobile and web" src="https://api.creativethoughts.ai/blog_image/Frame_2147228014-1780649688909.png" style={{ aspectRatio: "16 / 5 !important" }} />
                      </div>
                      <figcaption className="mt-4 px-3">
                        <div>
                          <p className="mb-0 ct_fs_14 ct_fw_600">2026-06-05</p>
                          <h4 className="ct_fs_18 ct_fw_700 text-truncate w-100 overflow-hidden" style={{ maxWidth: "300px" }}>
                            Lovable vs Replit vs Creative AI Compared: Best AI App Builder
                          </h4>
                          <p className="mb-0 ct_fs_14">
                            Compare Lovable, Replit, and Creative AI. See which AI app builder is best for your needs, workflow, and technical level. Fair comparison with real metrics
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Link className="ct_blue_btn_fill w-100 mt-4" href="/blog-details" tabIndex="0">
                            Learn More
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_related_article_card">
                    <figure>
                      <div className="ct_article_img" tabIndex="0">
                        <img alt="AI app builder for mobile and web" src="https://api.creativethoughts.ai/blog_image/Frame_2147228014-1780649688909.png" style={{ aspectRatio: "16 / 5 !important" }} />
                      </div>
                      <figcaption className="mt-4 px-3">
                        <div>
                          <p className="mb-0 ct_fs_14 ct_fw_600">2026-06-05</p>
                          <h4 className="ct_fs_18 ct_fw_700 text-truncate w-100 overflow-hidden" style={{ maxWidth: "300px" }}>
                            Lovable vs Replit vs Creative AI Compared: Best AI App Builder
                          </h4>
                          <p className="mb-0 ct_fs_14">
                            Compare Lovable, Replit, and Creative AI. See which AI app builder is best for your needs, workflow, and technical level. Fair comparison with real metrics
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Link className="ct_blue_btn_fill w-100 mt-4" href="/blog-details" tabIndex="0">
                            Learn More
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ct_break_line" />
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="col-md-12">
            <div className="ct_free_demo_bg">
              <h2 className="ct_fs_28 text-center text-white ct_fw_700 mb-2 mx-auto" style={{ maxWidth: "600px" }}>
                Turn your idea into a live store in minutes with no coding needed.
              </h2>
              <div className="text-center mt-4">
                <a className="ct_blue_btn_fill ct_white_btn" href={process.env.NEXT_PUBLIC_LOGIN_URL || "http://72.60.203.98/login"}>Build Now </a>
              </div>
            </div>
          </div>
        </div>
      </section>










    </>
  );
}
