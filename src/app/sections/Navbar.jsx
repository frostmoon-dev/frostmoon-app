import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const spotlightRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  // Clock Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useGSAP is now only for the main open/close animation timeline. It runs once.
  useGSAP(() => {
    gsap.set(navRef.current, {
      clipPath: "circle(0% at calc(100% - 48px) 48px)",
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        clipPath: "circle(150% at calc(100% - 48px) 48px)",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .from(
        linksRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .from(
        contactRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(5px)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  // A separate useEffect handles the spotlight's mouse-following logic.
  useEffect(() => {
    const xTo = gsap.quickTo(spotlightRef.current, "xPercent", {
      duration: 0.7,
      ease: "power3",
    });
    const yTo = gsap.quickTo(spotlightRef.current, "yPercent", {
      duration: 0.7,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      if (!isOpen) return; // The check is still here
      const { clientX, clientY } = e;
      xTo((clientX / window.innerWidth) * 100);
      yTo((clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]); // This hook depends on 'isOpen'

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full bg-[var(--color-DarkLava)]/80 text-[var(--color-text-light)] backdrop-blur-lg overflow-hidden"
      >
        <div
          ref={spotlightRef}
          className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, var(--color-gold) 0%, transparent 60%)",
            opacity: isOpen ? 0.05 : 0, // Fade spotlight in/out
            transition: 'opacity 0.5s ease'
          }}
        ></div>

        <div className="absolute top-8 left-8 text-lg font-['var(--font-body)'] tracking-widest text-[var(--color-SageGray)]">
          {time}
        </div>

        <img
          src="cryo.png"
          alt="Animated snowflake sigil"
          className="absolute w-[30rem] h-[30rem] opacity-5 [animation:spin_60s_linear_infinite]"
        />

        <div className="z-10 flex flex-col items-center text-5xl font-['var(--font-heading)'] gap-y-4 md:text-6xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="transition-all duration-300 cursor-pointer hover:text-white hover:tracking-widest"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                  onClick={toggleMenu}
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        <div
          ref={contactRef}
          className="z-10 flex flex-col items-center gap-4 mt-24 text-center"
        >
          <p className="text-sm tracking-wider text-white/50 font-['var(--font-body)']">
            Let's Connect
          </p>
          <div className="flex flex-wrap gap-x-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white font-['var(--font-body)']"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div
        className="fixed z-50 flex items-center justify-center w-20 h-20 transition-all duration-300 cursor-pointer burger-button top-4 right-6"
        onClick={toggleMenu}
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      >
        <div></div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span
            className="block w-8 h-0.5 bg-[var(--color-text-light)] rounded-full transition-transform duration-300 ease-in-out"
            style={{
              transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          ></span>
          <span
            className="block w-8 h-0.5 bg-[var(--color-text-light)] rounded-full transition-transform duration-300 ease-in-out"
            style={{
              transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;