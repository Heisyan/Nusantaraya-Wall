export interface TeamMember {
  name: string;
  shortName: string;
  role: string;
  university: string;
  photoUrl: string;
  linkedinUrl?: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "A.A Ngurah Oka Saraswateswara Udayaditya Warmar",
    shortName: "Agung Oka",
    role: "Team Leader & Bio-Composite Designer",
    university: "Brawijaya University",
    photoUrl: "/team_1.jpg",
    linkedinUrl: "https://linkedin.com",
    bio: "Spearheads bio-composite research and structural analysis of Nusantaraya Wall panels."
  },
  {
    name: "Luh Kade Ari Lestari",
    shortName: "Kade Ari",
    role: "Active Mycelium Cultivation Specialist",
    university: "Brawijaya University",
    photoUrl: "/team_2.jpg",
    linkedinUrl: "https://linkedin.com",
    bio: "Optimizes the fungal colonization parameters to achieve peak binding and passive thermal attributes."
  },
  {
    name: "Made Puja Rajistha AW",
    shortName: "Puja Rajistha",
    role: "Material Engineering Lead",
    university: "Brawijaya University",
    photoUrl: "/team_3.jpg",
    linkedinUrl: "https://linkedin.com",
    bio: "Develops the freeze-drying moisture control and optimal aggregate ratios from coffee & orange waste."
  },
  {
    name: "Kadek Diandra Prisha Hersaputri",
    shortName: "Diandra Prisha",
    role: "Cultural Design & Ergonomics Specialist",
    university: "Brawijaya University",
    photoUrl: "/team_4.jpg",
    linkedinUrl: "https://linkedin.com",
    bio: "Translates Indonesian cultural heritage (Batik, Tenun, Endek) into pristine panel surface relief stencils."
  },
  {
    name: "Muhammad Heisyan Aleandro",
    shortName: "Muhammad Aleandro",
    role: "Project Manager & Environmental Strategist",
    university: "Primakara University",
    photoUrl: "/team_5.jpg",
    linkedinUrl: "https://linkedin.com",
    bio: "Coordinates team operations, carbon footprint accounting, and aligning product values with global SDGs."
  }
];
