"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlowingCard, NeonHeader, CelestialDivider, AnimatedSkillBar } from "./components/ui";

// --- START INLINE SVG ICONS ---
// Replaced react-icons with inline SVGs to remove external dependencies.
const FaSun = ({ size = 24, style = {} }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg" style={style}><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,5V3a1,1,0,0,0-2,0V5a1,1,0,0,0,2,0ZM12,19v2a1,1,0,0,0,2,0V19a1,1,0,0,0-2,0ZM5.64,6.36,4.22,4.94a1,1,0,0,0-1.42,1.42L4.22,7.78a1,1,0,0,0,1.42,0A1,1,0,0,0,5.64,6.36ZM18.36,19.78l1.42,1.42a1,1,0,0,0,1.42-1.42L19.78,18.36a1,1,0,0,0-1.42,1.42ZM19,11H21a1,1,0,0,0,0-2H19a1,1,0,0,0,0,2ZM3,11H5a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2ZM18.36,4.22,19.78,5.64a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L19.78,2.8a1,1,0,0,0-1.42,1.42ZM4.22,18.36l1.42,1.42a1,1,0,0,0,1.42-1.42L5.64,16.94a1,1,0,0,0-1.42,1.42Z"></path></svg>
);
const FaMoon = ({ size = 24, style = {} }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg" style={style}><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>
);
const FaGithub = ({ size = 20, style = {} }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg" style={style}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
);
const FaLinkedin = ({ size = 20, style = {} }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg" style={style}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const Briefcase = ({ size = 24, style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const GraduationCap = ({ size = 24, style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path></svg>
);
// --- END INLINE SVG ICONS ---


// --- START INLINED COMPONENTS ---
// Inlined components from other files to resolve import errors.

function About() {
  return (
    <div className="space-y-8">
      <NeonHeader text="About Us" />
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaSun size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Sun</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
            <p className="leading-relaxed">
              This is a placeholder for the Sun's story! Talk about your hobbies, passions, and what makes you shine. Maybe you love outdoor adventures, competitive gaming, or building things. Let your personality radiate!
            </p>
        </div>
      </GlowingCard>
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaMoon size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Moon</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
            <p className="leading-relaxed">
             This is where the Moon tells her tale. Talk about what brings you comfort, your creative pursuits, and your dreams. Let your inner light glow.
            </p>
        </div>
      </GlowingCard>
    </div>
  );
}

function Professional() {
 return (
    <div className="space-y-8">
      <NeonHeader text="Our Journeys" />
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaSun size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Sun's Path</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
          <p>
            This is a placeholder for his professional summary. What is his field? What is he passionate about in his career? What are his key skills and accomplishments?
          </p>
        </div>
      </GlowingCard>
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaMoon size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Moon's Calling</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
          <p>
            You can put your professional summary here! Talk about your expertise as a Microsoft D365 Technical Developer, your skills in X++, and your experience in the field.
          </p>
        </div>
      </GlowingCard>
    </div>
  );
}

function Resume() {
    const sunSkills = [{ name: "React", percentage: 90 }, { name: "Node.js", percentage: 85 }];
    const sunExperiences = [{ title: "Lead Developer", company: "Sun Solutions", period: "2021 - Present", description: "Leading the development of bright ideas." }];
    const sunEducation = [{ title: "B.Sc. in Solar Engineering", school: "University of Daylight", period: "2017 - 2021", description: "Focused on renewable energy." }];
    const moonSkills = [{ name: "D365 F&O Development (X++)", percentage: 95 }, { name: "SSRS Reports", percentage: 90 }];
    const moonExperiences = [{ title: "Software Developer", company: "COMM-IT Consultancy", period: "2022 - Present", description: "Developing custom X++ solutions for D365 F&O." }];
    const moonEducation = [{ title: "B.Eng. in Computer Engineering", school: "Universiti Malaysia Sabah", period: "2016 - 2020", description: "IoT-Based Home Surveillance Project." }];

  return (
    <main className="min-h-screen">
      <NeonHeader text="Our Experience" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2" style={{color: 'var(--accent)'}}><FaSun /> The Sun</h3>
          <GlowingCard><h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Briefcase /> Experience</h4>{sunExperiences.map((exp, idx) => (<div key={idx} className="mb-4"><h5 className="font-bold">{exp.title}</h5><p className="text-sm italic">{exp.company} | {exp.period}</p><p className="text-sm mt-1">{exp.description}</p></div>))}</GlowingCard>
          <GlowingCard><h4 className="text-xl font-bold mb-4 flex items-center gap-2"><GraduationCap /> Education</h4>{sunEducation.map((edu, idx) => (<div key={idx}><h5 className="font-bold">{edu.title}</h5><p className="text-sm italic">{edu.school} | {edu.period}</p><p className="text-sm mt-1">{edu.description}</p></div>))}</GlowingCard>
          <GlowingCard><h4 className="text-xl font-bold mb-4">Skills</h4><div className="space-y-4">{sunSkills.map((skill, idx) => (<AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />))}</div></GlowingCard>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2" style={{color: 'var(--accent)'}}><FaMoon /> The Moon</h3>
           <GlowingCard><h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Briefcase /> Experience</h4>{moonExperiences.map((exp, idx) => (<div key={idx} className="mb-4"><h5 className="font-bold">{exp.title}</h5><p className="text-sm italic">{exp.company} | {exp.period}</p><p className="text-sm mt-1">{exp.description}</p></div>))}</GlowingCard>
          <GlowingCard><h4 className="text-xl font-bold mb-4 flex items-center gap-2"><GraduationCap /> Education</h4>{moonEducation.map((edu, idx) => (<div key={idx}><h5 className="font-bold">{edu.title}</h5><p className="text-sm italic">{edu.school} | {edu.period}</p><p className="text-sm mt-1">{edu.description}</p></div>))}</GlowingCard>
          <GlowingCard><h4 className="text-xl font-bold mb-4">Skills</h4><div className="space-y-4">{moonSkills.map((skill, idx) => (<AnimatedSkillBar key={idx} name={skill.name} percentage={skill.percentage} />))}</div></GlowingCard>
        </div>
      </div>
    </main>
  );
}
// --- END INLINED COMPONENTS ---


function FloatingStars() {
  const particles = Array.from({ length: 25 }, (_, i) => ({ id: i, delay: Math.random() * 5, duration: 20 + Math.random() * 20, x: Math.random() * 100, y: Math.random() * 100, scale: 0.5 + Math.random() * 0.5, }));
  return (<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">{particles.map((p) => (<motion.div key={p.id} className="absolute rounded-full" style={{ backgroundColor: 'var(--accent-secondary)', width: `${p.scale * 4}px`, height: `${p.scale * 4}px`}} animate={{ y: [p.y + "%", p.y - 120 + "%"], x: [p.x + "%", p.x + (Math.random() * 20 - 10) + "%"], opacity: [1, 0.5, 1],}} transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear", }}/>))}</div>);
}

function ThemedCursorFollower() {
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
  return (<motion.div className="fixed w-8 h-8 pointer-events-none z-50" animate={{ x: position.x - 16, y: position.y - 16, opacity: isVisible ? 1 : 0,}} transition={{ type: "spring", stiffness: 500, damping: 30 }}><div className="dark:hidden"><FaSun style={{color: 'var(--accent)'}} size={24}/></div><div className="hidden dark:block"><FaMoon style={{color: 'var(--accent)'}} size={24}/></div></motion.div>);
}

function LunarisPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window.gsap !== 'undefined') {
        const tl = window.gsap.timeline({ onComplete: () => { window.gsap.to(containerRef.current, { opacity: 0, duration: 0.8, onComplete }); } });
        tl.fromTo(".sun-icon", { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" });
        tl.fromTo(".moon-icon", { scale: 0, rotate: 90 }, { scale: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }, "-=1.2");
        tl.to(".lunaris-text", { text: "Lunaris", duration: 1.5, ease: "none" });
        tl.to([".sun-icon", ".moon-icon"], { scale: 1.2, yoyo: true, repeat: 1, duration: 0.5 }, "-=0.5");
    } else {
        onComplete(); // Skip animation if GSAP is not loaded
    }
  }, [onComplete]);
  return (<div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--background)' }}><div className="flex items-center gap-4"><div className="sun-icon"><FaSun size={60} style={{ color: '#FBC02D' }} /></div><div className="moon-icon"><FaMoon size={60} style={{ color: '#A78BFA' }} /></div></div><p className="lunaris-text text-4xl mt-6 font-orbitron" style={{ color: 'var(--foreground)' }}></p></div>);
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("us");
  const [theme, setTheme] = useState("light");
  const containerRef = useRef(null);

  useEffect(() => { const savedTheme = localStorage.getItem("theme") || "light"; setTheme(savedTheme); }, []);
  useEffect(() => { if (theme === 'dark') { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } localStorage.setItem('theme', theme); }, [theme]);
  const toggleTheme = () => { setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); };

  useEffect(() => {
      if (!loading && typeof window.gsap !== 'undefined') {
          window.gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.inOut" });
      }
  }, [loading]);

  if (loading) { return <LunarisPreloader onComplete={() => setLoading(false)} />; }

  return (
    <div ref={containerRef} className="min-h-screen p-4 sm:p-6 md:p-8 relative">
      <FloatingStars />
      <ThemedCursorFollower />
      <motion.button onClick={toggleTheme} className="fixed top-4 right-4 z-50 p-3 rounded-full" style={{backgroundColor: 'var(--background-light)'}} whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }} aria-label="Toggle Theme">
        {theme === 'light' ? <FaMoon style={{color: 'var(--accent)'}}/> : <FaSun style={{color: 'var(--accent)'}}/>}
      </motion.button>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <motion.div className="md:col-span-1 p-6 rounded-lg h-fit sticky top-8" style={{ backgroundColor: 'var(--background-light)' }}>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-center font-orbitron" style={{ color: 'var(--foreground)' }}>Lunaris</h1>
            <p className="text-sm text-center" style={{color: 'var(--foreground-muted)'}}>The Sun & The Moon</p>
            <div className="text-center w-full">
              <motion.div className="w-24 h-24 rounded-full overflow-hidden relative border-2 mx-auto" style={{ borderColor: '#FBC02D'}} animate={{ boxShadow: ['0 0 10px rgba(251, 192, 45, 0)', '0 0 20px rgba(251, 192, 45, 0.8)', '0 0 10px rgba(251, 192, 45, 0)']}} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <img src="denji.jpg" alt="The Sun" style={{ objectFit: "cover", width: '100%', height: '100%' }} />
              </motion.div>
              <h2 className="text-lg font-bold mt-2" style={{color: 'var(--foreground)'}}>[Boyfriend's Name]</h2>
              <p className="text-sm" style={{color: 'var(--foreground-muted)'}}>[His Role or Title]</p>
            </div>
            <div className="text-center w-full">
              <motion.div className="w-24 h-24 rounded-full overflow-hidden relative border-2 mx-auto" style={{ borderColor: '#A78BFA'}} animate={{ boxShadow: ['0 0 10px rgba(167, 139, 250, 0)', '0 0 20px rgba(167, 139, 250, 0.8)', '0 0 10px rgba(167, 139, 250, 0)']}} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}>
                 <img src="reze.jpg" alt="The Moon" style={{ objectFit: "cover", width: '100%', height: '100%' }} />
              </motion.div>
              <h2 className="text-lg font-bold mt-2" style={{color: 'var(--foreground)'}}>[Your Name]</h2>
              <p className="text-sm" style={{color: 'var(--foreground-muted)'}}>[Your Role or Title]</p>
            </div>
            <motion.div className="flex gap-4 w-full justify-center pt-4">
              <motion.a href="#" target="_blank" whileHover={{ scale: 1.2, color: 'var(--accent)' }} style={{ color: 'var(--foreground-muted)'}}><FaGithub /></motion.a>
              <motion.a href="#" target="_blank" whileHover={{ scale: 1.2, color: 'var(--accent)' }} style={{ color: 'var(--foreground-muted)'}}><FaLinkedin /></motion.a>
            </motion.div>
          </div>
        </motion.div>
        <div className="md:col-span-3">
          <div className="flex gap-8 mb-8 pb-4 justify-center flex-wrap">
            {["About Us", "Our Journeys", "Our Experience"].map((tab) => (<motion.button key={tab} onClick={() => setActiveTab(tab.split(' ')[1].toLowerCase())} className="text-lg font-semibold pb-2 relative capitalize" style={{ color: activeTab === tab.split(' ')[1].toLowerCase() ? 'var(--accent)' : 'var(--foreground-muted)' }} whileHover={{ scale: 1.1, color: 'var(--accent)' }} whileTap={{ scale: 0.95 }}>{tab}{activeTab === tab.split(' ')[1].toLowerCase() && (<motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: 'var(--accent)' }}/>)}</motion.button>))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.3 }}>
              {activeTab === "us" && <About />}
              {activeTab === "journeys" && <Professional />}
              {activeTab === "experience" && <Resume />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.footer className="text-center mt-16 pt-8 max-w-6xl mx-auto" style={{ borderTop: `1px solid var(--background-light)` }}>
        <p style={{ color: 'var(--foreground-muted)' }}>Sunlight & Moonbeams</p>
      </motion.footer>
    </div>
  );
}

