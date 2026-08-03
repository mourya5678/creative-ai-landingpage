import { LOGIN_URL } from "@/config";
import Header from "@/components/Header";
import Link from "next/link";
import { OurStorySlidersInit } from "@/components/PageInitializers";
import Image from "next/image";

export const metadata = {
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  keywords: "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
};


export default function Page() {
  return (
    <>
      <Header />
      <OurStorySlidersInit />
      <section className="about_us_banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 mx-auto">
              <div className="ct_inner_banner_w_bg">
                <h1 className="ct_fs_75 ct_fw_400 mb-2 text-center text-white">
                  About Creative AI
                </h1>
                <p className="cti_fs_22 ct_fw_400 mb-0 text-center ct_clr_D9D9D9">
                  Discover how Creative AI empowers businesses with innovative AI solutions, cutting-edge technology, and digital transformation expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_pt_76 pb-5">
        <div className="container">
          <div className="row docs-row">

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="sidebar">
                <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                  <span className="toc-heading ct_fs_16 ct_fw_400 text-uppercase">Table of Contents</span>

                </div>
                <ul className="toc-list nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link default-active" href="#section-intro">Building the Future of AI-Powe...</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-mission">Our Mission</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-why-exists">Why Creative AI Exists</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-what-we-build">What We Build</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-why-choose">Why Businesses Choose Creative AI</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9 mb-4 mb-lg-0">
              <section id="section-intro" className="content-card">
                <h2>Building the Future of AI-Powered Websites and Business Applications</h2>
                <p>Creative AI is an AI-powered website and application builder that helps businesses turn ideas into professional digital products without the complexity of traditional development.
                </p>
                <p>We believe creating a website or business application should be simple, fast, and accessible. Instead of spending weeks designing, writing content, configuring tools, and managing development, users can describe what they want to build, and Creative AI generates the foundation in minutes.</p>
                <p>From business websites and landing pages to customer portals, internal systems, and AI-powered web applications, our platform is built to help businesses launch faster and grow with confidence.
                </p>
                <p>At Creative AI, our mission is to make modern technology accessible to everyone, regardless of technical expertise. By combining artificial intelligence with intuitive workflows, we help entrepreneurs, startups, agencies, and businesses focus less on building software and more on building their business.</p>
                <p>As AI continues to reshape how digital products are created, Creative AI is committed to building a platform that makes launching, managing, and scaling websites and business applications faster, smarter, and more efficient.
                </p>
              </section>

              <section id="section-mission" className="content-card">
                <h2>Our Mission</h2>
                <p>Technology should help people build faster, not become another obstacle.</p>
                <p>Our mission is to remove the complexity of website and application development by making AI the starting point of every project. We believe entrepreneurs, small businesses, startups, agencies, and creators should be able to launch professional digital products without learning code or managing complicated development workflows. Creative AI exists to give every business access to modern technology, regardless of technical expertise.</p>
              </section>

              <section id="section-why-exists" className="content-card">
                <h2>Why Creative AI Exists</h2>
                <p>The internet has no shortage of website builders.
                </p>
                <p>The problem is that most still expect users to become designers, developers, content writers, SEO specialists, and project managers.
                </p>
                <p>Traditional website creation often involves multiple tools, freelancers, revisions, plugins, integrations, and weeks of development before a business can go live.
                </p>
                <p>We believed there had to be a better approach. Instead of asking users to build websites manually, we built an AI platform that creates them automatically. Describe your business.
                </p>
                <p>Our AI understands your requirements and generates the foundation for a complete digital product, allowing you to spend less time building and more time growing your business.
                </p>
              </section>

              <section id="section-what-we-build" className="content-card">
                <h2>What We Build</h2>
                <p>Creative AI is more than an AI website builder.
                </p>
                <p>It is a platform designed to generate complete digital experiences for businesses across industries.
                </p>
                <p>
                  Using AI, users can build:
                </p>
                <ul>
                  <li>Business Websites</li>
                  <li>AI Landing Pages</li>
                  <li>Portfolio Websites </li>
                  <li>Ecommerce Stores</li>
                  <li>Customer Portals</li>
                  <li>Employee Portals</li>
                  <li>Restaurant Ordering Systems</li>



                  <li>Booking Platforms </li>


                  <li>Appointment Systems </li>
                  <li>Learning Platforms </li>

                  <li>Healthcare Portals </li>
                  <li>Inventory Management Systems</li>
                  <li>HR Management Software</li>
                  <li>CRM Applications</li>
                  <li>Admin Dashboards</li>
                  <li>Internal Business Tools</li>
                  <li>AI Web Applications</li>

                </ul>
                <p>Every project starts with a prompt and evolves into a production-ready foundation that can be customized, expanded, and published.
                </p>
              </section>

              <section id="section-why-choose" className="content-card">
                <h2>Why Businesses Choose Creative AI</h2>

                <p className="mb-0"><strong>AI-First Experience</strong></p>
                <p>Generate websites and business applications through natural language instead of manual development.</p>


                <p className="mb-0"><strong>Faster Time to Launch</strong></p>
                <p>Reduce weeks of planning, design, and development into minutes.</p>


                <p className="mb-0"><strong>Professional Design</strong></p>
                <p>Modern layouts designed for usability, responsiveness, and conversion.</p>
                <p className="mb-0"><strong>SEO-Ready Foundation</strong></p>
                <p>Generate search engine friendly page structures, semantic HTML, optimized content, and scalable architecture from the beginning.</p>
                <p className="mb-0"><strong>Business-Focused</strong></p>
                <p>Designed for real businesses that need websites capable of generating leads, sales, bookings, and customer engagement.</p>
                <p className="mb-0"><strong>Built to Scale</strong></p>
                <p>Start with a website today and expand into portals, dashboards, internal systems, and business applications as your business grows.</p>
              </section>


              <section id="section-our-philosophy" className="content-card">
                <h2>Why Businesses Choose Creative AI</h2>
                <p>Technology should empower creativity, not replace it.</p>
                <p>Artificial intelligence works best when it removes repetitive work while allowing people to focus on ideas, strategy, and innovation.</p>
                <p>Creative AI combines automation with flexibility so businesses can launch quickly while maintaining complete control over their digital presence.</p>
                <p>We believe the future belongs to businesses that can turn ideas into reality faster than ever before.
                </p>
              </section>


              <section id="section-our-values" className="content-card">
                <h2>Our Values</h2>

                <p className="mb-0"><strong>Innovation First</strong></p>
                <p>We continuously explore how artificial intelligence can simplify digital creation.</p>


                <p className="mb-0"><strong>Customer Success</strong></p>
                <p>Every feature is designed to help businesses launch, grow, and scale more efficiently.</p>


                <p className="mb-0"><strong>Simplicity</strong></p>
                <p>Powerful technology should feel intuitive from the first interaction.</p>
                <p className="mb-0"><strong>Quality by Design</strong></p>
                <p>Every generated project should provide a professional foundation that businesses can confidently build upon.</p>
                <p className="mb-0"><strong>Continuous Improvement</strong></p>
                <p>We believe software should evolve with the needs of modern businesses.</p>

              </section>
            </div>




          </div>
        </div>
      </section>








    </>
  );
}
