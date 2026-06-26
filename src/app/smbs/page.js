import { LOGIN_URL } from "@/config";
import Header from "@/components/Header";
import Link from "next/link";
import { InnerTestimonialInit } from "@/components/PageInitializers";

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
      <div>
        <section className="ct_py_70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="ct_hero_banner_left_cnt ct_interprenuer_shape">
                  <h1 className="ct_fs_44 ct_fw_700" style={{ maxWidth: "500px" }}>
                    Build Business Applications Without Complexity
                  </h1>
                  <p className="mb-0">Creative AI helps SMBs turn ideas into scalable digital solutions with intelligent automation and expert support.
                  </p>
                  <div className="ct_btn_group mt-5">
                    <a className="ct_blue_btn_fill" href={LOGIN_URL}>Start Building </a>
                    <Link className="ct_blue_outline_btn" href="/pricing">See pricing &amp; plans</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="ct_hero_right_main">
                  <div className="position-relative">
                    <img alt="AI app builder" className="ct_img_h_400" src="/img/enterprenuer_right_img.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="ct_break_line" />
      <section className="ct_how_works_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ct_fs_44 ct_fw_700 text-center">How <span className="ct_orange_gredient_text">Creative AI </span> Works
              </h2>
            </div>
          </div>
          <div className="row pt-4 align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="ct_how_works_ai">
                <ul>
                  <li>
                    <div className="ct_works_ai_icon">
                      <svg fill="none" height="25" viewBox="0 0 11 12" width="11" xmlns="http://www.w3.org/2000/svg">
                        <mask height="12" id="mask0_303_14898" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="11" x="0" y="0">
                          <path d="M0 0.802734H10.016V11.7744H0V0.802734Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_303_14898)">
                          <path clipRule="evenodd" d="M0.622445 7.17234L5.36256 9.90098L8.34548 11.6096C8.72978 11.8324 9.21408 11.771 9.52837 11.4482C9.84123 11.1239 9.90266 10.6496 9.6698 10.2553L7.6269 6.82805C7.43546 6.50518 7.43546 6.14089 7.6269 5.81659L9.6698 2.3908C9.90266 1.9965 9.84123 1.52078 9.52837 1.19791C9.21408 0.873619 8.72978 0.813618 8.34548 1.03505L5.36256 2.74366L0.622445 5.47373C0.318152 5.65516 0.136719 5.95945 0.136719 6.32232C0.136719 6.68661 0.318152 6.98948 0.622445 7.17234Z" fill="#3778fa" fillRule="evenodd"></path>
                        </g>
                      </svg>
                      <p className="mb-0 ct_fw_700">01</p>
                    </div>
                    <div>
                      <h3 className="ct_fs_18 ct_fw_700 mb-0"> Just Write Your Prompt
                      </h3>
                      <p className="ct_fs_16 ct_line_h_30">Simply describe your app idea in clear, simple language no coding or technical skills required. Creative AI understands your prompt and converts it into a structured app plan instantly.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="ct_works_ai_icon">
                      <svg fill="none" height="25" viewBox="0 0 11 12" width="11" xmlns="http://www.w3.org/2000/svg">
                        <mask height="12" id="mask0_303_14898" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="11" x="0" y="0">
                          <path d="M0 0.802734H10.016V11.7744H0V0.802734Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_303_14898)">
                          <path clipRule="evenodd" d="M0.622445 7.17234L5.36256 9.90098L8.34548 11.6096C8.72978 11.8324 9.21408 11.771 9.52837 11.4482C9.84123 11.1239 9.90266 10.6496 9.6698 10.2553L7.6269 6.82805C7.43546 6.50518 7.43546 6.14089 7.6269 5.81659L9.6698 2.3908C9.90266 1.9965 9.84123 1.52078 9.52837 1.19791C9.21408 0.873619 8.72978 0.813618 8.34548 1.03505L5.36256 2.74366L0.622445 5.47373C0.318152 5.65516 0.136719 5.95945 0.136719 6.32232C0.136719 6.68661 0.318152 6.98948 0.622445 7.17234Z" fill="#3778fa" fillRule="evenodd"></path>
                        </g>
                      </svg>
                      <p className="mb-0 ct_fw_700">02</p>
                    </div>
                    <div>
                      <h3 className="ct_fs_18 ct_fw_700 mb-0">Let AI Build Your App
                      </h3>
                      <p className="ct_fs_16 ct_line_h_30">
                        Based on your prompt, Creative AI automatically designs, develops, and structures your app within minutes. The AI app builder selects layouts, features, and functionality tailored to your requirements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="ct_works_ai_icon">
                      <svg fill="none" height="25" viewBox="0 0 11 12" width="11" xmlns="http://www.w3.org/2000/svg">
                        <mask height="12" id="mask0_303_14898" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="11" x="0" y="0">
                          <path d="M0 0.802734H10.016V11.7744H0V0.802734Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_303_14898)">
                          <path clipRule="evenodd" d="M0.622445 7.17234L5.36256 9.90098L8.34548 11.6096C8.72978 11.8324 9.21408 11.771 9.52837 11.4482C9.84123 11.1239 9.90266 10.6496 9.6698 10.2553L7.6269 6.82805C7.43546 6.50518 7.43546 6.14089 7.6269 5.81659L9.6698 2.3908C9.90266 1.9965 9.84123 1.52078 9.52837 1.19791C9.21408 0.873619 8.72978 0.813618 8.34548 1.03505L5.36256 2.74366L0.622445 5.47373C0.318152 5.65516 0.136719 5.95945 0.136719 6.32232C0.136719 6.68661 0.318152 6.98948 0.622445 7.17234Z" fill="#3778fa" fillRule="evenodd"></path>
                        </g>
                      </svg>
                      <p className="mb-0 ct_fw_700">03</p>
                    </div>
                    <div>
                      <h3 className="ct_fs_18 ct_fw_700 mb-0"> Get Your App Live
                      </h3>
                      <p className="ct_fs_16 ct_line_h_30">Once your app is ready, review and publish it with just one click. Creative AI helps you launch your mobile or web app quickly, making it ready for users in as little as 5 minutes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 mb-4 mb-md-0 offset-md-1">
              <div className="ct_how_works_img">
                <img alt="AI app builder" loading="lazy" src="/img/how-works_right.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_py_70">
        <div className="container">
          <div className="row"><div className="col-md-12 mb-5"><h2 className="ct_fs_44 ct_fw_700 text-center">How SMBs Build Faster with
            <span className="ct_orange_gredient_text">Creative AI</span></h2></div></div>
          <div className="row align-items-center">
            <div className="col-md-4 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI app builder" loading="lazy" src="/img/enterprenuer_img_1_new.webp" />
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate offset-md-1">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">Manage Business Tasks More Easily
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  Creative AI helps SMBs simplify daily operations, organize workflows, and reduce manual work with a no-code AI app builder designed for growing businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0 ct_row_reverse_767">
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">Build Business Apps Faster
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">
                  Businesses can quickly create customer platforms, internal systems, and digital solutions using an AI app builder without long development delays.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 offset-md-1 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI app builder" loading="lazy" src="/img/enterprenuer_img_2_11zon.webp" />
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_py_70 pb-0">
            <div className="col-md-4 mb-5 mb-md-0 aos-init aos-animate">
              <div className="ct_creative_single_img">
                <img alt="AI app builder" loading="lazy" src="/img/enterprenuer_img_3_new_img_1.webp" />
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0 aos-init aos-animate offset-md-1">
              <div className="ct_flexible_serivce_cnt">
                <h3 className="ct_fs_26 ct_fw_700 mb-3 ct_line_h_25">Grow Your Business with Flexibility
                </h3>
                <p className="mb-0 ct_fs_16 ct_fw_600 ct_line_h_25">You’re not alone our experienced team
                  With a no-code AI app builder, SMBs can build scalable applications that adapt to business growth and changing operational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ct_break_line" />
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ct_fs_44 ct_fw_700 mb-3 text-center"> Transform Any Business Idea into Reality with
                <br />
                <span className="ct_orange_gredient_text">Creative AI</span>
              </h2>
              <p className="text-center ct_fs_16">
                Create modern business applications with an AI app builder built for speed and scalability.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="ct_types_app_card">
                <div className="ct_app_types_img">
                  <img alt="AI-powered app and web development" loading="lazy" src="/img/app_1.webp" />
                </div>
                <div className="ct_app_types_cnt d-grid">
                  <div>
                    <h3 className="ct_fs_22 text-white ct_fw_700 mb-2">Education</h3>
                    <p className="ct_fs_14">
                      Build smart learning platforms, student portals, and eLearning solutions with an AI app builder designed for modern education. Simplify course management, student engagement, and digital learning experiences.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link className="ct_blue_outline_btn ct_white_outline_border w-100 text-center" href="/education">Explore Education Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="ct_types_app_card">
                <div className="ct_app_types_img">
                  <img alt="AI-powered app and web development" loading="lazy" src="/img/app_2.webp" />
                </div>
                <div className="ct_app_types_cnt d-grid">
                  <div>
                    <h3 className="ct_fs_22 text-white ct_fw_700 mb-2">Retail &amp; e-commerce</h3>
                    <p className="ct_fs_14">
                      Create scalable eCommerce platforms, inventory systems, and seamless shopping experiences using a no-code AI app builder. Manage products, orders, and customer journeys with ease.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link className="ct_blue_outline_btn ct_white_outline_border w-100 text-center" href="/retail-&-commerce">Build Retail Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="ct_types_app_card">
                <div className="ct_app_types_img">
                  <img alt="AI-powered app and web development" loading="lazy" src="/img/app_3.webp" />
                </div>
                <div className="ct_app_types_cnt d-grid">
                  <div>
                    <h3 className="ct_fs_22 text-white ct_fw_700 mb-2">Healthcare</h3>
                    <p className="ct_fs_14">
                      Build healthcare apps, patient management systems, and digital health platforms faster with an AI app builder. Improve healthcare workflows and patient experiences through smart automation.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link className="ct_blue_outline_btn ct_white_outline_border w-100 text-center" href="/healthcare">Explore Healthcare Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="ct_types_app_card">
                <div className="ct_app_types_img">
                  <img alt="AI-powered app and web development" loading="lazy" src="/img/app_1.webp" />
                </div>
                <div className="ct_app_types_cnt d-grid">
                  <div>
                    <h3 className="ct_fs_22 text-white ct_fw_700 mb-2">Financial-services</h3>
                    <p className="ct_fs_14">
                      Develop secure financial platforms and customer-focused applications with AI-powered development. Streamline operations, data management, and digital financial experiences.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link className="ct_blue_outline_btn ct_white_outline_border w-100 text-center" href="/financial-services">Discover Finance Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ct_btn_group ct_py_70 pb-0 justify-content-center">
            <Link className="ct_blue_btn_fill" href="/all-industries">View More
              industries</Link>
          </div>
        </div>
      </section>
      <section className="ct_pb_50">
        <div className="ct_free_demo_bg rounded-0 py-5 ct_px_80">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 mb-4 mb-md-0">
                <div className="ct_launch_left_cnt">
                  <h2 className="ct_fs_44 ct_fw_600 text-white mb-3 text-center">See Why Businesses Build with Creative AI
                  </h2>
                  <div className="ct_perks_job_list_ul mt-4">
                    <ul className="d-flex justify-content-center gap-3 flex-wrap">
                      <li className="text-white">
                        <i className="bi bi-check2-circle text-white"></i>AI-Powered Project Building
                      </li>
                      <li className="text-white"><i className="bi bi-check2-circle text-white"></i>No-Code &amp; Custom Solutions
                      </li>
                      <li className="text-white"><i className="bi bi-check2-circle text-white"></i>End-to-End Product Support
                      </li>
                    </ul>
                  </div>
                  <div className="ct_btn_group mt-4 justify-content-center">
                    <Link className="ct_blue_outline_btn ct_white_btn" href="/why-creative-ai"> Explore Why Creative AI</Link>
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
              <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
                <div className="text-center">
                  <h4 className="ct_fs_34 ct_fw_700 mb-2">
                    See How We've Transformed Ideas into <br />
                    <span className="ct_orange_gredient_text">Digital Success Stories</span>
                  </h4>
                  <p className="ct_fs_18 ct_fs_600">
                    From startups to growing companies, businesses trust Creative AI to simplify app development and scale faster.
                  </p>
                </div>
              </div>
              <div className="owl-carousel owl-theme ct_testimonial_slider mt-4">
                <div className="item">
                  <div className="ct_testimonial_main">
                    <div>
                      <img alt="AI app builder for mobile and web" loading="lazy" src="/img/i_white.webp" />
                      <p>
                        Working with Creative AI has been a game changer for us. Their AI-powered platform helped us design
                        and launch our app in record timewithout the usual hassle of long development cycles. What impressed
                        us most was the ease of use, flexibility, and the professional support provided by the team. Within
                        days, we had a functional prototype ready to test with our users, and the final product exceeded
                        expectations. Creative AI not only saved us time and costs but also gave us the confidence to scale
                        quickly. Highly recommended for startups and enterprises looking to build apps smarter and faster.
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
                        Creative AI helped us build a robust financial and insurance platform faster than we imagined. Their
                        AI-powered system made the entire process seamless from prototyping to deployment. We were able to
                        integrate secure payment options, compliance-ready features, and track progress at every stage. What
                        really stood out was how intuitive the platform was, saving us both time and cost while ensuring
                        enterprise-level quality.
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
                        Creative AI makes app building so simple! The platform is super easy to use, even for someone with no
                        coding background. I could design, make payments, and track progress all in one place without any
                        hassle. The transparency and smooth workflow really set it apart from other tools I’ve tried.
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
                        We initially partnered with Builder.ai to create our sustainability solution platform but were left
                        midway through the project. Creative AI stepped in at a critical moment and exceeded our expectations.
                        Their team not only salvaged the project but also brought in fresh ideas and an AI-powered approach
                        that streamlined the entire development process. The level of professionalism, transparency, and
                        continuous support we received was outstanding. Thanks to Creative AI, we were able to launch a
                        robust, scalable platform on time, and with greater confidence in our technology partner. Their
                        dedication to client success truly sets them apart.
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
                        Very nice people! they become like family for me. They helped me with my website and they delivered
                        good work. The communication is great. You always get a fast responds. I definitely recommend them.
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
                        They did an amazing work on a very large and challenging project. We do appreciate the great effort
                        and creativity their team put in creating the base for our social marketplace. CTIS is an amazing and
                        very professional fellow. Keep up the great work folks!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_1.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Ady Bui </h5>
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
                        I would recommend this company for any upcoming projects and I will use them in the future. They were
                        very much in contact during the whole process and kept me up to date with the progress of work. This
                        was my first time using this platform and I'd say I'm pleased with the work in general.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_3.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Phillipe Dastous </h5>
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
                        Outstanding experience working with this team. They delivered our custom software on time, with
                        exceptional quality and attention to detail. Communication was smooth throughout the project. Highly
                        recommended!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_4.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Stefan Roger </h5>
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
                        We hired them for a complete website redesign and were impressed with their professionalism and
                        technical expertise. Our new site is fast, modern, and user-friendly. We've already seen an increase
                        in traffic and leads!
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="ct_testimonial_user_img">
                        <img alt="AI app builder for mobile and web" loading="lazy" src="/img/client_5.webp" />
                      </div>
                      <div className="text-center mt-2">
                        <h5 className="ct_fs_20 ct_fw_600 mb-0">Eric J. </h5>
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
          <div className="col-md-12">
            <div className="ct_free_demo_bg">
              <h2 className="ct_fs_38 text-center ct_fw_600 text-white mb-2"> Ready to Build Your Next Big Idea?
              </h2>
              <p className="ct_fs_17 mb-0 text-center text-white mx-auto" style={{ maxWidth: "600px" }}>Turn your vision into a scalable digital product with Creative AI. Build faster, simplify development, and launch smarter with our AI app builder.
              </p>
              <div className="text-center mt-4">
                <a className="ct_blue_btn_fill ct_white_btn" href={LOGIN_URL}> Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
