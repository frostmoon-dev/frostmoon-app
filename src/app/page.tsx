"use client";

import { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaMusic, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiHeartStake } from "react-icons/gi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

// Import your shiny new components
import About from "./components/about";
import Professional from "./components/professional";
import Resume from "./components/resume";

gsap.registerPlugin(useGSAP, TextPlugin);

const kanaoTheme = {
  background: "#2E294E",
  accent: "#D8BFD8",
  accentLight: "#E6E6FA",
  highlight: "#FFB6C1",
};

function BBPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
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

      tl.to(progressRef.current, {
        width: "25%",
        duration: 1.5,
        ease: "power2.inOut",
      });
      tl.to(textRef.current, {
        duration: 1.5,
        text: loadingTexts[0],
        ease: "none",
      });

      tl.to(progressRef.current, {
        width: "50%",
        duration: 1.5,
        ease: "power2.inOut",
      });
      tl.to(textRef.current, {
        duration: 1.5,
        text: loadingTexts[1],
        ease: "none",
      });

      tl.to(progressRef.current, {
        width: "75%",
        duration: 1.5,
        ease: "power2.inOut",
      });
      tl.to(textRef.current, {
        duration: 1.5,
        text: loadingTexts[2],
        ease: "none",
      });

      tl.to(progressRef.current, {
        width: "100%",
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(textRef.current, {
        duration: 1,
        text: loadingTexts[3],
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: kanaoTheme.background }}
    >
      <div
        className="w-24 h-24 mb-8 rounded-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: kanaoTheme.accent }}
      >
        <FaGithub size={60} style={{ color: kanaoTheme.background }} />
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
    </div>
  );
}

// Define types for your data
type Skill = { name: string; percentage: number };
type Experience = { title: string; company: string; period: string; description: string };
type Education = { title: string; school: string; period: string; description: string };

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  if (loading) {
    return <BBPreloader onComplete={() => setLoading(false)} />;
  }
  
  // Your data stays here in the main component
  const skills: Skill[] = [
    { name: "D365 F&O Development (X++)", percentage: 95 },
    { name: "SSRS Report Development", percentage: 90 },
    { name: "Debugging & Code Review", percentage: 90 },
    { name: "Solution Design & Analysis", percentage: 85 },
    { name: "Security Role Configuration", percentage: 85 },
    { name: "SQL Server", percentage: 80 },
  ];

  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "COMM-IT Consultancy Services Sdn. Bhd.",
      period: "2022 - Present",
      description:
        "Developing custom X++ solutions for D365 F&O, designing and customizing SSRS reports, forms, and data entities. Also responsible for configuring security roles and collaborating with analysts to create technical solutions.",
    },
    {
      title: "D365 F&O Regional Expansion Project",
      company: "Goldbell Group (Malaysia)",
      period: "2023 - 2024",
      description:
        "Adapted the Singapore D365 F&O implementation for Malaysia, focusing on adding localized compliance features and customizing SSRS reports and e-invoices for local regulations.",
    },
    {
      title: "D365 Business Central Implementation Project",
      company: "JG Containers (M) Sdn. Bhd.",
      period: "2024 - Present",
      description:
        "Completed technical development training for Business Central and delivered custom reports, enhancing layouts to meet specific client requirements and align with their business processes.",
    },
  ];

  const education: Education[] = [
    {
      title: "Bachelor of Electronic Engineering (Computer) with Honours",
      school: "Universiti Malaysia Sabah (UMS)",
      period: "2016 - 2020",
      description:
        "Final Year Project: IoT-Based Home Surveillance Robotic Vehicle with Cry & Scream Detection.",
    },
  ];

  return (
    <div
      className="min-h-screen p-4 sm:p-6 md:p-8"
      style={{ backgroundColor: kanaoTheme.background }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div
          className="md:col-span-1 p-6 rounded-lg h-fit"
          style={{ backgroundColor: `${kanaoTheme.accent}15` }}
        >
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-32 h-32 mx-auto md:mx-0 rounded-lg overflow-hidden">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: kanaoTheme.accent }}
              >
                <span style={{ color: kanaoTheme.background }}>Profile</span>
              </div>
            </div>

            <div>
              <h1
                className="text-2xl font-bold text-center md:text-left"
                style={{ color: kanaoTheme.accentLight }}
              >
                Shiru
              </h1>
              <p
                className="text-sm text-center md:text-left"
                style={{ color: kanaoTheme.accent }}
              >
                Software Developer
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="flex items-start gap-3">
                <MdEmail
                  size={20}
                  style={{ color: kanaoTheme.highlight, marginTop: "2px" }}
                />
                <div>
                  <p
                    className="text-xs uppercase"
                    style={{ color: kanaoTheme.accent }}
                  >
                    Email
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: kanaoTheme.accentLight }}
                  >
                    frostmoondev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGithub
                  size={20}
                  style={{ color: kanaoTheme.highlight, marginTop: "2px" }}
                />
                <div>
                  <p
                    className="text-xs uppercase"
                    style={{ color: kanaoTheme.accent }}
                  >
                    GitHub
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: kanaoTheme.accentLight }}
                  >
                    frostmoon-dev
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GiHeartStake
                  size={20}
                  style={{ color: kanaoTheme.highlight, marginTop: "2px" }}
                />
                <div>
                  <p
                    className="text-xs uppercase"
                    style={{ color: kanaoTheme.accent }}
                  >
                    Fav Language
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: kanaoTheme.accentLight }}
                  >
                    X++
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMusic
                  size={20}
                  style={{ color: kanaoTheme.highlight, marginTop: "2px" }}
                />
                <div>
                  <p
                    className="text-xs uppercase"
                    style={{ color: kanaoTheme.accent }}
                  >
                    Currently Listening To:
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: kanaoTheme.accentLight }}
                  >
                    The sweet sounds of code compiling~
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full justify-center md:justify-start pt-4">
              <a href="https://github.com/frostmoon-dev" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} style={{ color: kanaoTheme.accent }} />
              </a>
              <a href="https://linkedin.com/in/fatihahmuhd/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} style={{ color: kanaoTheme.accent }} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div
            className="flex gap-8 mb-8 pb-4 border-b"
            style={{ borderColor: `${kanaoTheme.accent}30` }}
          >
            <button
              onClick={() => setActiveTab("about")}
              className={`text-lg font-semibold pb-2 transition ${
                activeTab === "about"
                  ? "border-b-2"
                  : "border-b-2 border-transparent"
              }`}
              style={{
                color: activeTab === "about" ? kanaoTheme.highlight : kanaoTheme.accent,
                borderColor: activeTab === "about" ? kanaoTheme.highlight : "transparent",
              }}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("professional")}
              className={`text-lg font-semibold pb-2 transition ${
                activeTab === "professional"
                  ? "border-b-2"
                  : "border-b-2 border-transparent"
              }`}
              style={{
                color: activeTab === "professional" ? kanaoTheme.highlight : kanaoTheme.accent,
                borderColor: activeTab === "professional" ? kanaoTheme.highlight : "transparent",
              }}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`text-lg font-semibold pb-2 transition ${
                activeTab === "resume"
                  ? "border-b-2"
                  : "border-b-2 border-transparent"
              }`}
              style={{
                color: activeTab === "resume" ? kanaoTheme.highlight : kanaoTheme.accent,
                borderColor: activeTab === "resume" ? kanaoTheme.highlight : "transparent",
              }}
            >
              Resume
            </button>
          </div>

          {/* Conditionally render your new components! */}
          {activeTab === "about" && <About theme={kanaoTheme} />}
          
          {activeTab === "professional" && <Professional theme={kanaoTheme} />}

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
    </div>
  );
}