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
  realEstateFeatures,
  realEstateColumns,
  realEstateFAQItems,
  realEstateComparisonRows,
} from "@/utils/data/AllPagesData";
export const metadata = {
  title: "Real Estate Website Builder | AI Property Portal",
  description: "Build a real estate website with AI. Add property listings, search, inquiries, and portal features without coding or developers.",
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
            "@id": "https://creativethoughts.ai/real-estate-website-builder#breadcrumb",
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
                "name": "Real Estate Website Builder",
                "item": "https://creativethoughts.ai/real-estate-website-builder"
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
            "@id": "https://creativethoughts.ai/real-estate-website-builder#webpage",
            "url": "https://creativethoughts.ai/real-estate-website-builder",
            "name": "Real Estate Website Builder | Creative AI",
            "description": "Build a professional real estate website with property listings, property search, inquiries, agent profiles, property management, and real estate business tools using Creative AI.",
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
            "mainEntity": realEstateFAQItems.map((item) => ({
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
        title="AI Website Builder for Real Estate and Property Listings"
        description="Build a professional real estate website with an AI-powered property portal that helps buyers discover properties, schedule site visits, and connect with agents. Manage property listings, inquiries, appointments, and real estate operations from one intelligent platform without coding."
        image="/img/real-estate-banner.webp"
      />

      <FeatureCardsGrid
        title="Everything Your Real Estate Business Needs in One Platform"
        description="Create a modern real estate website, showcase property listings, generate qualified leads, schedule property visits, and manage your real estate business with one AI-powered platform."
        features={realEstateFeatures}
      />

      <SolutionColumns
        title="Complete Solutions For Your Real Estate Business"
        columns={realEstateColumns}
      />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable
        title="Why Real Estate Choose Creative AI"
        rows={realEstateComparisonRows}
      />

      <OwnershipSection />

      <TestimonialsSection
        testimonials={testimonials}
        title={<>Trusted By Founders Worldwide</>}
        newClass="pt-0"
        description="See how startups are launching faster and growing smarter with our help."
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
        title={<>Launch Your Real Estate Website with Creative AI</>}
        description="Showcase property listings, generate buyer leads, schedule site visits, and manage your real estate business with Creative AI."
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
                  Questions From Real Estate Professionals

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
                items={realEstateFAQItems}
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
