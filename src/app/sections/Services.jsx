"use client";
import { useRef, useState, useEffect } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `I compose secure, high-performance full-stack applications
    with an ethereal user experience to drive growth, not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="services" className="relative">
      <AnimatedHeaderSection
        title="Services"
        text={text}
        textColor={"text-[var(--color-DarkLava)]"}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-[var(--color-text-light)] bg-[var(--color-DarkLava)] border-t-2 border-[var(--color-SageGray)]/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:w-1/3 md:mb-0">
              <h3 className="text-3xl font-bold">{service.title}</h3>
            </div>
            <div className="md:w-1/2">
              <p className="mb-8 text-[var(--color-SageGray)]">
                {service.description}
              </p>
              <div className="flex flex-col gap-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-center gap-4 text-xl font-semibold">
                      <div className="flex items-center justify-center w-8 h-8 text-[var(--color-DarkLava)] bg-[var(--color-SageGray)] rounded-full">
                        0{itemIndex + 1}
                      </div>
                      {item.title}
                    </div>
                    {itemIndex < service.items.length - 1 && (
                      <div className="h-20 w-[2px] ml-4 bg-[var(--color-SageGray)]/30 my-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;