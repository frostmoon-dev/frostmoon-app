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
      {/* ... the rest of your JSX for the hacker screen and pop-up is the same ... */}
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

      {showPopup && (
        <motion.div
          key="popup-screen"
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
        >
          <div 
            className="bg-[#1a1a2e] p-6 sm:p-8 w-11/12 max-w-md rounded-lg shadow-2xl text-center border border-fuchsia-500/50"
          >
            <h1 
              className="text-3xl sm:text-3xl font-bold text-fuchsia-500"
            >
              I love you Rapie~ ♥ 
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}