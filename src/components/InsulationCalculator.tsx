import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, Trees, Zap, Leaf, ShieldAlert, Check } from "lucide-react";

interface PresetSpace {
  name: string;
  area: number;
  description: string;
}

export default function InsulationCalculator() {
  const [wallArea, setWallArea] = useState<number>(45);
  const [activePreset, setActivePreset] = useState<string>("Cozy Balinese Cafe");

  const presets: PresetSpace[] = [
    {
      name: "Tiny Eco-Studio",
      area: 12,
      description: "Small residential bedroom or recording booth."
    },
    {
      name: "Cozy Balinese Cafe",
      area: 45,
      description: "Mid-sized dining room looking to elevate natural acoustics."
    },
    {
      name: "Boutique Hotel Lobby",
      area: 120,
      description: "Lobby wall installation with heritage cultural focal panels."
    }
  ];

  // Constants derived from Nusantaraya physical parameters
  const CO2_SEQUESTRATION_PER_M2 = 4.65; // kg of CO2 stored per panel sq meter
  const ENERGY_SAVING_PERCENT = 35; // % reduction in air conditioning load
  const ESTIMATED_RUPIAH_SAVED_PER_M2_YEAR = 185000; // IDR saved on electricity annually per m2

  const co2Stored = (wallArea * CO2_SEQUESTRATION_PER_M2).toFixed(1);
  const moneySaved = (wallArea * ESTIMATED_RUPIAH_SAVED_PER_M2_YEAR).toLocaleString("id-ID");
  const treesEquiv = (wallArea * 0.22).toFixed(1);

  const handleSelectPreset = (preset: PresetSpace) => {
    setWallArea(preset.area);
    setActivePreset(preset.name);
  };

  const handleSliderChange = (val: number) => {
    setWallArea(val);
    // If the slider matches any preset exactly, highlight that preset, otherwise set to Custom
    const match = presets.find(p => p.area === val);
    if (match) {
      setActivePreset(match.name);
    } else {
      setActivePreset("Custom");
    }
  };

  const handleNumberChange = (val: number) => {
    const safeVal = Math.max(1, Math.min(1000, val));
    setWallArea(safeVal);
    const match = presets.find(p => p.area === safeVal);
    if (match) {
      setActivePreset(match.name);
    } else {
      setActivePreset("Custom");
    }
  };

  return (
    <section id="insulation-calculator" className="py-24 bg-beige text-coffee px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft elegant drifting background orbs */}
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] bg-terracotta/6 rounded-full filter blur-[110px] pointer-events-none animate-drift-slow" />
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-earth-gold/10 rounded-full filter blur-[120px] pointer-events-none animate-drift-reverse" />
      <div className="absolute inset-0 pointer-events-none opacity-8 bg-batik-grid" />

      {/* Subtle organic dividers */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-coffee/10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs text-terracotta uppercase tracking-[0.25em] block animate-pulse">
            Impact Assessment Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-coffee tracking-tight">
            Nusantaraya Impact Calculator
          </h2>
          <p className="text-coffee/80 max-w-xl mx-auto font-sans font-light leading-relaxed text-sm md:text-base">
            Configure your intended wall surface area or choose a typical space preset to predict ecological benefits and thermal power savings immediately.
          </p>
        </div>

        {/* Space presets select cards to enhance interactive visual design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {presets.map((preset) => {
            const isSelected = activePreset === preset.name;
            return (
              <button
                key={preset.name}
                onClick={() => handleSelectPreset(preset)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-coffee text-beige border-transparent shadow-md scale-[1.02]"
                    : "bg-[#F5F2E9]/50 border-coffee/10 hover:bg-[#F5F2E9]/85 text-coffee hover:scale-[1.01]"
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-earth-gold uppercase block">Preset Scenario</span>
                  <h4 className="font-serif font-bold text-sm leading-snug">{preset.name}</h4>
                  <p className={`text-[11px] font-sans font-light leading-relaxed ${isSelected ? "text-sand/80" : "text-coffee/70"}`}>
                    {preset.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold">{preset.area} m²</span>
                  {isSelected && (
                    <span className="p-1 rounded-full bg-earth-gold text-coffee">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Calculator layout */}
        <div className="bg-[#F5F2E9]/60 border border-coffee/10 rounded-3xl p-6 md:p-10 shadow-warm-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Slider input */}
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="wall-area-slider" className="font-serif font-semibold text-lg text-coffee flex items-center gap-2">
                <Calculator className="w-5 h-5 text-terracotta" /> Wall Surface Dimensions
              </label>
              <p className="text-xs text-coffee/70 font-sans font-light">
                Drag the interactive slider or type custom square meters (m²)
              </p>
            </div>

            <div className="space-y-4">
              <input
                id="wall-area-slider"
                type="range"
                min="5"
                max="250"
                value={wallArea}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                className="w-full h-2 bg-coffee/20 rounded-lg appearance-none cursor-pointer accent-terracotta"
              />
              
              <div className="flex justify-between items-center bg-beige/80 p-3.5 rounded-xl border border-coffee/10 shadow-xs">
                <span className="font-sans text-xs text-coffee/60 uppercase font-semibold">Configured Area:</span>
                <div className="flex items-center gap-1">
                  <input
                    id="wall-area-numeric"
                    type="number"
                    min="1"
                    max="1000"
                    value={wallArea}
                    onChange={(e) => handleNumberChange(Number(e.target.value))}
                    className="w-20 bg-transparent border-b border-coffee font-mono font-bold text-lg text-right text-coffee focus:outline-none focus:border-terracotta"
                  />
                  <span className="font-mono font-bold text-coffee text-lg">m²</span>
                </div>
              </div>
            </div>

            {/* Compliance warning banner */}
            <div className="bg-[#F5F2E9] p-4 rounded-xl border border-earth-gold/30 flex items-start gap-3 shadow-xs">
              <ShieldAlert className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <p className="text-[11px] font-sans text-coffee/80 leading-relaxed font-light">
                Calculation based on thermal conductivity rating <strong className="font-mono">0.036 W/mK</strong> tests and carbon sequestration statistics verified in conformity with ASEAN Taxonomy green tiers.
              </p>
            </div>
          </div>

          {/* Real-time calculated results */}
          <div className="md:col-span-6 bg-coffee text-beige rounded-2xl p-6 md:p-8 space-y-6 border border-earth-gold/25 shadow-warm-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-earth-gold/5 to-transparent rounded-full pointer-events-none" />
            
            <div>
              <p className="font-mono text-[10px] text-earth-gold uppercase tracking-widest font-semibold mb-1">
                Immediate Eco Return
              </p>
              <h3 className="font-serif text-xl font-bold tracking-tight">Active Room Mitigation</h3>
            </div>

            <div className="space-y-4">
              {/* Carbon Stored */}
              <div className="flex items-center justify-between border-b border-beige/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-beige/5 rounded-lg text-earth-gold">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-sans text-sand/80">Bio-Carbon Trapped</p>
                    <p className="text-[10px] font-mono text-sand/50">Cereal waste locked indefinitely</p>
                  </div>
                </div>
                <div className="text-right">
                  <motion.p 
                    key={co2Stored}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="calc-co2-stored" 
                    className="text-xl font-serif font-bold text-beige"
                  >
                    {co2Stored} kg
                  </motion.p>
                  <p className="text-[10px] font-sans text-earth-gold uppercase">of CO2eq saved</p>
                </div>
              </div>

              {/* Energy savings */}
              <div className="flex items-center justify-between border-b border-beige/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-beige/5 rounded-lg text-earth-gold">
                    <Zap className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-sans text-sand/80">Passive Cooling Saving</p>
                    <p className="text-[10px] font-mono text-sand/50">Aircon electrical load drop</p>
                  </div>
                </div>
                <div className="text-right">
                  <motion.p 
                    key={moneySaved}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="calc-money-saved" 
                    className="text-lg font-serif font-bold text-beige"
                  >
                    Rp {moneySaved}
                  </motion.p>
                  <p className="text-[10px] font-sans text-earth-gold uppercase">Saved annually</p>
                </div>
              </div>

              {/* Forest Equiv */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-beige/5 rounded-lg text-earth-gold">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-sans text-sand/80">Reforestation Equiv</p>
                    <p className="text-[10px] font-mono text-sand/50">Equivalent adult wood growth</p>
                  </div>
                </div>
                <div className="text-right">
                  <motion.p 
                    key={treesEquiv}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="calc-trees-equiv" 
                    className="text-xl font-serif font-bold text-beige"
                  >
                    {treesEquiv} trees
                  </motion.p>
                  <p className="text-[10px] font-sans text-earth-gold uppercase">planted / year</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center border-t border-beige/10">
              <span className="font-mono text-[10px] text-earth-gold block">
                🌱 Direct compliance with SGDs 11, 12, and 13.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
