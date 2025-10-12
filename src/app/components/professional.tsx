import { GlitchText } from "../page"; // You may need to adjust this import path!

type ProfessionalProps = {
  theme: {
    background: string;
    accent: string;
    accentLight: string;
    highlight: string;
  };
};

export default function Professional({ theme }: ProfessionalProps) {
  return (
<<<<<<< HEAD
    <motion.div className="space-y-6">
      <h2
        ref={headingRef}
        className="text-3xl font-bold mb-4 text-center"
        style={{ color: kanaoTheme.accentLight }}
      >
        Professional
      </h2>
      <GlowingCard>
        <div className="space-y-4">
          <p style={{ color: kanaoTheme.accentLight }}>
            <GlitchText text="I'm a Microsoft D365 Finance & Operations and Business Central Technical Developer with over 3 years of experience in the field." />
          </p>
          <p style={{ color: kanaoTheme.accentLight }}>
            <GlitchText text="My expertise lies in X++ development, SSRS report customization, and building system extensions. I have a strong background in taking business requirements and transforming them into robust technical solutions. I'm skilled in the full development lifecycle, from analysis and design to debugging and deployment." />
          </p>
          <p style={{ color: kanaoTheme.accentLight }}>
            <GlitchText text="I have a proven track record of delivering high-quality solutions for various D365 implementations, ensuring systems are efficient, maintainable, and perfectly aligned with business needs." />
          </p>
        </div>
      </GlowingCard>
    </motion.div>
=======
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: theme.accentLight }}
        >
          <GlitchText text="Professional Summary" />
        </h2>
        <div
          className="w-85 h-1 rounded"
          style={{ backgroundColor: theme.highlight }}
        ></div>
      </div>

      <div className="space-y-4">
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="I'm a Microsoft D365 Finance & Operations and Business Central Technical Developer with over 3 years of experience in the field." />
        </p>
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="My expertise lies in X++ development, SSRS report customization, and building system extensions. I have a strong background in taking business requirements and transforming them into robust technical solutions. I'm skilled in the full development lifecycle, from analysis and design to debugging and deployment." />
        </p>
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="I have a proven track record of delivering high-quality solutions for various D365 implementations, ensuring systems are efficient, maintainable, and perfectly aligned with business needs." />
        </p>
      </div>
    </div>
>>>>>>> parent of 3f828bc (before bb)
  );
}