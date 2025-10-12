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

function AnimateOnView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
          </div>
        </div>
      </AnimateOnView>

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