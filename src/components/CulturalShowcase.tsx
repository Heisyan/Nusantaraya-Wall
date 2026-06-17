import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Sun, Sparkles, Sliders, CheckCircle, Waves } from "lucide-react";

interface Artwork {
  motifName: string;
  origin: string;
  description: string;
  image: string;
  historyText: string;
  insulationValue: string;
  absorptionRate: string;
}

interface CulturalShowcaseProps {
  artworks?: Artwork[];
}

export default function CulturalShowcase({ artworks: customArtworks }: CulturalShowcaseProps) {
  // Rich, realistic default artworks matching the Indonesian high-relief panels
  const defaultArtworks: Artwork[] = [
    {
      motifName: "Batik Megamendung Relief",
      origin: "Cirebon, West Java",
      description: "Cloud formations representing patience, adaptation, and passive, tranquil cooling energy flow.",
      image: "/motif_1.jpg", // Carved high-relief wooden design
      historyText: "Traditionally representing rain-bearing thunderclouds, the Megamendung design is embossed on Nusantaraya panels with a deep curvature to physically diffuse high-frequency sound, achieving superior acoustic damping.",
      insulationValue: "NRC 0.85 / STC 34",
      absorptionRate: "Absorbs 85% of ambient noise"
    },
    {
      motifName: "Endek Balinese Geometry",
      origin: "Klungkung, Bali",
      description: "Interweaving longitudinal threads and rhythmic patterns expressing harmony between nature and humans.",
      image: "/motif_2.jpg", // Loom threads & fine weaves
      historyText: "Woven cloth relief that creates micro-gaps within the biological mycelium wall, providing multiple sound-wave trapping chambers. Perfectly suited for cozy, quiet hospitality environments.",
      insulationValue: "NRC 0.82 / STC 32",
      absorptionRate: "Spins sound waves into heat energy"
    },
    {
      motifName: "Tenun Toraja Column Relief",
      origin: "Toraja, South Sulawesi",
      description: "Bold linear shapes and geometric arrows paying tribute to the nobility of ancestors and protective land structures.",
      image: "/motif_3.jpg", // Abstract structural surface pattern
      historyText: "Deep structural vertical ridges modeled after Torajan architectural pillars. Stamped while the hot-press matrix cools, resulting in robust vertical panel segments that structurally cool the air path.",
      insulationValue: "NRC 0.88 / STC 35",
      absorptionRate: "Optimized for low-frequency vibration dampening"
    }
  ];

  const artworks = customArtworks || defaultArtworks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightAngle, setLightAngle] = useState(135); // 0 to 360 degrees
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const selectedArtwork = artworks[activeIndex];

  // Calculate dynamic relief box-shadow representing physical micro-shadows based on selected angle!
  const getSubtleShadowStyle = () => {
    const angleRad = (lightAngle * Math.PI) / 180;
    const xOffset = Math.round(Math.cos(angleRad) * 14);
    const yOffset = Math.round(Math.sin(angleRad) * 14);
    const blur = 24;
    return `${xOffset}px ${yOffset}px ${blur}px rgba(74, 48, 24, 0.28), 
            -${xOffset/3}px -${yOffset/3}px ${blur}px rgba(255, 255, 255, 0.45)`;
  };

  // Acoustic testing click handler
  const handleTestAcousticSound = () => {
    if (isPlayingSound) return;
    setIsPlayingSound(true);
    
    // Simple synthesized pure tone using window web-audio API as described in guidelines!
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // Standard concert A
      
      // Simulate direct room sound wave then fast drop off from acoustic absorption!
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 1.3);
    } catch (err) {
      console.log("Web Audio not supported in this frame size", err);
    }

    setTimeout(() => {
      setIsPlayingSound(false);
    }, 1800);
  };

  return (
    <section id="cultural-showcase-section" className="py-24 bg-beige text-coffee overflow-hidden px-4 sm:px-6 lg:px-8 relative">
      {/* Elegant light-contrast drifting background orbs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-terracotta/8 rounded-full filter blur-[100px] pointer-events-none animate-drift-slow" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-earth-gold/12 rounded-full filter blur-[120px] pointer-events-none animate-drift-reverse" />
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-batik-grid" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Editorial Subheader Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <span className="font-mono text-xs text-terracotta uppercase tracking-[0.25em] block mb-3 animate-pulse">
              Indonesian Embossing Integration
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-coffee tracking-tight">
              Cultural Motif Showcase
            </h2>
          </div>
          <div>
            <p className="font-sans font-light text-coffee/80 leading-relaxed text-sm md:text-base">
              Each Nusantaraya Wall panel features exquisite relief patterns of traditional Indonesian Batik, Endek, and Tenun. In addition to aesthetic beauty, these geometries serve as physical acoustic diffusers.
            </p>
          </div>
        </div>

        {/* Dynamic Showcase Panel Container with custom shadow styling */}
        <div className="bg-[#F5F2E9]/60 border border-coffee/10 rounded-3xl p-6 md:p-10 shadow-warm-lg grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: List Selector & Technical Info */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Select Cultural Motif:
              </h3>
              
              <div className="space-y-3">
                {artworks.map((art, idx) => (
                  <button
                    key={art.motifName}
                    id={`art-tab-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between z-10 select-none overflow-hidden ${
                      idx === activeIndex
                        ? "text-beige border-transparent"
                        : "bg-[#F5F2E9]/40 border-coffee/10 hover:bg-[#F5F2E9]/85 text-coffee"
                    }`}
                  >
                    {/* Magical layoutId sliding background capsule pill */}
                    {idx === activeIndex && (
                      <motion.div 
                        layoutId="activeMotifTab"
                        className="absolute inset-0 bg-coffee border border-coffee rounded-xl -z-10 shadow-warm-md"
                        transition={{ type: "spring", stiffness: 220, damping: 24 }}
                      />
                    )}
                    
                    <div>
                      <h4 className="font-serif font-medium text-sm md:text-base leading-snug">{art.motifName}</h4>
                      <p className={`text-[11px] font-sans transition-colors ${idx === activeIndex ? "text-earth-gold" : "text-coffee/60"}`}>
                        {art.origin}
                      </p>
                    </div>
                    {idx === activeIndex && <Sparkles className="w-4 h-4 text-earth-gold animate-pulse shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical stats for selected artwork */}
            <div className="bg-coffee/5 p-5 rounded-2xl border border-coffee/15 space-y-4 transition-colors">
              <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider block font-semibold">
                Acoustic & Insulation Performance
              </span>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-sans text-coffee/60 uppercase">Rating</p>
                  <p className="text-sm font-semibold font-mono text-coffee">{selectedArtwork.insulationValue}</p>
                </div>
                <div>
                  <p className="text-[10px] font-sans text-coffee/60 uppercase">Absorption</p>
                  <p className="text-xs font-serif text-coffee font-medium">{selectedArtwork.absorptionRate}</p>
                </div>
              </div>
              
              {/* Reactive Soundwave visualizer displaying absorption performance physically */}
              {isPlayingSound ? (
                <div className="pt-2 space-y-1.5">
                  <p className="text-[9px] font-mono text-terracotta/80 flex items-center justify-between">
                    <span>Active Damping: -22dB</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-ping" /> absorb.rate</span>
                  </p>
                  <div className="relative h-11 w-full bg-[#F5F2E9]/60 rounded-lg border border-coffee/10 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 44" preserveAspectRatio="none">
                      {/* Incoming wave (undamped reflection) */}
                      <motion.path
                        animate={{
                          d: [
                            "M 0 22 Q 25 2, 50 22 T 100 22 T 150 22 T 200 22",
                            "M 0 22 Q 25 42, 50 22 T 100 22 T 150 22 T 200 22",
                            "M 0 22 Q 25 2, 50 22 T 100 22 T 150 22 T 200 22"
                          ]
                        }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        fill="none"
                        stroke="#A64B44"
                        strokeOpacity="0.22"
                        strokeWidth="1.2"
                      />
                      {/* Damped wave (absorbed panel behavior - rapidly decay to 0) */}
                      <motion.path
                        animate={{
                          d: [
                            "M 0 22 Q 25 6, 50 22 Q 75 18, 100 22 Q 125 21, 150 22 Q 175 21.8, 200 22",
                            "M 0 22 Q 25 38, 50 22 Q 75 26, 100 22 Q 125 23, 150 22 Q 175 22.2, 200 22",
                            "M 0 22 Q 25 6, 50 22 Q 75 18, 100 22 Q 125 21, 150 22 Q 175 21.8, 200 22"
                          ]
                        }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        fill="none"
                        stroke="#438C88"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <p className="text-[10px] text-coffee/60 italic font-sans py-1">
                  Click below to sound a frequency wave and witness real-time damping behavior.
                </p>
              )}
 
              {/* Interactive Audio Absorber simulator trigger */}
              <button
                onClick={handleTestAcousticSound}
                className={`w-full py-3 rounded-lg font-sans text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-medium ${
                  isPlayingSound
                    ? "bg-earth-gold text-coffee font-semibold shadow-inner"
                    : "bg-coffee text-beige hover:bg-terracotta"
                }`}
                id="interactive-acoustic-btn"
              >
                <Waves className={`w-4 h-4 ${isPlayingSound ? "animate-pulse" : ""}`} />
                {isPlayingSound ? "Absorbing Frequency Sound..." : "Simulate Panel Audio Damping"}
              </button>
            </div>
          </div>
 
          {/* Middle Column: Interactive Surface Shadow Renderer with Double Gold Border Framing */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative space-y-6">
            
            {/* Interactive Angle Slider label feedback */}
            <div className="w-full flex justify-between items-center bg-[#F5F2E9]/80 p-2.5 rounded-lg border border-coffee/5 shadow-xs">
              <span className="text-xs font-mono text-coffee/70 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-earth-gold" /> Light position angle:
              </span>
              <span className="text-xs font-mono font-bold text-coffee">{lightAngle}°</span>
            </div>

            {/* Tile surface container with double-gold artistic frame border */}
            <div className="relative w-full max-w-sm aspect-square bg-sand rounded-2xl p-4 overflow-hidden border-2 border-coffee/15 flex items-center justify-center shadow-lg group">
              <div className="absolute inset-2 border border-earth-gold/20 rounded-xl pointer-events-none" />
              <div
                className="w-full h-full rounded-lg overflow-hidden transition-all duration-300 relative bg-zinc-900 border border-coffee/20 shadow-inner"
                style={{ boxShadow: getSubtleShadowStyle() }}
              >
                {/* Micro-shadow simulation filter background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 pointer-events-none group-hover:scale-102"
                  style={{
                    backgroundImage: `url(${selectedArtwork.image})`,
                    filter: `contrast(1.22) brightness(0.85) hue-rotate(8deg)`,
                    mixBlendMode: "normal"
                  }}
                />

                {/* Simulated light glare overlay moving dynamically based on slider */}
                <div 
                  className="absolute inset-0 bg-radial-gradient pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${50 + Math.cos((lightAngle * Math.PI) / 180) * 40}% ${50 + Math.sin((lightAngle * Math.PI) / 180) * 40}%, rgba(244, 232, 214, 0.28) 0%, transparent 70%)`
                  }}
                />

                <div className="absolute bottom-3 left-3 bg-dark-coffee/95 backdrop-blur-xs text-beige px-2.5 py-1 text-[10px] font-mono rounded border border-beige/15 shadow-md">
                  Active Shadow Shader
                </div>
              </div>
            </div>

            {/* Simulated Angle controller slider */}
            <div className="w-full space-y-1.5 px-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-coffee/60">
                <span>Morning (0°)</span>
                <span className="font-sans uppercase text-[9px] tracking-wider text-terracotta">Highlight Grazing Angle Control</span>
                <span>Evening (360°)</span>
              </div>
              <input
                id="light-angle-slider"
                type="range"
                min="0"
                max="360"
                value={lightAngle}
                onChange={(e) => setLightAngle(Number(e.target.value))}
                className="w-full h-1.5 bg-coffee/20 hover:bg-coffee/30 rounded-lg appearance-none cursor-pointer accent-terracotta"
              />
            </div>
          </div>

          {/* Right Column: Historical Narrative and Deep Info inside Museum plaque design */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-terracotta uppercase tracking-wider block font-semibold">
                Motif Background
              </span>
              <h3 className="font-serif font-bold text-2xl text-coffee tracking-tight">
                {selectedArtwork.motifName}
              </h3>
              <p className="text-xs text-coffee/90 leading-relaxed font-sans font-light">
                {selectedArtwork.description}
              </p>
              
              <div className="border-t border-coffee/10 pt-4 space-y-3">
                <span className="font-mono text-[9px] text-terracotta uppercase tracking-wider block font-semibold">
                  Acoustic Integration Details
                </span>
                <p className="text-xs font-sans text-coffee/80 leading-relaxed font-light">
                  {selectedArtwork.historyText}
                </p>
              </div>
            </div>

            {/* Hand-carved organic promise badges */}
            <div className="space-y-2.5 border-t border-coffee/10 pt-4">
              <div className="flex items-center gap-2.5 text-xs font-sans text-coffee/85 font-light">
                <CheckCircle className="w-4.5 h-4.5 text-terracotta shrink-0" />
                <span>Zero chemical toxic adhesives</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans text-coffee/85 font-light">
                <CheckCircle className="w-4.5 h-4.5 text-terracotta shrink-0" />
                <span>High acoustic absorption profile</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
