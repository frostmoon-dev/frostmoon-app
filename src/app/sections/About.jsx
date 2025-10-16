"use client";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCat, FaMoon, FaMugHot, FaGamepad } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const introText = `From intricate systems to captivating interfaces, I compose digital symphonies with chilling grace.`;
  const mainBio = `As a developer at Comm-IT, I orchestrate complex enterprise solutions with D365 and the Power Platform. Yet, my true canvas lies in front-end development, where I blend elegant code with a darkly aesthetic vision using React and Next.js, crafting experiences that are as profoundly beautiful as they are functional.`;
  
  const traces = [
    { icon: <FaGamepad />, text: "Lost in the chilling narratives of Wuthering Waves & Star Rail." },
    { icon: <FaMoon />, text: "Cultivating an aesthetic of understated, ethereal beauty." },
    { icon: <FaMugHot />, text: "Fueled by midnight brews and quiet contemplation." },
    { icon: <FaCat />, text: "Embracing the silent companionship of a shadowy familiar." },
  ];

  const sectionRef = useRef(null);
  const sceneRef = useRef(null); // A "scene" for our floating elements
  const imgContainerRef = useRef(null);
  const mainBioRef = useRef(null);
  const tracesRef = useRef(null);

  useGSAP(() => {
    // --- Scroll-based Animations for revealing the elements ---
    const elements = [mainBioRef.current, imgContainerRef.current, tracesRef.current];
    gsap.from(elements, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    // --- My Ultimate Upgrade: A 3D Mouse Parallax Effect ---
    // This makes the section feel like a deep, haunted space you're peering into.
    const scene = sceneRef.current;
    const handleMouseMove = (e) => {
      if (!scene) return;
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = scene;
      const x = (clientX / offsetWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / offsetHeight - 0.5) * 2; // -1 to 1

      // Move each layer at a different "depth" for a 3D effect
      gsap.to(mainBioRef.current, {
        x: -x * 20, y: -y * 15, duration: 1, ease: 'power3.out'
      });
      gsap.to(imgContainerRef.current, {
        x: x * 15, y: y * 25, duration: 1, ease: 'power3.out'
      });
      gsap.to(tracesRef.current, {
        x: x * 25, y: -y * 20, duration: 1, ease: 'power3.out'
      });
    };

    sectionRef.current.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup, Kouhai. Never forget to clean up your listeners.
    return () => {
        sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
    };

  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      // Added a radial gradient for a vignette/spotlight effect. More atmosphere!
      className="relative flex flex-col min-h-screen py-24 bg-[var(--color-DarkLava)] rounded-b-4xl overflow-hidden justify-center"
      style={{ background: "radial-gradient(circle, #2a2a3a 0%, var(--color-DarkLava) 70%)" }}
    >
      <AnimatedHeaderSection
        subTitle={"Composed with Purpose, Performed with Grace"}
        title={"About"}
        text={introText}
        textColor={"text-[var(--color-text-light)]"}
        withScrollTrigger={true}
      />
      
      {/* The scene container for the parallax effect. The grid is gone. Chaos reigns. */}
      <div ref={sceneRef} className="relative w-full h-[60vh] mt-16">
        
        {/* Each element is now absolutely positioned, free to float in the abyss. */}
        <div ref={mainBioRef} className="absolute w-[400px] top-[10%] left-[15%] text-lg font-light tracking-wide text-left text-slate-300">
          <AnimatedTextLines text={mainBio} />
        </div>

        <div ref={imgContainerRef} className="absolute z-10 p-4 image-frame top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]">
          <div className="image-frame-corner image-frame-top-left"></div>
          <div className="image-frame-corner image-frame-top-right"></div>
          <img src="IconRoleSelect21.png" alt="A mysterious avatar" className="w-50" />
          <div className="image-frame-corner image-frame-bottom-left"></div>
          <div className="image-frame-corner image-frame-bottom-right"></div>
        </div>
        
        <div ref={tracesRef} className="absolute flex flex-col gap-6 top-[20%] right-[15%] w-[380px]">
            {/* The title now glitches into existence. A perfect haunting touch. */}
            <h3 className="mb-2 text-2xl italic text-slate-100 glitch" data-text="Traces:">Traces:</h3>
            {traces.map((trace, index) => (
                <div key={index} className="flex items-center gap-4 transition-opacity duration-300 opacity-70 hover:opacity-100">
                    <span className="text-xl text-sky-300">{trace.icon}</span>
                    <p className="text-base text-slate-300">{trace.text}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;