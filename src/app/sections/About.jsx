import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `From intricate systems to captivating interfaces,
  I compose digital symphonies with chilling grace.`;
  const aboutText = `As a developer at Comm-IT, I orchestrate complex enterprise solutions with D365 and the Power Platform, bringing order to digital chaos. Yet, my true canvas lies in front-end development, where I blend elegant code with a darkly aesthetic vision using React and Next.js, crafting experiences that are as profoundly beautiful as they are functional.

When the moon is high and the code is at rest, you'll find me:
❄️ Lost in the chilling narratives of Wuthering Waves or Star Rail.
🕯️ Cultivating an aesthetic of understated, ethereal beauty.
☕ Fueled by midnight brews and the quiet hum of contemplation.
🖤 Embracing the silent companionship of my shadowy familiar.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--color-DarkLava)] rounded-b-4xl"
    >
      <AnimatedHeaderSection
        subTitle={"Composed with Purpose, Performed with Grace"}
        title={"About"}
        text={text}
        textColor={"text-[var(--color-text-light)]"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-[var(--color-SageGray)]">
        <img
          ref={imgRef}
          src="images/avatar.png"
          alt="A mysterious avatar"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;