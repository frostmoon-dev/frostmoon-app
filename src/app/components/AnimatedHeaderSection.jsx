import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle = "", // Default to an empty string if not provided
  title = "",    // Default to an empty string if not provided
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);

  useGSAP(
    () => {
      const subTitleChars = gsap.utils.toArray(".subtitle-char");
      const titleChars = gsap.utils.toArray(".title-char");

      const tl = gsap.timeline({
        scrollTrigger: withScrollTrigger
          ? {
              trigger: contextRef.current,
            }
          : undefined,
      });

      tl.from(contextRef.current, {
        y: "30vh",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      if (subTitleChars.length) { // Only animate if there are characters
        tl.from(
          subTitleChars,
          {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            stagger: {
              each: 0.03,
              from: "center",
            },
            duration: 0.8,
            ease: "circ.out",
          },
          "-=0.5"
        );
      }
      
      if (titleChars.length) { // Only animate if there are characters
        tl.from(
          titleChars,
          {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
            stagger: {
              each: 0.05,
              from: "start",
            },
            duration: 1,
            ease: "circ.out",
          },
          "<+0.5"
        );
      }
    },
    { scope: contextRef }
  );

  return (
    <div ref={contextRef}>
      <div className="flex flex-col items-center justify-center gap-12 pt-16 sm:gap-16">
        <p
          className={`text-3xl text-center tracking-[0.2em] px-10 ${textColor} font-['var(--font-accent)']`}
        >
          {subTitle.split("").map((char, index) => (
            <span
              key={index}
              className="subtitle-char inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </span>
          ))}
        </p>
        <div className="px-10 text-center">
          <h1
            className={`
              relative inline-block pb-4 
              after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--color-text-light)]
              gap-12 uppercase banner-text-responsive sm:gap-16 ${textColor} text-glow
            `}
          >
            {title.split("").map((char, index) => (
              <span
                key={index}
                className="title-char inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {text && text.trim() !== "" && (
        <div className={`relative px-10 ${textColor}`}>
          <div className="absolute inset-x-0 border-t-2 border-[var(--color-SageGray)]" />
          <div className="py-12 sm:py-16 text-center">
            {/* This space is intentionally left for other pages */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedHeaderSection;