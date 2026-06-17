import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import HeroCultural from "./components/HeroCultural";
import CraftingProcess from "./components/CraftingProcess";
import CulturalShowcase from "./components/CulturalShowcase";
import MeetTheTeam from "./components/MeetTheTeam";
import InsulationCalculator from "./components/InsulationCalculator";
import { processSteps } from "./data/process";
import { teamMembers } from "./data/team";
import { 
  Leaf, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Calendar, 
  Workflow, 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Waves,
  TrendingUp, 
  CheckCircle2,
  Lock,
  ChevronRight,
  BookOpen,
  Sparkle
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);

  // useScroll and useSpring for visual scroll progress indicator bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic header blur transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderBorder(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Roadmap Timeline data matching PDF item 6
  const roadmapMilestones = [
    {
      year: "2026",
      title: "Prototype & Trial",
      description: "Establishing material recipe, biological growth templates, initial density parameters, and basic physical endurance trials."
    },
    {
      year: "2027",
      title: "Production Refinement",
      description: "Optimizing the aggregate ratios of coffee residue and coconut husk, testing moisture-proofing, and sealing dies for Batik embossing."
    },
    {
      year: "2028",
      title: "AI-Integrated Automation",
      description: "Deploying camera-vision diagnostics for automated mycelium colonization and temperature-regulated hot pressure press chambers."
    },
    {
      year: "2029",
      title: "Domestic Expansion",
      description: "Commercial scaling across major Indonesian urban epicenters. Integrating local waste collection networks and supply hubs."
    },
    {
      year: "2030",
      title: "International Branding",
      description: "Participating in global sustainable materials summits. Completing certification under Singapore Green Mark 2021 criteria."
    },
    {
      year: "2031",
      title: "Global Recognition",
      description: "Fulfillment of Southeast Asian sustainable exports. Carbon accounting aligns with international voluntary trading markets."
    }
  ];

  return (
    <div className="bg-dark-coffee min-h-screen font-sans selection:bg-terracotta selection:text-beige overflow-x-hidden custom-scrollbar">
      
      {/* Dynamic Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-terracotta via-earth-gold to-beige z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 4th International Youth Conference Banner Background Overlay */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        showHeaderBorder 
          ? "bg-dark-coffee/95 backdrop-blur-md border-b border-beige/15 py-1" 
          : "bg-dark-coffee/80 backdrop-blur-sm border-b border-beige/5 py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Statement */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-terracotta to-coffee border border-earth-gold/40 flex items-center justify-center font-serif text-lg font-bold text-beige shadow-lg"
              >
                N
              </motion.div>
              <div>
                <span className="font-serif font-bold text-lg text-beige tracking-tight block group-hover:text-earth-gold transition-colors">
                  Nusanta Raya Wall
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-earth-gold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-earth-gold inline-block animate-ping" />
                  Sustainable Acoustics
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features-benefits" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                Benefits
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#crafting-process-section" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                Process
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#cultural-showcase-section" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                Art Gallery
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#insulation-calculator" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                Impact Calculator
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#strategic-roadmap" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                Roadmap
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#meet-the-team-section" className="text-sand/80 hover:text-beige font-sans text-xs uppercase tracking-wider transition-colors relative py-1 group">
                The Innovators
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>

            {/* Top Right Conference indicator Badge */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="hidden lg:flex items-center gap-2 border border-earth-gold/30 px-3.5 py-2 rounded-xl bg-coffee/80 shadow-md"
            >
              <GraduationCap className="w-4 h-4 text-earth-gold" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-sand/90">
                IYC Conference 2026 Cohort
              </span>
            </motion.div>

            {/* Mobile menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-sand hover:text-beige hover:bg-coffee/50 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown drawer menu with useState presence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-coffee border-t border-beige/10 px-4 py-6 space-y-4"
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#features-benefits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Benefits Overview
                </a>
                <a
                  href="#crafting-process-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Art of Crafting
                </a>
                <a
                  href="#cultural-showcase-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Motif Showcase
                </a>
                <a
                  href="#insulation-calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Impact Evaluation Code
                </a>
                <a
                  href="#strategic-roadmap"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Development Roadmap
                </a>
                <a
                  href="#meet-the-team-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sand hover:text-beige font-sans text-sm font-medium tracking-wide"
                >
                  Our Project Team
                </a>
                <div className="pt-4 border-t border-beige/10 flex items-center justify-between text-xs text-earth-gold">
                  <span className="font-mono">IYC 2026 OFFICIAL</span>
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <HeroCultural
        title="Nusanta Raya Wall"
        subtitle="Sustainable organic waste-based thermal and acoustic wall panels. An award-winning green innovation reclaiming discarded local agricultural coffee husk and coconut residues, and shaping them with living bio-mycelial binders molded into traditional Indonesian cultural motifs."
      />

      {/* Main Pitch Subtheme Overlay (Page 2 pdf elements) */}
      <section className="bg-gradient-to-b from-coffee to-dark-coffee py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Dynamic high-fidelity drifting background orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-terracotta/25 rounded-full filter blur-[100px] pointer-events-none animate-drift-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-earth-gold/20 rounded-full filter blur-[120px] pointer-events-none animate-drift-reverse" />
        <div className="absolute inset-0 opacity-[0.04] bg-batik-grid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-dark-coffee/20 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-8 justify-between relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-5 flex flex-col justify-center max-w-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="bg-terracotta/20 border border-terracotta/40 text-earth-gold text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest font-semibold block w-fit">
                Sub-theme: Environment
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-earth-gold animate-pulse" />
            </div>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-beige font-medium leading-relaxed">
              &ldquo;Brewing Culture, Cooling the Future — From Waste to Wall Where Heritage Meets Sustainability!&rdquo;
            </blockquote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border border-beige/15 p-7 rounded-2xl bg-dark-coffee/50 min-w-[300px] flex flex-col justify-between shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full filter blur-xl pointer-events-none" />
            <div>
              <p className="font-mono text-xs text-earth-gold uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
                <Sparkle className="w-3.5 h-3.5 text-earth-gold" /> Primary Raw Materials
              </p>
              <ul className="space-y-2 text-xs font-sans text-sand/90">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Spend Coffee Grounds (SCG)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Coconut Husk Fibers (Coir)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Natural Lignin Adhesives
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Beeswax Protective Hydro-Skin
                </li>
              </ul>
            </div>
            <p className="text-[10px] text-earth-gold/70 font-mono mt-6 border-t border-beige/10 pt-3">
              100% Sourced Locally in Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Features & Benefits (point 3 of PDF) */}
      <section id="features-benefits" className="py-24 bg-dark-coffee px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* High-fidelity elegant drifting background orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-terracotta/25 rounded-full filter blur-[110px] pointer-events-none animate-drift-slow" />
        <div className="absolute bottom-[15%] right-[-5%] w-[450px] h-[450px] bg-earth-gold/18 rounded-full filter blur-[130px] pointer-events-none animate-drift-reverse" />
        <div className="absolute inset-0 opacity-[0.12] bg-batik-grid pointer-events-none" />

        {/* Animated Background Vector Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-8">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 25 10, 50 50 T 100 50" fill="none" stroke="#438C88" strokeWidth="0.5" />
            <path d="M 0 30 Q 35 80, 70 20 T 100 30" fill="none" stroke="#A64B44" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs text-earth-gold uppercase tracking-[0.25em] block">
              Core Technical Merits
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-beige tracking-tight">
              Features & Clear User Benefits
            </h2>
            <p className="text-sand/80 max-w-xl mx-auto font-sans font-light leading-relaxed text-sm">
              How our biological composite material addresses the triple criteria of ecological preservation, thermal comfort, and localized cultural identity.
            </p>
          </div>

          {/* Grid of Features with stunning custom outlines & scroll staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.0 }}
              className="bg-coffee/40 border border-terracotta/15 rounded-2xl p-6 flex flex-col justify-between hover:border-earth-gold/40 hover:bg-coffee/60 hover:shadow-warm-md transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit bg-terracotta/10 rounded-xl text-earth-gold group-hover:bg-terracotta/20 transition-colors">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-beige group-hover:text-earth-gold transition-colors">Carbon Negative</h3>
                <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                  Made entirely from agricultural coffee residues that actively trap and lock green CO₂ natively, neutralizing ambient footprints instead of emitting them.
                </p>
              </div>
              <p className="text-[10px] font-mono text-earth-gold mt-6 uppercase tracking-wider">Sequesters CO2</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-coffee/40 border border-terracotta/15 rounded-2xl p-6 flex flex-col justify-between hover:border-earth-gold/40 hover:bg-coffee/60 hover:shadow-warm-md transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit bg-terracotta/10 rounded-xl text-earth-gold group-hover:bg-terracotta/20 transition-colors">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-serif font-bold text-lg text-beige group-hover:text-earth-gold transition-colors">Passive Cooling</h3>
                <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                  Fibrous biological layout ensures highly efficient thermal isolation (0.036 W/mK), regulating hygroscopic moisture and lowering high electricity bills.
                </p>
              </div>
              <p className="text-[10px] font-mono text-earth-gold mt-6 uppercase tracking-wider">Zero AC Needed</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-coffee/40 border border-terracotta/15 rounded-2xl p-6 flex flex-col justify-between hover:border-earth-gold/40 hover:bg-coffee/60 hover:shadow-warm-md transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit bg-terracotta/10 rounded-xl text-earth-gold group-hover:bg-terracotta/20 transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-beige group-hover:text-earth-gold transition-colors">100% Biodegradable</h3>
                <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                  Fungal roots replace synthetic binders. Once unmounted, the panels disintegrate safely back to agricultural topsoil inside 60-90 days.
                </p>
              </div>
              <p className="text-[10px] font-mono text-earth-gold mt-6 uppercase tracking-wider">Zero Toxic Residue</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-coffee/40 border border-terracotta/15 rounded-2xl p-6 flex flex-col justify-between hover:border-earth-gold/40 hover:bg-coffee/60 hover:shadow-warm-md transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit bg-terracotta/10 rounded-xl text-earth-gold group-hover:bg-terracotta/20 transition-colors">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-beige group-hover:text-earth-gold transition-colors">Most Affordable</h3>
                <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                  Using abundant local agricultural waste raw materials simplifies processing, ensuring unit manufacturing costs are lower than any traditional acoustic panel.
                </p>
              </div>
              <p className="text-[10px] font-mono text-earth-gold mt-6 uppercase tracking-wider">Save Up to 45%</p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-coffee/40 border border-terracotta/15 rounded-2xl p-6 flex flex-col justify-between hover:border-earth-gold/40 hover:bg-coffee/60 hover:shadow-warm-md transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit bg-terracotta/10 rounded-xl text-earth-gold group-hover:bg-terracotta/20 transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-beige group-hover:text-earth-gold transition-colors">Culturally Embedded</h3>
                <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                  Aesthetic geometric relief patterns of Batik, Tenun, and Endek are stamped into the mycelial tissue, bringing heritage into spaces.
                </p>
              </div>
              <p className="text-[10px] font-mono text-earth-gold mt-6 uppercase tracking-wider">Double Duty Art</p>
            </motion.div>

          </div>

          {/* Quick statement on clear user benefits with scroll visual entries */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mt-16 bg-gradient-to-br from-[#FEB]/5 to-coffee/40 p-8 rounded-3xl border border-beige/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-earth-gold/5 rounded-full filter blur-2xl pointer-events-none" />
            <h4 className="font-serif font-semibold text-xl text-beige border-b border-beige/15 pb-4 mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-earth-gold" /> Clear Structural Benefits for Buildings:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 text-xs text-sand/90">
                <div className="p-1 rounded-full bg-earth-gold/10 text-earth-gold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                </div>
                <span><strong>Your Room Stays Cool:</strong> Extremely low thermal passage requires minimal AC runtime, reducing thermal load peaks.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-sand/90">
                <div className="p-1 rounded-full bg-earth-gold/10 text-earth-gold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                </div>
                <span><strong>Acre-Scale Air Quality:</strong> Fibrous bio-pores trap airborne particulates and buffer relative indoor humidity organically.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-sand/90">
                <div className="p-1 rounded-full bg-earth-gold/10 text-earth-gold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                </div>
                <span><strong>Premium Acoustics:</strong> Physically scatters and absorbs up to 85% of standing sound reflections natively.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Crafting Process Section (alternating zigzag layout) */}
      <CraftingProcess steps={processSteps} />

      {/* High-relief Interactive Gallery section */}
      <CulturalShowcase />

      {/* Sustainable calculations section */}
      <InsulationCalculator />

      {/* Section 5: Strategic roadmap (point 6 of PDF) */}
      <section id="strategic-roadmap" className="py-24 bg-dark-coffee px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
        
        {/* High-fidelity elegant drifting background orbs */}
        <div className="absolute -left-20 top-1/3 w-96 h-96 rounded-full bg-terracotta/20 filter blur-[110px] pointer-events-none animate-drift-slow" />
        <div className="absolute -right-20 bottom-1/3 w-[450px] h-[450px] rounded-full bg-earth-gold/15 filter blur-[120px] pointer-events-none animate-drift-reverse" />
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-batik-grid" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono text-xs text-earth-gold uppercase tracking-[0.25em] block">
              Long-term timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-beige tracking-tight mb-2">
              Our Roadmap (2026 - 2031)
            </h2>
            <p className="text-sand/80 max-w-2xl mx-auto font-sans font-light leading-relaxed text-sm md:text-base">
              A comprehensive phased projection outlining research maturation, mechanical sensor automation, regional ASEAN expansion, and international green certification targets.
            </p>
          </div>

          {/* Timeline Milestones layout with dynamic high fidelity design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {roadmapMilestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="bg-coffee/30 border border-[#F4E8D6]/10 p-6 rounded-2xl relative flex flex-col justify-between group hover:border-earth-gold/50 hover:bg-coffee/60 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                id={`roadmap-node-${idx}`}
              >
                {/* Connecting arrow/connector line simulated beautifully */}
                {idx < 5 && (
                  <div className="absolute top-12 -right-3.5 translate-x-1/2 w-4 h-[1px] bg-beige/10 group-hover:bg-earth-gold/40 max-lg:hidden z-10" />
                )}

                <div className="space-y-4">
                  {/* Distinct year badge */}
                  <span className="inline-block py-1 px-3 bg-gradient-to-r from-terracotta to-coffee text-beige border border-earth-gold/25 font-mono font-bold text-xs rounded-md shadow-sm">
                    {milestone.year}
                  </span>
                  
                  <h3 className="font-serif font-bold text-base text-beige group-hover:text-earth-gold transition-colors">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-[11px] font-sans text-sand/80 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-terracotta group-hover:text-earth-gold transition-colors pt-2.5 border-t border-beige/10">
                  <span>Phase 0{idx + 1}</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regional Compliance & market summary (point 5 of PDF) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mt-16 bg-gradient-to-br from-coffee/80 to-dark-coffee border border-earth-gold/20 p-6 md:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-batik-grid opacity-[0.03] pointer-events-none" />
            <div>
              <p className="text-2xl md:text-3xl font-serif font-bold text-earth-gold">$267.74B</p>
              <h4 className="font-serif text-sm font-semibold text-beige mt-1">AP Green Building Momentum</h4>
              <p className="text-xs text-sand/80 font-sans font-light mt-1.5 leading-relaxed">
                Asia-Pacific sustainable structures and high-performance insulation volume represents a massive green segment growing at a 10.93% CAGR.
              </p>
            </div>

            <div className="border-l border-beige/10 pl-0 md:pl-8 max-md:border-l-0">
              <h4 className="font-serif text-sm font-semibold text-beige flex items-center gap-1.5 text-earth-gold">
                <CheckCircle2 className="w-4 h-4 text-earth-gold" /> Regulatory Standards
              </h4>
              <p className="text-xs text-sand/80 font-sans font-light mt-1.5 leading-relaxed">
                Specifically engineered to clear safety standards under the regional <strong className="font-mono text-earth-gold">SNI 8218:2024</strong> (complying with bio-material safety metrics) and global <strong className="font-mono text-earth-gold">ISO 17088</strong> parameters.
              </p>
            </div>

            <div className="border-l border-beige/10 pl-0 md:pl-8 max-md:border-l-0">
              <h4 className="font-serif text-sm font-semibold text-beige flex items-center gap-1.5 text-earth-gold">
                <CheckCircle2 className="w-4 h-4 text-earth-gold" /> Finance Framework
              </h4>
              <p className="text-xs text-sand/80 font-sans font-light mt-1.5 leading-relaxed">
                Aligned in full structure with coordinates laid down in the official <strong className="font-mono text-earth-gold">ASEAN Taxonomy for Sustainable Finance (Green Tier)</strong>, qualifying for organic climate support bonds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segment: UN SDGs alignment (point 7 of PDF) with staggered hover entrance */}
      <section className="py-24 bg-coffee text-beige px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-beige/5">
        {/* High-fidelity elegant drifting background orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] bg-terracotta/25 rounded-full filter blur-[105px] pointer-events-none animate-drift-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-earth-gold/22 rounded-full filter blur-[100px] pointer-events-none animate-drift-reverse" />
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-batik-grid" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-3">
            <span className="font-mono text-[10px] text-earth-gold uppercase tracking-[0.25em] block">
              Global Compact Verification
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-beige tracking-tight flex items-center justify-center gap-2">
              Nusanta Raya Wall - SDG Alignment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* SDG 11 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -5 }}
              className="border border-beige/10 bg-dark-coffee/40 rounded-2xl p-6 space-y-4 hover:border-earth-gold/35 hover:bg-dark-coffee/60 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FD9D24] text-coffee font-sans font-black flex items-center justify-center text-xl shadow-md">
                11
              </div>
              <h3 className="font-serif font-bold text-sm text-beige">Goal 11: Sustainable Cities</h3>
              <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                Lowers high indoor thermal loads in dense areas natively, preventing micro urban heat islands and promoting organic, harmless bio-based composite building tiles.
              </p>
            </motion.div>

            {/* SDG 12 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="border border-beige/10 bg-dark-coffee/40 rounded-2xl p-6 space-y-4 hover:border-earth-gold/35 hover:bg-dark-coffee/60 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D3A029] text-coffee font-sans font-black flex items-center justify-center text-xl shadow-md">
                12
              </div>
              <h3 className="font-serif font-bold text-sm text-beige">Goal 12: Responsible Consumption</h3>
              <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                Diverts massive coffee shop residue and agricultural husk waste back into production streams, perfectly closing materials lifecycle loops.
              </p>
            </motion.div>

            {/* SDG 13 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="border border-beige/10 bg-dark-coffee/40 rounded-2xl p-6 space-y-4 hover:border-earth-gold/35 hover:bg-dark-coffee/60 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3F7E44] text-beige font-sans font-black flex items-center justify-center text-xl shadow-md">
                13
              </div>
              <h3 className="font-serif font-bold text-sm text-beige">Goal 13: Climate Action</h3>
              <p className="text-xs text-sand/80 leading-relaxed font-sans font-light">
                Direct sequester model traps organic volatile carbons in durable construction boards, avoiding landfill emissions of rotting raw waste.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Meet the developer team Section */}
      <MeetTheTeam members={teamMembers} />

      {/* Educational & Scientific References Footer (Page 10 pdf reference list) */}
      <footer className="bg-dark-coffee border-t border-beige/10 pt-20 pb-12 text-sand/80 text-xs px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative bottom-left and bottom-right radial lights */}
        <div className="absolute -left-36 -bottom-36 w-72 h-72 rounded-full bg-terracotta/5 filter blur-3xl pointer-events-none" />
        <div className="absolute -right-36 -bottom-36 w-72 h-72 rounded-full bg-earth-gold/5 filter blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-terracotta border border-earth-gold/25 flex items-center justify-center font-serif text-sm font-bold text-beige shadow-inner">
                  N
                </div>
                <h3 className="font-serif font-bold text-base text-beige tracking-tight">
                  Nusanta Raya Wall
                </h3>
              </div>
              <p className="text-xs text-sand/70 leading-relaxed font-sans font-light">
                Bringing ancient Indonesian Batik, Tenun, and Balinese Endek heritage structures into the vanguard of physical building science and zero-emission construction design. Created in Bali, Malang, and Denpasar, 2026.
              </p>
              <p className="text-[10px] font-mono text-earth-gold uppercase">
                Licensed under Apache-2.0
              </p>
            </div>

            {/* Citations block with citation detail styling */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-mono text-[10px] uppercase text-earth-gold tracking-wider flex items-center gap-2 font-semibold">
                <BookOpen className="w-4 h-4 text-earth-gold" /> Scientific Literature & References:
              </h4>
              
              <ul className="space-y-3 font-sans text-[11px] leading-relaxed text-sand/65 select-none font-light">
                <li className="pl-4 border-l-2 border-terracotta/30">
                  <strong className="text-sand">Badan Riset dan Inovasi Nasional (BRIN), 2025.</strong> <em>Penelitian dampak sampah plastik Indonesia terhadap polusi laut lintas negara.</em> Sourcing organic wall boards bypasses traditional single-use casing options.
                </li>
                <li className="pl-4 border-l-2 border-terracotta/30">
                  <strong className="text-sand">Ministry of Environment and Forestry (KLHK), 2023.</strong> Circular economy policy targeting a 30% reduction in high-emission plastic compounds by 2029 under standard waste mitigation acts.
                </li>
                <li className="pl-4 border-l-2 border-terracotta/30">
                  <strong className="text-sand">United Nations Environment Programme (UNEP), 2025.</strong> Global estimates on composite building aggregate replacement for regional carbon savings indicators.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-beige/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-mono text-sand/55">
              &copy; 2026 Nusanta Raya Wall. All rights reserved. Made for 4th International Youth Conference 2026.
            </p>
            <div className="flex gap-6 text-[10px] font-sans tracking-wide uppercase text-sand/40 font-semibold">
              <a href="#features-benefits" className="hover:text-beige transition-colors">Acoustics</a>
              <span>&bull;</span>
              <a href="#crafting-process-section" className="hover:text-beige transition-colors">Biochemicals</a>
              <span>&bull;</span>
              <a href="#strategic-roadmap" className="hover:text-beige transition-colors">ASEAN Taxonomy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

