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
  insuranceAgenciesFeatures,
  insuranceAgenciesComparisonRows,
  insuranceAgenciesFAQItems,
  insuranceAgenciesColumns,
} from "@/utils/data/AllPagesData";

export const metadata = {
  title: "Insurance Website Builder | Build Insurance Websites With AI",
  description: "Build a professional insurance website with AI. Create responsive, modern insurance websites faster without coding using Creative AI.",
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
            "@id": "https://creativethoughts.ai/insurance-website-builder#breadcrumb",
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
                "name": "Insurance Website Builder",
                "item": "https://creativethoughts.ai/insurance-website-builder"
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
            "@id": "https://creativethoughts.ai/insurance-website-builder#webpage",
            "url": "https://creativethoughts.ai/insurance-website-builder",
            "name": "Insurance Website Builder | Creative AI",
            "description": "Build a professional insurance website with insurance products, agent portals, customer management, policy information, inquiries, and insurance business tools using Creative AI.",
            "isPartOf": {
              "@id": "https://creativethoughts.ai/#website"
            },
            "about": {
              "@id": "https://creativethoughts.ai/#software"
            },
            "publisher": {
              "@id": "https://creativethoughts.ai/#organization"
            },
            "mainEntity": {
              "@id": "https://creativethoughts.ai/#software"
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
            "mainEntity": insuranceAgenciesFAQItems.map((item) => ({
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
        title="AI Website Builder for Insurance Agencies and Agent Portal"
        description="Build a professional insurance website with an AI-powered agent portal that helps customers explore insurance plans, request quotes, connect with agents, and manage policy inquiries. Manage leads, agents, insurance products, and customer relationships from one intelligent platform without coding"
        image="/img/insurance-agency-banner.webp"
      />

      <FeatureCardsGrid
        title="Everything Your Insurance Agency Needs in One Platform"
        description="Create a professional insurance website, generate qualified leads, manage insurance agents, simplify policy inquiries, and deliver a better customer experience with one AI-powered platform."
        features={insuranceAgenciesFeatures}
      />

      <SolutionColumns
        title="Complete Solutions For Your Insurance Agency"
        columns={insuranceAgenciesColumns}
      />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable
        title="Why Insurance Agency Choose Creative AI"
        rows={insuranceAgenciesComparisonRows}
      />

      <OwnershipSection />

      <TestimonialsSection
        testimonials={testimonials}
        title={<>Trusted By Founders Worldwide</>}
        description="See how startups are launching faster and growing smarter with our help."
        newClass="pt-0"
      />

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
                  Simple, transparent plans built for modern creators, startups,
                  and businesses.
                </p>
              </div>
            </div>
          </div>
          <HomePricingSection
            monthlyPlans={monthlyPlans}
            yearlyPlans={yearlyPlans}
          />
        </div>
      </section>

      <BlogsSection
        eyebrow="Blogs"
        title={<>Insights & Ideas On AI-Powered Building</>}
        description="Explore how AI is transforming the way we design, build, and launch digital products."
        blogs={blogs}
        apiUrl={API_URL}
      />

      <CTABanner
        title={<>Build Your Insurance Website with Creative AI </>}
        description="Build an insurance website with agent portals, online quote requests, policy management, and customer support powered by Creative AI."
      />

      <section className="cti_home_faq_bg_new ct_pt_100 ct_pb_100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2
                  className="mx-auto text-center"

                >
                  Questions From Insurance Agency Owners




                </h2>
              </div>
              {/* <FAQAccordion
                accordionId="ctiFaqAccordion"
                accordionClass="cti_faq_accordion"
                itemclass="cti_faq_item"
                btnclass="cti_faq_btn"
                bodyclass="cti_faq_body"
                items={salonFAQItems}
              /> */}

              <FAQAccordion
                accordionId="ctiFaqAccordion"
                items={insuranceAgenciesFAQItems}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}

      <ContactSection
        title={<>Have An Idea? Let's Build It.</>}
        description="Whether you're building a website, app, marketplace, or startup MVP, we're here to help you get started."
      />
    </>
  );
}
