import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfilSection from "@/components/ProfilSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import NotesSection from "@/components/NotesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProfilSection />
      <SkillsSection />
      <PortfolioSection />
      <AchievementsSection />
      <ContactSection />
      <NotesSection />
      <Footer />
    </div>
  );
};

export default Index;
