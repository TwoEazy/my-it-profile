import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import InternshipSection from "@/components/InternshipSection";
import UPGR8Section from "@/components/UPGR8Section";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <InternshipSection />
      <UPGR8Section />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
