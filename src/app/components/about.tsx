import { GlitchText } from "../page"; // You may need to adjust this import path!

type AboutProps = {
  theme: {
    background: string;
    accent: string;
    accentLight: string;
    highlight: string;
  };
};

export default function About({ theme }: AboutProps) {
  return (
<<<<<<< HEAD
    <motion.div
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2
        ref={headingRef}
        className="text-3xl font-bold mb-4 text-center"
        style={{ color: kanaoTheme.accentLight }}
      >
        About Me
      </h2>
      <GlowingCard>
        <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
          <GlitchText text="When I'm not deep in the world of code, you can usually find me exploring the vast worlds of Teyvat or hopping aboard the Astral Express! I'm a huge fan of Hoyoverse games and love the art, stories, and characters they create." />
        </p>
        <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed mb-4">
          <GlitchText text="I'm also really into Japanese fashion, especially cute and elegant styles like Larme Kei and Liz Lisa. Putting together outfits and doing makeup is a fun, creative outlet for me. And yes, that extends to cosplay. Bringing my favorite characters to life is a passion of mine." />
        </p>
        <p style={{ color: kanaoTheme.accentLight }} className="leading-relaxed">
          <GlitchText text="Ultimately, I just love cute things, whether it's in games, fashion, or finding a perfectly adorable plushie. It's all about finding joy in the little details." />
        </p>
      </GlowingCard>
    </motion.div>
=======
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: theme.accentLight }}
        >
          <GlitchText text="About Me" />
        </h2>
        <div
          className="w-35 h-1 rounded"
          style={{ backgroundColor: theme.highlight }}
        ></div>
      </div>

      <div className="space-y-4">
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="When I'm not deep in the world of code, you can usually find me exploring the vast worlds of Teyvat or hopping aboard the Astral Express! I'm a huge fan of Hoyoverse games and love the art, stories, and characters they create." />
        </p>
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="I'm also really into Japanese fashion, especially cute and elegant styles like Larme Kei and Liz Lisa. Putting together outfits and doing makeup is a fun, creative outlet for me. And yes, that extends to cosplay! Bringing my favorite characters to life is a passion of mine." />
        </p>
        <p style={{ color: theme.accentLight }}>
          <GlitchText text="Ultimately, I just love cute things, whether it's in games, fashion, or finding a perfectly adorable plushie. It's all about finding joy in the little details!" />
        </p>
      </div>
    </div>
>>>>>>> parent of 3f828bc (before bb)
  );
}