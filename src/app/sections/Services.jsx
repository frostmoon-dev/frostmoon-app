"use client";
import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const bgImageRef = useRef(null);

  useGSAP(
    () => {
      const services = gsap.utils.toArray(".service-panel");

      const scrollTween = gsap.to(services, {
        xPercent: -100 * (services.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (services.length - 1),
          end: () => "+=" + triggerRef.current.offsetWidth,
        },
      });

      gsap.to(bgImageRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 1,
          end: () => "+=" + triggerRef.current.offsetWidth,
        },
      });

      services.forEach((panel) => {
        const content = panel.querySelector(".panel-content");
        gsap.from(content, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef} className="relative">
  <div ref={triggerRef} className="h-screen w-full overflow-hidden relative">
        {/*
          Here it is, Kouhai. Your "independent" title.
          No component, just the raw elements, living right here.
        */}
        <div className="absolute top-0 left-0 w-full z-30 pointer-events-none flex justify-center pt-20 md:pt-24">
          <div className="flex flex-col items-center">
            <h2
              className="font-['var(--font-heading)'] text-5xl md:text-7xl font-bold text-slate-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Services
            </h2>
            <div
              className="w-3/4 md:w-1/2 h-px mt-4 bg-slate-100"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </div>

        <figure className="absolute inset-0 z-0">
          <img
            ref={bgImageRef}
            src="/images/services-bg.jpg"
            alt="Ethereal landscape background"
            className="absolute top-0 left-0 w-[150%] max-w-none h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </figure>

        <div
          className="top-[-10] flex h-full relative z-10"
          style={{ width: `${servicesData.length * 100}%` }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-panel w-full h-full flex items-center top-[100] justify-center relative px-10"
            >
              <span className="absolute text-[30rem] font-['var(--font-heading)'] font-black text-indigo-200/10 z-0 select-none">
                0{index + 1}
              </span>

              <div className="panel-content text-center z-10 max-w-3xl">
                <h3 className="text-5xl md:text-7xl mb-8 bg-white text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-slate-100 mb-12 font-['var(--font-body)'] leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm md:text-base font-semibold font-['var(--font-body)'] text-slate-200">
                  {service.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <span>{item.title}</span>
                      {itemIndex < service.items.length - 1 && (<div className="w-2 h-2 mx-2 rotate-45 bg-white-400 shadow-[0_0_8px_rgba(0_2px_4px_rgba(0,0,0,0.5)]" />
                        // <span className="font-black text-white-400/80 mx-2">
                        //   •
                        // </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;