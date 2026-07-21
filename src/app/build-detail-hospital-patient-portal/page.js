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
    hospitalFeatures,
    hospitalSolutionColumns,
    hospitalComparisonRows,
    hospitalFAQItems,
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
                title="AI Website Builder for Hospitals and Patient Portal"
                description="Build a professional hospital website with AI and manage appointments, patients, medical records, and healthcare services from one platform."
                image="/img/restaurant-banner.webp"
            />

            <FeatureCardsGrid
                title="Everything Your Hospital Needs in One Platform"
                description="Build a professional hospital website, manage patient care, schedule appointments, and streamline healthcare services with one AI-powered platform."
                features={hospitalFeatures}
            />

            <SolutionColumns title="Complete Solutions For Your Hospital" columns={hospitalSolutionColumns} />

            <HowItWorksSection steps={defaultHowItWorksSteps} />

            <ComparisonTable title="Why Hospitals Choose Creative AI" rows={hospitalComparisonRows} />

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
                        Launch Your Hospital Website with Creative AI
                    </>
                }
                description="Launch a modern hospital website with patient portals, appointment booking, healthcare management, and secure patient experiences powered by Creative AI."
            />

            <section className="cti_home_faq_bg_new ct_pt_150 ct_pb_150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ct_home_titles_cnt">
                                <span className="mx-auto">Frequently Asked Questions</span>
                                <h2 className="mx-auto text-center" style={{ maxWidth: "990px" }}>
                                    Questions From Hospital Administrators
                                </h2>
                            </div>
                            <FAQAccordion
                                accordionId="ctiFaqAccordion"
                                accordionClass="cti_faq_accordion"
                                itemClass="cti_faq_item"
                                btnClass="cti_faq_btn"
                                bodyClass="cti_faq_body"
                                items={hospitalFAQItems}
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