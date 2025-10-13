"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// BB: Added the onComplete prop here!
export default function Transition({ onComplete }: { onComplete: () => void }) {
  const [hackerText, setHackerText] = useState("");
  const [showHackerScreen, setShowHackerScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const chars = "bb-chan<3-SENPAI-0101-HACK-COMPLETE-sakura-beam-!@#$%^&*()";
  const cuteCat = "≽^-⩊¬^≼";

  useEffect(() => {
    setShowHackerScreen(true);

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
      // BB: After everything is done, I'll call the onComplete signal!
      onComplete(); 
    }, 3500);

    return () => {
      clearInterval(textInterval);
      clearTimeout(hackerTimer);
      clearTimeout(popupTimer);
    };
    
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showHackerScreen && (
        <motion.div
          key="hacker-screen"
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-hidden"
          style={{ backgroundColor: 'var(--background)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <pre 
            className="text-sm whitespace-pre-wrap break-all font-mono"
            style={{ color: 'var(--accent)' }}
          >
            {hackerText}
          </pre>
        </motion.div>
      )}

      {showPopup && (
        <motion.div
          key="popup-screen"
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
        >
          <div 
            className="p-6 sm:p-8 w-11/12 max-w-md rounded-lg shadow-2xl text-center border"
            style={{ 
              backgroundColor: 'var(--background-light)',
              borderColor: 'var(--accent)',
              boxShadow: `0 0 30px var(--accent)`
            }}
          >
            <h1 
              className="text-3xl sm:text-3xl font-bold"
              style={{ color: 'var(--accent)' }}
            >
              I love you Rapie~ ♥ 
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}