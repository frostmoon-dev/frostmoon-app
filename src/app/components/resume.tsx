"use client";
import { motion } from "framer-motion";
import { NeonHeader, GlowingCard, AnimatedSkillBar } from "./ui";
import { Briefcase, GraduationCap, Sun, Moon } from "lucide-react";


// --- PLACEHOLDER DATA: Replace with your actual information ---

// The Sun's Data
const sunSkills = [
  { name: "Placeholder Skill (e.g., React)", percentage: 90 },
  { name: "Placeholder Skill (e.g., Node.js)", percentage: 85 },
  { name: "Placeholder Skill (e.g., Python)", percentage: 80 },
];

const sunExperiences = [
  { title: "Placeholder Job Title", company: "A Cool Company Inc.", period: "2021 - Present", description: "Describe the role and responsibilities here. What were the key achievements and projects?" },
];

const sunEducation = [
  { title: "Placeholder Degree", school: "University of Knowledge", period: "2017 - 2021", description: "Mention any interesting projects or focus areas from your studies." },
];

// The Moon's Data
const moonSkills = [
  { name: "D365 F&O Development (X++)", percentage: 95 },
  { name: "SSRS Report Development", percentage: 90 },
  { name: "SQL Server", percentage: 80 },
];

const moonExperiences = [
  { title: "Software Developer", company: "COMM-IT Consultancy", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, and configuring security roles." },
];

const moonEducation = [
  { title: "Bachelor of Electronic Engineering (Computer)", school: "Universiti Malaysia Sabah (UMS)", period: "2016 - 2020", description: "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle." },
];


export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <NeonHeader text="Our Experience" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* The Sun's Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2" style={{color: 'var(--accent)'}}><Sun /> The Sun</h3>
          <GlowingCard>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Briefcase /> Experience</h4>
            {sunExperiences.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="font-bold">{exp.title}</h5>
                <p className="text-sm italic" style={{color: 'var(--foreground-muted)'}}>{exp.company} | {exp.period}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </GlowingCard>
          <GlowingCard>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><GraduationCap /> Education</h4>
            {sunEducation.map((edu, idx) => (
               <div key={idx}>
                <h5 className="font-bold">{edu.title}</h5>
                <p className="text-sm italic" style={{color: 'var(--foreground-muted)'}}>{edu.school} | {edu.period}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </ GlowingCard>
          <GlowingCard>
            <h4 className="text-xl font-bold mb-4">Skills</h4>
            <div className="space-y-4">
              {sunSkills.map((skill, idx) => (
                <AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </GlowingCard>
        </div>

        {/* The Moon's Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2" style={{color: 'var(--accent)'}}><Moon /> The Moon</h3>
           <GlowingCard>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Briefcase /> Experience</h4>
            {moonExperiences.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="font-bold">{exp.title}</h5>
                <p className="text-sm italic" style={{color: 'var(--foreground-muted)'}}>{exp.company} | {exp.period}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </GlowingCard>
          <GlowingCard>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><GraduationCap /> Education</h4>
            {moonEducation.map((edu, idx) => (
               <div key={idx}>
                <h5 className="font-bold">{edu.title}</h5>
                <p className="text-sm italic" style={{color: 'var(--foreground-muted)'}}>{edu.school} | {edu.period}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </ GlowingCard>
          <GlowingCard>
            <h4 className="text-xl font-bold mb-4">Skills</h4>
            <div className="space-y-4">
              {moonSkills.map((skill, idx) => (
                <AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </GlowingCard>
        </div>

      </div>
    </main>
  );
}
