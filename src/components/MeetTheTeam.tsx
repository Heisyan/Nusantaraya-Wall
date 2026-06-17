import { TeamMember } from "../data/team";
import { motion } from "motion/react";
import { GraduationCap, Linkedin, Compass, Sparkles, Award } from "lucide-react";

interface MeetTheTeamProps {
  members: TeamMember[];
}

export default function MeetTheTeam({ members }: MeetTheTeamProps) {
  return (
    <section id="meet-the-team-section" className="py-24 bg-dark-coffee relative text-beige overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Traditional Border divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-earth-gold/25 to-transparent" />
      
      {/* High-fidelity elegant drifting background orbs */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 rounded-full bg-terracotta/20 filter blur-[110px] pointer-events-none animate-drift-slow select-none" />
      <div className="absolute -right-20 bottom-1/4 w-[500px] h-[500px] rounded-full bg-earth-gold/15 filter blur-[130px] pointer-events-none animate-drift-reverse select-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-coffee/25 filter blur-[90px] pointer-events-none animate-float-slow select-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-batik-grid" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with Artisanal typography pairing */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs text-earth-gold uppercase tracking-[0.25em] block animate-pulse">
            Meet The Visionaries
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-beige tracking-tightSpecial">
            The Nusantaraya Team
          </h2>
          <p className="text-sand/80 max-w-2xl mx-auto font-sans font-light leading-relaxed text-sm md:text-base">
            Innovator cohorts from Brawijaya University and Primakara University joining hands to create durable climate-positive architectural surfaces.
          </p>
        </div>

        {/* CSS GRID OF PROFILE CARDS: 1 column on mobile, 3 on md, exactly 5 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
              className="bg-beige text-coffee rounded-2xl p-6 border border-earth-gold/20 flex flex-col justify-between items-center text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,163,115,0.18)] hover:-translate-y-2 hover:border-earth-gold/50 group select-none relative overflow-hidden"
              id={`team-card-${index}`}
            >
              {/* Subtle inner gold accent border on hover */}
              <div className="absolute inset-1.5 border border-transparent group-hover:border-earth-gold/15 rounded-xl transition-colors pointer-events-none" />

              <div className="w-full flex flex-col items-center relative z-10">
                {/* Circular portrait placeholder inside elegant clay borders */}
                <div className="relative w-28 h-36 mb-5 rounded-2xl p-1 border-2 border-terracotta/30 bg-sand/40 overflow-hidden shadow-inner group-hover:border-earth-gold transition-all duration-500 scale-98 group-hover:scale-102">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Decorative badge for leader/member role */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-coffee border border-earth-gold/30 text-[9px] font-mono text-earth-gold px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                    {member.role.toLowerCase().includes("leader") || member.role.toLowerCase().includes("manager") ? "Head" : "Fellow"}
                  </div>
                </div>

                {/* Name - Elegant Serif */}
                <h3 className="font-serif font-bold text-sm md:text-base text-coffee line-clamp-2 min-h-[2.5rem] flex items-center justify-center tracking-tight leading-tight">
                  {member.name}
                </h3>

                {/* Nickname and Affiliation Badge */}
                <p className="font-sans font-semibold text-xs text-terracotta tracking-wide mt-1.5 flex items-center gap-1 justify-center">
                  <span>({member.shortName})</span>
                  <Sparkles className="w-3 h-3 text-earth-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>

                {/* Role title */}
                <p className="font-sans text-[11px] text-coffee/85 mt-2 font-medium bg-coffee/5 px-2.5 py-1 rounded-md border border-coffee/5">
                  {member.role}
                </p>

                {/* Micro biography */}
                <p className="font-sans text-[11px] text-coffee/70 font-light mt-4 leading-relaxed italic min-h-[3.5rem] px-1 group-hover:text-coffee transition-colors">
                  "{member.bio}"
                </p>
              </div>

              {/* Card Footer: University details and Social link */}
              <div className="w-full mt-6 pt-4 border-t border-coffee/10 flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-center gap-1.5 text-xs text-coffee/70 group-hover:text-coffee transition-colors">
                  <GraduationCap className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span className="font-sans text-[10px] truncate" title={member.university}>
                    {member.university}
                  </span>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Credentials Highlight Banner */}
        <div className="mt-16 bg-gradient-to-br from-coffee to-dark-coffee border border-earth-gold/15 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-terracotta/20 rounded-2xl text-earth-gold shrink-0 animate-pulse">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-beige tracking-tight flex items-center gap-2">
                <span>Addressing Global Climate & Heritage Goals</span>
                <Award className="w-4 h-4 text-earth-gold" />
              </h3>
              <p className="text-xs text-sand/80 font-sans mt-1 leading-relaxed max-w-xl font-light">
                Developed in coordination under the 4th International Youth Conference 2026. This team engineered a viable material recipe merging structural cooling properties and historic identity preservation.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-center border-l border-beige/10 pl-0 md:pl-8 py-2 max-md:border-l-0">
            <div className="text-center p-2">
              <p className="text-2xl font-serif font-bold text-earth-gold">100%</p>
              <p className="text-[10px] font-mono text-sand/60 uppercase">Biodegradable</p>
            </div>
            <div className="w-[1px] h-8 bg-beige/10" />
            <div className="text-center p-2">
              <p className="text-2xl font-serif font-bold text-earth-gold">COP28</p>
              <p className="text-[10px] font-mono text-sand/60 uppercase">Alignments</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
