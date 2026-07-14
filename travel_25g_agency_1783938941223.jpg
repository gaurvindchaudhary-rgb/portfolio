import React from "react";
import { ABOUT_IMAGE } from "../data";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="bg-surface border-y border-border-custom px-6 md:px-12 py-24 relative" id="about">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Workspace Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-surface-2 to-[#0c0e12] border border-border-custom overflow-hidden relative shadow-2xl group"
        >
          <img
            src={ABOUT_IMAGE}
            alt="Gopal Chaudhary's Creative Workspace Setup"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* Biography Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="font-mono text-[0.76rem] font-semibold text-jade tracking-wider uppercase">
            ABOUT
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl mt-4 leading-[1.15] text-text-main">
            Business dev by day, builder by instinct.
          </h2>
          <div className="mt-6 text-text-muted space-y-5 leading-relaxed text-[0.98rem] md:text-[1.05rem]">
            <p>
              I work in real estate business development, and outside of that, I build —
              websites, brand visuals, and high-performance ad campaigns. I am mostly
              self-taught, fueled by late-night curiosity, and focused on shipping working
              versions of projects incredibly fast.
            </p>
            <p>
              Right now, I am dedicated to helping small hospitality, heritage stay, and local
              travel businesses look and operate like enterprise-level setups — one custom website,
              one pristine brand kit, and one targeted ad account at a time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Side Brand Signature Tag */}
      <div className="absolute bottom-8 left-8 z-10 text-left pointer-events-none select-none hidden sm:block">
        <div className="font-semibold text-[0.8rem] text-text-main leading-tight tracking-wider">
          Gopal
          <span className="block text-text-muted text-[0.72rem] font-medium tracking-wide">
            Chaudhary
          </span>
        </div>
      </div>
    </section>
  );
}
