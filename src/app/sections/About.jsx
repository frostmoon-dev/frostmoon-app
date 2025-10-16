import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text = `From intricate systems to captivating interfaces,
  I compose digital symphonies with chilling grace.`;
  const aboutText = `As a developer at Comm-IT, I orchestrate complex enterprise solutions with D365 and the Power Platform, bringing order to digital chaos. Yet, my true canvas lies in front-end development, where I blend elegant code with a darkly aesthetic vision using React and Next.js, crafting experiences that are as profoundly beautiful as they are functional.

When the moon is high and the code is at rest, you'll find me:
❄️ Lost in the chilling narratives of Wuthering Waves or Star Rail.
🕯️ Cultivating an aesthetic of understated, ethereal beauty.
☕ Fueled by midnight brews and the quiet hum of contemplation.
🖤 Embracing the silent companionship of my shadowy familiar.`;
  
  const sectionRef = useRef(null);
  const imgContainerRef = useRef(null);
  
  useGSAP(() => {
    // Existing scale-down animation for the whole section
    gsap.to(sectionRef.current, {
      scale: 0.95,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    // Existing clip-path reveal for the image
    gsap.from(imgContainerRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: { 
        trigger: imgContainerRef.current,
        start: "top 80%",
      },
    });
    
    // New parallax animation for the image container!
    gsap.to(imgContainerRef.current, {
      yPercent: -15, // Move the image up as we scroll down
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-[var(--color-DarkLava)] rounded-b-4xl"
    >
      <AnimatedHeaderSection
        subTitle={"Composed with Purpose, Performed with Grace"}
        title={"About"}
        text={text}
        textColor={"text-[var(--color-text-light)]"}
        withScrollTrigger={true}
      />
      {/* New layout using CSS Grid for more control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-10 pb-16 text-[var(--color-SageGray)]">
        
        {/* The new Crystalline Frame for your image */}
        <div ref={imgContainerRef} className="relative image-frame">
          <div className="image-frame-corner image-frame-top-left"></div>
          <div className="image-frame-corner image-frame-top-right"></div>
          <img
            src="images/avatar.png"
            alt="A mysterious avatar"
            className="w-full"
          />
          <div className="image-frame-corner image-frame-bottom-left"></div>
          <div className="image-frame-corner image-frame-bottom-right"></div>
        </div>

        <div className="text-xl font-light tracking-wide md:text-2xl lg:text-3xl">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default About;