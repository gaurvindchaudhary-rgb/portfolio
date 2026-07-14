import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ExternalLink, CheckCircle, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Work() {
  const [filter, setFilter] = useState<"All" | "Web" | "Brand" | "Ads">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="bg-surface border-t border-border-custom px-6 md:px-12 py-24 relative" id="work">
      <div className="max-w-[1180px] mx-auto">
        {/* Title */}
        <div className="mb-12">
          <span className="font-mono text-[0.76rem] font-semibold text-jade tracking-wider uppercase">
            SELECTED WORK
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl mt-3 text-text-main">
            Completed Projects
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-border-custom/50 pb-6">
          {(["All", "Web", "Brand", "Ads"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? "bg-marigold text-bg border-marigold shadow-lg shadow-marigold/10"
                  : "bg-surface-2 text-text-muted border-border-custom hover:text-text-main hover:border-text-muted/40"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid/List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border-b border-border-custom/30 pb-16 last:border-b-0 last:pb-0"
              >
                {/* Visual Image container */}
                <div className="aspect-[16/10] rounded-[18px] border border-border-custom bg-gradient-to-br from-surface-2 to-[#0b0d11] overflow-hidden relative shadow-xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-bg/85 border border-border-custom px-3 py-1 rounded-full font-mono text-[0.68rem] text-jade">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Copy / Info */}
                <div className="flex flex-col text-left">
                  <span className="font-mono text-marigold text-sm font-semibold tracking-widest">
                    {project.index}
                  </span>
                  <h3 className="font-display font-medium text-2xl md:text-3.5xl mt-3 text-text-main">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mt-4 leading-relaxed text-[0.98rem] md:text-[1.02rem]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.68rem] border border-border-custom px-3.5 py-1.5 rounded-full text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Details Button */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-3 rounded-full text-xs font-mono font-bold bg-surface-2 text-text-main border border-border-custom hover:border-marigold transition-all duration-300 flex items-center gap-2 group shadow-md"
                    >
                      EXPLORE SPECS
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full text-xs font-mono font-bold bg-marigold text-bg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 shadow-md shadow-marigold/10"
                      >
                        LIVE PREVIEW
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Informative project showcase note */}
        <div className="mt-20 p-6 md:p-8 border border-dashed border-border-custom rounded-[14px] text-text-muted text-[0.86rem] leading-relaxed max-w-[800px] mx-auto text-center bg-surface-2/40">
          <p className="font-semibold text-text-main mb-1">💼 Actual Live Deployments</p>
          These are real, live client projects fully designed, built, and optimized on Netlify by Gopal. Click on "Live Preview" to inspect the production websites directly.
        </div>
      </div>

      {/* Selected Project Specs Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface border border-border-custom rounded-2xl w-full max-w-[650px] max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 md:p-10 scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-text-muted hover:text-text-main p-1.5 rounded-full border border-border-custom bg-bg/50 hover:border-marigold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-marigold tracking-widest font-bold">
                SPECS & FEATURES
              </span>

              <h3 className="font-display font-bold text-2xl md:text-3.5xl mt-3 text-text-main">
                {selectedProject.title}
              </h3>

              {/* Sub-details */}
              <div className="grid grid-cols-2 gap-4 border-y border-border-custom/50 py-4 my-6 text-left">
                <div>
                  <span className="block font-mono text-[0.65rem] text-text-muted tracking-widest uppercase">
                    Category
                  </span>
                  <span className="text-text-main font-semibold text-sm">
                    {selectedProject.category} Solutions
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[0.65rem] text-text-muted tracking-widest uppercase">
                    Deliverables
                  </span>
                  <span className="text-text-main font-semibold text-sm">
                    Performance Redesign
                  </span>
                </div>
              </div>

              {/* Feature bullet list */}
              <div className="text-left space-y-4">
                <h4 className="font-sans font-bold text-[0.9rem] text-text-main tracking-wider uppercase mb-2">
                  Key Milestones Delivered:
                </h4>
                {selectedProject.features?.map((feat, i) => (
                  <div key={i} className="flex gap-3 items-start text-text-muted leading-relaxed text-sm">
                    <CheckCircle className="w-4 h-4 text-jade mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-10 flex flex-wrap gap-4 justify-start">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-full text-xs font-mono font-bold bg-surface-2 text-text-main border border-border-custom hover:border-text-main transition-all shadow-md"
                >
                  Close Details
                </button>
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-xs font-mono font-bold bg-marigold text-bg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-marigold/10 flex items-center gap-1.5"
                  >
                    Open Live Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
