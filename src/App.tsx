import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { Footer } from './sections/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#080D13] text-[#F8FAFC] flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#22D3EE] focus:text-[#080D13] focus:font-semibold"
        >
          Skip to main content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
