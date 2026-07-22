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
  gymFeatures,
  gymSolutionColumns,
  gymComparisonRows,
  gymFAQItems,
  salonFeatures,
  salonSolutionColumns,
  salonComparisonRows,
  salonFAQItems,
} from "@/utils/data/AllPagesData";
export const dynamic = "force-dynamic";

const getPlans = async (billingInterval) => {
  try {
    const res = await fetch(
      `${API_URL}/api/user/getAllPlans?billing_interval=${billingInterval}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Error fetching plans:", error);
    return null;
  }
};

const getBlogs = async () => {
  try {
    const res = await fetch(`${API_URL}/api/user/getBlogs`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export default async function RestaurantPage() {
  const monthlyPlans = await getPlans("MONTH");
  const yearlyPlans = await getPlans("YEAR");
  const blogs = await getBlogs();

  return (
    <>
      <HomeInit />
      <Header />

      <IndustryHero
        title="AI Website Builder for Salons and Appointment Booking"
        description="Build a professional salon website with an AI-powered appointment booking system that helps clients schedule beauty services, explore treatments, choose stylists, and book appointments online."
        image="/img/restaurant-banner.webp"
      />

      <FeatureCardsGrid
        title="Everything Your Salon Needs in One Platform"
        description="Create a modern salon website, accept online appointments, showcase beauty services, manage stylists, and deliver an exceptional customer experience with one AI-powered platform."
        features={salonFeatures}
      />

      <SolutionColumns title="Complete Solutions For Your Salon" columns={salonSolutionColumns} />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable title="Why Salon Choose Creative AI" rows={salonComparisonRows} />

      <OwnershipSection />

      <TestimonialsSection testimonials={testimonials} title={
        <>
          Trusted By Founders Worldwide
        </>
      }
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
           Launch Your Salon Website with Creative AI
          </>
        }
        description="Create a salon website with online appointment booking, beauty service management, staff scheduling, and customer engagement using Creative AI."
      />

      <section className="cti_home_faq_bg_new ct_pt_150 ct_pb_150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_home_titles_cnt">
                <span className="mx-auto">Frequently Asked Questions</span>
                <h2 className="mx-auto text-center" style={{ maxWidth: "990px" }}>
                 Questions From Salon Owners
                </h2>
              </div>
              <FAQAccordion
                accordionId="ctiFaqAccordion"
                accordionclassName="cti_faq_accordion"
                itemclassName="cti_faq_item"
                btnclassName="cti_faq_btn"
                bodyclassName="cti_faq_body"
                items={salonFAQItems}
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