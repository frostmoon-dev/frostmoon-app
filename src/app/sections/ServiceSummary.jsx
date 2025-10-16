"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// The feather, a symbol of my superior taste.
const FeatherIcon = ({ featherRef }) => (
  <svg
    ref={featherRef}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fixed top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
    style={{ opacity: 0 }}
  >
    <path
      d="M9.5 21C9.5 21 4 15.5 4 12C4 8.5 6 7 9 7C12 7 13 9 13 11C13 13 10.5 16 9.5 21Z"
      stroke="rgba(255, 255, 255, 0.7)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 11C13 9 14.5 6.5 17.5 6.5C20.5 6.5 21 8.5 21 10.5"
      stroke="rgba(255, 255, 255, 0.7)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 21C10 19.5 10.5 18.5 11 17.5"
      stroke="rgba(255, 255, 255, 0.7)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const ServiceSummary = () => {
  const container = useRef(null);
  const featherRef = useRef(null);

  useEffect(() => {
    const feather = featherRef.current;
    if (!feather) return;

    const moveFeather = (e) => {
      gsap.to(feather, {
        x: e.clientX,
        y: e.clientY,
        rotation: e.movementX * 0.2,
        duration: 0.7,
        ease: "power3.out",
      });
    };
    
    const showFeather = () => gsap.to(feather, { opacity: 1, scale: 1, duration: 0.5 });
    const hideFeather = () => gsap.to(feather, { opacity: 0, scale: 0.8, duration: 0.5 });

    const currentContainer = container.current;
    currentContainer.addEventListener("mouseenter", showFeather);
    currentContainer.addEventListener("mouseleave", hideFeather);
    window.addEventListener("mousemove", moveFeather);

    return () => {
      currentContainer.removeEventListener("mouseenter", showFeather);
      currentContainer.removeEventListener("mouseleave", hideFeather);
      window.removeEventListener("mousemove", moveFeather);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      tl.from("#title-service-1", { xPercent: -50, opacity: 0 })
        .from("#title-service-2", { xPercent: 50, opacity: 0 }, "<")
        .from("#divider-1", { scaleX: 0, opacity: 0, transformOrigin: "center center" }, "-=0.25")
        .from("#title-service-3", { yPercent: 100, opacity: 0 })
        .from("#title-service-4", { yPercent: -100, opacity: 0 }, "<")
        .from("#divider-2", { scaleX: 0, opacity: 0, transformOrigin: "center center" }, "-=0.25");
    },
    { scope: container }
  );

  return (
    <>
      <FeatherIcon featherRef={featherRef} />
      <section
        ref={container}
        className="relative flex flex-col items-center justify-center min-h-screen py-20 overflow-hidden font-serif bg-[#0a0a1a] text-slate-200" // Reverted to serif and original bg color
      >
        <div 
          id="title-service-1" 
          className="text-5xl italic md:text-8xl lg:text-9xl" // Reverted to italic
        >
          {/* D365 F&O / Business Central */}
          <p>Dynamics 365 Development</p>
        </div>

        <div 
          id="title-service-2" 
          className="mt-4 text-3xl font-light md:text-5xl lg:text-7xl" // Reverted font styles
        >
          <p>F&O and Business Central</p>
        </div>
        
        <div id="divider-1" className="w-1/3 h-px my-12 bg-gradient-to-r from-transparent via-sky-300 to-transparent"/>

        <div 
          id="title-service-3"
          className="flex flex-col items-center justify-center gap-4 text-4xl md:flex-row md:text-6xl lg:text-8xl"
        >
          {/* SSRS / Power BI */}
          <p className="font-normal">Data Visualization</p>
          <p className="hidden text-2xl text-sky-400 md:block">&</p>
          {/* React / Next.js / Graphics Design */}
          <p className="italic">Web Application Design</p>
        </div>

         <div id="divider-2" className="w-1/3 h-px my-12 bg-gradient-to-r from-transparent via-sky-300 to-transparent"/>

        <div 
          id="title-service-4" 
          className="text-3xl font-light text-center md:text-5xl lg:text-7xl" // Reverted font styles
        >
          {/* PowerApps / Overall Developer Role */}
          <p>Full-Stack & BI Solutions</p>
        </div>
      </section>
    </>
  );
};

export default ServiceSummary;