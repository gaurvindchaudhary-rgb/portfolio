import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { MARQUEE_ITEMS } from "./data";

export default function App() {
  return (
    <div className="bg-bg text-text-main min-h-screen relative font-sans selection:bg-marigold selection:text-bg overflow-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* About biography */}
      <About />

      {/* Interactive 3D cascading tools & skills */}
      <Skills />

      {/* Projects selection with specs drawer */}
      <Work />

      {/* Infinite scrolling brand marquee */}
      <div className="border-y border-border-custom bg-bg overflow-hidden py-7 relative select-none">
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max items-center">
          {/* Duplicate list to make it infinitely scrollable seamlessly */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="font-mono text-xs md:text-sm font-bold text-text-muted hover:text-marigold transition-colors tracking-widest"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Conversational & inquiry form contact */}
      <Contact />

      {/* Footer copyright */}
      <footer className="border-t border-border-custom/30 py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-text-muted select-none">
        <span>© 2026 Gopal Chaudhary</span>
        <span className="opacity-75">Built with intent, not a template.</span>
      </footer>
    </div>
  );
}
