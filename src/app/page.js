import Header from "@/components/Header";
import Link from "next/link";
import { HomeInit } from "@/components/PageInitializers";
import HomePricingSection from "@/components/HomePricingSection";
import HomePromptSection from "@/components/HomePromptSection";
import ServiceSection from "@/components/ServiceSection";
import { LOGIN_URL, API_URL } from "@/config";

export const websitePrompts = [
  {
    title: "E-Commerce Stores",
    prompt:
      "Build a modern, responsive e-commerce platform with secure user authentication, product catalog management, advanced search and filtering, shopping cart, wishlist, secure payment gateway integration, order tracking, customer reviews and ratings, discount coupons, inventory management, email notifications, responsive design, SEO optimization, and a comprehensive admin dashboard for managing products, orders, customers, analytics, and sales reports."
  },
  {
    title: "Doctor & Clinic Websites",
    prompt:
      "Create a professional healthcare website for doctors and clinics featuring appointment scheduling, doctor profiles, specialties, online consultation booking, patient testimonials, service listings, health blogs, secure contact forms, Google Maps integration, emergency contact information, responsive design, SEO optimization, and an admin panel to manage appointments, doctors, patients, and website content."
  },
  {
    title: "Restaurant Websites",
    prompt:
      "Design a premium restaurant website with an elegant UI featuring interactive menus, food categories, online table reservations, food ordering, delivery and pickup options, chef profiles, image gallery, customer reviews, promotional offers, events management, Google Maps integration, social media links, responsive design, SEO optimization, and an admin dashboard to manage menu items, reservations, orders, and customer feedback."
  },
  {
    title: "Law Firm Websites",
    prompt:
      "Develop a professional law firm website with practice area pages, attorney profiles, case studies, client testimonials, legal resources and blogs, consultation booking, secure contact forms, live chat support, office locations, responsive design, SEO optimization, and an admin dashboard to manage lawyers, appointments, blog articles, inquiries, and client communications."
  },
  {
    title: "Fitness Apps",
    prompt:
      "Build a comprehensive fitness platform with user authentication, personalized workout plans, exercise library, nutrition tracking, meal plans, progress analytics, BMI calculator, fitness challenges, trainer profiles, subscription plans, wearable device integration, push notifications, responsive design, and an admin dashboard to manage users, trainers, workout content, subscriptions, and analytics."
  },
  {
    title: "Booking Apps",
    prompt:
      "Create a complete booking and reservation platform with secure user authentication, real-time availability calendar, booking management, online payments, automated confirmations, email and SMS notifications, cancellation and refund handling, customer profiles, service provider dashboard, reviews and ratings, responsive design, and an admin panel for managing bookings, customers, services, schedules, and reports."
  },
  {
    title: "Loyalty & Rewards Apps",
    prompt:
      "Develop a customer loyalty and rewards platform with user registration, digital membership cards, points earning and redemption, referral program, exclusive offers, coupons, reward tiers, transaction history, personalized recommendations, push notifications, analytics dashboard, responsive design, and an admin panel to manage customers, campaigns, rewards, offers, and engagement reports."
  },
  {
    title: "Travel Apps",
    prompt:
      "Build a feature-rich travel platform with destination discovery, AI-powered travel recommendations, itinerary planning, hotel and flight booking, vacation packages, interactive maps, weather forecasts, travel guides, budget tracking, trip sharing, customer reviews, secure payments, multilingual support, responsive design, and an admin dashboard to manage destinations, bookings, users, travel content, and analytics."
  }
];
export const metadata = {
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description:
    "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  keywords:
    "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
};

const getPlans = async (billingInterval) => {
  try {
    const res = await fetch(`${API_URL}/api/user/getAllPlans?billing_interval=${billingInterval}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Error fetching plans:", error);
    return null;
  }
};

const getBlogs = async () => {
  try {
    const res = await fetch(`${API_URL}/api/user/getBlogs`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};


export default async function Page() {
  const monthlyPlans = await getPlans("MONTH");
  const yearlyPlans = await getPlans("YEAR");
  const blogs = await getBlogs();
  return (
    <>
      <HomeInit />
      <Header />
      <div className="cti_home_banner">
        <div className="cti_home_banner_cnt">
          <span>
            ✨
            Build apps, websites & AI products instantly</span>
          {/* <h1>Turn Your Ideas Into Real <small>Products</small> In Seconds</h1> */}
          <h1>
            The AI Business Builder{" "}
            <small className="gradient-text ct_fw_800">For Great Ideas</small>
          </h1>
          <p>
            From business websites to custom apps, Creative AI helps you turn
            ideas into real products in minutes.
          </p>
          <HomePromptSection />
        </div>
      </div>
      <section className="cti_brands_logo_slider">
        <div className="logo-slider">
          <div className="logo-slider__track">
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_1.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_2.avif"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_3.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_4.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_5.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_6.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_7.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_8.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_1.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_2.avif"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_3.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_4.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_5.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_6.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_7.png"
              />
            </div>
            <div className="logo-slider__item">
              <img
                alt="Best AI app builder for startups and businesses"
                loading="lazy"
                src="/img/brand_logo_8.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ct_pt_145px" style={{ overflowX: "unset" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <h2>What Can You Build With Creative AI?</h2>
                <p style={{ maxWidth: "600px" }}>
                  Build websites, applications, customer experiences, and online
                  businesses with Creative AI. Choose what you want to create
                  and launch faster without coding.
                </p>
              </div>
              <div style={{ height: "111px" }}></div>
              <div className="ct_sticky_scroll_main">
                <section className="cti_saas_card">
                  <div className="cti_content">
                    <div>
                      <span className="cti_badge">Business Websites</span>
                      <h2 className="cti_heading">I Need A Website</h2>
                      <p className="cti_desc">
                        Build a modern website for your business with AI. Create
                        landing pages, company websites, portfolios, and lead
                        generation websites designed to help you attract
                        customers and grow online.
                      </p>
                      <div className="cti_stats_wrapper">
                        <div className="cti_stat_box">
                          <h3>SEO Ready</h3>
                        </div>
                        <div className="cti_stat_box">
                          <h3>Mobile Friendly</h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={LOGIN_URL}
                        className="cti_build_btn mt-4"
                        style={{ width: "fit-content", textDecoration: "none" }}
                      >
                        Build
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="27"
                            width="27"
                            height="27"
                            rx="13.5"
                            transform="rotate(90 27 0)"
                            fill="white"
                          />
                          <path
                            d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496"
                            stroke="#8396FF"
                            strokeWidth="1.61801"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="ct_sass_card_img">
                    <img
                      src="/img/dummy_img_1_new.webp"
                      className="img-fluid"
                      alt="AI website builder interface showing drag and drop elements"
                    />
                  </div>
                </section>
                <section className="cti_saas_card is_skin">
                  <div className="cti_content">
                    <div>
                      <span className="cti_badge">Mobile Applications </span>
                      <h2 className="cti_heading">I Need An App</h2>
                      <p className="cti_desc">
                        Turn your idea into a fully functional application
                        without writing code. Build business apps, customer
                        dashboards, booking systems, and operational tools in a
                        fraction of the usual time.
                      </p>
                      <div className="cti_stats_wrapper">
                        <div className="cti_stat_box">
                          <h3>No Code Required</h3>
                        </div>
                        <div className="cti_stat_box">
                          <h3>Business Ready</h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={LOGIN_URL}
                        className="cti_build_btn mt-4"
                        style={{ width: "fit-content", textDecoration: "none" }}
                      >
                        Build
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="27"
                            width="27"
                            height="27"
                            rx="13.5"
                            transform="rotate(90 27 0)"
                            fill="white"
                          />
                          <path
                            d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496"
                            stroke="#8396FF"
                            strokeWidth="1.61801"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="ct_sass_card_img">
                    <img
                      src="/img/dummy_img_2_new.webp"
                      alt="AI mobile application development dashboard"
                    />
                  </div>
                </section>
                <section className="cti_saas_card is_sky">
                  <div className="cti_content">
                    <div>
                      <span className="cti_badge">Customer Portal</span>
                      <h2 className="cti_heading">I Need A Customer Portal</h2>
                      <p className="cti_desc">
                        Give customers a dedicated space to manage their
                        accounts, access services, submit requests, and stay
                        connected with your business through a professional
                        online portal.
                      </p>
                      <div className="cti_stats_wrapper">
                        <div className="cti_stat_box">
                          <h3>Customer Friendly</h3>
                        </div>
                        <div className="cti_stat_box">
                          <h3>Built To Scale</h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={LOGIN_URL}
                        className="cti_build_btn mt-4"
                        style={{ width: "fit-content", textDecoration: "none" }}
                      >
                        Build
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="27"
                            width="27"
                            height="27"
                            rx="13.5"
                            transform="rotate(90 27 0)"
                            fill="white"
                          />
                          <path
                            d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496"
                            stroke="#8396FF"
                            strokeWidth="1.61801"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="ct_sass_card_img">
                    <img
                      src="/img/dummy_img_3_new.webp"
                      alt="Client onboarding portal displaying analytics chart"
                    />
                  </div>
                </section>
                <section className="cti_saas_card is_green">
                  <div className="cti_content">
                    <div>
                      <span className="cti_badge">Online Marketplaces</span>
                      <h2 className="cti_heading">I Need A Marketplace</h2>
                      <p className="cti_desc">
                        Create a marketplace platform with user profiles,
                        listings, payments, reviews, and vendor management
                        tools. Everything you need to launch and scale an online
                        marketplace.
                      </p>
                      <div className="cti_stats_wrapper">
                        <div className="cti_stat_box">
                          <h3>Multi-Vendor Ready</h3>
                        </div>
                        <div className="cti_stat_box">
                          <h3>Built For Growth</h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={LOGIN_URL}
                        className="cti_build_btn mt-4"
                        style={{ width: "fit-content", textDecoration: "none" }}
                      >
                        Build
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="27"
                            width="27"
                            height="27"
                            rx="13.5"
                            transform="rotate(90 27 0)"
                            fill="white"
                          />
                          <path
                            d="M8.09941 13.4996H18.8994M14.8494 9.44958L18.8994 13.4996L14.8494 17.5496"
                            stroke="#8396FF"
                            strokeWidth="1.61801"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="ct_sass_card_img">
                    <img
                      src="/img/dummy_img_4_new.webp"
                      alt="E-commerce multi-vendor marketplace product listings screen"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSection websitePrompts={websitePrompts} loginUrl={LOGIN_URL} />
      <section className="ct_smart_product_design_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt text-center text-white">
                <h2
                  className="mx-auto text-white"
                  style={{ maxWidth: "825px" }}
                >
                  The Smarter Way To Build Websites & Apps
                </h2>
              </div>
            </div>
          </div>
          <div className="ct_pt_105">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Describe Your Vision</h3>
                    <p>Tell AI what you want to build.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/1.webp"
                      alt="AI design generation step 1 - describe your vision illustration"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Generate Instantly</h3>
                    <p>Create websites and apps in minutes.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/2.webp"
                      alt="AI design generation step 2 - generate instantly illustration"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Build Without Code</h3>
                    <p>No developers or technical skills needed.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/3.webp"
                      alt="AI design generation step 3 - build without code illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="center-row">
              <div className="orb">
                <svg
                  fill="none"
                  viewBox="0 0 60 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.8691 67.241C18.3569 66.3948 19.7746 65.4428 21.1116 64.3955C25.0587 66.2704 29.4864 67.3213 34.1638 67.3213C42.8086 67.3213 50.6005 63.7314 56.0816 57.9849C56.9896 59.192 57.977 60.338 59.0362 61.4153C52.7471 67.8129 43.9279 71.7908 34.1638 71.7908C27.8635 71.7908 21.9567 70.1347 16.8691 67.241Z"
                    fill="white"
                    fillRule="evenodd"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M4.43359 35.8954C4.43359 25.5375 9.346 16.3798 16.8668 10.832C15.5621 9.86959 14.1789 9.01577 12.7293 8.2832C4.97187 14.7481 0 24.7144 0 35.8954C0 47.0761 4.97165 57.0423 12.7288 63.5071C14.1784 62.7745 15.5616 61.9208 16.8663 60.9584C9.34583 55.4106 4.43359 46.253 4.43359 35.8954Z"
                    fill="white"
                    fillRule="evenodd"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M34.1639 4.4696C42.8086 4.4696 50.6005 8.05958 56.0816 13.806C56.9897 12.5988 57.9771 11.4528 59.0362 10.3755C52.7471 3.97796 43.928 0 34.1639 0C27.8636 0 21.9568 1.65621 16.8691 4.55C18.3569 5.39616 19.7745 6.3482 21.1116 7.39557C25.0587 5.52066 29.4865 4.4696 34.1639 4.4696Z"
                    fill="white"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="connectors-layer">
                <svg
                  className="conn-vline"
                  fill="none"
                  height="465"
                  viewBox="0 0 3 465"
                  width="3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.28906 0V464.942"
                    stroke="url(#paint0_linear_120_2507)"
                    strokeWidth="2.57824"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_120_2507"
                      x1="1.28906"
                      x2="2.28906"
                      y1="232.471"
                      y2="232.471"
                    >
                      <stop stopColor="#5D5CFF"></stop>
                      <stop offset="1" stopColor="#222266"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ball-v-down"></div>
                <div className="ball-v-up"></div>
                <div
                  className="conn-tl"
                  style={{
                    position: "absolute",
                    right: "calc(50% - 1px)",
                    bottom: "calc(50% - 2px)",
                    width: "400px",
                    height: "178px",
                  }}
                >
                  <svg
                    fill="none"
                    height="178"
                    style={{ display: "block", overflow: "visible" }}
                    viewBox="0 0 309 178"
                    width="350"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="grad-tl"
                        x1="308.959"
                        x2="1.28915"
                        y1="107.427"
                        y2="107.427"
                      >
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur
                          result="blur"
                          stdDeviation="3"
                        ></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M308.959 176.18H247.777C242.803 176.18 237.901 174.984 233.485 172.694C230.256 171.02 227.346 168.792 224.889 166.111L212.094 152.153C204.535 143.906 193.893 139.164 182.706 139.057L27.1802 137.569C22.8739 137.528 18.6407 136.451 14.8376 134.431L13.942 133.955C9.35665 131.519 5.69215 127.653 3.50563 122.943C2.04557 119.798 1.28916 116.373 1.28916 112.906V38.6736V0"
                      fill="none"
                      id="path-tl"
                      stroke="url(#grad-tl)"
                      strokeWidth="2.57824"
                    ></path>
                    <circle fill="#C56EFF" filter="url(#glow)" r="5">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#path-tl"></mpath>
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
                <div
                  className="conn-tr"
                  style={{
                    position: "absolute",
                    left: "calc(50% - 1px)",
                    bottom: "calc(50% - 2px)",
                    width: "309px",
                    height: "178px",
                  }}
                >
                  <svg
                    fill="none"
                    height="178"
                    style={{ display: "block", overflow: "visible" }}
                    viewBox="0 0 309 178"
                    width="450"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="grad-tr"
                        x1="0"
                        x2="307.67"
                        y1="107.427"
                        y2="107.427"
                      >
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </linearGradient>
                      <filter id="glow-tr">
                        <feGaussianBlur
                          result="blur"
                          stdDeviation="3"
                        ></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0 176.18H61.1818C66.1564 176.18 71.0582 174.984 75.4744 172.694C78.7031 171.02 81.6125 168.792 84.0701 166.111L96.8645 152.153C104.424 143.906 115.066 139.164 126.253 139.057L281.779 137.569C286.085 137.528 290.318 136.451 294.121 134.431L295.017 133.955C299.602 131.519 303.267 127.653 305.453 122.943C306.913 119.798 307.67 116.373 307.67 112.906V38.6736V0"
                      fill="none"
                      id="path-tr"
                      stroke="url(#grad-tr)"
                      strokeWidth="2.57824"
                    ></path>
                    <circle fill="#C56EFF" filter="url(#glow-tr)" r="5">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#path-tr"></mpath>
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
                <div
                  className="conn-bl"
                  style={{
                    position: "absolute",
                    right: "calc(50% - 1px)",
                    top: "calc(50% - 2px)",
                    width: "400px",
                    height: "178px",
                  }}
                >
                  <svg
                    fill="none"
                    height="178"
                    style={{ display: "block", overflow: "visible" }}
                    viewBox="0 0 309 178"
                    width="350"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="grad-bl"
                        x1="308.959"
                        x2="1.28915"
                        y1="70.0421"
                        y2="70.0421"
                      >
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </linearGradient>
                      <filter id="glow-bl">
                        <feGaussianBlur
                          result="blur"
                          stdDeviation="3"
                        ></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M308.959 1.2891H247.777C242.803 1.2891 237.901 2.48438 233.485 4.77427C230.256 6.4484 227.346 8.67675 224.889 11.3577L212.094 25.3153C204.535 33.5624 193.893 38.3046 182.706 38.4117L27.1802 39.9C22.8739 39.9412 18.6407 41.0174 14.8376 43.0378L13.942 43.5135C9.35665 45.9495 5.69215 49.8161 3.50563 54.5255C2.04557 57.6703 1.28916 61.0957 1.28916 64.5629V138.795V177.469"
                      fill="none"
                      id="path-bl"
                      stroke="url(#grad-bl)"
                      strokeWidth="2.57824"
                    ></path>
                    <circle fill="#C56EFF" filter="url(#glow-bl)" r="5">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#path-bl"></mpath>
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
                <div
                  className="conn-br"
                  style={{
                    position: "absolute",
                    left: "calc(50% - 1px)",
                    top: "calc(50% - 2px)",
                    width: "309px",
                    height: "178px",
                  }}
                >
                  <svg
                    fill="none"
                    height="178"
                    style={{ display: "block", overflow: "visible" }}
                    viewBox="0 0 309 178"
                    width="450"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="grad-br"
                        x1="0"
                        x2="307.67"
                        y1="70.0421"
                        y2="70.0421"
                      >
                        <stop stopColor="#5D5CFF"></stop>
                        <stop offset="1" stopColor="#222266"></stop>
                      </linearGradient>
                      <filter id="glow-br">
                        <feGaussianBlur
                          result="blur"
                          stdDeviation="3"
                        ></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0 1.2891H61.1818C66.1564 1.2891 71.0582 2.48438 75.4744 4.77427C78.7031 6.4484 81.6125 8.67675 84.0701 11.3577L96.8645 25.3153C104.424 33.5624 115.066 38.3046 126.253 38.4117L281.779 39.9C286.085 39.9412 290.318 41.0174 294.121 43.0378L295.017 43.5135C299.602 45.9495 303.267 49.8161 305.453 54.5255C306.913 57.6703 307.67 61.0957 307.67 64.5629V138.795V177.469"
                      fill="none"
                      id="path-br"
                      stroke="url(#grad-br)"
                      strokeWidth="2.57824"
                    ></path>
                    <circle fill="#C56EFF" filter="url(#glow-br)" r="5">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#path-br"></mpath>
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row mt-lg-0 mt-3 gy-lg-0 gy-4">
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Designed For Growth</h3>
                    <p>Grow your online presence faster.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/4.webp"
                      alt="Analytics and growth dashboard visual layout"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Tailor Your Product</h3>
                    <p>Customize every detail your way.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/5.webp"
                      alt="Mobile app customization drag and drop editor view"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card design-box-card">
                  <div className="content">
                    <h3>Go Live Faster</h3>
                    <p>Launch and scale with confidence.</p>
                  </div>
                  <div className="card-preview">
                    <img
                      src="/img/6.webp"
                      alt="Cloud deployment status showing success screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="your_own_bulid_sec ct_py_98 pb-0">
        <div className="container">
          <div className="your_own_bulid_sec_desc ">
            <div className="position-relative left-cont">
              <div className="ct_home_titles_cnt">
                <h2 className="text-xl-end text-center">
                  You Own What You{" "}
                  <small className="ct_clr_6c82fe ">Build</small>{" "}
                </h2>
                <img
                  src="/img/build-shap-svg.webp"
                  className="ct_curve_arrow"
                  alt="Decorative dynamic arrow pointer pointing to ownership benefits"
                />
              </div>
              <div className="d-xl-flex d-none justify-content-end ct_mt_63">
                <button className="ct_get_started_btn ct_down_btn">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33365 6.79167V0.833333C8.33365 0.61232 8.24586 0.400358 8.08958 0.244078C7.9333 0.0877973 7.72133 0 7.50032 0C7.27931 0 7.06735 0.0877973 6.91107 0.244078C6.75478 0.400358 6.66699 0.61232 6.66699 0.833333V6.79167L4.81699 4.47833C4.74994 4.38909 4.66565 4.31422 4.56911 4.25817C4.47258 4.20213 4.36576 4.16605 4.25502 4.15208C4.14427 4.13811 4.03184 4.14653 3.92441 4.17684C3.81698 4.20716 3.71674 4.25874 3.62963 4.32854C3.54252 4.39834 3.47032 4.48493 3.41732 4.58317C3.36431 4.68141 3.33159 4.7893 3.32108 4.90043C3.31058 5.01156 3.3225 5.12366 3.35616 5.23009C3.38981 5.33653 3.4445 5.43511 3.51699 5.52L6.85032 9.68667C6.92841 9.78399 7.02735 9.86255 7.13985 9.91652C7.25235 9.9705 7.37554 9.99852 7.50032 9.99852C7.6251 9.99852 7.74829 9.9705 7.86079 9.91652C7.97329 9.86255 8.07224 9.78399 8.15032 9.68667L11.4837 5.52C11.5561 5.43511 11.6108 5.33653 11.6445 5.23009C11.6781 5.12366 11.6901 5.01156 11.6796 4.90043C11.6691 4.7893 11.6363 4.68141 11.5833 4.58317C11.5303 4.48493 11.4581 4.39834 11.371 4.32854C11.2839 4.25874 11.1837 4.20716 11.0762 4.17684C10.9688 4.14653 10.8564 4.13811 10.7456 4.15208C10.6349 4.16605 10.5281 4.20213 10.4315 4.25817C10.335 4.31422 10.2507 4.38909 10.1837 4.47833L8.33365 6.79167Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.5475 10.7285L3.63167 8.3335H1.66667C1.22464 8.3335 0.800716 8.50909 0.488155 8.82165C0.175595 9.13421 0 9.55814 0 10.0002V13.3335C0 13.7755 0.175595 14.1994 0.488155 14.512C0.800716 14.8246 1.22464 15.0002 1.66667 15.0002H13.3333C13.7754 15.0002 14.1993 14.8246 14.5118 14.512C14.8244 14.1994 15 13.7755 15 13.3335V10.0002C15 9.55814 14.8244 9.13421 14.5118 8.82165C14.1993 8.50909 13.7754 8.3335 13.3333 8.3335H11.3683L9.45167 10.7285C9.21745 11.0212 8.9204 11.2575 8.58249 11.4199C8.24459 11.5823 7.87449 11.6666 7.49958 11.6666C7.12468 11.6666 6.75458 11.5823 6.41668 11.4199C6.07877 11.2575 5.78172 11.0212 5.5475 10.7285ZM11.6667 10.8335C11.4457 10.8335 11.2337 10.9213 11.0774 11.0776C10.9211 11.2339 10.8333 11.4458 10.8333 11.6668C10.8333 11.8878 10.9211 12.0998 11.0774 12.2561C11.2337 12.4124 11.4457 12.5002 11.6667 12.5002H11.675C11.896 12.5002 12.108 12.4124 12.2643 12.2561C12.4205 12.0998 12.5083 11.8878 12.5083 11.6668C12.5083 11.4458 12.4205 11.2339 12.2643 11.0776C12.108 10.9213 11.896 10.8335 11.675 10.8335H11.6667Z"
                      fill="white"
                    />
                  </svg>
                  Download
                </button>
              </div>
            </div>
            <div>
              <img
                src="/img/MacBookPro.webp"
                className="w-100 h-100 object-fit-cover"
                alt="MacBook mockup displaying custom web dashboard"
              />
            </div>
            <div>
              <p className="ct_text_dark ct_fs_20 ct_mb_34 text-xl-start text-center">
                Download the complete source code of your website or app
                anytime. Host it anywhere, customize it freely, and stay in full
                control.{" "}
              </p>
              <div className="">
                <ul className="d-grid gap-3 build-sec-list">
                  <li className="ct_fw_700 text-black ct_fs_18">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="11.9444"
                        stroke="#6B81FE"
                        strokeOpacity="0.62"
                        strokeWidth="1.11111"
                      />
                      <path
                        d="M17.1923 9.22936C17.1234 9.15994 17.0415 9.10483 16.9512 9.06722C16.861 9.02962 16.7642 9.01025 16.6664 9.01025C16.5686 9.01025 16.4718 9.02962 16.3815 9.06722C16.2912 9.10483 16.2093 9.15994 16.1405 9.22936L10.6219 14.7553L8.30341 12.4294C8.23192 12.3603 8.14751 12.306 8.05503 12.2695C7.96254 12.2331 7.86379 12.2152 7.76439 12.2169C7.665 12.2187 7.56692 12.2399 7.47575 12.2796C7.38458 12.3192 7.30211 12.3764 7.23304 12.4479C7.16398 12.5194 7.10967 12.6038 7.07322 12.6963C7.03678 12.7888 7.0189 12.8875 7.02062 12.9869C7.02234 13.0863 7.04362 13.1844 7.08325 13.2755C7.12287 13.3667 7.18006 13.4492 7.25156 13.5183L10.096 16.3627C10.1649 16.4321 10.2468 16.4872 10.3371 16.5248C10.4273 16.5624 10.5241 16.5818 10.6219 16.5818C10.7197 16.5818 10.8165 16.5624 10.9068 16.5248C10.9971 16.4872 11.079 16.4321 11.1479 16.3627L17.1923 10.3183C17.2675 10.2489 17.3275 10.1647 17.3685 10.071C17.4096 9.97729 17.4308 9.87611 17.4308 9.77381C17.4308 9.67151 17.4096 9.57032 17.3685 9.47662C17.3275 9.38291 17.2675 9.29873 17.1923 9.22936Z"
                        fill="#6B81FE"
                      />
                    </svg>
                    Download Anytime
                  </li>
                  <li className="ct_fw_700 text-black ct_fs_18">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="11.9444"
                        stroke="#6B81FE"
                        strokeOpacity="0.62"
                        strokeWidth="1.11111"
                      />
                      <path
                        d="M17.1923 9.22936C17.1234 9.15994 17.0415 9.10483 16.9512 9.06722C16.861 9.02962 16.7642 9.01025 16.6664 9.01025C16.5686 9.01025 16.4718 9.02962 16.3815 9.06722C16.2912 9.10483 16.2093 9.15994 16.1405 9.22936L10.6219 14.7553L8.30341 12.4294C8.23192 12.3603 8.14751 12.306 8.05503 12.2695C7.96254 12.2331 7.86379 12.2152 7.76439 12.2169C7.665 12.2187 7.56692 12.2399 7.47575 12.2796C7.38458 12.3192 7.30211 12.3764 7.23304 12.4479C7.16398 12.5194 7.10967 12.6038 7.07322 12.6963C7.03678 12.7888 7.0189 12.8875 7.02062 12.9869C7.02234 13.0863 7.04362 13.1844 7.08325 13.2755C7.12287 13.3667 7.18006 13.4492 7.25156 13.5183L10.096 16.3627C10.1649 16.4321 10.2468 16.4872 10.3371 16.5248C10.4273 16.5624 10.5241 16.5818 10.6219 16.5818C10.7197 16.5818 10.8165 16.5624 10.9068 16.5248C10.9971 16.4872 11.079 16.4321 11.1479 16.3627L17.1923 10.3183C17.2675 10.2489 17.3275 10.1647 17.3685 10.071C17.4096 9.97729 17.4308 9.87611 17.4308 9.77381C17.4308 9.67151 17.4096 9.57032 17.3685 9.47662C17.3275 9.38291 17.2675 9.29873 17.1923 9.22936Z"
                        fill="#6B81FE"
                      />
                    </svg>
                    Full Ownership
                  </li>
                  <li className="ct_fw_700 text-black ct_fs_18">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="11.9444"
                        stroke="#6B81FE"
                        strokeOpacity="0.62"
                        strokeWidth="1.11111"
                      />
                      <path
                        d="M17.1923 9.22936C17.1234 9.15994 17.0415 9.10483 16.9512 9.06722C16.861 9.02962 16.7642 9.01025 16.6664 9.01025C16.5686 9.01025 16.4718 9.02962 16.3815 9.06722C16.2912 9.10483 16.2093 9.15994 16.1405 9.22936L10.6219 14.7553L8.30341 12.4294C8.23192 12.3603 8.14751 12.306 8.05503 12.2695C7.96254 12.2331 7.86379 12.2152 7.76439 12.2169C7.665 12.2187 7.56692 12.2399 7.47575 12.2796C7.38458 12.3192 7.30211 12.3764 7.23304 12.4479C7.16398 12.5194 7.10967 12.6038 7.07322 12.6963C7.03678 12.7888 7.0189 12.8875 7.02062 12.9869C7.02234 13.0863 7.04362 13.1844 7.08325 13.2755C7.12287 13.3667 7.18006 13.4492 7.25156 13.5183L10.096 16.3627C10.1649 16.4321 10.2468 16.4872 10.3371 16.5248C10.4273 16.5624 10.5241 16.5818 10.6219 16.5818C10.7197 16.5818 10.8165 16.5624 10.9068 16.5248C10.9971 16.4872 11.079 16.4321 11.1479 16.3627L17.1923 10.3183C17.2675 10.2489 17.3275 10.1647 17.3685 10.071C17.4096 9.97729 17.4308 9.87611 17.4308 9.77381C17.4308 9.67151 17.4096 9.57032 17.3685 9.47662C17.3275 9.38291 17.2675 9.29873 17.1923 9.22936Z"
                        fill="#6B81FE"
                      />
                    </svg>
                    No Vendor Lock-In
                  </li>
                  <li className="ct_fw_700 text-black ct_fs_18">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="11.9444"
                        stroke="#6B81FE"
                        strokeOpacity="0.62"
                        strokeWidth="1.11111"
                      />
                      <path
                        d="M17.1923 9.22936C17.1234 9.15994 17.0415 9.10483 16.9512 9.06722C16.861 9.02962 16.7642 9.01025 16.6664 9.01025C16.5686 9.01025 16.4718 9.02962 16.3815 9.06722C16.2912 9.10483 16.2093 9.15994 16.1405 9.22936L10.6219 14.7553L8.30341 12.4294C8.23192 12.3603 8.14751 12.306 8.05503 12.2695C7.96254 12.2331 7.86379 12.2152 7.76439 12.2169C7.665 12.2187 7.56692 12.2399 7.47575 12.2796C7.38458 12.3192 7.30211 12.3764 7.23304 12.4479C7.16398 12.5194 7.10967 12.6038 7.07322 12.6963C7.03678 12.7888 7.0189 12.8875 7.02062 12.9869C7.02234 13.0863 7.04362 13.1844 7.08325 13.2755C7.12287 13.3667 7.18006 13.4492 7.25156 13.5183L10.096 16.3627C10.1649 16.4321 10.2468 16.4872 10.3371 16.5248C10.4273 16.5624 10.5241 16.5818 10.6219 16.5818C10.7197 16.5818 10.8165 16.5624 10.9068 16.5248C10.9971 16.4872 11.079 16.4321 11.1479 16.3627L17.1923 10.3183C17.2675 10.2489 17.3275 10.1647 17.3685 10.071C17.4096 9.97729 17.4308 9.87611 17.4308 9.77381C17.4308 9.67151 17.4096 9.57032 17.3685 9.47662C17.3275 9.38291 17.2675 9.29873 17.1923 9.22936Z"
                        fill="#6B81FE"
                      />
                    </svg>
                    Deploy Anywhere
                  </li>
                </ul>
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
                  Watch Creative AI In Action
                </h2>
                <p
                  className="text-center mx-auto"
                  style={{ maxWidth: "545px" }}
                >
                  From idea to launch, see how Creative AI turns your vision
                  into a fully functional website or app.
                </p>
              </div>
              <div className="ct_video_banner">
                <img alt="Video Thumbnail" src="/img/video_thumb_img.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cti_testimonal_new_section ct_pb_150 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Testimonial</span>
                <h2 className="text-center mx-auto">
                  Loved By Founders And Businesses
                </h2>
                <p className="text-center mx-auto">
                  Hear from customers who turned their ideas into real products
                  with Creative AI.
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
              with their professionalism and technical expertise. Our new site
              is fast, modern, and user-friendly. We've already seen an increase
              in traffic and leads!
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
              entire process seamless from prototyping to deployment. We were
              able to integrate secure payment options, compliance-ready
              features, and track progress at every stage. What really stood out
              was how intuitive the platform was, saving us both time and cost
              while ensuring enterprise-level quality.
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
              Creative AI makes app building so simple! The platform is super
              easy to use, even for someone with no coding background. I could
              design, make payments, and track progress all in one place without
              any hassle. The transparency and smooth workflow really set it
              apart from other tools I’ve tried.
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
              We initially partnered with Builder.ai to create our
              sustainability solution platform but were left midway through the
              project. Creative AI stepped in at a critical moment and exceeded
              our expectations. Their team not only salvaged the project but
              also brought in fresh ideas and an AI-powered approach that
              streamlined the entire development process. The level of
              professionalism, transparency, and continuous support we received
              was outstanding. Thanks to Creative AI, we were able to launch a
              robust, scalable platform on time, and with greater confidence in
              our technology partner. Their dedication to client success truly
              sets them apart.
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
              great. You always get a fast responds. I definitely recommend
              them.
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
              They did an amazing work on a very large and challenging project.
              We do appreciate the great effort and creativity their team put in
              creating the base for our social marketplace. CTIS is an amazing
              and very professional fellow. Keep up the great work folks!
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
              I would recommend this company for any upcoming projects and I
              will use them in the future. They were very much in contact during
              the whole process and kept me up to date with the progress of
              work. This was my first time using this platform and I'd say I'm
              pleased with the work in general.
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
                  Simple Pricing. Powerful Results.
                </h2>
                <p className="mx-auto text-white ct_opacity_80">
                  Simple, transparent plans built for modern creators, startups,
                  and businesses.
                </p>
              </div>
            </div>
          </div>
          <HomePricingSection
            monthlyPlans={monthlyPlans}
            yearlyPlans={yearlyPlans}
          />
        </div>
      </section>
      <section className="cti_blog_new_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span>Blogs</span>
                <h2>Insights &amp; Ideas On AI-Powered Building </h2>
                <p>
                  Explore the latest articles, guides, and insights from the
                  world of AI and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="row ct_pt_76">
            {blogs.length > 0 ? (
              blogs?.slice(0, 3).map((blog) => {
                const imageUrl = blog.banner_image
                  ? (blog.banner_image.startsWith("http") ? blog.banner_image : `${API_URL}${blog.banner_image}`)
                  : "";

                return (
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={blog.id}>
                    <a href={`/blog-details?slug=${blog.slug}`} className="cti_blog_card d-block">
                      <div className="cti_blog_img">
                        {imageUrl && <img

                          className="img-fluid"

                          alt={blog.title || "Blog banner"} src={imageUrl} />}
                      </div>
                      <div className="cti_blog_content">
                        <h3 className="text-truncate"> {blog.title}</h3>
                        <p className="ct_minimise_cnt">
                          {blog.description}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <p className="ct_fs_18 ct_fw_600 text-muted">No blogs found.</p>
              </div>
            )}


          </div>
        </div>
      </section>
      <section className="cti_home_faq_bg_new ct_pt_150 ct_pb_150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2 className="mx-auto text-center">
                  Common Questions, Clear Answers
                </h2>
              </div>
              <div className="accordion cti_faq_accordion" id="ctiFaqAccordion">
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      aria-expanded="true"
                      className="accordion-button cti_faq_btn"
                      data-bs-target="#ctiFaqOne"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      What is Creative AI?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqOne"
                  >
                    <div className="accordion-body cti_faq_body">
                      Creative AI is an AI website and app builder that helps
                      you create websites, web apps, customer portals,
                      marketplaces, and other digital products using simple
                      prompts. No coding is required.
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqTwo"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      Do I need coding skills to use Creative AI?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqTwo"
                  >
                    <div className="accordion-body cti_faq_body">
                      No. You can describe what you want to build in plain
                      English, and Creative AI will generate the website or
                      application for you.
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqThree"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      What can I build with Creative AI?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqThree"
                  >
                    <div className="accordion-body cti_faq_body">
                      You can build business websites, online stores, web
                      applications, customer portals, booking systems,
                      marketplaces, dashboards, and many other digital products.
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqFour"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      Can I download the source code?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqFour"
                  >
                    <div className="accordion-body cti_faq_body">
                      Yes. You can download your project's source code, giving
                      you full ownership and the freedom to host, customize, and
                      scale it however you want.
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqFive"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      Is Creative AI good for small businesses?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqFive"
                  >
                    <div className="accordion-body cti_faq_body">
                      Yes. Creative AI is built for small businesses, startups,
                      agencies, consultants, and entrepreneurs who want to
                      launch online faster without hiring a large development
                      team.{" "}
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqSix"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      How long does it take to build a website or app?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqSix"
                  >
                    <div className="accordion-body cti_faq_body">
                      Most projects can be generated within minutes. The exact
                      time depends on the complexity of the website or
                      application you want to create.
                    </div>
                  </div>
                </div>
                <div className="accordion-item cti_faq_item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed cti_faq_btn"
                      data-bs-target="#ctiFaqSeven"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      Why choose Creative AI over a traditional website builder?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    data-bs-parent="#ctiFaqAccordion"
                    id="ctiFaqSeven"
                  >
                    <div className="accordion-body cti_faq_body">
                      Unlike many website builders, Creative AI helps you create
                      both websites and applications, offers source code access,
                      and allows you to build using simple prompts instead of
                      complex tools.
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
                <h2 style={{ maxWidth: "439px" }}>
                  Have An Idea? Let's Build It.
                </h2>
                <p style={{ maxWidth: "533px" }}>
                  Whether you're building a website, app, marketplace, or
                  startup MVP, we're here to help you get started.
                </p>
              </div>
              <div className="cti_trusted_wrap">
                <div className="cti_user_images">
                  <img
                    alt="Trusted client Paul profile avatar"
                    src="/img/client_3.webp"
                  />
                  <img
                    alt="Trusted client Stefan profile avatar"
                    src="/img/client_4.webp"
                  />
                  <img
                    alt="Trusted client Justine profile avatar"
                    src="/img/client_2.webp"
                  />
                  <img
                    alt="Trusted client James profile avatar"
                    src="/img/james.webp"
                  />
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
                  <input
                    className="input"
                    id="ct_full_name"
                    type="text"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="ct_full_name">
                    Full Name <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="ct_input_group ct_mb_43">
                  <input
                    className="input"
                    id="ct_email"
                    type="text  "
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="ct_email">
                    Email <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="cti_build_section">
                  <h5>What Would You Like To Build?</h5>
                  <div className="cti_option_wrap">
                    <input
                      defaultChecked={true}
                      className="d-none"
                      id="ctiWebsite"
                      name="build"
                      type="radio"
                    />
                    <label className="cti_option_btn" htmlFor="ctiWebsite">
                      <span></span>
                      Website
                    </label>
                    <input
                      className="d-none"
                      id="ctiMobile"
                      name="build"
                      type="radio"
                    />
                    <label className="cti_option_btn" htmlFor="ctiMobile">
                      <span></span>
                      Mobile App
                    </label>
                    <input
                      className="d-none"
                      id="ctiSaas"
                      name="build"
                      type="radio"
                    />
                    <label className="cti_option_btn" htmlFor="ctiSaas">
                      <span></span>
                      SaaS Platform
                    </label>
                    <input
                      className="d-none"
                      id="ctiEcommerce"
                      name="build"
                      type="radio"
                    />
                    <label className="cti_option_btn" htmlFor="ctiEcommerce">
                      <span></span>
                      E-Commerce
                    </label>
                    <input
                      className="d-none"
                      id="ctiWebapp"
                      name="build"
                      type="radio"
                    />
                    <label className="cti_option_btn" htmlFor="ctiWebapp">
                      <span></span>
                      Web App
                    </label>
                  </div>
                </div>
                <div className="ct_input_group ct_mb_43">
                  <textarea
                    className="input text-dark"
                    id="ct_message"
                    required=""
                    rows="3"
                  ></textarea>
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
    </>
  );
}
