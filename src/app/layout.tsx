"use client";
import "./globals.css";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/transition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${orbitron.variable} antialiased`}>
        <AnimatePresence mode="wait">
          <div key={pathname}>
            <Transition onComplete={() => {}} />
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}