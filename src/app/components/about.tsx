import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { GlowingCard, GlitchText } from "./ui";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const kanaoTheme = {
  accentLight: "#E6E6FA",
};

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutTab() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      // Scramble effect: animate to random text, then to "About Me"
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
      const scrambleText = () => {
        let frame = 0;
        const maxFrames = 16;
        const interval = setInterval(() => {
          if (headingRef.current) {
            if (frame < maxFrames) {
              headingRef.current.textContent = Array.from("About Me")
                .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
                .join("");
              frame++;
            } else {
              headingRef.current.textContent = "About Me";
              clearInterval(interval);
            }
          }
        }, 32);
      };

      scrambleText();

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <motion.div
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2
        ref={headingRef}
        className="text-3xl font-bold mb-4 text-center"
        style={{ color: kanaoTheme.accentLight }}
      >
        About Me
      </h2>
      <GlowingCard>
        <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
          <GlitchText text="This ain't about me. This is about loving my boyfriend. I love my boyfriend. All hail Rafie. Lock in. (what am i even saying lol)" />
        </p>
        {/* <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
          <GlitchText text="When I'm not deep in the world of code, you can usually find me exploring the vast worlds of Teyvat or hopping aboard the Astral Express! I'm a huge fan of Hoyoverse games and love the art, stories, and characters they create." />
        </p> */}
        {/* <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
          <GlitchText text="I'm also really into Japanese fashion, especially cute and elegant styles like Larme Kei and Liz Lisa. Putting together outfits and doing makeup is a fun, creative outlet for me. And yes, that extends to cosplay. Bringing my favorite characters to life is a passion of mine." />
        </p>
        <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed">
          <GlitchText text="Ultimately, I just love cute things, whether it's in games, fashion, or finding a perfectly adorable plushie. It's all about finding joy in the little details." />
        </p> */}
      </GlowingCard>
    </motion.div>
  );
}