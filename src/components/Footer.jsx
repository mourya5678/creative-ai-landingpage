"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleStateChange = (e) => {
            setIsMenuOpen(e.detail.open);
        };
        window.addEventListener("sidebar-state-changed", handleStateChange);
        return () => window.removeEventListener("sidebar-state-changed", handleStateChange);
    }, []);

    return (
        <>

            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-lg-0 mb-3">
                            <div>
                                <img src="/img/cti_white_new_logo.webp" className="mb-3" alt="Creative AI white branding logo" width={140} height={28} />
                                <p className="ct_fs_20 ct_fw_500 mb-0 text-white ct_satoshi_medium"
                                    style={{ maxWidth: "277px" }}>
                                    Everything you need to build, launch, and grow online.
                                </p>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <a href="https://www.linkedin.com/company/creativethoughtsai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/CTInformatics" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/creative.ai__official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@creative.ai_official" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3 mb-md-0">
                            <h5 className="ct_fw_700 ct_fs_18 text-white mb-3 text-uppercase ct_satoshi_bold">
                                resources
                            </h5>
                            <ul className="all-link-block">
                                <li>
                                    <Link href="/blog">Blogs</Link>
                                </li>
                                <li>
                                    <Link href="/our-projects">Our Projects</Link>
                                </li>
                                {/* <li>
                                    <Link href="/faqs">FAQs</Link>
                                </li> */}
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3 mb-md-0">
                            <h5 className="ct_fw_700 ct_fs_18 text-white mb-3 text-uppercase ct_satoshi_bold">
                                company
                            </h5>
                            <ul className="all-link-block">
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                {/* <li>
                                <Link href="/careers">Careers</Link>
                            </li> */}
                                <li>
                                    {/* <Link href="/pricing">Pricing</Link> */}
                                    <Link href="/why-creative-ai">Why Creative AI</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3 mb-md-0">
                            <h5 className="ct_fw_700 ct_fs_18 text-white mb-3 text-uppercase ct_satoshi_bold">
                                Legal
                            </h5>
                            <ul className="all-link-block">
                                <li>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-use">Terms of Use</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-wrap justify-content-lg-center justify-content-center gap-4 ct_mt_60">
                        {/* <div>
                        <Link
                            href="/terms-of-use"
                            className="text-decoration-none text-white ct_fs_16 ct_fw_500 ct_delight_medium"
                        >Terms of Service
                        </Link>
                    </div> */}
                        <div className="order-lg-0 text-center ">
                            <p className="text-white ct_fs_16 ct_fw_500 mb-0 text-center ct_delight_medium">
                                &#64; 2026 Creative AI. All Rights Reserved.
                            </p>
                        </div>
                        {/* <div className="order-lg-0 order-2">
                        <Link href="/privacy-policy" className="text-decoration-none text-white ct_fs_16 ct_fw_500 ct_delight_medium">Privacy Policy</Link>
                    </div> */}
                    </div>
                </div>
                <div className="pt-lg-5 pt-3 px-4">
                    <img src="/img/footer.webp" className="w-100 ct_footer_watermark_logo" alt="Footer decorative wave background" width={1375} height={174} />
                </div>
            </footer>


            <div className={`ct_navbar-bottom ${isMenuOpen ? "ct_show" : ""}`}>
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={pathname === "/" ? "active" : ""}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10M21 12L12 3L3 12" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className={pathname === "/about-us" ? "active" : ""}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="11.9999" r="9" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="12" y="8" width="0.01" height="0.01" stroke="#ababab" strokeWidth="3" strokeLinejoin="round" />
                                <path d="M12 12V16" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <span>About Us</span>
                        </Link>
                    </li>

                    <li className="">
                        <Link
                            href="/pricing"
                            className={pathname === "/pricing" ? "active" : ""}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1719 3C11.9674 3.00008 12.7304 3.31637 13.293 3.87891L20.293 10.8789C21.4643 12.0504 21.4643 13.9496 20.293 15.1211L15.1211 20.293C13.9496 21.4643 12.0504 21.4643 10.8789 20.293L3.87891 13.293C3.31637 12.7304 3.00008 11.9674 3 11.1719V4C3 3.44772 3.44772 3 4 3H11.1719ZM9 7.5C8.17157 7.5 7.5 8.17157 7.5 9V9.00977C7.5 9.83819 8.17157 10.5098 9 10.5098H9.00977C9.83819 10.5098 10.5098 9.83819 10.5098 9.00977V9C10.5098 8.17157 9.83819 7.5 9.00977 7.5H9Z" stroke="#ababab" />
                            </svg>


                            <span>Pricing</span>
                        </Link>
                    </li>
                    <li>
                        <div
                            className={`ct_hamburger d-block ${isMenuOpen ? "active" : ""}`}
                            id="hamburger-12"
                            onClick={() => window.dispatchEvent(new CustomEvent("toggle-sidebar", { detail: { open: !isMenuOpen } }))}
                            role="button"
                            aria-label="Open navigation menu"
                            tabIndex={0}
                        >
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 17H19M5 12H19M5 7H19" stroke="#ababab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="d-block">More</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};
