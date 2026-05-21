import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import EmergencyActionBar from "@/components/shared/emergency-action-bar";
import HeroSection from "./hero-section";
import StatsSection from "./stats-section";
import ServicesSection from "./services-section";
import WhyUsSection from "./why-us-section";
import TeamPreviewSection from "./team-preview-section";
import PortfolioSection from "./portfolio-section";
import DentalTourismSection from "./dental-tourism-section";
import FAQSection from "./faq-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <TeamPreviewSection />
        <PortfolioSection />
        <DentalTourismSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EmergencyActionBar />
    </>
  );
}
