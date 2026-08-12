import Link from "next/link";

export default function Footer() {
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
                                    <a href="https://www.instagram.com/creative.ai_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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


            <div className="ct_navbar-bottom">
                <ul>
                    <li>
                        <Link
                            href="/"

                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 19H9V14C9 13.7167 9.096 13.4793 9.288 13.288C9.48 13.0967 9.71733 13.0007 10 13H14C14.2833 13 14.521 13.096 14.713 13.288C14.905 13.48 15.0007 13.7173 15 14V19H18V10L12 5.5L6 10V19ZM4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.355 8.81667 4.55067 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.93 9.38333 20.0007 9.68333 20 10V19C20 19.55 19.804 20.021 19.412 20.413C19.02 20.805 18.5493 21.0007 18 21H14C13.7167 21 13.4793 20.904 13.288 20.712C13.0967 20.52 13.0007 20.2827 13 20V15H11V20C11 20.2833 10.904 20.521 10.712 20.713C10.52 20.905 10.2827 21.0007 10 21H6C5.45 21 4.97933 20.8043 4.588 20.413C4.19667 20.0217 4.00067 19.5507 4 19Z" fill="black" />
                            </svg>

                            Home
                        </Link>
                    </li>
                    <li>

                        <Link
                            href="/why-creative-ai"

                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4498 11.11L18.4498 9.61L15.7498 8.26L14.3998 5.56L12.8998 2.56C12.5598 1.88 11.4498 1.88 11.1098 2.56L9.60977 5.56L8.25977 8.26L5.55977 9.61L2.55977 11.11C2.21977 11.28 2.00977 11.63 2.00977 12C2.00977 12.37 2.21977 12.72 2.55977 12.89L5.55977 14.39L8.25977 15.74L9.60977 18.44L11.1098 21.44C11.2798 21.78 11.6298 21.99 11.9998 21.99C12.3698 21.99 12.7298 21.78 12.8898 21.44L14.3898 18.44L15.7398 15.74L18.4398 14.39L21.4398 12.89C21.7798 12.72 21.9898 12.37 21.9898 12C21.9898 11.63 21.7798 11.28 21.4398 11.11H21.4498ZM17.5598 12.61L16.7198 13.03L14.5598 14.11L14.2598 14.26L14.1098 14.56L11.9998 18.77L9.88977 14.56L9.73977 14.26L9.43976 14.11L7.27977 13.03L6.43977 12.61L5.22977 12L6.43977 11.39L7.27977 10.97L9.43976 9.89L9.73977 9.74L9.88977 9.44L11.9998 5.23L14.1098 9.44L14.2598 9.74L14.5598 9.89L16.7198 10.97L17.5598 11.39L18.7698 12L17.5598 12.61ZM19.4998 1.5L18.5598 3.56L16.4998 4.5L18.5598 5.44L19.4998 7.5L20.4398 5.44L22.4998 4.5L20.4398 3.56L19.4998 1.5Z" fill="black" />
                            </svg>

                            Why Creative AI
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12ZM12 4C13.65 4 15 5.35 15 7C15 8.65 13.65 10 12 10C10.35 10 9 8.65 9 7C9 5.35 10.35 4 12 4ZM4 22H20C20.55 22 21 21.55 21 21V20C21 16.14 17.86 13 14 13H10C6.14 13 3 16.14 3 20V21C3 21.55 3.45 22 4 22ZM10 15H14C16.76 15 19 17.24 19 20H5C5 17.24 7.24 15 10 15Z" fill="black" />
                            </svg>


                            About Us
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/pricing" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.656 19.999 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2.001 17.656 2 15.771 2 12Z" stroke="black" strokeWidth="1.5" />
                                <path d="M10 16H6M14 16H12.5M2 10H22" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>


                            Pricing
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
