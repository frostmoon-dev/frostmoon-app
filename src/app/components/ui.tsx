"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Replaced the lucide-react Star icon with an inline SVG component to remove the dependency.
const Star = ({ size = 20, style = {}, fill = 'currentColor', className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


export function NeonHeader({ text }: { text: string }) {
  return (
    <motion.h2
      className="text-3xl font-bold mb-6 text-center"
      style={{
        color: 'var(--accent)',
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
      className={`relative p-6 rounded-lg overflow-hidden border ${className}`}
      style={{ backgroundColor: `var(--background-light)`, borderColor: 'rgba(var(--accent-rgb), 0.2)' }}
      whileHover={{ scale: 1.02, y: -5, boxShadow: `0 0 20px rgba(var(--accent-rgb), 0.2)` }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function CelestialDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, transparent, var(--accent))` }}
      />
      <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
        <Star size={20} style={{ color: 'var(--accent)' }} fill={'var(--accent)'} />
      </motion.div>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to left, transparent, var(--accent))` }}
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
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2 text-sm">
        <p style={{ color: 'var(--foreground)' }}>{name}</p>
        <p style={{ color: 'var(--foreground-muted)' }}>{percentage}%</p>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: 'var(--accent)', boxShadow: `0 0 15px var(--accent)` }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

