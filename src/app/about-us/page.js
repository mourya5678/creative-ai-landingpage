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

<div className="col-lg-3">
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
       
      <div className="col-lg-9">
           <section id="section-intro" className="content-card">
          <h2>Building the Future of AI-Powered Websites and Business Applications</h2>
          <p>Creative AI is an AI-powered website and application builder that helps businesses turn ideas into professional digital products without the complexity of traditional development.</p>
          <p>We believe creating a website or business application should be simple, fast, and accessible. Instead of spending weeks designing, writing code, configuring tools, and managing development, users can describe what they want to build, and Creative AI generates the foundation in minutes.</p>
          <p>From business websites and landing pages to customer portals, internal systems, and AI-powered web applications, our platform is built to help businesses launch faster and grow with confidence.</p>
          <p>At Creative AI, our mission is to make modern technology accessible to everyone, regardless of technical expertise. By combining artificial intelligence with intuitive workflows, we help entrepreneurs, startups, agencies, and businesses focus less on building software and more on growing their business.</p>
          <p>As AI continues to reshape how digital products are created, Creative AI is committed to building a platform that makes launching, managing, and scaling websites and business applications faster, smarter, and more efficient.</p>
        </section>

        <section id="section-mission" className="content-card">
          <h2>Our Mission</h2>
          <p>Technology should help people build faster, not become another obstacle.</p>
          <p>Our mission is to remove the complexity of website and application development by making AI the starting point of every project. We believe entrepreneurs, small businesses, startups, agencies, and creators should be able to launch professional digital products without learning code or managing complicated development workflows. Creative AI exists to give every business access to modern technology, regardless of technical expertise.</p>
        </section>

        <section id="section-why-exists" className="content-card">
          <h2>Why Creative AI Exists</h2>
          <p>Traditional web development is slow, expensive, and often requires specialized teams. Most small businesses and independent creators either spend months learning to build it themselves or spend thousands of dollars hiring developers and agencies.</p>
          <p>Creative AI exists to close that gap — turning ideas into working digital products in minutes instead of weeks, without sacrificing quality or flexibility.</p>
        </section>

        <section id="section-what-we-build" className="content-card">
          <h2>What We Build</h2>
          <p>From simple landing pages to full business applications, Creative AI supports a wide range of digital products: marketing websites, customer portals, internal dashboards, booking systems, and AI-powered tools tailored to each business's needs.</p>
        </section>

        <section id="section-why-choose" className="content-card">
          <h2>Why Businesses Choose Creative AI</h2>
          <p>Businesses choose Creative AI because it removes the biggest barriers to launching online: cost, time, and technical complexity. With an intuitive, AI-guided process, teams of any size can go from idea to live product without hiring a full development team.</p>
        </section>
      </div>

       
      

      </div>
</div>
</section>








      </>
   );
}
