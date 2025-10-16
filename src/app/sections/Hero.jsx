import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const heroRef = useRef(null);
  const textContainerRef = useRef(null);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle options are now dynamic based on screen size!
  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile, // Disable hover interaction on mobile
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 60,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#b0c4de",
        },
        links: {
          enable: false,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: isMobile ? 20 : 50, // Fewer particles on mobile!
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isMobile] // Re-calculate options if isMobile changes
  );

  useGSAP(() => {
    if (isMobile) return;
    const xTo = gsap.quickTo(textContainerRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(textContainerRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = gsap.utils.mapRange(0, width, -20, 20, clientX);
      const y = gsap.utils.mapRange(0, height, -20, 20, clientY);
      xTo(x);
      yTo(y);
    };

    heroRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div ref={textContainerRef} className="z-10 w-full">
        <AnimatedHeaderSection
          subTitle={"Bene venisti ad opera mea"}
          title={"FROSTMOON.DEV"}
          textColor={"text-[var(--color-text-light)]"}
        />
      </div>

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <video
          src="moon.mp4"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
        {init && (
          <Particles
            id="tsparticles"
            options={particleOptions}
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-DarkLava)]/70 via-[var(--color-DarkLava)]/30 to-transparent" />
      </figure>
    </section>
  );
};

export default Hero;