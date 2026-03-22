import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
// import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HackathonsSection } from "@/components/sections/HackathonsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-surface">
      <AnimatedBackground />
      <FloatingDock />

      <div className="relative z-10">
        <HeroSection />

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <AboutSection />
        {/* 
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div> */}

        {/* <ExperienceSection /> */}

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <ProjectsSection />
{/* 
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <HackathonsSection /> */}

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <EducationSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <ContactSection />
      </div>
    </main>
  );
}
