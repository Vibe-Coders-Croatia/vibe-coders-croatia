import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import LanguagePicker from "@/components/LanguagePicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguagePicker />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
