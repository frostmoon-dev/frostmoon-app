"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Menu.css";

const MenuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">霜月</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>[ Menu ]</p>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">霜月</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>[ Close ]</p>
          </div>
        </div>

        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {MenuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.linkedin.com/in/fatihahmuhd/" target="_blank" rel="noopener noreferrer">
                LinkedIn &#8599;
              </a>
              <a href="https://github.com/tehamuhd" target="_blank" rel="noopener noreferrer">
                GitHub &#8599;
              </a>
              <a href="https://www.instagram.com/teha.muhd/" target="_blank" rel="noopener noreferrer">
                Instagram &#8599;
              </a>
            </div>
            <div className="menu-info-col">
              <p>fatihahmuhd467@gmail.com</p>
              <p>+60 13-425-9039</p>
            </div>
          </div>
        </div>

        <div className="menu-preview">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
