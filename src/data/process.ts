export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  realPhotoUrl: string;
  scientificImpact: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Waste Collection & Sourcing",
    subtitle: "Organic Sorting & Material Preparation",
    description: "Collecting and categorizing discarded spent coffee grounds, citrus orange peels, and coarse coconut coir aggregates.",
    detailedDescription: "The production cycle starts by salvaging nutrient-dense agricultural and retail wastes. Spent coffee grounds are filtered and paired with fiber-enhancing coconut coir and organic preservative orange peels to establish an structurally viable baseline aggregate. No chemical or synthetic fillers are added.",
    realPhotoUrl: "/process_1.jpg",
    scientificImpact: "Diverts high-volume organic residues from landfills, capturing carbon-heavy biomass for direct structural encapsulation."
  },
  {
    stepNumber: 2,
    title: "Dehydration & Pre-Forming",
    subtitle: "Aggregate Density Optimization",
    description: "Controlled low-temperature dehydration and hydraulic pressing to pre-form raw fiber aggregates into unified templates.",
    detailedDescription: "To stabilize the material, the blended organic fibers undergo high-pressure hydraulic pre-forming. This removes ambient humidity and compresses loose particles into a cohesive, breathable substrate slab ready for inoculation.",
    realPhotoUrl: "/process_2.jpg",
    scientificImpact: "Exerts optimized pressure to equalize structural density, ensuring uniform porosity and ideal ventilation chambers in the core."
  },
  {
    stepNumber: 3,
    title: "Fungal Mycelium Colonization",
    subtitle: "Bio-Organic Composite Binding",
    description: "Inoculating the pre-formed substrate with vegetative mycelium network hyphae that feed and web the fibers together.",
    detailedDescription: "Living mycelium cultures are inoculated into the pre-formed substrate. Over a carefully regulated incubation period, the fungi grow microscopic white web-like filament networks (hyphae), feeding on cellulose to weld the coffee and coir fibers into an incredibly tight, unbreakable bio-composite.",
    realPhotoUrl: "/process_3.jpg",
    scientificImpact: "Eliminates the need for synthetic resins or chemical adhesives (such as urea-formaldehyde) by using a 100% natural, self-growing binder."
  },
  {
    stepNumber: 4,
    title: "Industrial Hot-Press Curing",
    subtitle: "Thermal Solidification & Sterilization",
    description: "Applying high-tonnage pressure and 112°C temperature plates to cure the matrix, vaporize humidity, and freeze biological activity.",
    detailedDescription: "The colonized panels are transferred to a multi-ton industrial hot pressing station. Heated plates reaching 112°C compress the panels, completely halting fungal growth to guarantee biological stability, while evaporating remaining moisture inside the core to harden the cell walls.",
    realPhotoUrl: "/process_4.jpg",
    scientificImpact: "Stops growth biology permanently while compacting the thickness, achieving high mechanical flexural stiffness and low fluid retention."
  },
  {
    stepNumber: 5,
    title: "Artisanal Heritage Embossing",
    subtitle: "Cultural Engraving & Preservation",
    description: "Hot-embossing iconic Indonesian heritage reliefs like Megamendung, Kawung, and Tenun onto the active board surface.",
    detailedDescription: "Using specialized heat-conductive brass or copper dies with engraved cultural patterns—including Cirebon Megamendung, Yogyakarta Kawung, and traditional Tenun weaves—the panels receive their final textured relief. This stamps physical grooves that maximize sound dispersion and acoustic absorption while celebrating Indonesian heritage.",
    realPhotoUrl: "/process_5.jpg",
    scientificImpact: "Enhances surface friction and acoustic scattering coefficients, diffusing sound waves naturally to achieve high eco-acoustic insulation."
  }
];
