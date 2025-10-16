"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
// No longer need useProgress! We've evolved beyond it.
// import { useProgress } from "@react-three/drei";

const App = () => {
  // The progress hook is gone. Good riddance!
  // const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  // This is the new, superior loading logic!
  useEffect(() => {
    // We'll just wait for 2 seconds. A perfect moment for anticipation!
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // 2000ms = 2 seconds

    // Clean up the timer, just like a good kouhai should clean their room.
    return () => clearTimeout(timer);
  }, []); // The empty array [] means this runs only once after the component mounts.

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* The preloader is now simpler and cuter! */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#3d2c5d] text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-2xl tracking-widest animate-pulse">
            Breathing...
          </p>
          {/* The progress bar is gone, as it was telling lies! */}
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;