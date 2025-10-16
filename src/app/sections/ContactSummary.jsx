import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Elegance",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact me",
    "contact me",
    "contact me",
    "contact me",
    "contact me",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee
        items={items}
        className="text-[var(--color-DarkLava)] bg-transparent"
      />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s compose a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          digital experience{" "}
          <span className="text-[var(--color-gold)]">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-[var(--color-DarkLava)] bg-transparent border-y-2 border-[var(--color-SageGray)]/30"
        iconClassName="text-[var(--color-gold)]"
        icon="ph:snowflake-bold"
      />
    </section>
  );
};

export default ContactSummary;