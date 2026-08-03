import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import IndustryCardsGrid from "@/components/IndustryCardsGrid";
import FreeDemoBanner from "@/components/FreeDemoBanner";
import industries from "@/utils/data/Industries";

export const metadata = {
  title: "All Industries | Creative AI",
  description:
    "Innovative AI mobile and web app development solutions across all industries - Retail, Finance, Healthcare, Manufacturing, Entertainment, Education, Telecom, and Energy.",
  keywords:
    "ai mobile app development, web development solutions, retail e-commerce app, healthcare software solutions, manufacturing ai, educational apps, telecom app development, energy app solutions",
};

export default function AllIndustriesPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Innovative AI Mobile & Web Development for All Industries"
        subtitle="How Creative.ai streamlines your app project"
      />

      <hr className="ct_break_line" />

      <IndustryCardsGrid
        title={
          <>
            Dream Big, Build Any Mobile App with <br />
            <span className="ct_orange_gredient_text">Creative AI</span>
          </>
        }
        description="Unleash your creativity! With Creative AI's amazing mobile app builder, you can turn your vision for any mobile application into a reality — fully customized and loaded with features. We blend cutting-edge AI technology with expert development to create the app you need, and we do it faster and smarter:"
        industries={industries}
      />

      <hr className="ct_break_line" />

      <FreeDemoBanner
        eyebrow="Struggling to Choose?"
        title="Discover Your Ideal Development Plan in Minutes"
        subtitle="Quick & Easy Assessment"
        buttonText="Find My Perfect Plan"
        href="/pricing"
      />
    </>
  );
}