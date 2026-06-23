"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`ct_header_main ${isSticky ? "ct_sticky_menu" : ""}`}>
      <header className="container">
        <div className="ct_logo">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              loading="eager"
              src="/img/cti_white_new_logo.webp"
              alt="AI-powered app and web development"
              width={140}
              height={28}
            />
          </Link>
        </div>
        <div className="ct_middle_navbar">
          <nav>
            <ul className={`mb-0 ${isMenuOpen ? "show" : ""}`}>
              <li className="ct_close_bar" onClick={() => setIsMenuOpen(false)} role="button" aria-label="Close navigation menu" tabIndex={0}>
                <i className="fa-solid fa-xmark"></i>
              </li>

              <li className="ct_dropdown">
                <span type="button">Solutions</span>
                <div className="ct_custom_dropdown ct_mega_dropdown_width">
                  <div className="ct_dropdown_items">
                    <div className="ct_grid_2_flex">
                      <div className="ct_drop_title_icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                            fill="#2785BA"
                          />
                        </svg>
                      </div>
                      <h4 className="mb-0 ct_fs_18 ct_fw_700">Business</h4>
                    </div>
                    <ol className="ct_ps_35">
                      <li>
                        <Link
                          href="/entrepreneurs"
                          className="ct_fs_14 ct_fw_600"
                          onClick={() => setIsMenuOpen(false)}
                        >Entrepreneurs</Link
                        >
                        <p className="mb-0">
                          Make your dream business app a reality
                        </p>
                      </li>
                      <li>
                        <Link href="/smbs" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Profiles & SMBs</Link
                        >
                        <p className="mb-0">
                          Scale your sales with an app you own
                        </p>
                      </li>
                      <li>
                        <Link href="/enterprise" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Enterprise</Link
                        >
                        <p className="mb-0">
                          Bypass your internal teams and get apps built fast
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="ct_dropdown_items ct_drop_grey_bg">
                    <div className="ct_grid_2_flex">
                      <div className="ct_drop_title_icon">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_132_3442)">
                            <path
                              d="M3.5 0.0585938C3.63542 0.0585938 3.7526 0.108073 3.85156 0.207031C3.95052 0.30599 4 0.423177 4 0.558594V7.51953L8.1875 4.16797C8.27604 4.09505 8.38021 4.05859 8.5 4.05859C8.63542 4.05859 8.7526 4.10807 8.85156 4.20703C8.95052 4.30599 9 4.42318 9 4.55859V7.51953L13.1875 4.16797C13.276 4.09505 13.3802 4.05859 13.5 4.05859C13.6354 4.05859 13.7526 4.10807 13.8516 4.20703C13.9505 4.30599 14 4.42318 14 4.55859V13.5586C14 13.694 13.9505 13.8112 13.8516 13.9102C13.7526 14.0091 13.6354 14.0586 13.5 14.0586H0.5C0.364583 14.0586 0.247396 14.0091 0.148438 13.9102C0.0494792 13.8112 0 13.694 0 13.5586V0.558594C0 0.423177 0.0494792 0.30599 0.148438 0.207031C0.247396 0.108073 0.364583 0.0585938 0.5 0.0585938H3.5Z"
                              fill="#2785BA"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_132_3442">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(0 0.0585938)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="mb-0 ct_fs_18 ct_fw_700">Industries</h4>
                    </div>
                    <ol className="ct_ps_35">
                      <li>
                        <Link
                          href="/retail-&-commerce"
                          className="ct_fs_14 ct_fw_600"
                          onClick={() => setIsMenuOpen(false)}
                        >Retail & Commerce<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>
                      <li>
                        <Link
                          href="/financial-services"
                          className="ct_fs_14 ct_fw_600"
                          onClick={() => setIsMenuOpen(false)}
                        >Financial Services<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>
                      <li>
                        <Link href="/healthcare" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Healthcare<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>
                      <li>
                        <Link
                          href="/manufacturing"
                          className="ct_fs_14 ct_fw_600"
                          onClick={() => setIsMenuOpen(false)}
                        >Manufacturing<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>

                      <li>
                        <Link
                          href="/entertainment"
                          className="ct_fs_14 ct_fw_600"
                          onClick={() => setIsMenuOpen(false)}
                        >Entertainment<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>

                      <li>
                        <Link href="/education" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Education<i
                          className="fa-solid fa-angle-right ms-1"
                        ></i
                          ></Link>
                      </li>
                      <li>
                        <Link href="/telecom" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Telecom<i className="fa-solid fa-angle-right ms-1"></i
                        ></Link>
                      </li>
                      <li>
                        <Link href="/energy" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                        >Energy<i className="fa-solid fa-angle-right ms-1"></i
                        ></Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
              <li className="ct_dropdown">
                <Link href="/why-creative-ai" onClick={() => setIsMenuOpen(false)}>Why creative AI</Link>
              </li>
              <li className="ct_dropdown">
                <span type="button">About Us</span>
                <div className="ct_custom_dropdown d-block">
                  <div className="ct_dropdown_items ct_py_20">
                    <ol className="mt-0">
                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                                fill="#2785BA"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link
                              href="/our-story"
                              className="ct_fs_14 ct_fw_600"
                              onClick={() => setIsMenuOpen(false)}
                            >Our Story</Link
                            >
                            <p className="mb-0">
                              Why we’re here and how we can help you
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                                fill="#2785BA"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/careers" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >Careers</Link
                            >
                            <p className="mb-0">See our current openings</p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
              <li className="ct_dropdown">
                <span type="button">Resources</span>
                <div className="ct_custom_dropdown d-block">
                  <div className="ct_dropdown_items ct_py_20">
                    <ol className="mt-0">
                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                                fill="#2785BA"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link
                              href="/our-projects"
                              className="ct_fs_14 ct_fw_600"
                              onClick={() => setIsMenuOpen(false)}
                            >Our Projects</Link
                            >
                            <p className="mb-0">All our projects</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                                fill="#2785BA"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/blog" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >Blog</Link
                            >
                            <p className="mb-0">News & industry trends</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.75 9.1875C8.75 9.42922 8.55422 9.625 8.3125 9.625H5.6875C5.44578 9.625 5.25 9.42922 5.25 9.1875V7.875H0V11.8125C0 12.5125 0.6125 13.125 1.3125 13.125H12.6875C13.3875 13.125 14 12.5125 14 11.8125V7.875H8.75V9.1875ZM12.6875 3.5H10.5V2.1875C10.5 1.4875 9.8875 0.875 9.1875 0.875H4.8125C4.1125 0.875 3.5 1.4875 3.5 2.1875V3.5H1.3125C0.6125 3.5 0 4.1125 0 4.8125V7H14V4.8125C14 4.1125 13.3875 3.5 12.6875 3.5ZM8.75 3.5H5.25V2.625H8.75V3.5Z"
                                fill="#2785BA"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/faqs" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >FAQs</Link
                            >
                            <p className="mb-0">
                              All your app building questions answered
                            </p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
              <li className="">
                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ct_right_menu">
          <ul className="justify-content-end mb-0">
            <li>
              <a className="ct_get_started_btn"
              >Get Started
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="black" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3894 12.707L9.73236 18.364L8.31836 16.95L13.2684 12L8.31836 7.05L9.73236 5.636L15.3894 11.293C15.5768 11.4805 15.6821 11.7348 15.6821 12C15.6821 12.2652 15.5768 12.5195 15.3894 12.707Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <div className="ct_hamburger" id="hamburger-12" onClick={() => setIsMenuOpen(true)} role="button" aria-label="Open navigation menu" tabIndex={0}>
                <i className="fa-solid fa-bars"></i>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}