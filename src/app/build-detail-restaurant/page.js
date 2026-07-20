import Header from "@/components/Header";
import Link from "next/link";
import { HomeInit } from "@/components/PageInitializers";
import HomePricingSection from "@/components/HomePricingSection";
import HomePromptSection from "@/components/HomePromptSection";
import ServiceSection from "@/components/ServiceSection";
import { LOGIN_URL, API_URL } from "@/config";
import FAQAccordion from "@/components/FAQAccordion";
import VideoPlayer from "@/components/VideoPlayer";





export const dynamic = "force-dynamic";

const getPlans = async (billingInterval) => {
  try {
    const res = await fetch(
      `${API_URL}/api/user/getAllPlans?billing_interval=${billingInterval}`,
      {
        cache: "no-store",
      },
    );
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
      cache: "no-store",
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

      <div className="cti_build_banner">
        <div className="">
          <section className="hero_section">
            <div className="row">
              <div className="col-xl-7">
                <div className="hero_content">
                  <h1 className="ct_fw_400 ct_fs_66 text-white mx-auto mb-3">
                AI Website Builder for Restaurants with Online Ordering
                  </h1>

                  <p
                    className="ct_fw_200 ct_fs_18 ct_text_bebfc2 "
                    style={{ maxWidth: "560px" }}
                  >
                    Build a professional law firm website with AI and manage
                    clients, legal cases, appointments, documents, and
                    consultations from one platform. No coding required.
                  </p>

                  <button className="start_build_btn ct_mt_34">
                    Start Building{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>

                  <div className="hero_features">
                    <span>No Coding</span>
                    <div className="divider"></div>
                    <span>AI Powered</span>
                    <div className="divider"></div>
                    <span>Mobile Ready</span>
                    <div className="divider"></div>
                    <span>SEO Optimized</span>
                    <div className="divider"></div>
                    <span>Source Code</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <div className="d-flex justify-content-end">
                  <div className="step-image mt-lg-0 mt-3">
                    <img
                      src="/img/restaurant-banner.webp"
                      alt="Steps"
                      className="accordian-right-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="everything_one-plat_sec">
        <div className="container">
          <div className="ct_home_titles_cnt ct_mb_34">
            <h2 style={{ maxWidth: "927px" }}>
              Everything Your Law Firm Needs in One Platform
            </h2>
            <p style={{ maxWidth: "600px" }}>
              Build a professional law firm website, manage cases, clients, and
              appointments from one AI-powered platform.
            </p>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1029 5.04688C9.4506 5.04688 8.21311 6.26821 7.38038 7.63389C6.54967 8.99654 6.05609 10.6135 6.05609 12.1125C6.05609 14.7186 7.85378 16.6193 10.0936 17.0644V28.2624H12.1123V17.0644C14.3521 16.6193 16.1498 14.7186 16.1498 12.1125C16.1498 10.6146 15.6572 8.99754 14.8245 7.63288C13.9938 6.27023 12.7553 5.04688 11.1029 5.04688ZM18.1685 5.04688V12.1125C18.1685 13.9818 19.4615 15.5423 21.1966 15.9925V28.2624H23.2154V15.9925C24.9505 15.5423 26.2435 13.9818 26.2435 12.1125V5.04688H24.2247V12.1125C24.2247 13.2399 23.3335 14.1312 22.206 14.1312C21.0785 14.1312 20.1873 13.2399 20.1873 12.1125V5.04688H18.1685ZM21.1966 5.04688V12.1125C21.1966 12.6676 21.6508 13.1218 22.206 13.1218C22.7611 13.1218 23.2154 12.6676 23.2154 12.1125V5.04688H21.1966ZM11.1029 7.06561C11.6823 7.06561 12.4595 7.63692 13.0904 8.67455C13.7212 9.71016 14.131 11.0991 14.131 12.1125C14.131 14.1352 12.8693 15.1406 11.1029 15.1406C9.33654 15.1406 8.07483 14.1352 8.07483 12.1125C8.07483 11.0991 8.48463 9.71117 9.11549 8.67455C9.74634 7.63792 10.5236 7.06561 11.1029 7.06561Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className="">Restaurant Website</h5>
                  <p>
                  Create a professional restaurant website that showcases your menu, builds customer trust, and helps attract more online visitors.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 5H7L10 22H26"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 18H25.59C25.7056 18.0001 25.8177 17.9601 25.9072 17.8868C25.9966 17.8135 26.0579 17.7115 26.0806 17.5981L27.8806 8.59813C27.8951 8.52555 27.8934 8.45066 27.8755 8.37886C27.8575 8.30705 27.8239 8.24012 27.7769 8.1829C27.73 8.12567 27.6709 8.07959 27.604 8.04796C27.5371 8.01633 27.464 7.99995 27.39 8H8"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="">Online Ordering Website</h5>
                  <p>
                   Accept direct online food orders through your website while reducing dependency on third-party delivery platforms and extra commissions.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 4H4V12H6.66667V6.66667H12V4ZM4 28V20H6.66667V25.3333H12V28H4ZM20 4V6.66667H25.3333V12H28V4H20ZM25.3333 20H28V28H20V25.3333H25.3333V20ZM9.33333 9.33333H14.6667V14.6667H9.33333V9.33333ZM9.33333 17.3333H14.6667V22.6667H9.33333V17.3333ZM22.6667 9.33333H17.3333V14.6667H22.6667V9.33333ZM17.3333 17.3333H22.6667V22.6667H17.3333V17.3333Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className="">QR Menu</h5>
                  <p>
                    Let customers instantly access your digital restaurant menu by scanning a QR code from any smartphone or tablet.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3334 18.6667C11.7754 18.6667 12.1993 18.4911 12.5119 18.1786C12.8244 17.866 13 17.4421 13 17C13 16.558 12.8244 16.1341 12.5119 15.8215C12.1993 15.509 11.7754 15.3334 11.3334 15.3334C10.8913 15.3334 10.4674 15.509 10.1548 15.8215C9.84228 16.1341 9.66669 16.558 9.66669 17C9.66669 17.4421 9.84228 17.866 10.1548 18.1786C10.4674 18.4911 10.8913 18.6667 11.3334 18.6667ZM11.3334 23.3334C11.7754 23.3334 12.1993 23.1578 12.5119 22.8452C12.8244 22.5327 13 22.1087 13 21.6667C13 21.2247 12.8244 20.8008 12.5119 20.4882C12.1993 20.1756 11.7754 20 11.3334 20C10.8913 20 10.4674 20.1756 10.1548 20.4882C9.84228 20.8008 9.66669 21.2247 9.66669 21.6667C9.66669 22.1087 9.84228 22.5327 10.1548 22.8452C10.4674 23.1578 10.8913 23.3334 11.3334 23.3334ZM17.6667 17C17.6667 17.4421 17.4911 17.866 17.1785 18.1786C16.866 18.4911 16.442 18.6667 16 18.6667C15.558 18.6667 15.1341 18.4911 14.8215 18.1786C14.5089 17.866 14.3334 17.4421 14.3334 17C14.3334 16.558 14.5089 16.1341 14.8215 15.8215C15.1341 15.509 15.558 15.3334 16 15.3334C16.442 15.3334 16.866 15.509 17.1785 15.8215C17.4911 16.1341 17.6667 16.558 17.6667 17ZM16 23.3334C16.442 23.3334 16.866 23.1578 17.1785 22.8452C17.4911 22.5327 17.6667 22.1087 17.6667 21.6667C17.6667 21.2247 17.4911 20.8008 17.1785 20.4882C16.866 20.1756 16.442 20 16 20C15.558 20 15.1341 20.1756 14.8215 20.4882C14.5089 20.8008 14.3334 21.2247 14.3334 21.6667C14.3334 22.1087 14.5089 22.5327 14.8215 22.8452C15.1341 23.1578 15.558 23.3334 16 23.3334ZM22.3334 17C22.3334 17.4421 22.1578 17.866 21.8452 18.1786C21.5326 18.4911 21.1087 18.6667 20.6667 18.6667C20.2247 18.6667 19.8007 18.4911 19.4882 18.1786C19.1756 17.866 19 17.4421 19 17C19 16.558 19.1756 16.1341 19.4882 15.8215C19.8007 15.509 20.2247 15.3334 20.6667 15.3334C21.1087 15.3334 21.5326 15.509 21.8452 15.8215C22.1578 16.1341 22.3334 16.558 22.3334 17Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6667 4.33337C10.9319 4.33337 11.1863 4.43873 11.3738 4.62627C11.5613 4.8138 11.6667 5.06816 11.6667 5.33337V6.33337H20.3334V5.33337C20.3334 5.06816 20.4387 4.8138 20.6262 4.62627C20.8138 4.43873 21.0681 4.33337 21.3334 4.33337C21.5986 4.33337 21.8529 4.43873 22.0405 4.62627C22.228 4.8138 22.3334 5.06816 22.3334 5.33337V6.34404C22.536 6.34937 22.7249 6.35915 22.9 6.37337C23.4067 6.41337 23.8814 6.50404 24.3307 6.73337C25.0208 7.08493 25.5818 7.64597 25.9334 8.33604C26.1627 8.78537 26.2534 9.26004 26.2934 9.76671C26.3334 10.2534 26.3334 10.8467 26.3334 11.56V21.7734C26.3334 22.4867 26.3334 23.08 26.2934 23.5667C26.2534 24.0734 26.1627 24.548 25.9334 24.9974C25.5821 25.6872 25.0216 26.2483 24.332 26.6C23.8814 26.8294 23.4067 26.92 22.9 26.96C22.4134 27 21.82 27 21.108 27H10.8934C10.18 27 9.58669 27 9.10002 26.96C8.59335 26.92 8.11869 26.8294 7.66935 26.6C6.97969 26.2492 6.4187 25.6891 6.06669 25C5.83735 24.5494 5.74669 24.0747 5.70669 23.568C5.66669 23.0814 5.66669 22.488 5.66669 21.776V11.56C5.66669 10.8467 5.66669 10.2534 5.70669 9.76671C5.74669 9.26004 5.83735 8.78537 6.06669 8.33604C6.41825 7.64597 6.97928 7.08493 7.66935 6.73337C8.11869 6.50404 8.59335 6.41337 9.10002 6.37337C9.27513 6.35915 9.46402 6.34937 9.66669 6.34404V5.33337C9.66669 5.20205 9.69255 5.07202 9.74281 4.95069C9.79306 4.82936 9.86672 4.71913 9.95958 4.62627C10.0524 4.53341 10.1627 4.45975 10.284 4.40949C10.4053 4.35924 10.5354 4.33337 10.6667 4.33337ZM9.66669 8.66671V8.34404C9.53185 8.34819 9.39714 8.35575 9.26269 8.36671C8.88002 8.39737 8.69735 8.45337 8.57735 8.51471C8.26324 8.67458 8.0079 8.92993 7.84802 9.24404C7.78669 9.36404 7.73069 9.54671 7.70002 9.92937C7.66802 10.324 7.66669 10.836 7.66669 11.6V12.3334H24.3334V11.6C24.3334 10.8374 24.3334 10.324 24.3 9.92937C24.2694 9.54671 24.2134 9.36404 24.152 9.24404C23.9921 8.92993 23.7368 8.67458 23.4227 8.51471C23.3027 8.45337 23.12 8.39737 22.736 8.36671C22.602 8.35577 22.4677 8.34821 22.3334 8.34404V8.66671C22.3334 8.93192 22.228 9.18628 22.0405 9.37381C21.8529 9.56135 21.5986 9.66671 21.3334 9.66671C21.0681 9.66671 20.8138 9.56135 20.6262 9.37381C20.4387 9.18628 20.3334 8.93192 20.3334 8.66671V8.33337H11.6667V8.66671C11.6667 8.93192 11.5613 9.18628 11.3738 9.37381C11.1863 9.56135 10.9319 9.66671 10.6667 9.66671C10.4015 9.66671 10.1471 9.56135 9.95958 9.37381C9.77204 9.18628 9.66669 8.93192 9.66669 8.66671ZM24.3334 13.6667H7.66669V21.7334C7.66669 22.496 7.66669 23.0094 7.70002 23.4027C7.73069 23.7867 7.78669 23.9694 7.84802 24.0894C8.00802 24.404 8.26269 24.6587 8.57735 24.8187C8.69735 24.88 8.88002 24.936 9.26269 24.9667C9.65735 24.9987 10.1694 25 10.9334 25H21.0667C21.8294 25 22.3427 25 22.736 24.9667C23.12 24.936 23.3027 24.88 23.4227 24.8187C23.7368 24.6588 23.9921 24.4035 24.152 24.0894C24.2134 23.9694 24.2694 23.7867 24.3 23.4027C24.332 23.0094 24.3334 22.496 24.3334 21.7334V13.6667Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 10.3334C13 10.0682 13.1054 9.8138 13.2929 9.62627C13.4804 9.43873 13.7348 9.33337 14 9.33337H18C18.2652 9.33337 18.5196 9.43873 18.7071 9.62627C18.8946 9.8138 19 10.0682 19 10.3334C19 10.5986 18.8946 10.8529 18.7071 11.0405C18.5196 11.228 18.2652 11.3334 18 11.3334H14C13.7348 11.3334 13.4804 11.228 13.2929 11.0405C13.1054 10.8529 13 10.5986 13 10.3334Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className=""> Reservations</h5>
                  <p>
                  Allow customers to book tables online with a simple reservation system that helps manage availability and reduce missed bookings.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 17.3333C19.6819 17.3333 22.6666 14.3486 22.6666 10.6667C22.6666 6.98477 19.6819 4 16 4C12.3181 4 9.33331 6.98477 9.33331 10.6667C9.33331 14.3486 12.3181 17.3333 16 17.3333Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.6666 28C26.6666 25.1711 25.5428 22.458 23.5425 20.4576C21.5421 18.4572 18.829 17.3334 16 17.3334C13.171 17.3334 10.4579 18.4572 8.45751 20.4576C6.45712 22.458 5.33331 25.1711 5.33331 28"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className=""> Customer Accounts</h5>
                  <p>
                    Give customers a secure account to manage orders, reservations, saved addresses, and enjoy a more personalized dining experience.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28V16M16 9.33333H10.6C6.90668 9.33333 6.68002 4 10.6 4C14.8 4 16 9.33333 16 9.33333ZM16 9.33333H21.4C25.2614 9.33333 25.2614 4 21.4 4C17.2 4 16 9.33333 16 9.33333Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.6667 16V25.3334C26.6667 26.0406 26.3857 26.7189 25.8856 27.219C25.3855 27.7191 24.7072 28 24 28H8C7.29276 28 6.61448 27.7191 6.11438 27.219C5.61428 26.7189 5.33333 26.0406 5.33333 25.3334V16M28 16V12C28 11.2928 27.719 10.6145 27.219 10.1144C26.7189 9.61433 26.0406 9.33337 25.3333 9.33337H6.66667C5.95942 9.33337 5.28115 9.61433 4.78105 10.1144C4.28095 10.6145 4 11.2928 4 12V16H28Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="">Loyalty Program</h5>
                  <p>
                   Encourage repeat business by rewarding loyal customers with points, exclusive offers, discounts, and special member-only rewards.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_211_645)">
                        <path
                          d="M22.2222 3.55566H9.77778C9.30628 3.55566 8.8541 3.74297 8.5207 4.07636C8.1873 4.40976 8 4.86195 8 5.33344V26.6668C8 27.1383 8.1873 27.5905 8.5207 27.9239C8.8541 28.2573 9.30628 28.4446 9.77778 28.4446H22.2222C22.6937 28.4446 23.1459 28.2573 23.4793 27.9239C23.8127 27.5905 24 27.1383 24 26.6668V5.33344C24 4.86195 23.8127 4.40976 23.4793 4.07636C23.1459 3.74297 22.6937 3.55566 22.2222 3.55566ZM9.77778 5.33344H22.2222V21.3334H9.77778V5.33344ZM9.77778 26.6668V23.1112H22.2222V26.6668H9.77778Z"
                          fill="white"
                        />
                        <path
                          d="M15.1111 24H16.8889V25.7778H15.1111V24Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_645">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h5 className=""> Mobile App</h5>
                  <p>
                    Deliver a fast and convenient mobile ordering experience that keeps customers connected with your restaurant anytime, anywhere.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 30.6666C8.59069 29.0199 2.66669 22.0293 2.66669 14.6666V6.66659L16 1.33325L29.3334 6.66659V14.6666C29.3334 22.0319 23.4094 29.0199 16 30.6666ZM5.33335 7.99992V14.6666C5.40955 17.7494 6.49384 20.7224 8.42026 23.1304C10.3467 25.5384 13.0091 27.2489 16 27.9999C18.9909 27.2489 21.6534 25.5384 23.5798 23.1304C25.5062 20.7224 26.5905 17.7494 26.6667 14.6666V7.99992L16 3.99992L5.33335 7.99992Z"
                        fill="white"
                      />
                      <path
                        d="M16 14.6667C17.841 14.6667 19.3334 13.1743 19.3334 11.3333C19.3334 9.49238 17.841 8 16 8C14.1591 8 12.6667 9.49238 12.6667 11.3333C12.6667 13.1743 14.1591 14.6667 16 14.6667Z"
                        fill="white"
                      />
                      <path
                        d="M9.33331 20C9.99028 21.1978 10.9538 22.1994 12.1253 22.9023C13.2967 23.6051 14.6339 23.984 16 24C17.366 23.984 18.7032 23.6051 19.8747 22.9023C21.0461 22.1994 22.0097 21.1978 22.6666 20C22.6333 17.472 18.2106 16 16 16C13.7773 16 9.36665 17.472 9.33331 20Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className=""> Admin Dashboard</h5>
                  <p>
                    Manage menus, online orders, reservations, customer information, and daily restaurant operations from one centralized dashboard.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="everything_one-plat_desc">
                <div className="">
                  <div className="everything_one-plat_icon_box">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33337 13.3333H14.6667V28H9.33337V13.3333ZM20 8H25.3334V28H20V8Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                      <path
                        d="M28 28H4V4"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>
                  </div>
                  <h5 className=""> Analytics & Reports</h5>
                  <p>
                   Monitor sales, customer behavior, popular menu items, and business performance with clear reports that support smarter decisions.
                  </p>
                </div>
                <div>
                  <a href="#" className="build_now_btn">
                    Build Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="complete_sol_project">
        <div className="container">
          <h4 className="ct_fs_74 ct_fs_400 text-center ct_mb_44">
            Complete Solutions for Your Restaurant
          </h4>

          <div className="row  ">
            <div className="col-lg-6 mb-4">
              <div className="complete_sol_box_1">
                <h5 className="ct_fs_30 ct_fw_400 ct_delight_regular text-white mb-4">
                  For Your Customers
                </h5>
                <div className="row">
                  <div className="col-md-8">
                    <ul className="cust_sol_list ps-0 text-white">
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Easy
                        Online Ordering
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Table
                        Reservations{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Digital
                        Menu & QR Menu{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Secure
                        Payments{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Order
                        Tracking{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Account
                        & Order History{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Loyalty
                        & Rewards{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="comp_sol_icon_box_sec">
                      <div className="comp_sol_icon_box">
                        <svg
                          width="31"
                          height="38"
                          viewBox="0 0 31 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.2974 0.152053C14.5315 0.0517303 14.7834 0 15.0381 0C15.2927 0 15.5446 0.0517303 15.7787 0.152053L27.7978 5.30447C28.4743 5.59443 29.0507 6.07655 29.4557 6.69104C29.8607 7.30554 30.0764 8.02539 30.0761 8.76134V21.6565C30.0759 23.9759 29.4625 26.2541 28.2982 28.2602C27.1339 30.2663 25.4601 31.929 23.4462 33.0797L15.9704 37.3506C15.6864 37.5128 15.3651 37.5981 15.0381 37.5981C14.711 37.5981 14.3897 37.5128 14.1057 37.3506L6.6299 33.0797C4.61549 31.9286 2.94125 30.2654 1.77692 28.2586C0.612587 26.2518 -0.000435156 23.9728 2.31758e-07 21.6527V8.76134C8.14761e-05 8.02571 0.215977 7.30627 0.620941 6.69214C1.0259 6.07801 1.60214 5.59618 2.27826 5.30634L14.2974 0.152053ZM22.0063 16.3687C22.3487 16.0142 22.5382 15.5394 22.5339 15.0465C22.5296 14.5536 22.3319 14.0822 21.9834 13.7336C21.6349 13.3851 21.1634 13.1874 20.6706 13.1831C20.1777 13.1789 19.7029 13.3683 19.3483 13.7107L13.1583 19.9008L10.7278 17.4703C10.3732 17.1278 9.89841 16.9384 9.40555 16.9427C8.91268 16.9469 8.44121 17.1446 8.09269 17.4931C7.74417 17.8417 7.54648 18.3131 7.5422 18.806C7.53791 19.2989 7.72738 19.7737 8.06979 20.1282L11.8293 23.8877C12.1818 24.2401 12.6599 24.4381 13.1583 24.4381C13.6567 24.4381 14.1348 24.2401 14.4873 23.8877L22.0063 16.3687Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_322_814)">
                            <path
                              d="M0 0V18.1771H18.1771V0H0ZM21.8229 0V18.1771H40V0H21.8229ZM3.6198 3.6198H14.5573V14.5573H3.6198V3.6198ZM25.4427 3.6198H36.3802V14.5573H25.4427V3.6198ZM7.26563 7.3177V10.9375H10.9375V7.3177H7.26563ZM29.0625 7.3177V10.9375H32.6823V7.3177H29.0625ZM0 21.8229V40H18.1771V21.8229H0ZM21.8229 21.8229V40H25.4428V29.1146H29.0626V32.7344H40V21.8229H36.3802V25.4428H32.6823V21.8229H21.8229ZM3.6198 25.4427H14.5573V36.3802H3.6198V25.4427ZM7.26563 29.0625V32.7344H10.9375V29.0625H7.26563ZM29.0625 36.3802V40H32.6823V36.3802H29.0625ZM36.3802 36.3802V40H40V36.3802H36.3802Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_322_814">
                              <rect width="40" height="40" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.75 35C15.1307 35 16.25 33.8807 16.25 32.5C16.25 31.1193 15.1307 30 13.75 30C12.3693 30 11.25 31.1193 11.25 32.5C11.25 33.8807 12.3693 35 13.75 35Z"
                            fill="white"
                          />
                          <path
                            d="M31.25 35C32.6307 35 33.75 33.8807 33.75 32.5C33.75 31.1193 32.6307 30 31.25 30C29.8693 30 28.75 31.1193 28.75 32.5C28.75 33.8807 29.8693 35 31.25 35Z"
                            fill="white"
                          />
                          <path
                            d="M13.1078 23.75H33.525L36.525 8.75H10.4602L9.79844 5H2.5V7.5H7.70156L11.4516 28.75H33.75V26.25H13.5484L13.1078 23.75Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.03002 6.82C6.66669 7.53333 6.66669 8.46667 6.66669 10.3333V11.3567L36.65 8.63C36.6184 7.81667 36.5334 7.27333 36.3034 6.82C35.9838 6.19282 35.4739 5.68291 34.8467 5.36333C34.1334 5 33.2 5 31.3334 5H12C10.1334 5 9.20002 5 8.48669 5.36333C7.85951 5.68291 7.34959 6.19282 7.03002 6.82ZM36.6667 11.9767L28.5584 12.7133L32.735 34.9917C33.7217 34.97 34.34 34.895 34.8467 34.6367C35.4739 34.3171 35.9838 33.8072 36.3034 33.18C36.6667 32.4667 36.6667 31.5333 36.6667 29.6667V11.9767ZM29.3467 35L25.2234 13.0167L6.66669 14.7033V29.6667C6.66669 31.5333 6.66669 32.4667 7.03002 33.18C7.34959 33.8072 7.85951 34.3171 8.48669 34.6367C9.20002 35 10.1334 35 12 35H29.3467ZM22.5 25.05C22.5 28.6467 18.9334 31.1733 17.3784 32.105C17.1634 32.234 16.9174 32.3021 16.6667 32.3021C16.416 32.3021 16.17 32.234 15.955 32.105C14.4 31.1733 10.8334 28.6467 10.8334 25.0483C10.8334 21.52 13.66 19.1667 16.6667 19.1667C19.7784 19.1667 22.5 21.52 22.5 25.05Z"
                            fill="white"
                          />
                          <path
                            d="M16.6667 26.6666C17.5871 26.6666 18.3333 25.9204 18.3333 24.9999C18.3333 24.0794 17.5871 23.3333 16.6667 23.3333C15.7462 23.3333 15 24.0794 15 24.9999C15 25.9204 15.7462 26.6666 16.6667 26.6666Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M31.6667 6.66659H28.3333V3.33325H25V6.66659H15V3.33325H11.6667V6.66659H8.33333C6.5 6.66659 5 8.16658 5 9.99992V11.6666H35V9.99992C35 8.16658 33.5 6.66659 31.6667 6.66659ZM5 33.3333C5 35.1666 6.5 36.6666 8.33333 36.6666H31.6667C33.5 36.6666 35 35.1666 35 33.3333V13.3333H5V33.3333ZM14.5167 22.1499L18.3333 25.9666L25.4833 18.8166L27.8333 21.1666L18.3167 30.6833L12.1333 24.4999L14.4833 22.1499H14.5167Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.1 3.21662C11.95 3.19995 8.88335 6.23329 10.2834 9.99995H5.00002C4.11597 9.99995 3.26812 10.3511 2.643 10.9763C2.01788 11.6014 1.66669 12.4492 1.66669 13.3333V16.6666C1.66669 17.1086 1.84228 17.5326 2.15484 17.8451C2.4674 18.1577 2.89133 18.3333 3.33335 18.3333H18.3334V13.3333H21.6667V18.3333H36.6667C37.1087 18.3333 37.5326 18.1577 37.8452 17.8451C38.1578 17.5326 38.3334 17.1086 38.3334 16.6666V13.3333C38.3334 12.4492 37.9822 11.6014 37.357 10.9763C36.7319 10.3511 35.8841 9.99995 35 9.99995H29.7167C31.6667 4.54995 24.3334 0.699955 20.95 5.39995L20 6.66662L19.05 5.36662C18 3.88329 16.55 3.23329 15.1 3.21662ZM15 6.66662C16.4834 6.66662 17.2334 8.46662 16.1834 9.51662C15.1334 10.5666 13.3334 9.81662 13.3334 8.33329C13.3334 7.89126 13.5089 7.46734 13.8215 7.15478C14.1341 6.84222 14.558 6.66662 15 6.66662ZM25 6.66662C26.4834 6.66662 27.2334 8.46662 26.1834 9.51662C25.1334 10.5666 23.3334 9.81662 23.3334 8.33329C23.3334 7.89126 23.5089 7.46734 23.8215 7.15478C24.1341 6.84222 24.558 6.66662 25 6.66662ZM3.33335 20V33.3333C3.33335 34.2173 3.68454 35.0652 4.30966 35.6903C4.93479 36.3154 5.78263 36.6666 6.66669 36.6666H33.3334C34.2174 36.6666 35.0653 36.3154 35.6904 35.6903C36.3155 35.0652 36.6667 34.2173 36.6667 33.3333V20H21.6667V33.3333H18.3334V20H3.33335Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="complete_sol_box_2">
                <h5 className="ct_fs_30 ct_fw_400 ct_delight_regular mb-4">
                  For Your Restaurant
                </h5>
                <div className="row">
                  <div className="col-md-8">
                    <ul className="cust_sol_list ps-0">
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Order
                        Management
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Menu
                        Management{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>
                        Customer Management{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>
                        Reservation Management{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Staff
                        Management{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>Reports
                        & Analytics{" "}
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check me-2"></i>
                        Inventory Management{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="comp_sol_icon_box_sec">
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.3333 4.99992C13.3333 4.55789 13.5089 4.13397 13.8214 3.82141C14.134 3.50885 14.5579 3.33325 15 3.33325H25C25.442 3.33325 25.8659 3.50885 26.1785 3.82141C26.491 4.13397 26.6666 4.55789 26.6666 4.99992H30C30.884 4.99992 31.7319 5.35111 32.357 5.97623C32.9821 6.60135 33.3333 7.4492 33.3333 8.33325V33.3333C33.3333 34.2173 32.9821 35.0652 32.357 35.6903C31.7319 36.3154 30.884 36.6666 30 36.6666H9.99996C9.1159 36.6666 8.26806 36.3154 7.64294 35.6903C7.01782 35.0652 6.66663 34.2173 6.66663 33.3333V8.33325C6.66663 7.4492 7.01782 6.60135 7.64294 5.97623C8.26806 5.35111 9.1159 4.99992 9.99996 4.99992H13.3333ZM23.3333 6.66659H16.6666V9.99992H15C14.5579 9.99992 14.134 10.1755 13.8214 10.4881C13.5089 10.8006 13.3333 11.2246 13.3333 11.6666C13.3333 12.1086 13.5089 12.5325 13.8214 12.8451C14.134 13.1577 14.5579 13.3333 15 13.3333H25C25.442 13.3333 25.8659 13.1577 26.1785 12.8451C26.491 12.5325 26.6666 12.1086 26.6666 11.6666C26.6666 11.2246 26.491 10.8006 26.1785 10.4881C25.8659 10.1755 25.442 9.99992 25 9.99992H23.3333V6.66659ZM13.3333 19.9999C13.3333 19.5579 13.5089 19.134 13.8214 18.8214C14.134 18.5088 14.5579 18.3333 15 18.3333H25C25.442 18.3333 25.8659 18.5088 26.1785 18.8214C26.491 19.134 26.6666 19.5579 26.6666 19.9999C26.6666 20.4419 26.491 20.8659 26.1785 21.1784C25.8659 21.491 25.442 21.6666 25 21.6666H15C14.5579 21.6666 14.134 21.491 13.8214 21.1784C13.5089 20.8659 13.3333 20.4419 13.3333 19.9999ZM15 24.9999C14.5579 24.9999 14.134 25.1755 13.8214 25.4881C13.5089 25.8006 13.3333 26.2246 13.3333 26.6666C13.3333 27.1086 13.5089 27.5325 13.8214 27.8451C14.134 28.1577 14.5579 28.3333 15 28.3333H25C25.442 28.3333 25.8659 28.1577 26.1785 27.8451C26.491 27.5325 26.6666 27.1086 26.6666 26.6666C26.6666 26.2246 26.491 25.8006 26.1785 25.4881C25.8659 25.1755 25.442 24.9999 25 24.9999H15Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3333 3.33325C23.0405 3.33325 23.7188 3.6142 24.2189 4.1143C24.719 4.6144 25 5.29267 25 5.99992V34.9999H26.6666V22.6666C26.6666 21.9593 26.9476 21.2811 27.4477 20.781C27.9478 20.2809 28.6261 19.9999 29.3333 19.9999H34C34.7072 19.9999 35.3855 20.2809 35.8856 20.781C36.3857 21.2811 36.6666 21.9593 36.6666 22.6666V34.9999C37.1087 34.9999 37.5326 35.1755 37.8451 35.4881C38.1577 35.8006 38.3333 36.2246 38.3333 36.6666C38.3333 37.1086 38.1577 37.5325 37.8451 37.8451C37.5326 38.1577 37.1087 38.3333 36.6666 38.3333H3.33329C2.89127 38.3333 2.46734 38.1577 2.15478 37.8451C1.84222 37.5325 1.66663 37.1086 1.66663 36.6666C1.66663 36.2246 1.84222 35.8006 2.15478 35.4881C2.46734 35.1755 2.89127 34.9999 3.33329 34.9999V14.3333C3.33329 13.626 3.61424 12.9477 4.11434 12.4476C4.61444 11.9475 5.29272 11.6666 5.99996 11.6666H10.6666C11.3739 11.6666 12.0521 11.9475 12.5522 12.4476C13.0523 12.9477 13.3333 13.626 13.3333 14.3333V34.9999H15V5.99992C15 5.29267 15.2809 4.6144 15.781 4.1143C16.2811 3.6142 16.9594 3.33325 17.6666 3.33325H22.3333Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5 22.2333L6.51672 15.2666C5.26894 14.014 4.56836 12.318 4.56836 10.55C4.56836 8.78193 5.26894 7.08592 6.51672 5.8333L18.2167 17.5L13.5 22.2333ZM24.8 19.2166L22.35 21.6666L33.8167 33.1333L31.4667 35.4833L20 24.0166L8.53338 35.4833L6.18338 33.1333L22.4501 16.8666C21.2667 14.3166 22.1 10.7333 24.75 8.0833C27.9334 4.8833 32.5 4.2833 34.9334 6.71664C37.3834 9.16664 36.7834 13.7333 33.5834 16.9166C30.9334 19.5666 27.35 20.4 24.8 19.2166Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>

                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.3334 6.66661C11.5653 6.66661 9.86957 7.36899 8.61933 8.61923C7.36909 9.86947 6.66671 11.5652 6.66671 13.3333C6.66671 15.1014 7.36909 16.7971 8.61933 18.0473C9.86957 19.2976 11.5653 19.9999 13.3334 19.9999C15.1015 19.9999 16.7972 19.2976 18.0474 18.0473C19.2977 16.7971 20 15.1014 20 13.3333C20 11.5652 19.2977 9.86947 18.0474 8.61923C16.7972 7.36899 15.1015 6.66661 13.3334 6.66661ZM10 21.6666C8.23193 21.6666 6.53624 22.369 5.286 23.6192C4.03575 24.8695 3.33337 26.5652 3.33337 28.3333V29.9999C3.33337 30.884 3.68456 31.7318 4.30968 32.357C4.93481 32.9821 5.78265 33.3333 6.66671 33.3333H20C20.8841 33.3333 21.7319 32.9821 22.3571 32.357C22.9822 31.7318 23.3334 30.884 23.3334 29.9999V28.3333C23.3334 26.5652 22.631 24.8695 21.3808 23.6192C20.1305 22.369 18.4348 21.6666 16.6667 21.6666H10ZM22.0834 18.1749C22.88 16.7416 23.3334 15.0916 23.3334 13.3333C23.3337 11.639 22.9036 9.97243 22.0834 8.48994C23.0297 7.59449 24.2177 6.99596 25.5006 6.76832C26.7834 6.54069 28.1048 6.69392 29.3014 7.20908C30.4981 7.72425 31.5176 8.57876 32.234 9.66702C32.9503 10.7553 33.332 12.0296 33.332 13.3324C33.332 14.6353 32.9503 15.9096 32.234 16.9979C31.5176 18.0861 30.4981 18.9406 29.3014 19.4558C28.1048 19.971 26.7834 20.1242 25.5006 19.8966C24.2177 19.6689 23.0297 19.0704 22.0834 18.1749ZM25.7767 33.3333C26.3434 32.3533 26.6684 31.2149 26.6684 29.9999V28.3333C26.6715 25.8729 25.7644 23.4983 24.1217 21.6666H30C31.7682 21.6666 33.4638 22.369 34.7141 23.6192C35.9643 24.8695 36.6667 26.5652 36.6667 28.3333V29.9999C36.6667 30.884 36.3155 31.7318 35.6904 32.357C35.0653 32.9821 34.2174 33.3333 33.3334 33.3333H25.7767Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>
                      <div className="comp_sol_icon_box">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9166 4.16675C12.9166 3.83523 12.7849 3.51729 12.5505 3.28286C12.3161 3.04844 11.9982 2.91675 11.6666 2.91675C11.3351 2.91675 11.0172 3.04844 10.7827 3.28286C10.5483 3.51729 10.4166 3.83523 10.4166 4.16675V6.80008C8.01663 6.99175 6.4433 7.46175 5.28663 8.62008C4.1283 9.77675 3.6583 11.3517 3.46497 13.7501H36.535C36.3416 11.3501 35.8716 9.77675 34.7133 8.62008C33.5566 7.46175 31.9816 6.99175 29.5833 6.79841V4.16675C29.5833 3.83523 29.4516 3.51729 29.2172 3.28286C28.9828 3.04844 28.6648 2.91675 28.3333 2.91675C28.0018 2.91675 27.6838 3.04844 27.4494 3.28286C27.215 3.51729 27.0833 3.83523 27.0833 4.16675V6.68841C25.975 6.66675 24.7316 6.66675 23.3333 6.66675H16.6666C15.2683 6.66675 14.025 6.66675 12.9166 6.68841V4.16675Z"
                            fill="#5D5CFF"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.33337 20C3.33337 18.6017 3.33337 17.3583 3.35504 16.25H36.645C36.6667 17.3583 36.6667 18.6017 36.6667 20V23.3333C36.6667 29.6183 36.6667 32.7617 34.7134 34.7133C32.76 36.665 29.6184 36.6667 23.3334 36.6667H16.6667C10.3817 36.6667 7.23837 36.6667 5.28671 34.7133C3.33504 32.76 3.33337 29.6183 3.33337 23.3333V20ZM28.3334 23.3333C28.7754 23.3333 29.1993 23.1577 29.5119 22.8452C29.8244 22.5326 30 22.1087 30 21.6667C30 21.2246 29.8244 20.8007 29.5119 20.4882C29.1993 20.1756 28.7754 20 28.3334 20C27.8913 20 27.4674 20.1756 27.1549 20.4882C26.8423 20.8007 26.6667 21.2246 26.6667 21.6667C26.6667 22.1087 26.8423 22.5326 27.1549 22.8452C27.4674 23.1577 27.8913 23.3333 28.3334 23.3333ZM28.3334 30C28.7754 30 29.1993 29.8244 29.5119 29.5118C29.8244 29.1993 30 28.7754 30 28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8423 28.7754 26.6667 28.3334 26.6667C27.8913 26.6667 27.4674 26.8423 27.1549 27.1548C26.8423 27.4674 26.6667 27.8913 26.6667 28.3333C26.6667 28.7754 26.8423 29.1993 27.1549 29.5118C27.4674 29.8244 27.8913 30 28.3334 30ZM21.6667 21.6667C21.6667 22.1087 21.4911 22.5326 21.1786 22.8452C20.866 23.1577 20.4421 23.3333 20 23.3333C19.558 23.3333 19.1341 23.1577 18.8215 22.8452C18.509 22.5326 18.3334 22.1087 18.3334 21.6667C18.3334 21.2246 18.509 20.8007 18.8215 20.4882C19.1341 20.1756 19.558 20 20 20C20.4421 20 20.866 20.1756 21.1786 20.4882C21.4911 20.8007 21.6667 21.2246 21.6667 21.6667ZM21.6667 28.3333C21.6667 28.7754 21.4911 29.1993 21.1786 29.5118C20.866 29.8244 20.4421 30 20 30C19.558 30 19.1341 29.8244 18.8215 29.5118C18.509 29.1993 18.3334 28.7754 18.3334 28.3333C18.3334 27.8913 18.509 27.4674 18.8215 27.1548C19.1341 26.8423 19.558 26.6667 20 26.6667C20.4421 26.6667 20.866 26.8423 21.1786 27.1548C21.4911 27.4674 21.6667 27.8913 21.6667 28.3333ZM11.6667 23.3333C12.1087 23.3333 12.5327 23.1577 12.8452 22.8452C13.1578 22.5326 13.3334 22.1087 13.3334 21.6667C13.3334 21.2246 13.1578 20.8007 12.8452 20.4882C12.5327 20.1756 12.1087 20 11.6667 20C11.2247 20 10.8008 20.1756 10.4882 20.4882C10.1756 20.8007 10 21.2246 10 21.6667C10 22.1087 10.1756 22.5326 10.4882 22.8452C10.8008 23.1577 11.2247 23.3333 11.6667 23.3333ZM11.6667 30C12.1087 30 12.5327 29.8244 12.8452 29.5118C13.1578 29.1993 13.3334 28.7754 13.3334 28.3333C13.3334 27.8913 13.1578 27.4674 12.8452 27.1548C12.5327 26.8423 12.1087 26.6667 11.6667 26.6667C11.2247 26.6667 10.8008 26.8423 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333C10 28.7754 10.1756 29.1993 10.4882 29.5118C10.8008 29.8244 11.2247 30 11.6667 30Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>

                      <div className="comp_sol_icon_box">
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5625 39.1124V23.038L7.5 14.9062V31.0274L21.5625 39.1124ZM23.4375 39.1124L37.5 31.0274V14.9062L23.4375 23.038V39.1124ZM30.3131 16.9012L36.4575 13.3762L22.5 5.35303L16.4531 8.8274L30.3131 16.9012ZM22.5 21.4255L28.4381 17.9849L14.5163 9.9374L8.56875 13.3518L22.5 21.4255Z"
                            fill="#5D5CFF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cti_how_creative_ai_work ct_pb_150">
        <div className="container">
          <h4 className="ct_fs_74 ct_fs_400 text-center pb-5">
            How Creative AI Works
          </h4>

          <div className="row  mt-5 ">
            <div className="col-xl-3 col-md-6 mb-4 mb-5 pb-3 mb-xl-0 pb-xl-0">
              <div className="creative-ai-work-card">
                <div className="step_badges_nain">
                  <div className="step-badge">Step 1</div>
                </div>
                <div className="content">
                  <div className="creative-ai-work-card-desc">
                    <h2>Describe Your Idea</h2>
                    <p>
                      Tell AI what you want to build.
                      <br />
                      Website • App • Business Software
                    </p>
                  </div>
                  <div className="generator">
                    <img src="/img/1.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4 mb-5 pb-3 mb-xl-0 pb-xl-0">
              <div className="creative-ai-work-card">
                <div className="step_badges_nain">
                  <div className="step-badge">Step 2</div>
                </div>
                <div className="content">
                  <div className="creative-ai-work-card-desc">
                    <h2>AI Builds Instantly</h2>
                    <p>
                      Generate your project in seconds.
                      <br />
                      UI • Content • Database • Features
                    </p>
                  </div>
                  <div className="generator">
                    <img src="/img/2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4 mb-5 pb-3 mb-xl-0 pb-xl-0">
              <div className="creative-ai-work-card">
                <div className="step_badges_nain">
                  <div className="step-badge">Step 3</div>
                </div>
                <div className="content">
                  <div className="creative-ai-work-card-desc">
                    <h2> Refine with AI</h2>
                    <p>
                      Update and improve using simple prompts.
                      <br />
                      Edit • Regenerate • Add Features
                    </p>
                  </div>
                  <div className="generator">
                    <img src="/img/3.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4 mb-5 pb-3 mb-xl-0 pb-xl-0">
              <div className="creative-ai-work-card">
                <div className="step_badges_nain">
                  <div className="step-badge">Step 4</div>
                </div>
                <div className="content">
                  <div className="creative-ai-work-card-desc">
                    <h2>Launch Anywhere</h2>
                    <p>
                      Publish online or export your source code.
                      <br />
                      Deploy • Custom Domain • Source Code
                    </p>
                  </div>
                  <div className="generator">
                    <img src="/img/step-4.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_choose_creative_ai">
        <div className="container">
          <h4
            className="ct_fs_74 ct_fs_400 text-center pb-5 mx-auto text-white"
            style={{ maxWidth: "850px" }}
          >
            Why Restaurants Choose Creative AI
          </h4>

          <div class="table-responsive mt-4 ">
            <div className="">
              <table class="table ct_custom_table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>
                    {" "}
                    <img
                      loading="eager"
                      src="/img/cti_white_new_logo.webp"
                      alt="AI-powered app and web development"
                      width={140}
                      height={28}
                    />
                  </th>
                  <th>Traditional Development</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Development Time</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i> Build
                    in Minutes
                  </td>

                  <td>Weeks to Months</td>
                </tr>
                <tr>
                  <td>Coding Required</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i> No
                    Coding Required
                  </td>
                  <td>Developer Required </td>
                </tr>
                   <tr>
                  <td>Cost</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i>
                    Affordable Pricing 
                  </td>
                  <td>High Development Cost
 </td>
                </tr>
                 <tr>
                  <td>Development Process</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i>
                    AI-Powered  
                  </td>
                  <td>Manual Development </td>
                </tr>
                  <tr>
                  <td>Source Code Ownership</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i>
                    Source Code Included  
                  </td>
                  <td>Often Not Available  </td>
                </tr>
                 <tr>
                  <td>Deployment</td>
                  <td>
                    <i class="fa-solid fa-check me-1 ct_text_35BE3A"></i>
                 Publish in Minutes 
                  </td>
                  <td>Complex Deployment Process    </td>
                </tr>
              </tbody>
            </table>
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
                  loading="lazy"
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
                loading="lazy"
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

      <section className="cti_testimonal_new_section ct_pb_150 ct_pt_150">
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
              <img alt="User" src="/img/client_4.webp" loading="lazy" />
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
              <img alt="User" src="/img/client_5.webp" loading="lazy" />
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
              <img alt="User" src="/img/sam.webp" loading="lazy" />
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
              <img alt="User" src="/img/james.webp" loading="lazy" />
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
              <img alt="User" src="/img/paul.webp" loading="lazy" />
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
              <img alt="User" src="/img/nirdesh.webp" loading="lazy" />
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
              <img alt="User" src="/img/client_2.webp" loading="lazy" />
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
              <img alt="User" src="/img/client_1.webp" loading="lazy" />
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
              <img alt="User" src="/img/client_3.webp" loading="lazy" />
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
                  ? blog.banner_image.startsWith("http")
                    ? blog.banner_image
                    : `${API_URL}${blog.banner_image}`
                  : "";
                return (
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={blog.id}>
                    <a
                      href={`/blog-details?slug=${blog.slug}`}
                      className="cti_blog_card d-block"
                    >
                      <div className="cti_blog_img">
                        {imageUrl && (
                          <img
                            className="img-fluid"
                            loading="lazy"
                            alt={blog.title || "Blog banner"}
                            src={imageUrl}
                          />
                        )}
                      </div>
                      <div className="cti_blog_content">
                        <h3 className="text-truncate"> {blog.title}</h3>
                        <p className="ct_minimise_cnt">{blog.description}</p>
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

      <section className="cti_build_proj_banner">
        <div className="container">
          <h3
            className="ct_fs_38 ct_fw_400 mx-auto text-white text-center mb-3"
            style={{ maxWidth: "620px" }}
          >
            Build Your Next Website, App or Business Platform with AI
          </h3>
          <p
            className="ct_fs_16 ct_text_bebfc2 text-center mx-auto mb-0"
            style={{ maxWidth: "620px" }}
          >
            From professional websites to enterprise applications, Creative AI
            helps you build, customize, and launch complete digital products in
            minutes without coding.
          </p>
           <button className="start_build_btn ct_mt_40 mx-auto">
                    Start Building{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
        </div>
      </section>
 <section className="cti_home_faq_bg_new ct_pt_150 ct_pb_150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2 className="mx-auto text-center" style={{maxWidth:"990px"}}>
                 Questions from Restaurant Owners

                </h2>
              </div>
              <FAQAccordion
                accordionId="ctiFaqAccordion"
                accordionClass="cti_faq_accordion"
                itemClass="cti_faq_item"
                btnClass="cti_faq_btn"
                bodyClass="cti_faq_body"
                items={[
                  {
                    question: "Can I create a restaurant website without coding?",
                    answer: "Yes. Creative AI helps you build a professional restaurant website using AI without any coding or technical skills."
                  },
                  {
                    question: "Can customers order food directly from my website?",
                    answer: "Yes. Enable online ordering so customers can browse your menu and place orders directly through your website."
                  },
                  {
                    question: "Can I accept table reservations online?",
                    answer: "Yes. Add an online reservation system that allows customers to book tables anytime from any device."
                  },
                  {
                    question: "Can I create both a restaurant website and a mobile app?",
                    answer: "Yes. Creative AI lets you build a restaurant website and a mobile app from a single platform."
                  },
                  {
                    question: "Will my restaurant website be SEO-friendly?",
                    answer: "Yes. Every website is built with SEO best practices, responsive design, and optimized page structure to help improve search engine visibility."
                  },
                  {
                    question: "Can I download the source code of my project?",
                    answer: "Yes. Creative AI gives you the option to download the complete source code, giving you full ownership and the freedom to host or customize it anywhere."
                  }
                
                ]}
              />
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
                    loading="lazy"
                  />
                  <img
                    alt="Trusted client Stefan profile avatar"
                    src="/img/client_4.webp"
                    loading="lazy"
                  />
                  <img
                    alt="Trusted client Justine profile avatar"
                    src="/img/client_2.webp"
                    loading="lazy"
                  />
                  <img
                    alt="Trusted client James profile avatar"
                    src="/img/james.webp"
                    loading="lazy"
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
