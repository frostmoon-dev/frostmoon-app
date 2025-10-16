import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `For inquiries, collaborations, or a quiet conversation,
    do not hesitate to reach out.`;
  const items = [
    "let's create",
    "let's create",
    "let's create",
    "let's create",
    "let's create",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-[var(--color-DarkLava)]"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"An Invitation"}
          title={"Contact"}
          text={text}
          textColor={"text-[var(--color-text-light)]"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-[var(--color-text-light)] uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-[var(--color-SageGray)]/50" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                kouhai.dev@email.com
              </p>
            </div>
            <div className="social-link">
              <h2>Online</h2>
              <div className="w-full h-px my-2 bg-[var(--color-SageGray)]/50" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={items}
        className="text-[var(--color-text-light)] bg-transparent"
      />
    </section>
  );
};

export default Contact;