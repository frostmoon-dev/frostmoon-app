"use client";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/transition";
import React, { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState("");

  // This useEffect ensures we only access window.location.pathname on the client side.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Lunaris</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@400;500..900&display=swap" rel="stylesheet" />
          <style>{`
            :root {
              --font-jetbrains-mono: 'JetBrains Mono', monospace;
              --font-orbitron: 'Orbitron', sans-serif;
            }
          `}</style>
      </head>
      <body className={`antialiased`} style={{ fontFamily: 'var(--font-jetbrains-mono)'}}>
        <AnimatePresence mode="wait">
          <div key={pathname}>
            <Transition onComplete={() => {}} />
            {children}
          </div>
        </AnimatePresence>
        <script async src="//code.tidio.co/uwxsz6qiplidpo3cjoqwat1sapidgdna.js"></script>
      </body>
    </html>
  );
}

