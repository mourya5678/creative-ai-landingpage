"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

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
    <div className={`ct_header_main ${pathname === "/" ? "et_main_header_344" : ""} ${isSticky ? "ct_sticky_menu" : ""}`}>
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
              <li className="ct_close_bar">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close navigation menu"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "inherit",
                    font: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
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
                <Link href="/why-creative-ai" onClick={() => setIsMenuOpen(false)}>Why Creative AI</Link>
              </li>
              <li className="ct_dropdown">
                <span type="button">About Us</span>
                <div className="ct_custom_dropdown d-block">
                  <div className="ct_dropdown_items ct_py_20">
                    <ol className="mt-0">
                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M1.879 1.879C1 2.75725 1 4.17175 1 7V10C1 12.8282 1 14.2427 1.879 15.121C2.758 15.9992 4.17175 16 7 16H10C12.8282 16 14.2427 16 15.121 15.121C15.9992 14.242 16 12.8282 16 10V7C16 4.17175 16 2.75725 15.121 1.879C14.242 1.00075 12.8282 1 10 1H7C4.17175 1 2.75725 1 1.879 1.879ZM8.88025 12.0415L8.875 12.0445V5.71225L8.8915 5.7025C9.30625 5.4625 9.97675 5.1055 10.525 4.9525C10.93 4.84075 11.455 4.789 11.9177 4.7665C12.5215 4.7365 13 5.23375 13 5.839V9.93325C13 10.558 12.49 11.0612 11.8675 11.1077C11.488 11.1363 11.0785 11.1835 10.75 11.2638C10.1222 11.4175 9.33775 11.8007 8.88025 12.0415ZM4 5.872V9.93325C4 10.558 4.51 11.0612 5.1325 11.1077C5.512 11.1363 5.9215 11.1835 6.25 11.2638C6.87775 11.4175 7.66225 11.8007 8.11975 12.0415L8.125 12.0445V5.73325L8.09875 5.71975C7.6375 5.47825 6.868 5.10475 6.25 4.95325C5.917 4.8715 5.5 4.8235 5.11525 4.79575C4.49875 4.75 4 5.25475 4 5.872Z" fill="white" />
                            </svg>



                          </div>
                          <div>
                            <Link
                              href="/our-story"
                              className="ct_fs_14 ct_fw_600"
                              onClick={() => setIsMenuOpen(false)}
                            >Our Story</Link>
                            <p className="mb-0">
                              Why we’re here and how we can help you
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.8516 10.1429C13.3481 10.1429 12.8652 10.3461 12.5092 10.7077C12.1531 11.0694 11.9531 11.56 11.9531 12.0715C11.9531 12.5829 12.1531 13.0735 12.5092 13.4352C12.8652 13.7968 13.3481 14 13.8516 14C14.3551 14 14.8379 13.7968 15.194 13.4352C15.55 13.0735 15.75 12.5829 15.75 12.0715C15.75 11.56 15.55 11.0694 15.194 10.7077C14.8379 10.3461 14.3551 10.1429 13.8516 10.1429ZM10.6875 12.0715C10.6877 11.5703 10.8032 11.0761 11.0248 10.6284C11.2464 10.1807 11.568 9.79177 11.964 9.4928C12.3599 9.19382 12.8191 8.99303 13.305 8.90647C13.7909 8.8199 14.29 8.84996 14.7625 8.99424C15.2349 9.13852 15.6676 9.39303 16.026 9.73743C16.3844 10.0818 16.6585 10.5066 16.8265 10.9778C16.9945 11.449 17.0517 11.9536 16.9936 12.4512C16.9354 12.9489 16.7636 13.4259 16.4917 13.844L17.2519 14.6172C17.314 14.676 17.3639 14.747 17.3985 14.8258C17.4331 14.9047 17.4517 14.9898 17.4532 15.0761C17.4547 15.1625 17.4391 15.2482 17.4072 15.3282C17.3754 15.4083 17.328 15.481 17.2679 15.5421C17.2078 15.6031 17.1363 15.6512 17.0575 15.6836C16.9787 15.7159 16.8943 15.7318 16.8093 15.7302C16.7243 15.7287 16.6405 15.7098 16.5629 15.6747C16.4853 15.6396 16.4154 15.5889 16.3575 15.5257L15.5964 14.7535C15.1195 15.0737 14.5661 15.2568 13.995 15.2831C13.4239 15.3094 12.8564 15.178 12.3529 14.903C11.8494 14.6279 11.4286 14.2193 11.1354 13.7208C10.8422 13.2222 10.6874 12.6522 10.6875 12.0715Z" fill="white" />
                              <path d="M7.31271 1.14282H10.6877C13.8695 1.14282 15.4608 1.14282 16.4488 2.14739C17.161 2.86997 17.3601 3.91054 17.4158 5.64282H0.584648C0.640336 3.91054 0.839461 2.86997 1.55159 2.14739C2.53962 1.14282 4.13093 1.14282 7.31271 1.14282ZM7.31271 14.8571H10.373C10.0139 14.3867 9.7502 13.8487 9.59722 13.2741C9.44423 12.6995 9.40499 12.0997 9.48176 11.5096C9.55853 10.9195 9.74979 10.3507 10.0445 9.83621C10.3391 9.3217 10.7313 8.8717 11.1984 8.51226C11.6655 8.15281 12.1981 7.89108 12.7654 7.74221C13.3327 7.59334 13.9235 7.56029 14.5035 7.64498C15.0835 7.72967 15.6412 7.93041 16.1443 8.23559C16.6474 8.54076 17.0858 8.94429 17.4343 9.42282C17.4366 8.98854 17.4377 8.51425 17.4377 7.99997C17.4377 7.62168 17.4371 7.26454 17.436 6.92854H0.564399C0.562711 7.26454 0.562148 7.62168 0.562711 7.99997C0.562711 11.2323 0.562711 12.8488 1.55159 13.8525C2.54046 14.8563 4.13093 14.8571 7.31271 14.8571Z" fill="white" />
                              <path d="M3.30469 11.4286C3.30469 11.2581 3.37136 11.0946 3.49003 10.9741C3.60871 10.8535 3.76967 10.7858 3.9375 10.7858H7.3125C7.48033 10.7858 7.64129 10.8535 7.75997 10.9741C7.87864 11.0946 7.94531 11.2581 7.94531 11.4286C7.94531 11.5991 7.87864 11.7626 7.75997 11.8832C7.64129 12.0038 7.48033 12.0715 7.3125 12.0715H3.9375C3.76967 12.0715 3.60871 12.0038 3.49003 11.8832C3.37136 11.7626 3.30469 11.5991 3.30469 11.4286Z" fill="white" />
                            </svg>

                          </div>
                          <div>
                            <Link href="/careers" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >Careers</Link>
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
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.85658 2.28373C4.20918 2.13767 4.5871 2.0625 4.96875 2.0625C5.73954 2.0625 6.47875 2.36869 7.02378 2.91372C7.56881 3.45875 7.875 4.19796 7.875 4.96875C7.875 5.73954 7.56881 6.47875 7.02378 7.02378C6.47875 7.56881 5.73954 7.875 4.96875 7.875C4.5871 7.875 4.20918 7.79983 3.85658 7.65378C3.50397 7.50772 3.18359 7.29365 2.91372 7.02378C2.64385 6.75391 2.42978 6.43353 2.28373 6.08092C2.13767 5.72832 2.0625 5.3504 2.0625 4.96875C2.0625 4.5871 2.13767 4.20918 2.28373 3.85658C2.42978 3.50397 2.64385 3.18359 2.91372 2.91372C3.18359 2.64385 3.50397 2.42978 3.85658 2.28373Z" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11.9191 2.28373C12.2717 2.13767 12.6496 2.0625 13.0313 2.0625C13.802 2.0625 14.5413 2.36869 15.0863 2.91372C15.6313 3.45875 15.9375 4.19796 15.9375 4.96875C15.9375 5.73954 15.6313 6.47875 15.0863 7.02378C14.5413 7.56881 13.802 7.875 13.0313 7.875C12.6496 7.875 12.2717 7.79983 11.9191 7.65378C11.5665 7.50772 11.2461 7.29365 10.9762 7.02378C10.7064 6.75391 10.4923 6.43353 10.3462 6.08092C10.2002 5.72832 10.125 5.3504 10.125 4.96875C10.125 4.5871 10.2002 4.20918 10.3462 3.85658C10.4923 3.50397 10.7064 3.18359 10.9762 2.91372C11.2461 2.64385 11.5665 2.42978 11.9191 2.28373Z" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3.85658 10.3462C4.20918 10.2002 4.5871 10.125 4.96875 10.125C5.73954 10.125 6.47875 10.4312 7.02378 10.9762C7.56881 11.5212 7.875 12.2605 7.875 13.0313C7.875 13.802 7.56881 14.5413 7.02378 15.0863C6.47875 15.6313 5.73954 15.9375 4.96875 15.9375C4.5871 15.9375 4.20918 15.8623 3.85658 15.7163C3.50397 15.5702 3.18359 15.3561 2.91372 15.0863C2.64385 14.8164 2.42978 14.496 2.28373 14.1434C2.13767 13.7908 2.0625 13.4129 2.0625 13.0313C2.0625 12.6496 2.13767 12.2717 2.28373 11.9191C2.42978 11.5665 2.64385 11.2461 2.91372 10.9762C3.18359 10.7064 3.50397 10.4923 3.85658 10.3462Z" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11.9191 10.3462C12.2717 10.2002 12.6496 10.125 13.0313 10.125C13.802 10.125 14.5413 10.4312 15.0863 10.9762C15.6313 11.5212 15.9375 12.2605 15.9375 13.0313C15.9375 13.802 15.6313 14.5413 15.0863 15.0863C14.5413 15.6313 13.802 15.9375 13.0313 15.9375C12.6496 15.9375 12.2717 15.8623 11.9191 15.7163C11.5665 15.5702 11.2461 15.3561 10.9762 15.0863C10.7064 14.8164 10.4923 14.496 10.3462 14.1434C10.2002 13.7908 10.125 13.4129 10.125 13.0313C10.125 12.6496 10.2002 12.2717 10.3462 11.9191C10.4923 11.5665 10.7064 11.2461 10.9762 10.9762C11.2461 10.7064 11.5665 10.4923 11.9191 10.3462Z" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                          </div>
                          <div>
                            <Link
                              href="/our-projects"
                              className="ct_fs_14 ct_fw_600"
                              onClick={() => setIsMenuOpen(false)}
                            >Our Projects</Link>
                            <p className="mb-0">All our projects</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.1786 11.8425C11.2218 11.9001 11.2731 11.9511 11.3309 11.994C11.2731 12.0372 11.2218 12.0885 11.1786 12.1463C11.1355 12.0885 11.0842 12.0372 11.0264 11.994C11.0842 11.9509 11.1355 11.8996 11.1786 11.8418" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M9 0C9.59674 0 10.169 0.237053 10.591 0.65901C11.0129 1.08097 11.25 1.65326 11.25 2.25H13.95C14.4274 2.25 14.8852 2.43964 15.2228 2.77721C15.5604 3.11477 15.75 3.57261 15.75 4.05V15.45C15.75 15.9274 15.5604 16.3852 15.2228 16.7228C14.8852 17.0604 14.4274 17.25 13.95 17.25H4.05C3.81362 17.25 3.57956 17.2034 3.36117 17.113C3.14278 17.0225 2.94435 16.8899 2.77721 16.7228C2.43964 16.3852 2.25 15.9274 2.25 15.45V4.05C2.25 3.81362 2.29656 3.57956 2.38702 3.36117C2.47748 3.14278 2.61006 2.94435 2.77721 2.77721C3.11477 2.43964 3.57261 2.25 4.05 2.25H6.75C6.75 1.65326 6.98705 1.08097 7.40901 0.65901C7.83097 0.237053 8.40326 0 9 0ZM11.8702 10.1903C11.6962 9.49275 10.7303 9.471 10.5075 10.125L10.488 10.1903L10.266 11.0805L9.375 11.3033C8.655 11.4832 8.655 12.5055 9.375 12.6855L10.266 12.9083L10.488 13.7985C10.668 14.5185 11.6902 14.5185 11.8702 13.7985L12.093 12.9083L12.984 12.6855C13.7025 12.5055 13.7025 11.4832 12.984 11.3033L12.093 11.0805L11.8702 10.1903ZM5.25 11.25C5.05109 11.25 4.86032 11.329 4.71967 11.4697C4.57902 11.6103 4.5 11.8011 4.5 12C4.5 12.1989 4.57902 12.3897 4.71967 12.5303C4.86032 12.671 5.05109 12.75 5.25 12.75H6.75C6.94891 12.75 7.13968 12.671 7.28033 12.5303C7.42098 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.42098 11.6103 7.28033 11.4697C7.13968 11.329 6.94891 11.25 6.75 11.25H5.25ZM5.25 9C5.05109 9 4.86032 9.07902 4.71967 9.21967C4.57902 9.36032 4.5 9.55109 4.5 9.75C4.5 9.94891 4.57902 10.1397 4.71967 10.2803C4.86032 10.421 5.05109 10.5 5.25 10.5H8.25C8.44891 10.5 8.63968 10.421 8.78033 10.2803C8.92098 10.1397 9 9.94891 9 9.75C9 9.55109 8.92098 9.36032 8.78033 9.21967C8.63968 9.07902 8.44891 9 8.25 9H5.25ZM5.25 6.75C5.05109 6.75 4.86032 6.82902 4.71967 6.96967C4.57902 7.11032 4.5 7.30109 4.5 7.5C4.5 7.69891 4.57902 7.88968 4.71967 8.03033C4.86032 8.17098 5.05109 8.25 5.25 8.25H12.75C12.9489 8.25 13.1397 8.17098 13.2803 8.03033C13.421 7.88968 13.5 7.69891 13.5 7.5C13.5 7.30109 13.421 7.11032 13.2803 6.96967C13.1397 6.82902 12.9489 6.75 12.75 6.75H5.25ZM9 1.5C8.80109 1.5 8.61032 1.57902 8.46967 1.71967C8.32902 1.86032 8.25 2.05109 8.25 2.25C8.25 2.44891 8.32902 2.63968 8.46967 2.78033C8.61032 2.92098 8.80109 3 9 3C9.19891 3 9.38968 2.92098 9.53033 2.78033C9.67098 2.63968 9.75 2.44891 9.75 2.25C9.75 2.05109 9.67098 1.86032 9.53033 1.71967C9.38968 1.57902 9.19891 1.5 9 1.5Z" fill="white" />
                            </svg>

                          </div>
                          <div>
                            <Link href="/blog" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >Blog</Link>
                            <p className="mb-0">News & industry trends</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ct_grid_2_flex">
                          <div className="ct_drop_title_icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5ZM9 12C8.80109 12 8.61032 12.079 8.46967 12.2197C8.32902 12.3603 8.25 12.5511 8.25 12.75C8.25 12.9489 8.32902 13.1397 8.46967 13.2803C8.61032 13.421 8.80109 13.5 9 13.5C9.19891 13.5 9.38968 13.421 9.53033 13.2803C9.67098 13.1397 9.75 12.9489 9.75 12.75C9.75 12.5511 9.67098 12.3603 9.53033 12.2197C9.38968 12.079 9.19891 12 9 12ZM9 4.875C8.27894 4.875 7.58742 5.16144 7.07755 5.6713C6.56769 6.18117 6.28125 6.87269 6.28125 7.59375C6.28125 7.79266 6.36027 7.98343 6.50092 8.12408C6.64157 8.26473 6.83234 8.34375 7.03125 8.34375C7.23016 8.34375 7.42093 8.26473 7.56158 8.12408C7.70223 7.98343 7.78125 7.79266 7.78125 7.59375C7.7815 7.37253 7.84195 7.15554 7.95614 6.96607C8.07032 6.77659 8.23392 6.62176 8.4294 6.51819C8.62488 6.41462 8.84487 6.3662 9.06577 6.37814C9.28667 6.39008 9.50015 6.46192 9.68333 6.58596C9.86651 6.70999 10.0125 6.88155 10.1056 7.08223C10.1987 7.28291 10.2354 7.50514 10.2118 7.7251C10.1882 7.94506 10.1052 8.15446 9.97164 8.33082C9.8381 8.50719 9.65907 8.64389 9.45375 8.72625C8.94675 8.92875 8.25 9.44775 8.25 10.3125V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61032 11.171 8.80109 11.25 9 11.25C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5C9.75 10.317 9.7875 10.2255 9.94575 10.1475L10.011 10.1175C10.5966 9.88192 11.082 9.44997 11.3841 8.89569C11.6861 8.34141 11.7859 7.69934 11.6663 7.07954C11.5468 6.45974 11.2154 5.90082 10.7289 5.4986C10.2425 5.09638 9.63122 4.87592 9 4.875Z" fill="white" />
                            </svg>

                          </div>
                          <div>
                            <Link href="/faqs" className="ct_fs_14 ct_fw_600" onClick={() => setIsMenuOpen(false)}
                            >FAQs</Link>
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
              <a href={process.env.NEXT_PUBLIC_LOGIN_URL || "http://72.60.203.98/login"} className="ct_get_started_btn"
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
