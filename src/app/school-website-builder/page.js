import { getBlogs } from "@/utils/blogs";
import { getPlans } from "@/utils/plans";
import Header from "@/components/Header";
import { HomeInit } from "@/components/PageInitializers";
import HomePricingSection from "@/components/HomePricingSection";
import FAQAccordion from "@/components/FAQAccordion";
import { API_URL } from "@/config";

import IndustryHero from "@/components/IndustryHero";
import FeatureCardsGrid from "@/components/FeatureCardsGrid";
import SolutionColumns from "@/components/SolutionColumns";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonTable from "@/components/ComparisonTable";
import OwnershipSection from "@/components/OwnershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogsSection from "@/components/BlogsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import defaultHowItWorksSteps from "@/utils/data/HowItWorksSteps";
import testimonials from "@/utils/data/Testimonials";
import {
  studentFeatures,
  studentSolutionColumns,
  studentComparisonRows,
  studentFAQItems,
} from "@/utils/data/AllPagesData";
export const metadata = {
  title: "School Website Builder | AI Education Website Creator",
  description: "Build a school website with AI. Add student portals, admissions, courses, and school features without coding or developers.",
};

export const dynamic = "force-dynamic";



export default async function RestaurantPage() {
  const monthlyPlans = await getPlans("MONTH");
  const yearlyPlans = await getPlans("YEAR");
  const blogs = await getBlogs();

  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://creativethoughts.ai/school-website-builder#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://creativethoughts.ai/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "School Website Builder",
                "item": "https://creativethoughts.ai/school-website-builder"
              }
            ]
          })
        }}
      />
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://creativethoughts.ai/school-website-builder#webpage",
            "url": "https://creativethoughts.ai/school-website-builder",
            "name": "School Website Builder | Creative AI",
            "description": "Build a professional school website with student portals, online admissions, faculty profiles, course management, announcements, and school administration tools using Creative AI.",
            "isPartOf": {
              "@id": "https://creativethoughts.ai/#website"
            },
            "about": {
              "@id": "https://creativethoughts.ai/#organization"
            },
            "publisher": {
              "@id": "https://creativethoughts.ai/#organization"
            },
            "mainEntity": {
              "@id": "https://creativethoughts.ai/#organization"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": studentFAQItems.map((item) => ({
              "@type": "Question",
              "name": item.question.trim(),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.trim(),
              },
            })),
          }),
        }}
      />
      <HomeInit />
      <Header />

      <IndustryHero
        title="AI Website Builder for Schools and Student Portal"
        description="Build a modern school website with AI and manage admissions, students, courses, faculty, announcements, and communication from one intelligent platform."
        image="/img/school_banner (2).webp"
      />

      <FeatureCardsGrid
        title="Everything Your School Needs in One Platform"
        description="Build a professional school website, simplify admissions, connect students and parents, and manage daily academic operations with one AI-powered platform."
        features={studentFeatures}
      />

      <SolutionColumns title="Complete Solutions For Your School" columns={studentSolutionColumns} />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable title="Why Schools Choose Creative AI" rows={studentComparisonRows} />

      <OwnershipSection />

      <TestimonialsSection testimonials={testimonials} title={
        <>
          Trusted By Founders Worldwide
        </>
      }
        newClass="pt-0"
        description="See how startups are launching faster and growing smarter with our help." />

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
                  Simple, transparent plans built for modern creators, startups, and businesses.
                </p>
              </div>
            </div>
          </div>
          <HomePricingSection monthlyPlans={monthlyPlans} yearlyPlans={yearlyPlans} />
        </div>
      </section>

      <BlogsSection
        eyebrow="Blogs"
        title={
          <>
            Insights & Ideas On AI-Powered Building
          </>
        }
        description="Explore how AI is transforming the way we design, build, and launch digital products."
        blogs={blogs}
        apiUrl={API_URL}
      />

      <CTABanner
        title={
          <>
            Launch Your School Website with Creative AI
          </>
        }
        description="Create a modern school website with student portals, online admissions, academic management, and parent communication using Creative AI."
      />

      <section className="cti_home_faq_bg_new ct_pt_100 ct_pb_100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2
                  className="mx-auto text-center "

                >
                  Questions From School Administrators
                </h2>
              </div>
              <FAQAccordion
                accordionId="ctiFaqAccordion"
                accordionclassName="cti_faq_accordion"
                itemclassName="cti_faq_item"
                btnclassName="cti_faq_btn"
                bodyclassName="cti_faq_body"
                items={studentFAQItems}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}

      <ContactSection
        title={
          <>
            Have An Idea? Let's Build It.
          </>
        }
        description="Whether you're building a website, app, marketplace, or startup MVP, we're here to help you get started."
      />
    </>
  );
}