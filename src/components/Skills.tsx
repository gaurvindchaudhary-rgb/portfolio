import React, { useState, useEffect } from "react";
import { SKILL_TILES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const [active, setActive] = useState(0);
  const [radius, setRadius] = useState(200);
  const [tileSize, setTileSize] = useState(105);

  // Auto-rotate the skills wheel - increased speed for snappier movement
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SKILL_TILES.length);
    }, 2000); // Faster, snappy transition
    return () => clearInterval(interval);
  }, []);

  // Track viewport dimensions to keep the orbit perfectly responsive and prevent overlaps
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setRadius(85);
        setTileSize(75);
      } else if (window.innerWidth < 640) {
        setRadius(100);
        setTileSize(85);
      } else if (window.innerWidth < 1024) {
        setRadius(130);
        setTileSize(90);
      } else {
        setRadius(190);
        setTileSize(100);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTileClick = (idx: number) => {
    setActive(idx);
  };

  return (
    <section
      className="relative overflow-hidden bg-bg border-y border-border-custom/30 px-6 md:px-12 py-24 select-none"
      id="skills"
    >
      {/* Background soft ambient radial glow behind the orbit */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-glow/10 to-transparent filter blur-[80px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[500px]">
        {/* Column 1: Static Title & Info (Left - 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col text-left z-10">
          <span className="font-mono text-[0.76rem] font-semibold text-jade tracking-wider uppercase">
            TOOLS & SKILLS
          </span>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] tracking-tight text-text-main">
            SOFTWARE <br /> SKILLS
          </h2>
          <p className="mt-6 text-text-muted max-w-[420px] leading-relaxed text-[0.98rem]">
            No agency buzzwords. Just the real, battle-tested tech stack I use to build, design, and grow businesses. Click any tile on the wheel to explore.
          </p>

          {/* Quick Click/Indicators Navigation */}
          <div className="flex gap-2.5 mt-8">
            {SKILL_TILES.map((tile, i) => (
              <button
                key={tile.name}
                onClick={() => handleTileClick(i)}
                className={`w-3.5 h-3 rounded-full transition-all duration-300 ${
                  active === i ? "bg-marigold w-7" : "bg-border-custom hover:bg-text-muted/40"
                }`}
                aria-label={`Select skill: ${tile.name}`}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Active Text & Rotating Circular Orbit Wheel (Right - 7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[420px] sm:min-h-[480px]">
          {/* Active Skill Info Label (Left of the orbit path) */}
          <div className="md:col-span-5 flex flex-col text-left z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-3"
              >
                <h3 className="font-display font-bold text-2xl sm:text-2.5xl lg:text-3.5xl text-text-main tracking-wide leading-tight">
                  {SKILL_TILES[active].name}
                </h3>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] md:text-[0.78rem] text-marigold tracking-widest uppercase font-semibold">
                  {SKILL_TILES[active].tag}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs text-text-muted leading-relaxed max-w-[280px] pt-1">
                  Click the orbiting tiles to interact with my setup or let them rotate naturally.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Circular Orbit Wheel (Right side) */}
          <div className="md:col-span-7 relative w-full h-[280px] sm:h-[460px] flex items-center justify-center overflow-visible">
            {/* Subtle decorative orbit path border */}
            <div
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border-custom/30 pointer-events-none transition-all duration-500"
            />

            {/* Orbiting Icons */}
            {SKILL_TILES.map((tile, idx) => {
              // Calculate angles: spacing them out evenly
              // Placing active element at angle Math.PI (leftmost point of orbit, right next to the label!)
              const angle = ((idx - active) * (2 * Math.PI / SKILL_TILES.length)) + Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              // Styling highlights for the active tile
              const isActive = idx === active;
              const scale = isActive ? 1.15 : 0.85;
              const opacity = isActive ? 1 : 0.55;
              const zIndex = isActive ? 20 : 10;

              // Generate beautiful initials and subtitle
              const initials = tile.name.split(" ")[0].substring(0, 2);
              const subText = tile.name.split(" ")[1]?.toUpperCase() || "TOOL";

              return (
                <div
                  key={tile.name}
                  onClick={() => handleTileClick(idx)}
                  style={{
                    width: `${isActive ? tileSize * 1.1 : tileSize}px`,
                    height: `${isActive ? tileSize * 1.1 : tileSize}px`,
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  className={`absolute top-1/2 left-1/2 rounded-[20px] sm:rounded-[24px] cursor-pointer flex flex-col items-center justify-center gap-0.5 sm:gap-1 font-mono font-bold text-lg sm:text-2xl shadow-[0_20px_40px_-14px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-110 active:scale-95 ${
                    tile.className
                  } ${
                    isActive
                      ? "ring-2 ring-marigold ring-offset-2 ring-offset-bg shadow-[0_0_30px_rgba(245,166,35,0.25)]"
                      : "filter brightness-75 hover:brightness-100"
                  }`}
                >
                  {initials}
                  <span className="text-[0.45rem] sm:text-[0.55rem] font-sans font-extrabold tracking-widest uppercase opacity-85 mt-0.5">
                    {subText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
