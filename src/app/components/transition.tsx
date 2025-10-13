"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Transition({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete(); 
    }, 2500); // Animation duration

    return () => {
      clearTimeout(timer);
    };
    
  }, [onComplete]);

  const text = "Sun & Moon".split("");

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15 + 0.5, // Stagger the appearance of each letter
      },
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="celestial-transition"
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[101] overflow-hidden"
          style={{ backgroundColor: 'var(--background)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold font-orbitron"
              style={{ color: 'var(--accent)' }}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {text.map((char, index) => (
                <motion.span key={index} variants={textVariants} custom={index}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
