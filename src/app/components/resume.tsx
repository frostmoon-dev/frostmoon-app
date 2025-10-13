"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { NeonHeader, GlowingCard, CuteDivider, AnimatedSkillBar } from "./ui";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  { name: "D365 F&O Development (X++)", percentage: 95 },
  { name: "SSRS Report Development", percentage: 90 },
  { name: "Debugging & Code Review", percentage: 90 },
  { name: "Solution Design & Analysis", percentage: 85 },
  { name: "Security Role Configuration", percentage: 85 },
  { name: "SQL Server", percentage: 80 },
];

const experiences = [
  { title: "Software Developer", company: "COMM-IT Consultancy Services Sdn. Bhd.", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, forms, and data entities. Also responsible for configuring security roles and collaborating with analysts to create technical solutions." },
  { title: "D365 F&O Regional Expansion Project", company: "Goldbell Group (Malaysia)", period: "2023 - 2024", description: "Adapted the Singapore D365 F&O implementation for Malaysia, focusing on adding localized compliance features and customizing SSRS reports and e-invoices for local regulations." },
  { title: "D365 Business Central Implementation Project", company: "JG Containers (M) Sdn. Bhd.", period: "2024 - Present", description: "Completed technical development training for Business Central and delivered custom reports, enhancing layouts to meet specific client requirements and align with their business processes." },
];

const education = [
  { title: "Bachelor of Electronic Engineering (Computer) with Honours", school: "Universiti Malaysia Sabah (UMS)", period: "2016 - 2020", description: "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle with Cry & Scream Detection." },
];

export default function ResumePage() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
      let frame = 0;
      const maxFrames = 16;
      const final_text = "Resume";
      const interval = setInterval(() => {
        if (headingRef.current) {
          if (frame < maxFrames) {
            headingRef.current.textContent = Array.from(final_text)
              .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
              .join("");
            frame++;
          } else {
            headingRef.current.textContent = final_text;
            clearInterval(interval);
          }
        }
      }, 32);

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <main className="min-h-screen flex justify-center">
      <div className="space-y-8 max-w-4xl w-full">
        <div>
           <NeonHeader text="Experience" />
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} className="relative p-6 rounded-lg overflow-hidden" style={{ backgroundColor: `var(--background-light)` }} whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--accent)' }}>{exp.title}</h4>
                  <p className="text-sm mb-1 italic" style={{ color: 'var(--foreground)' }}>{exp.company}</p>
                  <p className="text-sm mb-3" style={{ color: 'var(--foreground-muted)' }}>{exp.period}</p>
                  <p style={{ color: 'var(--foreground)' }}>{exp.description}</p>
                </div>
                <motion.div className="absolute top-3 right-3 text-2xl opacity-20">
                  <Briefcase style={{ color: 'var(--foreground-muted)' }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <CuteDivider />

        <div>
          <NeonHeader text="Education" />
          {education.map((edu, idx) => (
            <motion.div key={idx} className="relative p-6 rounded-lg overflow-hidden" style={{ backgroundColor: `var(--background-light)` }} whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--accent)' }}>{edu.title}</h4>
                <p className="text-sm mb-1 italic" style={{ color: 'var(--foreground)' }}>{edu.school}</p>
                <p className="text-sm mb-3" style={{ color: 'var(--foreground-muted)' }}>{edu.period}</p>
                <p style={{ color: 'var(--foreground)' }}>{edu.description}</p>
              </div>
              <motion.div className="absolute top-3 right-3 text-2xl opacity-20">
                <GraduationCap style={{ color: 'var(--foreground-muted)' }} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <CuteDivider />

        <div>
          <NeonHeader text="My Skills" />
          <GlowingCard>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </GlowingCard>
        </div>
      </div>
    </main>
  );
}