import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Wind, Zap, Sparkles, ShieldCheck, TreePine, Flame, ArrowRight, LucideIcon } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

// Import service images
import hvacImg from "@/assets/service-hvac.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import securityImg from "@/assets/service-security.jpg";
import landscapingImg from "@/assets/service-landscaping.jpg";
import fireSafetyImg from "@/assets/service-fire-safety.jpg";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

interface FeaturedService {
  icon: LucideIcon;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
}

const featuredServices: FeaturedService[] = [
  {
    icon: Wind,
    title: "HVAC Maintenance",
    slug: "hvac-maintenance",
    shortDesc: "Complete Climate Control Solutions",
    description: "Our expert technicians provide comprehensive HVAC services including installation, preventive maintenance, repairs, and system optimization. We ensure optimal indoor air quality and energy efficiency for commercial and residential properties across Dubai.",
    features: ["24/7 Emergency Support", "Energy Audits", "Preventive Maintenance", "System Upgrades"],
    image: hvacImg,
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    slug: "electrical-systems",
    shortDesc: "Safe & Reliable Power Management",
    description: "From routine inspections to complex installations, our licensed electricians deliver top-tier electrical services. We handle everything from lighting systems to power distribution, ensuring safety compliance and uninterrupted operations.",
    features: ["Safety Inspections", "Panel Upgrades", "Emergency Repairs", "LED Retrofitting"],
    image: electricalImg,
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    slug: "cleaning-services",
    shortDesc: "Professional Hygiene Solutions",
    description: "Our professional cleaning teams maintain the highest standards of cleanliness using eco-friendly products and advanced equipment. We offer daily, weekly, and deep cleaning services tailored to your facility's specific needs.",
    features: ["Daily Maintenance", "Deep Cleaning", "Sanitization", "Window Cleaning"],
    image: cleaningImg,
  },
  {
    icon: ShieldCheck,
    title: "Security Services",
    slug: "security-services",
    shortDesc: "Comprehensive Protection",
    description: "Protect your assets with our integrated security solutions including manned guarding, CCTV monitoring, access control, and emergency response. Our trained security professionals ensure round-the-clock protection.",
    features: ["24/7 Monitoring", "Access Control", "Patrol Services", "Risk Assessment"],
    image: securityImg,
  },
  {
    icon: TreePine,
    title: "Landscaping",
    slug: "landscaping",
    shortDesc: "Beautiful Outdoor Spaces",
    description: "Transform your outdoor areas with our professional landscaping services. From irrigation systems to garden design, we create and maintain stunning landscapes that enhance your property's aesthetic appeal and value.",
    features: ["Garden Design", "Irrigation Systems", "Lawn Care", "Tree Maintenance"],
    image: landscapingImg,
  },
  {
    icon: Flame,
    title: "Fire Safety Systems",
    slug: "fire-safety-systems",
    shortDesc: "Life Safety Compliance",
    description: "Ensure your property meets all fire safety regulations with our comprehensive fire protection services. We install, inspect, and maintain fire alarms, sprinkler systems, and emergency equipment to keep occupants safe.",
    features: ["Alarm Systems", "Sprinkler Maintenance", "Fire Extinguishers", "Safety Training"],
    image: fireSafetyImg,
  },
];

// Individual card with scroll-based animation
const FeaturedServiceCard = ({ service, index }: { service: FeaturedService; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  
  // Column position (0, 1, 2) for 3-column layout
  const col = index % 3;
  
  // Column 0: from left, Column 1: from top, Column 2: from right
  const xTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    col === 0 ? [-150, 0] : col === 2 ? [150, 0] : [0, 0]
  );
  const yTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    col === 1 ? [-100, 0] : [0, 0]
  );
  const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className="group"
    >
      <Link to={`/services/${service.slug}`}>
        <motion.div
          className="relative bg-card rounded-2xl overflow-hidden shadow-card h-full cursor-pointer"
          style={{ x: xTransform, y: yTransform }}
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Icon Badge */}
            <div className="absolute bottom-4 left-6 w-14 h-14 rounded-xl bg-primary shadow-gold flex items-center justify-center">
              <service.icon className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-4">
            <span className="text-accent text-sm font-medium">{service.shortDesc}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-2 mb-4">
              {service.features.map((feature) => (
                <span 
                  key={feature} 
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Learn More Link */}
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link hover:gap-3 transition-all">
              Learn More 
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const FeaturedServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} id="featured-services" className="relative section-padding overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] parallax-smooth"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          y: backgroundY,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedElement>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Featured Services
            </span>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Excellence in <span className="text-primary">Every Detail</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Discover our core services designed to maintain, protect, and enhance your property 
              with unmatched professionalism and expertise.
            </p>
          </AnimatedElement>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <FeaturedServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Show More Services Button */}
        <AnimatedElement delay={0.3}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-gold hover:shadow-gold-hover transition-all duration-300 hover:scale-105 group"
            >
              Show More Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};
