import {
  Wind,
  Zap,
  Droplets,
  Cog,
  Flame,
  Monitor,
  ArrowUpDown,
  Hammer,
  Leaf,
  Wrench,
  Sparkles,
  Bug,
  Trash2,
  TreePine,
  ShieldCheck,
  UserCheck,
  SprayCan,
  Waves,
  Building,
  LucideIcon,
} from "lucide-react";

import serviceHvac from "@/assets/service-hvac.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceFireSafety from "@/assets/service-fire-safety.jpg";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    icon: Wind,
    title: "HVAC Maintenance",
    slug: "hvac-maintenance",
    description: "Complete heating, ventilation & air conditioning solutions",
    image: serviceHvac,
    fullDescription: "Our HVAC maintenance services ensure optimal climate control and air quality for your facility. We provide comprehensive preventive maintenance, repairs, and system optimization to maximize energy efficiency and occupant comfort throughout the year.",
    features: [
      "Preventive maintenance programs",
      "24/7 emergency repair services",
      "Energy efficiency optimization",
      "Air quality monitoring and improvement",
      "Duct cleaning and sanitization",
      "Chiller and cooling tower maintenance",
      "VRF/VRV system servicing",
      "Indoor air quality testing"
    ],
    benefits: [
      "Reduced energy consumption by up to 30%",
      "Extended equipment lifespan",
      "Improved indoor air quality",
      "Minimized downtime and disruptions",
      "Compliance with safety regulations"
    ]
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    slug: "electrical-systems",
    description: "Comprehensive electrical maintenance and repairs",
    image: serviceElectrical,
    fullDescription: "Our electrical services cover all aspects of facility electrical maintenance, from routine inspections to complex repairs. We ensure your electrical systems operate safely, efficiently, and in compliance with all regulatory standards.",
    features: [
      "Electrical system inspections",
      "Preventive maintenance programs",
      "Emergency repairs and troubleshooting",
      "Lighting systems maintenance",
      "Power distribution management",
      "Generator maintenance and testing",
      "Electrical panel upgrades",
      "Energy audits and optimization"
    ],
    benefits: [
      "Enhanced electrical safety",
      "Reduced risk of electrical failures",
      "Lower energy costs",
      "Compliance with electrical codes",
      "Minimized operational disruptions"
    ]
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    slug: "plumbing-services",
    description: "Expert plumbing installation and maintenance",
    image: serviceCleaning,
    fullDescription: "Our professional plumbing services ensure reliable water supply and drainage systems throughout your facility. From routine maintenance to emergency repairs, we keep your plumbing infrastructure functioning flawlessly.",
    features: [
      "Preventive plumbing maintenance",
      "Leak detection and repair",
      "Drain cleaning and maintenance",
      "Water heater servicing",
      "Fixture installation and repair",
      "Backflow prevention testing",
      "Water pressure optimization",
      "Pipe replacement and upgrades"
    ],
    benefits: [
      "Prevention of water damage",
      "Reduced water consumption",
      "Extended plumbing system lifespan",
      "Compliance with health regulations",
      "Minimized emergency repairs"
    ]
  },
  {
    icon: Cog,
    title: "Mechanical Services",
    slug: "mechanical-services",
    description: "Full mechanical systems maintenance",
    image: serviceHvac,
    fullDescription: "Our mechanical services encompass all building mechanical systems, ensuring smooth operations and optimal performance. We provide comprehensive maintenance solutions for pumps, motors, and mechanical equipment.",
    features: [
      "Pump maintenance and repair",
      "Motor servicing and replacement",
      "Belt and bearing maintenance",
      "Vibration analysis",
      "Equipment alignment services",
      "Preventive maintenance scheduling",
      "Emergency mechanical repairs",
      "Equipment performance optimization"
    ],
    benefits: [
      "Reduced equipment downtime",
      "Extended machinery lifespan",
      "Improved operational efficiency",
      "Lower maintenance costs",
      "Enhanced equipment reliability"
    ]
  },
  {
    icon: Flame,
    title: "Fire Safety Systems",
    slug: "fire-safety-systems",
    description: "Fire alarm and firefighting system maintenance",
    image: serviceFireSafety,
    fullDescription: "Our fire safety services ensure your facility meets all fire protection requirements. We maintain fire alarm systems, sprinklers, and firefighting equipment to protect lives and property.",
    features: [
      "Fire alarm system maintenance",
      "Sprinkler system inspections",
      "Fire extinguisher servicing",
      "Emergency lighting testing",
      "Fire pump maintenance",
      "Smoke detector testing",
      "Fire door inspections",
      "Fire safety compliance audits"
    ],
    benefits: [
      "Enhanced life safety",
      "Regulatory compliance",
      "Reduced insurance premiums",
      "Protection of assets",
      "Peace of mind for occupants"
    ]
  },
  {
    icon: Monitor,
    title: "BMS Maintenance",
    slug: "bms-maintenance",
    description: "Building Management System optimization",
    image: serviceElectrical,
    fullDescription: "Our BMS maintenance services optimize your building automation systems for maximum efficiency and control. We ensure seamless integration and operation of all building systems through advanced monitoring and management.",
    features: [
      "BMS system monitoring",
      "Software updates and optimization",
      "Sensor calibration",
      "System integration services",
      "Energy management programming",
      "Alarm management",
      "Performance reporting",
      "User training and support"
    ],
    benefits: [
      "Optimized building performance",
      "Reduced energy consumption",
      "Centralized system control",
      "Real-time monitoring capabilities",
      "Data-driven decision making"
    ]
  },
  {
    icon: ArrowUpDown,
    title: "Elevator & Escalator",
    slug: "elevator-escalator",
    description: "Vertical transportation system care",
    image: serviceHvac,
    fullDescription: "Our elevator and escalator maintenance services ensure safe and reliable vertical transportation throughout your facility. We provide comprehensive maintenance programs to minimize downtime and ensure passenger safety.",
    features: [
      "Regular maintenance inspections",
      "Safety system testing",
      "Component replacement",
      "Emergency rescue services",
      "Modernization consulting",
      "Performance optimization",
      "Compliance certifications",
      "24/7 emergency support"
    ],
    benefits: [
      "Enhanced passenger safety",
      "Reduced equipment downtime",
      "Extended equipment lifespan",
      "Regulatory compliance",
      "Improved building accessibility"
    ]
  },
  {
    icon: Hammer,
    title: "Civil Works",
    slug: "civil-works",
    description: "Structural maintenance and renovations",
    image: serviceCleaning,
    fullDescription: "Our civil works services cover all structural maintenance and renovation needs. From minor repairs to major refurbishments, we ensure your facility maintains its structural integrity and aesthetic appeal.",
    features: [
      "Structural repairs and maintenance",
      "Waterproofing services",
      "Painting and finishing",
      "Flooring installation and repair",
      "Ceiling maintenance",
      "Wall repairs and modifications",
      "Renovation projects",
      "General carpentry"
    ],
    benefits: [
      "Maintained structural integrity",
      "Enhanced facility aesthetics",
      "Extended building lifespan",
      "Improved property value",
      "Safe and functional spaces"
    ]
  },
  {
    icon: Leaf,
    title: "Energy Management",
    slug: "energy-management",
    description: "Sustainable energy optimization solutions",
    image: serviceElectrical,
    fullDescription: "Our energy management services help reduce your facility's carbon footprint while cutting operational costs. We implement sustainable solutions and monitoring systems for optimal energy utilization.",
    features: [
      "Energy audits and assessments",
      "Consumption monitoring",
      "LED lighting upgrades",
      "Solar system integration",
      "Power factor correction",
      "Peak demand management",
      "Utility bill analysis",
      "Sustainability reporting"
    ],
    benefits: [
      "Significant cost savings",
      "Reduced carbon footprint",
      "Improved sustainability credentials",
      "Enhanced equipment efficiency",
      "Environmental compliance"
    ]
  },
  {
    icon: Wrench,
    title: "MEP Services",
    slug: "mep-services",
    description: "Mechanical, electrical & plumbing expertise",
    image: serviceHvac,
    fullDescription: "Our integrated MEP services provide comprehensive maintenance for all mechanical, electrical, and plumbing systems. We ensure seamless coordination and optimal performance across all building systems.",
    features: [
      "Integrated system maintenance",
      "Cross-functional coordination",
      "Preventive maintenance programs",
      "System upgrades and retrofits",
      "Emergency response services",
      "Performance optimization",
      "Compliance management",
      "Technical consultancy"
    ],
    benefits: [
      "Single-point accountability",
      "Coordinated maintenance approach",
      "Reduced operational complexity",
      "Optimized system performance",
      "Cost-effective solutions"
    ]
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    slug: "cleaning-services",
    description: "Professional cleaning and sanitation",
    image: serviceCleaning,
    fullDescription: "Our professional cleaning services maintain the highest standards of hygiene and cleanliness for your facility. We use eco-friendly products and advanced techniques to create healthy, welcoming environments.",
    features: [
      "Daily janitorial services",
      "Deep cleaning programs",
      "Floor care and maintenance",
      "Window cleaning",
      "Restroom sanitation",
      "Carpet and upholstery cleaning",
      "High-touch surface disinfection",
      "Waste collection and disposal"
    ],
    benefits: [
      "Healthier work environment",
      "Enhanced facility image",
      "Improved occupant satisfaction",
      "Reduced illness and absenteeism",
      "Compliance with hygiene standards"
    ]
  },
  {
    icon: Bug,
    title: "Pest Control",
    slug: "pest-control",
    description: "Integrated pest management solutions",
    image: serviceSecurity,
    fullDescription: "Our integrated pest management services protect your facility from unwanted pests while minimizing environmental impact. We use safe, effective methods to prevent and eliminate pest infestations.",
    features: [
      "Regular pest inspections",
      "Preventive treatments",
      "Rodent control programs",
      "Insect management",
      "Bird deterrent systems",
      "Termite protection",
      "Emergency pest response",
      "Documentation and reporting"
    ],
    benefits: [
      "Pest-free environment",
      "Protection of property",
      "Health and safety compliance",
      "Minimized health risks",
      "Professional documentation"
    ]
  },
  {
    icon: Trash2,
    title: "Waste Management",
    slug: "waste-management",
    description: "Efficient waste disposal and recycling",
    image: serviceCleaning,
    fullDescription: "Our waste management services ensure efficient, environmentally responsible disposal and recycling of all facility waste. We help reduce your environmental impact while maintaining clean, organized spaces.",
    features: [
      "Waste collection and disposal",
      "Recycling programs",
      "Hazardous waste management",
      "Composting solutions",
      "Waste audits and reduction",
      "Bin management",
      "Compliance documentation",
      "Sustainability reporting"
    ],
    benefits: [
      "Reduced environmental impact",
      "Cost-effective waste disposal",
      "Regulatory compliance",
      "Improved sustainability metrics",
      "Cleaner facility environment"
    ]
  },
  {
    icon: TreePine,
    title: "Landscaping",
    slug: "landscaping",
    description: "Professional grounds and garden maintenance",
    image: serviceLandscaping,
    fullDescription: "Our landscaping services create and maintain beautiful outdoor spaces that enhance your facility's curb appeal. We provide comprehensive grounds maintenance and landscape design services.",
    features: [
      "Lawn care and maintenance",
      "Plant and tree care",
      "Irrigation system management",
      "Seasonal planting",
      "Hardscape maintenance",
      "Landscape design",
      "Pest and disease management",
      "Outdoor lighting maintenance"
    ],
    benefits: [
      "Enhanced property aesthetics",
      "Improved first impressions",
      "Increased property value",
      "Sustainable outdoor spaces",
      "Healthy plant environments"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Security Services",
    slug: "security-services",
    description: "Comprehensive security solutions",
    image: serviceSecurity,
    fullDescription: "Our security services provide comprehensive protection for your facility, personnel, and assets. We offer integrated security solutions combining personnel, technology, and procedures.",
    features: [
      "24/7 security personnel",
      "Access control management",
      "CCTV monitoring",
      "Patrol services",
      "Visitor management",
      "Emergency response",
      "Security audits",
      "Incident reporting"
    ],
    benefits: [
      "Enhanced facility security",
      "Protection of assets",
      "Safety for occupants",
      "Deterrence of criminal activity",
      "Peace of mind"
    ]
  },
  {
    icon: UserCheck,
    title: "Reception & Concierge",
    slug: "reception-concierge",
    description: "Professional front-of-house services",
    image: serviceCleaning,
    fullDescription: "Our reception and concierge services provide professional front-of-house support that creates positive first impressions and enhances the overall facility experience for visitors and occupants.",
    features: [
      "Professional reception services",
      "Visitor registration",
      "Mail and package handling",
      "Meeting room coordination",
      "Concierge assistance",
      "Information services",
      "VIP guest handling",
      "Administrative support"
    ],
    benefits: [
      "Professional first impressions",
      "Enhanced visitor experience",
      "Efficient front-desk operations",
      "Improved tenant satisfaction",
      "Streamlined communications"
    ]
  },
  {
    icon: SprayCan,
    title: "Sanitization",
    slug: "sanitization",
    description: "Deep cleaning and disinfection services",
    image: serviceCleaning,
    fullDescription: "Our sanitization services provide thorough disinfection and deep cleaning to maintain the highest hygiene standards. We use hospital-grade disinfectants and advanced application methods.",
    features: [
      "Deep disinfection services",
      "Electrostatic spraying",
      "UV-C sanitization",
      "High-touch surface treatment",
      "Air purification",
      "Antimicrobial coatings",
      "Scheduled sanitization programs",
      "Emergency response cleaning"
    ],
    benefits: [
      "Maximum hygiene assurance",
      "Reduced pathogen transmission",
      "Healthier environment",
      "Compliance with health standards",
      "Occupant confidence"
    ]
  },
  {
    icon: Waves,
    title: "Pool Maintenance",
    slug: "pool-maintenance",
    description: "Swimming pool care and water treatment",
    image: serviceLandscaping,
    fullDescription: "Our pool maintenance services ensure safe, clean, and well-maintained swimming facilities. We provide comprehensive water treatment, equipment maintenance, and pool care services.",
    features: [
      "Water quality testing",
      "Chemical balancing",
      "Filter maintenance",
      "Pool cleaning services",
      "Equipment repairs",
      "Safety inspections",
      "Seasonal maintenance",
      "Pool deck cleaning"
    ],
    benefits: [
      "Safe swimming environment",
      "Crystal clear water",
      "Extended equipment life",
      "Regulatory compliance",
      "Enhanced guest experience"
    ]
  },
  {
    icon: Building,
    title: "Facade Cleaning",
    slug: "facade-cleaning",
    description: "High-rise exterior cleaning services",
    image: serviceSecurity,
    fullDescription: "Our façade cleaning services maintain the exterior appearance of your building with professional high-rise cleaning solutions. We use specialized equipment and techniques for safe, effective results.",
    features: [
      "High-rise window cleaning",
      "Exterior wall washing",
      "Cladding cleaning",
      "Glass restoration",
      "Pressure washing",
      "Rope access techniques",
      "Cradle operations",
      "Protective coatings application"
    ],
    benefits: [
      "Enhanced building appearance",
      "Protected building materials",
      "Improved natural lighting",
      "Professional image",
      "Extended façade lifespan"
    ]
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
