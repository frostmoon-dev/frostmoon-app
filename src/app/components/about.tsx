import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { GlowingCard, GlitchText } from "./ui";

export default function AboutTab() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
      let frame = 0;
      const maxFrames = 16;
      const final_text = "About Me";
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
        About Me
      </h2>
      <GlowingCard>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
            <p className="leading-relaxed">
            <GlitchText text="When I'm not deep in the world of code, you can usually find me exploring the vast worlds of Teyvat or hopping aboard the Astral Express! I'm a huge fan of Hoyoverse games and love the art, stories, and characters they create." />
            </p>
            <p className="leading-relaxed">
            <GlitchText text="I'm also really into Japanese fashion, especially cute and elegant styles like Larme Kei and Liz Lisa. Putting together outfits and doing makeup is a fun, creative outlet for me. And yes, that extends to cosplay. Bringing my favorite characters to life is a passion of mine." />
            </p>
            <p className="leading-relaxed">
            <GlitchText text="Ultimately, I just love cute things, whether it's in games, fashion, or finding a perfectly adorable plushie. It's all about finding joy in the little details." />
            </p>
        </div>
      </GlowingCard>
    </div>
  );
}