"use client";
import { useState as useScrambleState, useRef as useScrambleRef } from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMusic, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GiHeartStake } from "react-icons/gi";
<<<<<<< HEAD
=======
import { Sparkles, Briefcase, GraduationCap, Star, Heart, HeartIcon, Flower, Hexagon } from "lucide-react";
>>>>>>> parent of 3f828bc (before bb)
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
<<<<<<< HEAD

// Local Component Imports
import Transition from "./components/transition"; // We need this now!
import About from "./components/about";
import Professional from "./components/professional";
import Resume from "./components/resume";
=======
>>>>>>> parent of 3f828bc (before bb)

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

// Your beautiful theme is restored!
const kanaoTheme = {
  background: "#2E294E",
  accent: "#D8BFD8",
  accentLight: "#E6E6FA",
  highlight: "#FFB6C1",
};

<<<<<<< HEAD
// --- HELPER COMPONENTS (FROM YOUR FILE) ---

=======
// Floating Particles Component
>>>>>>> parent of 3f828bc (before bb)
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 15 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full"
          style={{ backgroundColor: kanaoTheme.highlight, opacity: 0.6 }}
          animate={{
            y: [p.y + "%", p.y - 100 + "%"],
            x: [p.x + "%", p.x + (Math.random() * 30 - 15) + "%"],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Cute Divider Component
function CuteDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, ${kanaoTheme.highlight}00, ${kanaoTheme.highlight}80)` }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Hexagon size={24} style={{ color: kanaoTheme.highlight }} fill={kanaoTheme.highlight} />
      </motion.div>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(to left, ${kanaoTheme.highlight}00, ${kanaoTheme.highlight}80)` }}
      />
    </div>
  );
}

// Glowing Card Component
function GlowingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative p-6 rounded-lg overflow-hidden ${className}`}
      style={{ backgroundColor: `${kanaoTheme.accent}10` }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${kanaoTheme.highlight}, transparent 80%)`,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Neon Glow Header Component
function NeonHeader({ text }: { text: string }) {
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

// Animated Skill Bar
function AnimatedSkillBar({ name, percentage }: { name: string; percentage: number }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
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
      <div
        className="h-3 rounded-full overflow-hidden relative"
        style={{ backgroundColor: `${kanaoTheme.accent}20` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: kanaoTheme.highlight,
            boxShadow: `0 0 15px ${kanaoTheme.highlight}`,
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Cute Cursor Follower Component
function CuteCursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none flex items-center justify-center z-50"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "tween", duration: 0.1 }}
    >
<<<<<<< HEAD
      <Image
        src="/bunny.gif"
        alt="Cursor Icon"
        width={24}
        height={24}
        style={{ pointerEvents: "none" }}
      />
=======
      <Heart size={24} style={{ color: kanaoTheme.highlight }} fill={kanaoTheme.highlight} />
>>>>>>> parent of 3f828bc (before bb)
    </motion.div>
  );
}

// Typewriter Text Component
function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

// BBPreloader Component
function BBPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const handleSkip = () => {
    timeline.current?.kill();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      zIndex: -1,
      pointerEvents: "none",
      onComplete: onComplete,
    });
  };

  useGSAP(
    () => {
      timeline.current = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            zIndex: -1,
            pointerEvents: "none",
            onComplete: onComplete,
          });
        },
      });

      const loadingTexts = [
        "Accessing site...",
        "Bypassing Firewalls...",
        "Injecting flowers...",
        "Welcome to my portfolio...",
      ];

      const tl = timeline.current;

      tl.to(progressRef.current, { width: "25%", duration: 1.5, ease: "power2.inOut" });
      tl.to(textRef.current, { duration: 1.5, text: loadingTexts[0], ease: "none" }, "<");
      tl.to(progressRef.current, { width: "50%", duration: 1.5, ease: "power2.inOut" });
      tl.to(textRef.current, { duration: 1.5, text: loadingTexts[1], ease: "none" }, "<");
      tl.to(progressRef.current, { width: "75%", duration: 1.5, ease: "power2.inOut" });
      tl.to(textRef.current, { duration: 1.5, text: loadingTexts[2], ease: "none" }, "<");
      tl.to(progressRef.current, { width: "100%", duration: 1, ease: "power2.inOut" });
      tl.to(textRef.current, { duration: 1, text: loadingTexts[3], ease: "none" }, "<");
    },
    { scope: containerRef }
  );

  return (
<<<<<<< HEAD
    <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", height: "5px", backgroundColor: `${kanaoTheme.accent}30`, zIndex: 100, }} >
      <div style={{ height: "100%", backgroundColor: kanaoTheme.highlight, width: `${scrollPercentage}%`, boxShadow: `0 0 10px ${kanaoTheme.highlight}`, transition: "width 0.1s linear", }} />
=======
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
      style={{ backgroundColor: kanaoTheme.background }}
      onClick={handleSkip}
    >
      <div
        className="w-24 h-24 mb-8 rounded-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: kanaoTheme.accent }}
      >
        <Image src="/kanao.png" alt="kanao" width={96} height={96} priority />
      </div>
      <p
        ref={textRef}
        className="text-xl h-8 font-orbitron"
        style={{ color: kanaoTheme.accent }}
      ></p>
      <div
        className="w-3/4 max-w-lg h-2 mt-4 rounded-full overflow-hidden"
        style={{ backgroundColor: `${kanaoTheme.accent}20` }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full"
          style={{ width: "0%", backgroundColor: kanaoTheme.accent }}
        />
      </div>
      <p className="text-xs mt-8" style={{ color: `${kanaoTheme.accent}80` }}>Click anywhere to skip</p>
>>>>>>> parent of 3f828bc (before bb)
    </div>
  );
}

type Skill = { name: string; percentage: number };
type Experience = { title: string; company: string; period: string; description: string };
type Education = { title: string; school: string; period: string; description: string };

// ScrambleText Component
function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useScrambleState(text);
  const intervalRef = useScrambleRef<NodeJS.Timeout | null>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";

<<<<<<< HEAD
  const scramble = (original: string) =>
    original.split("").map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)])).join("");
=======
  function scramble(original: string) {
    return original
      .split("")
      .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
      .join("");
  }
>>>>>>> parent of 3f828bc (before bb)

  function handleMouseEnter() {
    let frame = 0;
    const maxFrames = 12;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (frame < maxFrames) {
        setDisplay((prev) => scramble(text));
        frame++;
      } else {
        setDisplay(text);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 24);
  }

  function handleMouseLeave() {
    setDisplay(text);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  return (
    <span className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: "inline-block", transition: "color 0.2s" }} >
      {display}
    </span>
  );
}

// GlitchText Component
export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "██ ██ ██ ██ ██ ██";

<<<<<<< HEAD
  const handleSkip = () => {
    timeline.current?.kill();
    gsap.to(containerRef.current, { opacity: 0, duration: 0.5, zIndex: -1, pointerEvents: "none", onComplete });
  };

  useGSAP(() => {
    timeline.current = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, { opacity: 0, duration: 0.8, zIndex: -1, pointerEvents: "none", onComplete });
      },
    });

    const loadingTexts = ["Accessing site...", "Bypassing Firewalls...", "Injecting poison...", "Welcome.."];
    const tl = timeline.current;

    tl.to(progressRef.current, { width: "25%", duration: 1.5, ease: "power2.inOut" });
    tl.to(textRef.current, { duration: 1.5, text: loadingTexts[0], ease: "none" }, "<");
    tl.to(progressRef.current, { width: "50%", duration: 1.5, ease: "power2.inOut" });
    tl.to(textRef.current, { duration: 1.5, text: loadingTexts[1], ease: "none" }, "<");
    tl.to(progressRef.current, { width: "75%", duration: 1.5, ease: "power2.inOut" });
    tl.to(textRef.current, { duration: 1.5, text: loadingTexts[2], ease: "none" }, "<");
    tl.to(progressRef.current, { width: "100%", duration: 1, ease: "power2.inOut" });
    tl.to(textRef.current, { duration: 1, text: loadingTexts[3], ease: "none" }, "<");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer" style={{ backgroundColor: kanaoTheme.background }} onClick={handleSkip} >
      <div className="w-24 h-24 mb-8 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: kanaoTheme.accent }}>
        <Image src="/bb.jpg" alt="kanao" width={96} height={96} priority />
      </div>
      <p ref={textRef} className="text-xl h-8 font-orbitron" style={{ color: kanaoTheme.accent }}></p>
      <div className="w-3/4 max-w-lg h-2 mt-4 rounded-full overflow-hidden" style={{ backgroundColor: `${kanaoTheme.accent}20` }}>
        <div ref={progressRef} className="h-full rounded-full" style={{ width: "0%", backgroundColor: kanaoTheme.accent }} />
      </div>
      <p className="text-xs mt-8" style={{ color: `${kanaoTheme.accent}80` }}>Skip at your own risk.</p>
=======
  function scramble(original: string) {
    return original
      .split("")
      .map((char) => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
      .join("");
  }

  useEffect(() => {
    let frame = 0;
    const maxFrames = 5;
    setDisplay(scramble(text));
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (frame < maxFrames) {
        setDisplay(scramble(text));
        frame++;
      } else {
        setDisplay(text);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 40);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}

// ScrollProgressBar Component
function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: `${kanaoTheme.accent}30`,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: '100%',
          backgroundColor: kanaoTheme.highlight,
          width: `${scrollPercentage}%`,
          boxShadow: `0 0 10px ${kanaoTheme.highlight}`,
          transition: 'width 0.1s linear',
        }}
      />
>>>>>>> parent of 3f828bc (before bb)
    </div>
  );
}

<<<<<<< HEAD
=======
// HOME COMPONENT
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
>>>>>>> parent of 3f828bc (before bb)

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [appStep, setAppStep] = useState('loading'); // 'loading', 'transition', 'ready'
  const [activeTab, setActiveTab] = useState("about");
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  useGSAP(() => {
    // This animation now triggers when the app is 'ready'
    if (appStep === 'ready') {
      const tl = gsap.timeline();
      tl.from(sidebarRef.current, { x: -50, opacity: 0, duration: 0.8, ease: "power3.out" });
      tl.from(mainContentRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }
  }, { scope: containerRef, dependencies: [appStep] });

  // This is the new logic for the sequence!
  if (appStep === 'loading') {
    return <BBPreloader onComplete={() => setAppStep('transition')} />;
  }

<<<<<<< HEAD
  if (appStep === 'transition') {
    return <Transition onComplete={() => setAppStep('ready')} />;
  }
  
  // This part will only show when appStep is 'ready'
=======
  const skills: Skill[] = [
    { name: "D365 F&O Development (X++)", percentage: 95 },
    { name: "SSRS Report Development", percentage: 90 },
    { name: "Debugging & Code Review", percentage: 90 },
    { name: "Solution Design & Analysis", percentage: 85 },
    { name: "Security Role Configuration", percentage: 85 },
    { name: "SQL Server", percentage: 80 },
  ];

  const experiences: Experience[] = [
    { title: "Software Developer", company: "COMM-IT Consultancy Services Sdn. Bhd.", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, forms, and data entities. Also responsible for configuring security roles and collaborating with analysts to create technical solutions." },
    { title: "D365 F&O Regional Expansion Project", company: "Goldbell Group (Malaysia)", period: "2023 - 2024", description: "Adapted the Singapore D365 F&O implementation for Malaysia, focusing on adding localized compliance features and customizing SSRS reports and e-invoices for local regulations." },
    { title: "D365 Business Central Implementation Project", company: "JG Containers (M) Sdn. Bhd.", period: "2024 - Present", description: "Completed technical development training for Business Central and delivered custom reports, enhancing layouts to meet specific client requirements and align with their business processes." },
  ];

  const education: Education[] = [
    { title: "Bachelor of Electronic Engineering (Computer) with Honours", school: "Universiti Malaysia Sabah (UMS)", period: "2016 - 2020", description: "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle with Cry & Scream Detection." },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

>>>>>>> parent of 3f828bc (before bb)
  return (
    <div
      ref={containerRef}
      className="min-h-screen p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{ backgroundColor: kanaoTheme.background }}
    >
      <FloatingParticles />
      <CuteCursorFollower />
      <ScrollProgressBar />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div
          ref={sidebarRef}
          className="md:col-span-1 p-6 rounded-lg h-fit"
          style={{ backgroundColor: `${kanaoTheme.accent}15` }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col items-center gap-6">
<<<<<<< HEAD
            <motion.div className="w-32 h-32 rounded-full overflow-hidden relative" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              <Image src="/bb.jpg" alt="Profile" fill style={{ objectFit: "cover" }} />
=======
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image src="/kanao.png" alt="Profile" fill style={{ objectFit: 'cover' }} />
>>>>>>> parent of 3f828bc (before bb)
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-xl font-bold text-center" style={{ color: kanaoTheme.accentLight }}>
                <ScrambleText text="Taeha" />
              </h1>
              <p className="text-sm text-center" style={{ color: kanaoTheme.accent }}>Rapie's Princess</p>
            </motion.div>
            <div className="w-full space-y-4">
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <MdEmail size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Email</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>frostmoondev@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <FaGithub size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>GitHub</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}> git push origin rapie-heart</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <GiHeartStake size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Fav Language</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>Anything Rapie says</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <FaMusic size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Currently Listening To:</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>Rapie's racist comments</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="flex gap-4 w-full justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/frostmoon-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} style={{ color: kanaoTheme.accent }} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/fatihahmuhd/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} style={{ color: kanaoTheme.accent }} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div ref={mainContentRef} className="md:col-span-3">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8 pb-4 justify-center flex-wrap" style={{ borderColor: `${kanaoTheme.accent}30` }}>
            {["about", "professional", "resume"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="text-lg font-semibold pb-2 relative"
                style={{
                  color: activeTab === tab ? kanaoTheme.highlight : kanaoTheme.accent,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                    style={{ backgroundColor: kanaoTheme.highlight }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* About Tab */}
          {activeTab === "about" && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <NeonHeader text="About Me" />
              <GlowingCard>
                <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
                  <GlitchText text="When I'm not deep in the world of code, you can usually find me exploring the vast worlds of Teyvat or hopping aboard the Astral Express! I'm a huge fan of Hoyoverse games and love the art, stories, and characters they create." />
                </p>
                <CuteDivider />
                <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
                  <GlitchText text="I'm also really into Japanese fashion, especially cute and elegant styles like Larme Kei and Liz Lisa. Putting together outfits and doing makeup is a fun, creative outlet for me. And yes, that extends to cosplay. Bringing my favorite characters to life is a passion of mine." />
                </p>
                <CuteDivider />
                <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed">
                  <GlitchText text="Ultimately, I just love cute things, whether it's in games, fashion, or finding a perfectly adorable plushie. It's all about finding joy in the little details." />
                </p>
              </GlowingCard>
            </motion.div>
          )}

          {/* Professional Tab */}
          {activeTab === "professional" && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <NeonHeader text="Professional Summary" />
              <GlowingCard>
                <motion.p
                  style={{ color: kanaoTheme.accentLight }}
                  className="leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <GlitchText text="I'm a Microsoft D365 Finance & Operations and Business Central Technical Developer with over 3 years of experience in the field." />
                </motion.p>
                <CuteDivider />
                <motion.p
                  style={{ color: kanaoTheme.accentLight }}
                  className="leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <GlitchText text="My expertise lies in X++ development, SSRS report customization, and building system extensions. I have a strong background in taking business requirements and transforming them into robust technical solutions." />
                </motion.p>
                <CuteDivider />
                <motion.p
                  style={{ color: kanaoTheme.accentLight }}
                  className="leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <GlitchText text="I have a proven track record of delivering high-quality solutions for various D365 implementations, ensuring systems are efficient, maintainable, and perfectly aligned with business needs. " />
                </motion.p>
              </GlowingCard>
            </motion.div>
          )}

          {/* Resume Tab */}
          {activeTab === "resume" && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Experience Section */}
              <div>
                <NeonHeader text="Experience" />
                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-lg cursor-pointer group relative overflow-hidden"
                      style={{ backgroundColor: `${kanaoTheme.accent}15` }}
                      whileHover={{ scale: 1.01, translateY: -5 }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${kanaoTheme.highlight}, transparent 70%)`,
                        }}
                      />
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold mb-2" style={{ color: kanaoTheme.highlight }}>
                          {exp.title}
                        </h4>
                        <p className="text-sm mb-1 italic" style={{ color: kanaoTheme.accentLight }}>
                          {exp.company}
                        </p>
                        <p className="text-sm mb-3" style={{ color: kanaoTheme.accent }}>
                          {exp.period}
                        </p>
                        <p style={{ color: kanaoTheme.accentLight }}>{exp.description}</p>
                      </div>
                      <motion.div
                        className="absolute top-3 right-3 text-2xl opacity-50"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                       <img src="ellen.png" alt=" " />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <CuteDivider />

              {/* Education Section */}
              <div>
                <NeonHeader text="Education" />
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-lg cursor-pointer group relative overflow-hidden"
                      style={{ backgroundColor: `${kanaoTheme.accent}15` }}
                      whileHover={{ scale: 1.01, translateY: -5 }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${kanaoTheme.highlight}, transparent 70%)`,
                        }}
                      />
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold mb-2" style={{ color: kanaoTheme.highlight }}>
                          {edu.title}
                        </h4>
                        <p className="text-sm mb-1 italic" style={{ color: kanaoTheme.accentLight }}>
                          {edu.school}
                        </p>
                        <p className="text-sm mb-3" style={{ color: kanaoTheme.accent }}>
                          {edu.period}
                        </p>
                        <p style={{ color: kanaoTheme.accentLight }}>{edu.description}</p>
                      </div>
                      <motion.div
                        className="absolute top-3 right-3 text-2xl opacity-50"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        🎓
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <CuteDivider />

              {/* Skills Section */}
              <div>
                <NeonHeader text="My Skills" />
                <GlowingCard>
                  <div className="space-y-6">
                    {skills.map((skill, idx) => (
                      <AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />
                    ))}
                  </div>
                </GlowingCard>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-16 pt-8 max-w-6xl mx-auto"
        style={{ borderTop: `1px solid ${kanaoTheme.accent}30` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.p
          style={{ color: kanaoTheme.accent }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Always be true to yourself.
        </motion.p>
      </motion.div>
    </div>
  );
}