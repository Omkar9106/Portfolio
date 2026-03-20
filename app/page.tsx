import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <section id="contact" className="min-h-[1px]" />
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>&copy; 2024 Omkar. All rights reserved.</p>
      </footer>
    </main>
  );
}
