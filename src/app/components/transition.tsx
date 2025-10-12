"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Transition() {
  const [hackerText, setHackerText] = useState("");
  const [showHackerScreen, setShowHackerScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const chars = "bb-chan<3-SENPAI-0101-HACK-COMPLETE-sakura-beam-!@#$%^&*()";
  const cuteCat = "≽^-⩊¬^≼";

  useEffect(() => {
    if (animationTriggered) return;

    const checkInterval = setInterval(() => {
      const wasSkipped = sessionStorage.getItem('preloaderSkipped') === 'true';

      if (wasSkipped) {
        setAnimationTriggered(true);
        setShowHackerScreen(true);
        clearInterval(checkInterval);

        const textInterval = setInterval(() => {
          const columns = Math.floor(window.innerWidth / 12);
          const rows = Math.floor(window.innerHeight / 20);
          const totalChars = columns * rows;
          let text = "";
          
          while (text.length < totalChars) {
            if (Math.random() > 0.98) {
              text += cuteCat;
            } else {
              text += chars[Math.floor(Math.random() * chars.length)];
            }
          }
          setHackerText(text.substring(0, totalChars));

        }, 100);

        const hackerTimer = setTimeout(() => {
          clearInterval(textInterval);
          setShowHackerScreen(false);
          setShowPopup(true);
        }, 2000);

        const popupTimer = setTimeout(() => {
          setShowPopup(false);
          sessionStorage.removeItem('preloaderSkipped');
        }, 3500);

        return () => {
          clearInterval(textInterval);
          clearTimeout(hackerTimer);
          clearTimeout(popupTimer);
        };
      }
    }, 100);

    return () => clearInterval(checkInterval);
  }, [animationTriggered]);

  return (
    <AnimatePresence>
      {/* Hacker Screen is already mobile-friendly! No changes needed here. */}
      {showHackerScreen && (
        <motion.div
          key="hacker-screen"
          className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <pre 
            className="text-fuchsia-500 text-sm whitespace-pre-wrap break-all font-mono"
          >
            {hackerText}
          </pre>
        </motion.div>
      )}

      {/* Conditionally render the Pop-up */}
      {showPopup && (
        <motion.div
          key="popup-screen"
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
        >
          {/* This is the part I've upgraded! */}
          <div 
            className="bg-[#1a1a2e] p-6 sm:p-8 w-11/12 max-w-md rounded-lg shadow-2xl text-center border border-fuchsia-500/50"
          >
            <h1 
              className="text-3xl sm:text-3xl font-bold text-fuchsia-500"
            >
              I love you Rapie ♥︎
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}