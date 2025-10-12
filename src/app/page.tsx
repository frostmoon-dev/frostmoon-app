"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMusic, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GiHeartStake } from "react-icons/gi";
import { Heart, Moon, MoonIcon, MoonStarIcon } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import About from "./components/about";
import Professional from "./components/professional";
import Resume from "./components/resume";
import { Moon_Dance } from "next-font/google";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const kanaoTheme = {
  background: "#2E294E",
  accent: "#D8BFD8",
  accentLight: "#E6E6FA",
  highlight: "#FFB6C1",
};

function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 15 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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

function CuteCursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
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
      <Image
        src="/bunny.gif" // <-- your image file in public/
        alt="Cursor Icon"
        width={24}
        height={24}
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
}

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollPercentage((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "5px",
        backgroundColor: `${kanaoTheme.accent}30`,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: kanaoTheme.highlight,
          width: `${scrollPercentage}%`,
          boxShadow: `0 0 10px ${kanaoTheme.highlight}`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";

  const scramble = (original: string) =>
    original
      .split("")
      .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
      .join("");

  const handleMouseEnter = () => {
    let frame = 0;
    const maxFrames = 12;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (frame < maxFrames) {
        setDisplay(scramble(text));
        frame++;
      } else {
        setDisplay(text);
        clearInterval(intervalRef.current!);
      }
    }, 24);
  };

  const handleMouseLeave = () => {
    setDisplay(text);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", transition: "color 0.2s" }}
    >
      {display}
    </span>
  );
}

function BBPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const handleSkip = () => {
    sessionStorage.setItem('preloaderSkipped', 'true'); 
    timeline.current?.kill();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      zIndex: -1,
      pointerEvents: "none",
      onComplete,
    });
  };

  useGSAP(() => {
    timeline.current = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          zIndex: -1,
          pointerEvents: "none",
          onComplete,
        });
      },
    });

    const loadingTexts = ["Accessing site...", "Bypassing Firewalls...", "Injecting flowers...", "Welcome to my portfolio..."];
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
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
      style={{ backgroundColor: kanaoTheme.background }}
      onClick={handleSkip}
    >
      <div className="w-24 h-24 mb-8 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: kanaoTheme.accent }}>
        <Image src="/bb.jpg" alt="kanao" width={96} height={96} priority />
      </div>
      <p ref={textRef} className="text-xl h-8 font-orbitron" style={{ color: kanaoTheme.accent }}></p>
      <div className="w-3/4 max-w-lg h-2 mt-4 rounded-full overflow-hidden" style={{ backgroundColor: `${kanaoTheme.accent}20` }}>
        <div ref={progressRef} className="h-full rounded-full" style={{ width: "0%", backgroundColor: kanaoTheme.accent }} />
      </div>
      <p className="text-xs mt-8" style={{ color: `${kanaoTheme.accent}80` }}>Skip at your own risk.</p>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  useGSAP(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.from(sidebarRef.current, { x: -50, opacity: 0, duration: 0.8, ease: "power3.out" });
      tl.from(mainContentRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }
  }, { scope: containerRef, dependencies: [loading] });

  if (loading) {
    return <BBPreloader onComplete={() => setLoading(false)} />;
  }

  const skills = [
    { name: "D365 F&O Development (X++)", percentage: 95 },
    { name: "SSRS Report Development", percentage: 90 },
    { name: "Debugging & Code Review", percentage: 90 },
    { name: "Solution Design & Analysis", percentage: 85 },
    { name: "Security Role Configuration", percentage: 85 },
    { name: "SQL Server", percentage: 80 },
  ];

  const experiences = [
    { title: "Software Developer", company: "COMM-IT Consultancy Services Sdn. Bhd.", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, forms, and data entities. Also responsible for configuring security roles and collaborating with analysts to create technical solutions." },
    { title: "D365 F&O Regional Expansion Project", company: "Goldbell Group (Malaysia)", period: "2023 - 2024", description: "Adapted the Singapore D365 F&O implementation for Malaysia, focusing on adding localized compliance features and customizing SSRS reports and e-invoices for local regulations." },
    { title: "D365 Business Central Implementation Project", company: "JG Containers (M) Sdn. Bhd.", period: "2024 - Present", description: "Completed technical development training for Business Central and delivered custom reports, enhancing layouts to meet specific client requirements and align with their business processes." },
  ];

  const education = [
    { title: "Bachelor of Electronic Engineering (Computer) with Honours", school: "Universiti Malaysia Sabah (UMS)", period: "2016 - 2020", description: "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle with Cry & Scream Detection." },
  ];

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
            <motion.div className="w-32 h-32 rounded-full overflow-hidden relative" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              <Image src="/bb.jpg" alt="Profile" fill style={{ objectFit: "cover" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h1 className="text-xl font-bold text-center" style={{ color: kanaoTheme.accentLight }}>
                <ScrambleText text="Shiru" />
              </h1>
              <p className="text-sm text-center" style={{ color: kanaoTheme.accent }}>Software Developer</p>
            </motion.div>
            <div className="w-full space-y-4">
              <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                <MdEmail size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Email</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>frostmoondev@gmail.com</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                <FaGithub size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>GitHub</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>frostmoon-dev</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                <GiHeartStake size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Fav Language</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>X++</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                <FaMusic size={20} style={{ color: kanaoTheme.highlight, marginTop: "2px" }} />
                <div>
                  <p className="text-xs uppercase" style={{ color: kanaoTheme.accent }}>Currently Listening To:</p>
                  <p className="text-sm" style={{ color: kanaoTheme.accentLight }}>The sweet sounds of code compiling~</p>
                </div>
              </motion.div>
            </div>
            <motion.div className="flex gap-4 w-full justify-center pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <motion.a href="https://github.com/frostmoon-dev" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                <FaGithub size={20} style={{ color: kanaoTheme.accent }} />
              </motion.a>
              <motion.a href="https://linkedin.com/in/fatihahmuhd/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
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
                style={{ color: activeTab === tab ? kanaoTheme.highlight : kanaoTheme.accent }}
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

          {/* Tab Content */}
          {activeTab === "about" && <About />}
          {activeTab === "professional" && <Professional />}
          {activeTab === "resume" && (
            <Resume
              theme={kanaoTheme}
              skills={skills}
              experiences={experiences}
              education={education}
            />
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