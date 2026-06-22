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


      <section className="ct_pricing_section ct_py_70">
        <div className="container">
          <div className="ct_section_heading text-center">
            <h2 className="ct_fw_600 ct_fs_40 mb-2">
              Choose the Perfect Plan for
              <span className="ct_orange_gredient_text">Your Next Big Idea </span>
            </h2>
            <p className="mx-auto" style={{ maxWidth: "716px" }}>
              Flexible pricing built for startups, agencies, and growing
              businesses.
            </p>
            <div className="ct_pricing_toggle">
              <button className="active" type="button">
                Monthly
              </button>
              <button type="button">
                Annually
              </button>
            </div>
          </div>
          <div className="ct_pricing_grid mt-5">
            <div className="ct_price_card">
              <div className="ct_price_card_top">
                <span className="ct_price_badge">FREE PLAN</span>
                <h3 className="ct_price_credits">
                  50 Credits
                </h3>
                <div className="ct_price_value">
                  <span className="ct_price_current">₹0.00</span><span className="ct_price_suffix">/month</span>
                </div>
                <p>
                  Best for exploring the platform
                </p>
                <div className="ct_price_offer_slot">

                </div>
                <a className="ct_price_cta" href="/login" routerlink="/login">Start Free</a>
              </div>
              <div className="ct_price_card_bottom">
                <h4>Features you will get:</h4>
                <ul>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Create your first project (at 25 credits)</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Use remaining credits for minor edits &amp; tweaks</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Access to basic AI generation</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Single agent processing</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Chat-based interaction only</span>
                  </li>

                </ul>
                <p className="ct_price_note">
                  Upgrade anytime or buy credits directly
                </p>
              </div>
            </div>

            <div className="ct_price_card ct_price_card_featured">
              <div className="ct_price_card_top">
                <span className="ct_price_badge">STANDARD PLAN</span>
                <h3 className="ct_price_credits">
                  100 Credits
                </h3>
                <div className="ct_price_value ct_price_value_compact ct_price_value_with_old">
                  <span className="ct_price_previous">
                    ₹1650.00/month </span><span className="ct_price_current">₹199.00</span><span className="ct_price_suffix">/month</span>
                </div>
                <div className="ct_price_offer_slot">
                  <div className="ct_price_offer_wrap">
                    <div className="ct_price_offer">
                      ₹199.00
                    </div>
                  </div>

                </div>
                <p>
                  Perfect to build your first real product
                </p>
                <a className="ct_price_cta" href="/login" routerlink="/login">Get Started</a>
                <div className="position-relative">
                  <button className="ct_starter_plan" type="button">
                    100 credits /month
                    <svg className="ct_show_eye" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" fillRule="evenodd"></path>
                    </svg></button>
                </div>

              </div>
              <div className="ct_price_card_bottom">
                <h4>Features you will get:</h4>
                <ul>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Create full-scale projects</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Basic deployment access</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Standard customization (credit-based)</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Faster generation vs free plan</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Clean production-ready outputs</span>
                  </li>

                </ul>
                <p className="ct_price_note">
                  Auto-upgrades to Standard plan next month.
                </p>
              </div>
            </div>

            <div className="ct_price_card">
              <div className="ct_price_card_top">
                <span className="ct_price_badge">ENTERPRISE PLAN</span>
                <h3 className="ct_price_credits">
                  2000 Credits
                </h3>
                <div className="ct_price_value">
                  <span className="ct_price_current">₹35000.00</span><span className="ct_price_suffix">/month</span>
                </div>
                <div className="ct_price_offer_slot">

                </div>
                <p>
                  For agencies &amp; enterprise teams
                </p>
                <a className="ct_price_cta" href="/login" routerlink="/login">Get Started</a>
              </div>
              <div className="ct_price_card_bottom">
                <h4>
                  Pro Features and you will get:
                </h4>
                <ul>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Unlimited scale project creation</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Enterprise-grade deployment infrastructure</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Full customization freedom (no limitations)</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Chat + Email + Phone Support</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Maximum speed &amp; priority processing</span>
                  </li>
                  <li>
                    <img alt="Create powerful apps with no code AI app builder" className="me-2" height="20" loading="lazy" src="/img/pricing_check_icon.svg" width="20" /><span>Optimized for large-scale automation</span>
                  </li>

                </ul>
                <p className="ct_price_note">
                  Tailored for high-end business workflows
                </p>
              </div>
            </div>

          </div>
          <div className="ct_pricing_cta">
            <div>
              <h4>Stuck or Need Guidance?</h4>
              <p>We’re here to help you build your first app.</p>
            </div>
            <a className="ct_blue_btn_fill" href="#">Contact Us</a>
          </div>
        </div>
      </section>
      Software Needs Section E
      <hr className="ct_break_line" />
      <section className="ct_grey_bg ct_py_70 pb-0 ct_olw_nav_show_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_section_heading text-center">
                <h2 className="ct_fs_40 ct_fw_600 mb-2">
                  See How
                  <span className="ct_orange_gredient_text ct_ff_figtree">Creative AI Works</span>
                </h2>
                <p>Watch how your idea turns into a real app in minutes.</p>
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
      <section className="ct_grey_bg ct_py_70">
        <div className="container">
          <div className="row mt-4 align-items-start">
            <div className="col-md-4 mb-4 mb-md-0">
              <h2 className="ct_fs_44 ct_fw_700">
                Got Questions? We've
                <span className="ct_orange_gredient_text">Got You</span>
              </h2>
              <p>
                Everything you need to know about building apps with our AI app
                builder
              </p>
            </div>
            <div className="col-md-7 offset-md-1 mb-4 mb-md-0">
              <div className="ct_how_works_collapse">
                <div className="accordion" id="ct_how_works_accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq_one">
                      <button aria-controls="collapsefaq_one" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one" data-bs-toggle="collapse" type="button">
                        What is an AI app builder?
                      </button>
                    </h2>
                    <div aria-labelledby="faq_one" className="accordion-collapse collapse show" data-bs-parent="#ct_how_works_accordion" id="collapsefaq_one">
                      <div className="accordion-body">
                        <p className="ct_fs_16 mb-0 ct_line_h_30">
                          An AI app builder is a tool that lets you create apps
                          just by describing your idea. It automatically builds
                          the design, features, and backend for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqtwo">
                      <button aria-controls="collapseTwo" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two" data-bs-toggle="collapse" type="button">
                        How does this AI app builder work?
                      </button>
                    </h2>
                    <div aria-labelledby="faqtwo" className="accordion-collapse collapse" data-bs-parent="#ct_how_works_accordion" id="collapsefaq_Two">
                      <div className="accordion-body">
                        <p className="ct_fs_16 mb-0 ct_line_h_30">
                          You simply type what you want to build, and the AI turns
                          it into a working app step by step, in minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqthree">
                      <button aria-controls="collapsefaq_Three" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three" data-bs-toggle="collapse" type="button">
                        Do I need coding to build an app?
                      </button>
                    </h2>
                    <div aria-labelledby="faqthree" className="accordion-collapse collapse" data-bs-parent="#ct_how_works_accordion" id="collapsefaq_Three">
                      <div className="accordion-body">
                        <p className="ct_fs_16 mb-0 ct_line_h_30">
                          No, you don’t need any coding skills. The AI handles
                          everything; you just focus on your idea.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqfour">
                      <button aria-controls="collapsefaq_four" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_four" data-bs-toggle="collapse" type="button">
                        What kind of apps can I build?
                      </button>
                    </h2>
                    <div aria-labelledby="faqfour" className="accordion-collapse collapse" data-bs-parent="#ct_how_works_accordion" id="collapsefaq_four">
                      <div className="accordion-body">
                        <p className="ct_fs_16 mb-1 ct_line_h_30">
                          You can build web apps, mobile apps, dashboards, tools,
                          and more. If you can describe it, you can build it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqfive">
                      <button aria-controls="collapsefaq_five" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_five" data-bs-toggle="collapse" type="button">
                        How fast can I launch my app?
                      </button>
                    </h2>
                    <div aria-labelledby="faqfive" className="accordion-collapse collapse" data-bs-parent="#ct_how_works_accordion" id="collapsefaq_five">
                      <div className="accordion-body">
                        <p className="ct_fs_16 mb-0 ct_line_h_30">
                          You can create and launch your app in just a few
                          minutes, depending on your idea.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_py_70">
        <div className="logo-slider">
          <div className="logo-slider__track">

            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_1.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_2.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_3.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_4.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_5.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_6.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_7.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_8.png" />
            </div>

            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_1.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_2.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_3.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_4.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_5.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_6.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_7.png" />
            </div>
            <div className="logo-slider__item">
              <img alt="No code AI app builder for fast custom apps" loading="lazy" src="/img/brand_logo_8.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="ct_ai_cta_section">
        <div className="container">
          <div className="ct_ai_cta_card row align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="ct_ai_cta_content">
                <h2 className="ct_fs_40 ct_fw_600">From Idea to App Made Simple.</h2>
                <p>Fast, easy, and no coding needed</p>
                <a className="ct_blue_outline_btn ct_white_btn" href="#">
                  Launch Your App Today</a>
              </div>
            </div>
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="ct_ai_cta_image">
                <img alt="Creative AI app preview on mobile" height="315" loading="lazy" src="/img/thumb_img_news.webp" width="471" />
              </div>
            </div>
          </div>
        </div>
      </section>










    </>
  );
}
