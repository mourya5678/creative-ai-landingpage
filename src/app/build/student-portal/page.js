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

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Student Portal Builder | Build a Portal with AI",
  description: "Build a student portal with AI for admissions, courses, profiles, schedules, and more without coding or complex development.",
};

export default async function StudentPortalPage() {
  const monthlyPlans = await getPlans("MONTH");
  const yearlyPlans = await getPlans("YEAR");
  const blogs = await getBlogs();

  return (
    <>
      <HomeInit />
      <Header />

      <IndustryHero
        title="AI Student Portal Builder"
        description="Build a secure and scalable student portal with AI. Manage admissions, courses, schedules, profiles, and academic resources without any coding."
        image="/img/school_banner (2).webp"
      />

      <FeatureCardsGrid
        title="Everything Your Student Portal Needs"
        description="Simplify academic operations and connect students with a fully customized, AI-generated portal."
        features={studentFeatures}
      />

      <SolutionColumns title="Complete Solutions For Your Student Portal" columns={studentSolutionColumns} />

      <HowItWorksSection steps={defaultHowItWorksSteps} />

      <ComparisonTable title="Why Choose Creative AI for Student Portals" rows={studentComparisonRows} />

      <OwnershipSection />

      <TestimonialsSection testimonials={testimonials} />

      <BlogsSection blogs={blogs} />

      <HomePricingSection monthlyPlans={monthlyPlans} yearlyPlans={yearlyPlans} />

      <FAQAccordion title="Frequently Asked Questions" faqItems={studentFAQItems} />

      <CTABanner />

      <ContactSection />
    </>
  );
}
