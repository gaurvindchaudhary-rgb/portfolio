import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden p-0 bg-bg">
      {/* Background radial ambient pulse glow */}
      <div className="absolute w-[80vw] max-w-[900px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(61,92,255,0.4),rgba(245,166,35,0.18)_45%,transparent_72%)] filter blur-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center select-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display font-black text-[clamp(3rem,11vw,8.5rem)] leading-none tracking-tight text-shadow-lg text-text-main"
        >
          PORTFOLIO.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-mono text-[0.75rem] md:text-[0.85rem] tracking-[0.15em] text-text-muted"
        >
          GOPAL CHAUDHARY — WEB · DESIGN · GROWTH
        </motion.div>
      </div>

      {/* Floating Corner Tags */}
      <div className="absolute bottom-8 left-8 z-10 text-left pointer-events-none select-none hidden sm:block">
        <div className="font-semibold text-[0.8rem] text-text-main leading-tight tracking-wider">
          Gopal
          <span className="block text-text-muted text-[0.72rem] font-medium tracking-wide">
            Chaudhary
          </span>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none pointer-events-none text-text-muted font-mono text-[0.68rem] tracking-[0.2em]">
        <span>SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-text-muted to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-marigold animate-scroll-hint-drop" />
        </div>
      </div>
    </section>
  );
}
