import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProcessStep } from "../data/process";
import { X, Search, Beaker, HelpCircle, Layers, CheckCircle } from "lucide-react";

interface CraftingProcessProps {
  steps: ProcessStep[];
}

export default function CraftingProcess({ steps }: CraftingProcessProps) {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  // Close lightbox
  const closeModal = () => setSelectedStep(null);

  return (
    <section id="crafting-process-section" className="py-24 bg-dark-coffee relative text-beige px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Editorial Decorative border at top */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-terracotta/40 to-transparent" />

      {/* High-fidelity elegant drifting background orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-terracotta/25 rounded-full filter blur-[120px] pointer-events-none animate-drift-slow" />
      <div className="absolute bottom-[25%] left-[-10%] w-[500px] h-[500px] bg-earth-gold/18 rounded-full filter blur-[130px] pointer-events-none animate-drift-reverse" />
      <div className="absolute top-[50%] left-[20%] w-[300px] h-[300px] bg-coffee/30 rounded-full filter blur-[90px] pointer-events-none animate-float-slow" />
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-batik-grid" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-earth-gold uppercase tracking-[0.25em] block mb-3 animate-pulse">
            Handcrafted Mechanics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-beige tracking-tight mb-4">
            The Art of Crafting
          </h2>
          <p className="text-sand/80 max-w-2xl mx-auto font-sans font-light leading-relaxed text-sm md:text-base">
            Nusantaraya Wall is engineered through a carbon-negative bio-organic cycle, transforming agricultural residues into high-performance insulation tiles.
          </p>
        </div>

        {/* Zig-Zag Process Layout */}
        <div className="space-y-24 md:space-y-36">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.stepNumber}
                className={`flex flex-col lg:items-center gap-8 md:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Showcase Container (Interactive Zoom Trigger) with scroll reveal sliding left/right */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, type: "spring", stiffness: 40, damping: 12, delay: 0.1 }}
                  className="w-full lg:w-1/2 group"
                >
                  <div 
                    onClick={() => setSelectedStep(step)}
                    className="relative overflow-hidden rounded-2xl border border-terracotta/20 bg-coffee aspect-[4/3] shadow-[0_12px_45px_rgba(44,27,13,0.55)] hover:shadow-[0_20px_50px_rgba(212,163,115,0.18)] hover:border-earth-gold/45 cursor-pointer transition-all duration-500"
                  >
                    {/* Blurry Preloader effect simulated */}
                    <div className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 transition-all duration-700 ease-in-out group-hover:scale-105" 
                      style={{ backgroundImage: `url(${step.realPhotoUrl})` }}
                    />
                    
                    <img
                      src={step.realPhotoUrl}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-coffee/95 via-dark-coffee/20 to-transparent opacity-80 group-hover:via-dark-coffee/10 transition-all duration-500" />

                    {/* Icon indicator to view details */}
                    <div className="absolute top-4 right-4 bg-dark-coffee/85 hover:bg-terracotta backdrop-blur-md text-beige p-3 rounded-full border border-beige/10 transition-all duration-300 shadow-md z-10 scale-90 group-hover:scale-100"
                         onClick={(e) => { e.stopPropagation(); setSelectedStep(step); }}
                         title="Preview technical details"
                         id={`preview-zoom-btn-${step.stepNumber}`}
                    >
                      <Search className="w-4.5 h-4.5 text-earth-gold" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-coffee text-beige border border-earth-gold/30 flex items-center justify-center font-mono font-semibold text-sm shadow-md">
                        0{step.stepNumber}
                      </span>
                      <div>
                        <p className="text-[10px] font-mono text-earth-gold uppercase tracking-[0.12em] font-semibold">Stage</p>
                        <p className="text-xs font-sans text-beige/80">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle caption */}
                  <p className="text-center text-[11px] text-sand/50 italic mt-3.5 font-sans">
                    Click image or zoom button to inspect structural texture and biochemistry parameters.
                  </p>
                </motion.div>

                {/* Content description panel sliding in from opposite side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, type: "spring", stiffness: 40, damping: 12, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-earth-gold uppercase tracking-wider block font-semibold">
                      Process Phase 0{step.stepNumber}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-beige leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sand font-sans font-light leading-relaxed text-base">
                    {step.description}
                  </p>

                  <p className="text-sand/70 font-sans font-light text-sm italic leading-relaxed pl-4 border-l-2 border-terracotta/40">
                    {step.detailedDescription}
                  </p>

                  {/* Scientific framework / Environmental Impact detail block */}
                  <div className="bg-coffee/40 border border-terracotta/20 p-5 rounded-xl flex items-start gap-4 hover:border-earth-gold/30 transition-colors">
                    <div className="p-2.5 rounded-lg bg-terracotta/15 text-earth-gold mt-1 shrink-0">
                      <Beaker className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-earth-gold mb-1 font-semibold">
                        Ecological & Strength Dynamics
                      </h4>
                      <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                        {step.scientificImpact}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStep(step)}
                    className="px-5 py-2.5 bg-coffee border border-terracotta/40 hover:border-earth-gold hover:bg-terracotta/10 text-earth-gold text-xs font-sans rounded-md transition-all inline-flex items-center gap-2 active:scale-95"
                  >
                    <Layers className="w-3.5 h-3.5 text-earth-gold" />
                    Analyze Biochemical Composition
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL WITH useState STATE PERSISTENCE */}
      <AnimatePresence>
        {selectedStep && (
          <div
            id="lightbox-backdrop"
            className="fixed inset-0 bg-dark-coffee/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-beige text-coffee max-w-4xl w-full rounded-2xl overflow-hidden border border-earth-gold/30 shadow-[0_24px_60px_rgba(44,27,13,0.9)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-coffee/10 hover:bg-coffee/20 p-2.5 rounded-full text-coffee transition-colors z-20"
                id="close-lightbox-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row min-h-[500px]">
                {/* Photo Zoom section */}
                <div className="w-full md:w-1/2 relative bg-coffee max-h-[300px] md:max-h-none">
                  <img
                    src={selectedStep.realPhotoUrl}
                    alt={selectedStep.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-transparent to-transparent md:hidden" />
                  
                  {/* Decorative tag */}
                  <div className="absolute bottom-4 left-4 bg-terracotta text-beige px-3 py-1 text-[11px] font-mono rounded-md uppercase tracking-wider">
                    High Resolution Micrograph
                  </div>
                </div>

                {/* Microscopic technical analysis details context */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-xs text-terracotta uppercase tracking-[0.2em] font-medium block mb-2">
                        Step 0{selectedStep.stepNumber} Parameter Data
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee tracking-tight">
                        {selectedStep.title}
                      </h3>
                      <p className="text-xs text-terracotta font-sans italic mt-1">{selectedStep.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono uppercase text-coffee/80 tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 text-terracotta" /> Process Overview
                        </h4>
                        <p className="text-xs text-coffee/85 leading-relaxed font-sans font-light">
                          {selectedStep.detailedDescription}
                        </p>
                      </div>

                      <div className="border-t border-coffee/10 pt-4">
                        <h4 className="text-xs font-mono uppercase text-coffee/80 tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                          <Beaker className="w-3.5 h-3.5 text-terracotta" /> Structural Dynamics
                        </h4>
                        <p className="text-xs text-coffee/85 leading-relaxed font-sans font-light">
                          {selectedStep.scientificImpact}
                        </p>
                      </div>

                      <div className="border-t border-coffee/10 pt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-mono text-terracotta uppercase tracking-wider">Moisture Goal</p>
                          <p className="text-sm font-semibold font-sans text-coffee">Moisture &lt; 12%</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-terracotta uppercase tracking-wider">Acoustic Class</p>
                          <p className="text-sm font-semibold font-sans text-coffee">NRC 0.85 (A++ Rating)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close and return to page trigger */}
                  <div className="pt-8 border-t border-coffee/10 flex justify-end">
                    <button
                      onClick={closeModal}
                      className="px-5 py-2.5 bg-coffee text-beige hover:bg-terracotta font-sans text-xs font-medium rounded-md transition-all active:scale-95 shadow-sm"
                    >
                      Close Analysis Deck
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

