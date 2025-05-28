"use client";

import { Separator } from "@/components/ui/separator";
import { calculateYearsOfExperience } from "@/lib/utils";
import CareerSection from '@/app/sections/CareerSection';
import ProjectsSection from '@/app/sections/ProjectsSection';
import SkillsSection from '@/app/sections/SkillsSection';
import HeroSection from '@/app/sections/HeroSection';
import ContactSection from '@/app/sections/ContactSection';

export default function Home() {
  const introductions = [
        "환경 구축부터 개발 배포 혼자서 끝까지!",
        "기획부터 백엔드, AI서비스까지 아우르는 실무형 개발자",
        "해커톤과 현업 경험으로 단련된 백엔드 & AI 서비스 개발전문가"
      ]


  const yearsOfExperience = calculateYearsOfExperience(2024);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 pb-64">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection
            introductions={introductions}
            yearsOfExperience={yearsOfExperience}
          />
        </section>
        <Separator />
        {/* career Section */}
        <section id="career">
          <CareerSection />
        </section>
        <Separator />
        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>
        <Separator />
        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>
        <Separator />
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
