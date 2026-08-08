import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SafeRouteDemo } from './components/SafeRouteDemo';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400 selection:text-zinc-950">
      {/* Top Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProject={() => handleNavigate('saferoute')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* SafeRoute Project Showcase */}
        <SafeRouteDemo />

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Education & Academic Coursework */}
        <EducationSection />

        {/* Key Strengths & Personal Attributes */}
        <StrengthsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
