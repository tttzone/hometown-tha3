import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import AchievementsSection from "@/components/AchievementsSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import PortfolioSection from "@/components/PortfolioSection";
import TrainingSection from "@/components/TrainingSection";
import IdeasSection from "@/components/IdeasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StorySection />
      <AchievementsSection />
      <WhatIBuildSection />
      <PortfolioSection />
      <TrainingSection />
      <IdeasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
