'use client';

import { Navigation } from '@/components/Navigation';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal />
    </>
  );
}
