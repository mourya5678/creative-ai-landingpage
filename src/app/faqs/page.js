import { LOGIN_URL } from "@/config";
import Header from "@/components/Header";
import Link from "next/link";


export const metadata = {
      title: "Creative AI | AI App Builder for Mobile & Web Application",
      description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
      keywords: "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
};

export default function Page() {
      return (
            <>
                  <Header />


                  <section className="ct_faq_banner pt-0">
                        <div>


                        </div>
                        <div className="container-fluid mt-5 pt-3">
                              <div className="row">
                                    <div className="col-md-12">
                                          <div className="d-flex align-items-center justify-content-between ct_faq_title">
                                                <h2 className="ct_fs_44 ct_fw_600 text-white">Frequently asked questions</h2>
                                                <svg fill="none" height="146" viewBox="0 0 148 146" width="148" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M54.794 107.387C53.6033 107.631 52.5295 107.438 51.5725 106.808C50.6155 106.177 50.0283 105.333 49.8107 104.274C49.2396 101.496 48.8706 99.3654 48.7038 97.8829C48.0871 91.5288 48.943 85.6304 51.2715 80.1876C53.6 74.7449 57.0766 68.5146 61.7013 61.4968C65.2749 56.0739 67.821 51.6896 69.3395 48.3438C70.9903 44.9709 71.6217 41.6696 71.2336 38.44C70.6478 32.9068 67.9779 28.9742 63.2239 26.642C58.6022 24.2826 53.4468 23.6877 47.7579 24.857C34.9246 27.495 28.504 35.5025 28.4959 48.8796C28.1953 52.1129 26.5897 54.0287 23.679 54.627L6.41372 58.176C5.09071 58.4479 3.87096 58.216 2.75449 57.4803C1.77032 56.7174 1.12866 55.6082 0.82951 54.1529C-0.401622 46.822 0.380797 39.5597 3.17676 32.3662C6.10504 25.1455 11.0777 18.8145 18.0948 13.3733C25.0848 7.79973 33.8718 3.92515 44.4559 1.74953C55.4369 -0.507666 64.8005 -0.570867 72.5467 1.55992C80.3981 3.53122 86.4688 6.9027 90.7591 11.6744C95.1816 16.4188 97.9912 21.7017 99.1877 27.523C100.548 34.138 100.209 40.2059 98.1723 45.7265C96.2679 51.2199 93.0578 57.7402 88.5419 65.2872C85.2329 70.6557 82.7276 75.2385 81.0261 79.0355C79.4296 82.6731 78.6152 86.4256 78.5829 90.2932C78.7336 93.7096 78.8651 96.0267 78.9776 97.2446C78.6696 99.1005 78.2003 100.507 77.5697 101.464C76.9391 102.421 75.8961 103.049 74.4408 103.348L54.794 107.387ZM61.9085 145.016C60.5855 145.288 59.3658 145.056 58.2493 144.321C57.1328 143.585 56.4386 142.556 56.1666 141.232L52.5361 123.57C52.2641 122.247 52.496 121.028 53.2318 119.911C53.9675 118.795 54.9969 118.1 56.3199 117.828L75.9666 113.79C77.2896 113.518 78.5094 113.75 79.6259 114.486C80.8746 115.194 81.635 116.21 81.907 117.533L85.5375 135.195C85.8095 136.518 85.5776 137.738 84.8418 138.854C84.1061 139.971 83.0106 140.679 81.5552 140.978L61.9085 145.016Z" fill="white"></path>
                                                      <path d="M112.139 83.4169C111.697 83.1985 111.403 82.8694 111.254 82.4296C111.106 81.9898 111.128 81.5738 111.323 81.1816C111.832 80.152 112.245 79.3797 112.561 78.8647C113.947 76.6818 115.69 75.0113 117.789 73.8531C119.889 72.695 122.551 71.5713 125.776 70.482C128.268 69.6404 130.173 68.8744 131.492 68.1842C132.859 67.5182 133.883 66.6212 134.564 65.4931C135.755 63.5801 135.882 61.659 134.945 59.73C134.056 57.8252 132.558 56.351 130.45 55.3073C125.694 52.953 121.649 53.9109 118.314 58.181C117.413 59.1388 116.423 59.3506 115.344 58.8167L108.946 55.6492C108.456 55.4065 108.124 55.0286 107.951 54.5155C107.827 54.0267 107.898 53.5127 108.165 52.9734C109.598 50.3255 111.657 48.2011 114.342 46.6002C117.076 45.0236 120.241 44.2405 123.837 44.2507C127.458 44.2119 131.229 45.1634 135.152 47.1051C139.221 49.1196 142.227 51.4319 144.17 54.042C146.186 56.6274 147.285 59.2163 147.467 61.8089C147.697 64.4258 147.279 66.8128 146.211 68.97C144.997 71.4213 143.377 73.2749 141.352 74.5306C139.375 75.8106 136.726 77.0933 133.404 78.3786C131.01 79.2688 129.068 80.1083 127.579 80.8971C126.163 81.6611 124.968 82.6567 123.994 83.8838C123.191 85.0124 122.656 85.7852 122.388 86.2021C121.828 86.7181 121.328 87.0504 120.888 87.1989C120.448 87.3474 119.958 87.2882 119.419 87.0212L112.139 83.4169ZM105.037 97.2067C104.547 96.964 104.215 96.5861 104.042 96.073C103.869 95.5599 103.903 95.0583 104.146 94.568L107.386 88.023C107.629 87.5327 108.007 87.2009 108.52 87.0276C109.033 86.8543 109.535 86.8891 110.025 87.1318L117.305 90.7361C117.796 90.9788 118.127 91.3567 118.301 91.8698C118.523 92.4071 118.513 92.9209 118.27 93.4112L115.03 99.9562C114.787 100.447 114.409 100.778 113.896 100.952C113.383 101.125 112.857 101.078 112.318 100.811L105.037 97.2067Z" fill="white" opacity="0.5"></path>
                                                </svg>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="ct_mt_100 ct_mb_100">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-4 mb-md-0 mb-4">
                                          <div className="position-sticky top-0">
                                                <div className="ct_table_of_contents">
                                                      <h5 className="ct_fs_18 ct_fw_700">Table of contents</h5>
                                                      <ul>
                                                            <li>
                                                                  <a href="#About_Creative">About Creative AI</a>
                                                            </li>
                                                            <li>
                                                                  <a href="#Pricing">Pricing</a>
                                                            </li>
                                                            <li>
                                                                  <a href="#App_development">App development time</a>
                                                            </li>
                                                            <li>
                                                                  <a href="#Support">Support</a>
                                                            </li>
                                                            <li>
                                                                  <a href="#Custom_features">Custom features</a>
                                                            </li>
                                                            <li>
                                                                  <a href="#How_to_build">How to build</a>
                                                            </li>
                                                      </ul>
                                                </div>
                                                <div className="ct_creative_ai_dlt_card_blue">
                                                      <h5 className="ct_fs_18 ct_fw_700 mb-2">Who is Creative AI?</h5>
                                                      <p className="ct_fs_16 ct_line_h_25">We are on a mission to unlock everyone’s potential
                                                            with
                                                            the
                                                            power
                                                            of software!
                                                            Our combined
                                                            approach of AI, automation and talented humans means that your background,
                                                            tech
                                                            knowledge or
                                                            budget will never hold you back.</p>
                                                      <Link className="ct_link_green ct_link_blue" href="/why-creative-ai">How we use AI</Link>
                                                </div>
                                                <div className="mt-4">
                                                      <a className="ct_blue_btn_fill w-100" >Talk to an expert</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-8 mb-md-0 mb-4">
                                          <div className="ct_faq_question_main" id="About_Creative">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">About Creative AI</h2>
                                                </div>
                                                <div className="accordion" id="faq_accordionExample">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one">
                                                                  <button aria-controls="collapsefaq_one" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one" data-bs-toggle="collapse" type="button">
                                                                        What is Creative AI?
                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample" id="collapsefaq_one">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Creative AI is an end-to-end AI app builder that transforms user requirements into fully functional applications, handling everything from idea understanding to final deployment.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo">
                                                                  <button aria-controls="collapseTwo" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two" data-bs-toggle="collapse" type="button">
                                                                        What does creative AI actually do?
                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample" id="collapsefaq_Two">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              It analyzes your input, understands project intent, and generates complete project solutions, including UI, workflows, and backend structure, automatically.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree">
                                                                  <button aria-controls="collapsefaq_Three" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three" data-bs-toggle="collapse" type="button">
                                                                        Who can use Creative AI?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample" id="collapsefaq_Three">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Startups, SMBs, developers, and non-technical users can all use creative AI to quickly build and launch digital products without complex coding.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="ct_faq_question_main mt-5" id="Pricing">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">Pricing</h2>

                                                </div>
                                                <div className="accordion" id="faq_accordionExample11">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one11">
                                                                  <button aria-controls="collapsefaq_one11" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one11" data-bs-toggle="collapse" type="button">
                                                                        How does creative AI pricing work?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one11" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample11" id="collapsefaq_one11">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Creative AI follows a subscription-based model where users can create multiple projects and explore different app variations.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo22">
                                                                  <button aria-controls="collapseTwo" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two22" data-bs-toggle="collapse" type="button">
                                                                        Are there any hidden charges?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo22" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample11" id="collapsefaq_Two22">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              No, pricing is transparent. Users pay for the subscription plan they choose, with optional costs only for advanced custom requirements.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree33">
                                                                  <button aria-controls="collapsefaq_Three33" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three33" data-bs-toggle="collapse" type="button">
                                                                        Can I get custom enterprise pricing?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree33" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample11" id="collapsefaq_Three33">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, businesses with advanced needs can request tailored enterprise pricing based on project scope and usage.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="ct_faq_question_main mt-5" id="App_development">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">App development time</h2>

                                                </div>
                                                <div className="accordion" id="faq_accordionExample33">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one33">
                                                                  <button aria-controls="collapsefaq_one44" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one44" data-bs-toggle="collapse" type="button">
                                                                        How fast can I build an app using creative AI?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one33" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample33" id="collapsefaq_one44">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Apps can be generated in a fraction of traditional development time since the AI app builder automates most of the process.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo33">
                                                                  <button aria-controls="collapsefaq_Two33" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two33" data-bs-toggle="collapse" type="button">
                                                                        Do I need coding knowledge?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo33" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample33" id="collapsefaq_Two33">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              No, Creative AI is a no-code AI app builder, so you can create apps without any programming skills.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree333">
                                                                  <button aria-controls="collapsefaq_Three333" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three333" data-bs-toggle="collapse" type="button">
                                                                        Can I update my app after generating it?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree333" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample33" id="collapsefaq_Three333">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, you can easily customize, modify, and regenerate parts of your project anytime.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="ct_faq_question_main mt-5" id="Support">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">Support</h2>

                                                </div>
                                                <div className="accordion" id="faq_accordionExample_new">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one_new">
                                                                  <button aria-controls="collapsefaq_one_new" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one_new" data-bs-toggle="collapse" type="button">
                                                                        What kind of support do I get?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one_new" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample_new" id="collapsefaq_one_new">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              You get full support, including guidance, troubleshooting, and help from the Creative AI team.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo_new">
                                                                  <button aria-controls="collapsefaq_Two_new" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two_new" data-bs-toggle="collapse" type="button">
                                                                        Can I talk to someone directly?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo_new" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new" id="collapsefaq_Two_new">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, users can connect with the team through calls for detailed discussion and requirement clarity.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree_new">
                                                                  <button aria-controls="collapsefaq_Three_new" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three_new" data-bs-toggle="collapse" type="button">
                                                                        Is support available for complex projects?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree_new" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new" id="collapsefaq_Three_new">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, the team helps with advanced requirements, custom workflows, and enterprise-level solutions.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="ct_faq_question_main mt-5" id="Custom_features">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">Custom features</h2>

                                                </div>
                                                <div className="accordion" id="faq_accordionExample_new_22">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one_new_2">
                                                                  <button aria-controls="collapsefaq_one_new_2" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one_new_2" data-bs-toggle="collapse" type="button">
                                                                        Can I add custom features to my app?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one_new_2" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample_new_22" id="collapsefaq_one_new_2">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, Creative AI allows you to request advanced custom features based on your business needs.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo_new_22">
                                                                  <button aria-controls="collapsefaq_Two_new_22" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two_new_22" data-bs-toggle="collapse" type="button">
                                                                        How are custom features implemented?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo_new_22" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new_22" id="collapsefaq_Two_new_22">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              You share your requirements, and the team designs and integrates tailored solutions into your project.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree_new_22">
                                                                  <button aria-controls="collapsefaq_Three_new_22" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three_new_22" data-bs-toggle="collapse" type="button">
                                                                        Are integrations supported?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree_new_22" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new_22" id="collapsefaq_Three_new_22">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, you can request API integrations, workflow enhancements, and other advanced custom functionalities.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="ct_faq_question_main mt-5" id="How_to_build">
                                                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap ct_mb_34">
                                                      <h2 className="ct_fs_24 ct_fw_700">How to build</h2>

                                                </div>
                                                <div className="accordion" id="faq_accordionExample_new_33">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faq_one_new_44">
                                                                  <button aria-controls="collapsefaq_one_new_44" aria-expanded="true" className="accordion-button" data-bs-target="#collapsefaq_one_new_44" data-bs-toggle="collapse" type="button">
                                                                        How do I start building with Creative AI?

                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faq_one_new_44" className="accordion-collapse collapse show" data-bs-parent="#faq_accordionExample_new_33" id="collapsefaq_one_new_44">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Simply submit your idea or requirements, and the AI app builder will generate your project automatically.

                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqtwo_new_55">
                                                                  <button aria-controls="collapsefaq_Two_new_55" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Two_new_55" data-bs-toggle="collapse" type="button">
                                                                        What happens after I submit my idea?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqtwo_new_55" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new_33" id="collapsefaq_Two_new_55">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              The system analyzes your input, builds the structure, and provides a ready-to-customize application.


                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header" id="faqthree_new_66">
                                                                  <button aria-controls="collapsefaq_Three_new_66" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapsefaq_Three_new_66" data-bs-toggle="collapse" type="button">
                                                                        Can I deploy my app directly?


                                                                  </button>
                                                            </h2>
                                                            <div aria-labelledby="faqthree_new_66" className="accordion-collapse collapse" data-bs-parent="#faq_accordionExample_new_33" id="collapsefaq_Three_new_66">
                                                                  <div className="accordion-body">
                                                                        <p className="ct_fs_16 mb-3 ct_line_h_30">
                                                                              Yes, once your project is ready and refined, you can deploy it directly from the platform with full support.
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
                  <hr className="ct_break_line" />
                  <section className="ct_pb_50 ct_pt_50">
                        <div className="container">
                              <div className="col-md-12">
                                    <div className="ct_free_demo_bg">
                                          <h2 className="ct_fs_38 text-center ct_fw_600 text-white mb-2 mx-auto">Create Your AI App in Minutes
                                          </h2>
                                          <p className="ct_fs_17 mb-0 text-center text-white mx-auto" style={{ maxWidth: "600px" }}>Turn your imagination into fully functional AI apps with Creative AI and bring your vision to life instantly.
                                          </p>
                                          <div className="text-center mt-4">
                                                <a className="ct_blue_btn_fill ct_white_btn" href={LOGIN_URL}>Launch Your App
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      );
}
