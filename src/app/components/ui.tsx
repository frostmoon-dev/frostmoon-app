"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { useGSAP } from "@gsap/react";

const kanaoTheme = {
  accent: "#D8BFD8",
  accentLight: "#E6E6FA",
  highlight: "#FFB6C1",
};

export function NeonHeader({ text }: { text: string }) {
  return (
    <motion.h2
      className="text-3xl font-bold mb-4"
      style={{
        color: kanaoTheme.accentLight,
        textShadow: `0 0 20px ${kanaoTheme.highlight}80, 0 0 40px ${kanaoTheme.highlight}40`,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h2>
  );
}

export function GlowingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative p-6 rounded-lg overflow-hidden ${className}`}
      style={{ backgroundColor: `${kanaoTheme.accent}10` }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function CuteDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, ${kanaoTheme.highlight}00, ${kanaoTheme.highlight}80)` }}
      />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <Hexagon size={24} style={{ color: kanaoTheme.highlight }} fill={kanaoTheme.highlight} />
      </motion.div>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to left, ${kanaoTheme.highlight}00, ${kanaoTheme.highlight}80)` }}
      />
    </div>
  );
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "█████ █████ █████ █████ █████ █████";

  const scramble = (original: string) =>
    original
      .split("")
      .map((char) => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
      .join("");

  useEffect(() => {
    let frame = 0;
    const maxFrames = 5;
    setDisplay(scramble(text));

    intervalRef.current = setInterval(() => {
      if (frame < maxFrames) {
        setDisplay(scramble(text));
        frame++;
      } else {
        setDisplay(text);
        clearInterval(intervalRef.current!);
      }
    }, 40);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}

export function AnimatedSkillBar({ name, percentage }: { name: string; percentage: number }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <p style={{ color: kanaoTheme.accentLight }}>{name}</p>
        <p style={{ color: kanaoTheme.accent }}>{percentage}%</p>
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: `${kanaoTheme.accent}20` }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: kanaoTheme.highlight, boxShadow: `0 0 15px ${kanaoTheme.highlight}` }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
