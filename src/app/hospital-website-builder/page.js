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
    hospitalFeatures,
    hospitalSolutionColumns,
    hospitalComparisonRows,
    hospitalFAQItems,
} from "@/utils/data/AllPagesData";

export const metadata = {
  title: "Hospital Website Builder | AI Healthcare Website",
  description: "Build a hospital website with AI. Add patient portals, appointments, services, and more without coding or hiring web developers.",
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
            "@id": "https://creativethoughts.ai/hospital-website-builder#breadcrumb",
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
                "name": "Hospital Website Builder",
                "item": "https://creativethoughts.ai/hospital-website-builder"
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
            "@id": "https://creativethoughts.ai/hospital-website-builder#webpage",
            "url": "https://creativethoughts.ai/hospital-website-builder",
            "name": "Hospital Website Builder | Creative AI",
            "description": "Build a professional hospital website with patient portals, appointment management, doctor profiles, healthcare services, and hospital administration tools using Creative AI.",
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
            "mainEntity": hospitalFAQItems.map((item) => ({
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
                title="AI Website Builder for Hospitals and Patient Portal"
                description="Build a professional hospital website with AI and manage appointments, patients, medical records, and healthcare services from one platform."
                image="/img/hospital-patient_banner.webp"
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
                        Launch Your Hospital Website with Creative AI
                    </>
                }
                description="Launch a modern hospital website with patient portals, appointment booking, healthcare management, and secure patient experiences powered by Creative AI."
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
                                    Questions From Hospital Administrators
                                </h2>
                            </div>
                            <FAQAccordion
                                accordionId="ctiFaqAccordion"
                                accordionclassName="cti_faq_accordion"
                                itemclassName="cti_faq_item"
                                btnclassName="cti_faq_btn"
                                bodyclassName="cti_faq_body"
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