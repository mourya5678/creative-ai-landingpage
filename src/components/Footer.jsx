import Link from "next/link";

export default function Footer() {
    return (
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
                    <div className="col-lg-2 col-md-3 col-6 mb-3 mb-md-0">
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
                            <li>
                                <Link href="/faqs">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-3 mb-md-0">
                        <h5 className="ct_fw_700 ct_fs_18 text-white mb-3 text-uppercase ct_satoshi_bold">
                            company
                        </h5>
                        <ul className="all-link-block">
                            <li>
                                <Link href="/our-story">About Us</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                            <li>
                                {/* <Link href="/pricing">Pricing</Link> */}
                                <Link href="/why-creative-ai">Why Creative AI</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mb-3 mb-md-0">
                        <h5 className="ct_fw_700 ct_fs_18 text-white mb-3 text-uppercase ct_satoshi_bold">
                            Legal
                        </h5>
                        <ul className="all-link-block">
                            <li>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-condition">Terms of Service</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div
                    className="d-flex flex-wrap justify-content-lg-center justify-content-center gap-4 ct_mt_60">
                    {/* <div>
                        <Link
                            href="/terms-condition"
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
            <div className="pt-5 px-4">
                <img src="/img/footer.webp" className="w-100" alt="Footer decorative wave background" width={1375} height={174} />
            </div>
        </footer>
    );
};
