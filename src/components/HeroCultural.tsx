import { motion } from "motion/react";
import { TreePine, Flame, Sparkles, ChevronDown } from "lucide-react";

interface HeroCulturalProps {
  title: string;
  subtitle: string;
}

export default function HeroCultural({ title, subtitle }: HeroCulturalProps) {
  const handleScrollToProcess = () => {
    document.getElementById("crafting-process-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-coffee text-beige min-h-[92vh] flex flex-col justify-center px-4 md:px-8 py-16">
      {/* Decorative Traditional Batik Motif SVGs (Low-opacity Background Ornaments) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-batik-grid" />
      
      {/* High-fidelity elegant drifting background orbs */}
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-terracotta/35 rounded-full filter blur-[100px] pointer-events-none animate-drift-slow select-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-earth-gold/25 rounded-full filter blur-[120px] pointer-events-none animate-drift-reverse select-none" />
      <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] bg-coffee/45 rounded-full filter blur-[80px] pointer-events-none animate-float-reverse select-none" />

      {/* Floating Material Particles (Coffee & Coconut husk concept representation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.15 + 0.05,
              scale: Math.random() * 0.4 + 0.6
            }}
            animate={{ 
              y: ["0%", "-15%", "0%"],
              x: ["0%", "5%", "0%"],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute col-span-1 w-6 h-6 rounded-full bg-earth-gold filter blur-[1px]"
            style={{ filter: "blur(2px)", opacity: 0.1 }}
          />
        ))}
      </div>
      
      {/* Abstract Batik Mandala Left (Animate spinning) */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 top-1/4 w-80 h-80 text-earth-gold opacity-[0.12] max-md:hidden pointer-events-none"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 C25 25 25 40 50 50 C75 40 75 25 50 0 Z" />
        <path d="M50 100 C25 75 25 60 50 50 C75 60 75 75 50 100 Z" />
        <path d="M0 50 C25 25 40 25 50 50 C40 75 25 75 0 50 Z" />
        <path d="M100 50 C75 25 60 25 50 50 C60 75 75 75 100 50 Z" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </motion.svg>

      {/* Abstract Batik Mandala Right (Animate spinning reversed) */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 bottom-1/4 w-96 h-96 text-earth-gold opacity-[0.10] pointer-events-none"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 C25 25 25 40 50 50 C75 40 75 25 50 0 Z" />
        <path d="M50 100 C25 75 25 60 50 50 C75 60 75 75 50 100 Z" />
        <path d="M0 50 C25 25 40 25 50 50 C40 75 25 75 0 50 Z" />
        <path d="M100 50 C75 25 60 25 50 50 C60 75 75 75 100 50 Z" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Top Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Supertitle badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 border border-earth-gold/40 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase text-earth-gold mb-6 bg-dark-coffee/60 backdrop-blur-md shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-earth-gold animate-pulse" />
              Sustainable Thermal & Cultural Heritage
            </motion.div>

            {/* Heading Statement with Playfair Display (font-serif) */}
            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-beige select-none mb-6 leading-[1.15] drop-shadow-xl"
            >
              {title}
            </motion.h1>

            {/* Subtitle Statement with Inter (font-sans) */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="text-base md:text-lg font-sans text-sand max-w-2xl leading-relaxed mb-8 lg:mb-10 font-light drop-shadow-md"
            >
              {subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full"
            >
              <button
                id="explore-process-button"
                onClick={handleScrollToProcess}
                className="px-8 py-4 bg-earth-gold text-coffee hover:bg-beige hover:text-earth-gold font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-warm-md group inline-flex items-center gap-2.5 active:scale-95 border border-transparent hover:border-earth-gold w-full sm:w-auto justify-center"
              >
                Explore The Art of Crafting
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a
                id="read-sdgs-link"
                href="#strategic-roadmap"
                className="px-6 py-4 border border-beige/25 text-beige hover:bg-beige/10 hover:border-beige/50 rounded-lg transition-all duration-300 font-sans font-medium text-sm active:scale-95 w-full sm:w-auto text-center"
              >
                Learn Strategic Impacts
              </a>
            </motion.div>
          </div>

          {/* Right Column: Creative Interactive Product Gallery */}
          <div className="w-full lg:w-5/12 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            {/* Drifting glow behind the showcase */}
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] bg-terracotta/20 rounded-full filter blur-[60px] pointer-events-none select-none" />
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 0.5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3] flex items-center justify-center h-[320px] sm:h-[350px]"
            >
              {/* Card 1: Megamendung Relief */}
              <motion.div
                whileHover={{ 
                  scale: 1.08, 
                  rotate: -4,
                  zIndex: 30,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute left-2 top-10 w-[120px] sm:w-[140px] aspect-[1/1.6] rounded-xl overflow-hidden cursor-pointer shadow-[8px_16px_35px_rgba(0,0,0,0.65)] border border-earth-gold/25 hover:border-earth-gold transition-all duration-300 group z-10"
                onClick={() => {
                  document.getElementById("cultural-showcase-section")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="absolute inset-1 border border-earth-gold/15 rounded-lg pointer-events-none z-10 group-hover:border-earth-gold/40 transition-colors" />
                <img 
                  src="/hero_motif_1.png" 
                  alt="Batik Megamendung Relief" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-coffee/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left z-20">
                  <span className="text-[8px] font-mono text-earth-gold uppercase tracking-wider block">Relief 01</span>
                  <span className="text-[10px] font-serif font-bold text-beige leading-tight block truncate">Megamendung</span>
                </div>
              </motion.div>

              {/* Card 2: Endek Bali Geometry (Center Panel) */}
              <motion.div
                whileHover={{ 
                  scale: 1.10, 
                  rotate: 0,
                  zIndex: 30,
                  y: -12
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute left-1/2 -translate-x-1/2 top-2 w-[130px] sm:w-[150px] aspect-[1/1.6] rounded-xl overflow-hidden cursor-pointer shadow-[12px_24px_45px_rgba(0,0,0,0.8)] border-2 border-earth-gold/45 hover:border-earth-gold transition-all duration-300 group z-20"
                onClick={() => {
                  document.getElementById("cultural-showcase-section")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="absolute inset-1.5 border border-earth-gold/30 rounded-lg pointer-events-none z-10 group-hover:border-earth-gold/60 transition-colors" />
                <img 
                  src="/hero_motif_2.png" 
                  alt="Endek Balinese Geometry" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-coffee/95 via-transparent to-transparent opacity-90 group-hover:opacity-45 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-left z-20">
                  <span className="text-[8px] font-mono text-earth-gold uppercase tracking-wider block">Relief 02</span>
                  <span className="text-[11px] font-serif font-bold text-beige leading-tight block truncate">Endek Bali</span>
                </div>
                <div className="absolute top-2 right-2 bg-terracotta text-beige text-[7px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm z-20">
                  CORE
                </div>
              </motion.div>

              {/* Card 3: Tenun Toraja Column Relief */}
              <motion.div
                whileHover={{ 
                  scale: 1.08, 
                  rotate: 4,
                  zIndex: 30,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute right-2 top-12 w-[120px] sm:w-[140px] aspect-[1/1.6] rounded-xl overflow-hidden cursor-pointer shadow-[8px_16px_35px_rgba(0,0,0,0.65)] border border-earth-gold/25 hover:border-earth-gold transition-all duration-300 group z-10"
                onClick={() => {
                  document.getElementById("cultural-showcase-section")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="absolute inset-1 border border-earth-gold/15 rounded-lg pointer-events-none z-10 group-hover:border-earth-gold/40 transition-colors" />
                <img 
                  src="/hero_motif_3.png" 
                  alt="Tenun Toraja Column" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-coffee/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left z-20">
                  <span className="text-[8px] font-mono text-earth-gold uppercase tracking-wider block">Relief 03</span>
                  <span className="text-[10px] font-serif font-bold text-beige leading-tight block truncate">Tenun Toraja</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive tag instructions */}
            <div className="text-[10px] text-sand/50 italic mt-6 font-sans text-center flex items-center gap-1.5 select-none pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-earth-gold animate-ping" />
              Hover tiles to inspect reliefs. Click to open spec gallery.
            </div>
          </div>

        </div>

        {/* Highlights Grid with earthy accent styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full border-t border-beige/15 pt-12 text-left"
        >
          <div className="p-3 rounded-xl hover:bg-coffee/40 transition-colors cursor-default group">
            <p className="font-mono text-xs text-earth-gold uppercase tracking-wider mb-1 group-hover:text-white transition-colors">Thermal Value</p>
            <p className="text-2xl md:text-3xl font-serif text-beige font-semibold group-hover:text-earth-gold transition-colors">0.036 W/mK</p>
            <p className="font-sans text-xs text-sand/70 mt-1 leading-snug">Excellent passive cooling performance</p>
          </div>
          
          <div className="p-3 rounded-xl hover:bg-coffee/40 transition-colors cursor-default group">
            <p className="font-mono text-xs text-earth-gold uppercase tracking-wider mb-1 group-hover:text-white transition-colors">Carbon Index</p>
            <p className="text-2xl md:text-3xl font-serif text-beige font-semibold group-hover:text-earth-gold transition-colors">Negative</p>
            <p className="font-sans text-xs text-sand/70 mt-1 leading-snug">Sequesters CO2 natively in material</p>
          </div>

          <div className="p-3 rounded-xl hover:bg-coffee/40 transition-colors cursor-default group">
            <p className="font-mono text-xs text-earth-gold uppercase tracking-wider mb-1 group-hover:text-white transition-colors">Waste Sourced</p>
            <p className="text-2xl md:text-3xl font-serif text-beige font-semibold group-hover:text-earth-gold transition-colors">40M bags</p>
            <p className="font-sans text-xs text-sand/70 mt-1 leading-snug">Annual organic coffee rot prevented</p>
          </div>

          <div className="p-3 rounded-xl hover:bg-coffee/40 transition-colors cursor-default group">
            <p className="font-mono text-xs text-earth-gold uppercase tracking-wider mb-1 group-hover:text-white transition-colors">Inspirations</p>
            <p className="text-2xl md:text-3xl font-serif text-beige font-semibold group-hover:text-earth-gold transition-colors">Batik & Tenun</p>
            <p className="font-sans text-xs text-sand/70 mt-1 leading-snug">Preserving Indonesian heritage</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave - Removed to make background connect seamlessly with the next section */}
    </section>
  );
}

