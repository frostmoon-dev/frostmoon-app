import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { GlowingCard, GlitchText } from "./ui";

export default function ProfessionalTab() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
      let frame = 0;
      const maxFrames = 16;
      const final_text = "Professional Summary";
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
    <div className="space-y-6">
      <h2
        ref={headingRef}
        className="text-3xl font-bold mb-4 text-center"
        style={{ color: 'var(--accent)' }}
      >
        Professional
      </h2>
      <GlowingCard>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
          <p>
            <GlitchText text="I'm a Microsoft D365 Finance & Operations and Business Central Technical Developer with over 3 years of experience in the field." />
          </p>
          <p>
            <GlitchText text="My expertise lies in X++ development, SSRS report customization, and building system extensions. I have a strong background in taking business requirements and transforming them into robust technical solutions. I'm skilled in the full development lifecycle, from analysis and design to debugging and deployment." />
          </p>
          <p>
            <GlitchText text="I have a proven track record of delivering high-quality solutions for various D365 implementations, ensuring systems are efficient, maintainable, and perfectly aligned with business needs." />
          </p>
        </div>
      </GlowingCard>
    </div>
  );
}