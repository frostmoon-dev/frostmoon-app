"use client"; 

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


type Skill = { name: string; percentage: number };
type Experience = { title: string; company: string; period: string; description: string };
type Education = { title: string; school: string; period: string; description: string };

type ResumeProps = {
  theme: {
    background: string;
    accent: string;
    accentLight: string;
    highlight: string;
  };
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  onExperienceClick?: (experience: Experience) => void;
};

<<<<<<< HEAD
const skills = [
  { name: "Majok", percentage: 80 },
  { name: "Affection", percentage: 90 },
  { name: "?????", percentage: 100 },
  { name: "Humor", percentage: 60 },
];

const experiences = [
  { title: "Software Developer", company: "COMM-IT Consultancy Services Sdn. Bhd.", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, forms, and data entities. Also responsible for configuring security roles and collaborating with analysts to create technical solutions." },
  { title: "D365 F&O Regional Expansion Project", company: "Goldbell Group (Malaysia)", period: "2023 - 2024", description: "Adapted the Singapore D365 F&O implementation for Malaysia, focusing on adding localized compliance features and customizing SSRS reports and e-invoices for local regulations." },
  { title: "D365 Business Central Implementation Project", company: "JG Containers (M) Sdn. Bhd.", period: "2024 - Present", description: "Completed technical development training for Business Central and delivered custom reports, enhancing layouts to meet specific client requirements and align with their business processes." },
];

const education = [
  { title: "Does 3 months loving a boyfriend count as experience? :3"}];
// const education = [
//   { title: "Bachelor of Electronic Engineering (Computer) with Honours", school: "Universiti Malaysia Sabah (UMS)", period: "2016 - 2020", description: "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle with Cry & Scream Detection." },
// ];

export default function ResumePage() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
      let frame = 0;
      const maxFrames = 16;
      const interval = setInterval(() => {
        if (headingRef.current) {
          if (frame < maxFrames) {
            headingRef.current.textContent = Array.from("Resume")
              .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
              .join("");
            frame++;
          } else {
            headingRef.current.textContent = "Resume";
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
=======
function AnimateOnView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
>>>>>>> parent of 3f828bc (before bb)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function Resume({ theme, skills, experiences, education, onExperienceClick }: ResumeProps) {
  const skillsRef = useRef(null);
  const areSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  return (
    <div className="space-y-12">
      <AnimateOnView>
        <div>
          <h3 className="text-2xl font-bold mb-6" style={{ color: theme.accentLight }}>
            Experience
<<<<<<< HEAD
          </h2>
          <div className="space-y-4">
            {/* {experiences.map((exp, idx) => (
              <motion.div key={idx} className="relative p-6 rounded-lg overflow-hidden" style={{ backgroundColor: `${kanaoTheme.accent}10` }} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-2" style={{ color: kanaoTheme.highlight }}>{exp.title}</h4>
                  <p className="text-sm mb-1 italic" style={{ color: kanaoTheme.accentLight }}>{exp.company}</p>
                  <p className="text-sm mb-3" style={{ color: kanaoTheme.accent }}>{exp.period}</p>
                  <p style={{ color: kanaoTheme.accentLight }}>{exp.description}</p>
                </div>
                <motion.div className="absolute top-3 right-3 text-2xl opacity-50">
                  <Briefcase style={{ color: kanaoTheme.accentLight }} />
                </motion.div>
              </motion.div>
            ))} */}
=======
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="cursor-pointer" onClick={() => onExperienceClick?.(exp)}>
                <h4 className="text-lg font-bold" style={{ color: theme.highlight }}>
                  {exp.title}
                </h4>
                <p className="text-sm mb-1 italic" style={{ color: theme.accentLight }}>
                  {exp.company}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.accent }}>
                  {exp.period}
                </p>
                <p style={{ color: theme.accentLight }}>{exp.description}</p>
              </div>
            ))}
>>>>>>> parent of 3f828bc (before bb)
          </div>
        </div>
      </AnimateOnView>

<<<<<<< HEAD
        {/* <CuteDivider /> */}

        <div>
          <NeonHeader text="Experience" />
          {education.map((edu, idx) => (
            <motion.div key={idx} className="relative p-6 rounded-lg overflow-hidden" style={{ backgroundColor: `${kanaoTheme.accent}10` }} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2" style={{ color: kanaoTheme.highlight }}>{edu.title}</h4>
                {/* <p className="text-sm mb-1 italic" style={{ color: kanaoTheme.accentLight }}>{edu.school}</p>
                <p className="text-sm mb-3" style={{ color: kanaoTheme.accent }}>{edu.period}</p>
                <p style={{ color: kanaoTheme.accentLight }}>{edu.description}</p> */}
=======
      <AnimateOnView>
        <div>
          <h3 className="text-2xl font-bold mb-6" style={{ color: theme.accentLight }}>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold" style={{ color: theme.highlight }}>
                  {edu.title}
                </h4>
                <p className="text-sm mb-1 italic" style={{ color: theme.accentLight }}>
                  {edu.school}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.accent }}>
                  {edu.period}
                </p>
                <p style={{ color: theme.accentLight }}>{edu.description}</p>
>>>>>>> parent of 3f828bc (before bb)
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>

      <div ref={skillsRef}>
        <AnimateOnView>
          <h3 className="text-2xl font-bold mb-6" style={{ color: theme.accentLight }}>
            My Skills
          </h3>
          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p style={{ color: theme.accentLight }}>{skill.name}</p>
                  <p style={{ color: theme.accent }}>{skill.percentage}%</p>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${theme.accent}20` }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: theme.highlight }}
                    initial={{ width: "0%" }}
                    animate={{ width: areSkillsInView ? `${skill.percentage}%` : "0%" }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </div>
  );
}