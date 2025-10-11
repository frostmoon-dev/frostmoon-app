// src/app/components/Resume.tsx

// Define types for the data this component will receive
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
};

export default function Resume({ theme, skills, experiences, education }: ResumeProps) {
  return (
    <div className="space-y-8">
      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6" style={{ color: theme.accentLight }}>
          Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx}>
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

      {/* Education Section */}
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

      {/* Skills Section */}
      <div>
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
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: theme.highlight,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 