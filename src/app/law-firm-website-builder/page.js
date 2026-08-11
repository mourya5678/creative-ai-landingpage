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
  lawFirmSolutionColumns,
  lawFirmFeatures,
  lawfirmComparisonRows,
  lawFirmFAQItems,
} from "@/utils/data/AllPagesData";

export const metadata = {
  title: "Law Firm Website Builder | AI Legal Website Creator",
  description: "Build a law firm website with AI. Add practice areas, case management, client portals, and more without coding or developers.",
};

export const dynamic = "force-dynamic";



export default async function RestaurantPage() {
  const monthlyPlans = await getPlans("MONTH");
  const yearlyPlans = await getPlans("YEAR");
  const blogs = await getBlogs();

  return (
    <>
      <HomeInit />
      <Header />

      <IndustryHero
        title="AI Website Builder for Law Firms and Case Management"
        description="Build a professional law firm website with AI and manage clients, legal cases, appointments, documents, and consultations from one platform. No coding required."
        image="/img/law_firm_banner.webp"
      />

      <FeatureCardsGrid
        title="Everything Your Law Firm Needs in One Platform"
        description="Build a professional law firm website, manage cases, clients, and appointments from one AI-powered platform."
        features={lawFirmFeatures}
      />

      <SolutionColumns title="Complete Solutions For Your Law Firm" columns={lawFirmSolutionColumns} />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable title="Why Law Firm Choose Creative AI" rows={lawfirmComparisonRows} />

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
            Launch Your Law Firm Website with Creative AI
          </>
        }
        description="Create a trusted law firm website with case management, client portals, consultation booking, and legal practice tools using Creative AI."
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
                  Questions from Law Firm Owners
                </h2>
              </div>
              <FAQAccordion
                accordionId="ctiFaqAccordion"
                accordionclassName="cti_faq_accordion"
                itemclassName="cti_faq_item"
                btnclassName="cti_faq_btn"
                bodyclassName="cti_faq_body"
                items={lawFirmFAQItems}
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