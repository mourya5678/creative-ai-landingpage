import Link from "next/link";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 mb-md-0 mb-3">
                        <div className="row">
                            <div className="col-lg-5">
                                <div>
                                    <img src="/img/cti_white_new_logo.webp" className="mb-3" />
                                    <p className="ct_fs_20 ct_fw_500 mb-0 text-white ct_satoshi_medium"
                                        style={{ maxWidth: "225px" }}>
                                        Everything you need to build, launch, and grow online.
                                    </p>
                                </div>
                                <ul className="social-icon">
                                    <li>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-facebook"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-instagram"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-youtube"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
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
                            {/* <li>
                                <Link href="/contact">Contact Us</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
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
                </div>
                <div
                    className="d-flex flex-wrap justify-content-lg-between justify-content-center gap-4 ct_mt_60">
                    <div>
                        <Link
                            href="/terms-condition"
                            className="text-decoration-none text-white ct_fs_16 ct_fw_500 ct_delight_medium"
                        >Terms of Service
                        </Link>
                    </div>
                    <div className="order-lg-0 order-3">
                        <p className="text-white ct_fs_16 ct_fw_500 mb-0 text-center ct_delight_medium">
                            &#64; 2026 Creative AI. All Rights Reserved.
                        </p>
                    </div>
                    <div className="order-lg-0 order-2">
                        <Link href="/privacy-policy" className="text-decoration-none text-white ct_fs_16 ct_fw_500 ct_delight_medium">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="pt-5 px-4">
                <img src="/img/footer.webp" className="w-100" />
            </div>
        </footer>
    );
};