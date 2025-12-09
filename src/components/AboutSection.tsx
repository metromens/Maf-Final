import { useRef } from "react";
import { Award, Users, Building2, Shield, LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedElement } from "./AnimatedElement";
import aboutBg from "@/assets/about-bg.jpg";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="group p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Recognized for outstanding service quality and operational standards across Dubai.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained professionals dedicated to maintaining your facilities with precision.",
  },
  {
    icon: Building2,
    title: "Comprehensive Solutions",
    description: "End-to-end facility management covering all aspects of property maintenance.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict adherence to safety protocols and regulatory compliance standards.",
  },
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
  const decorY1 = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const decorY2 = useTransform(smoothProgress, [0, 1], ["40%", "0%"]);

  return (
    <section ref={ref} id="about" className="relative section-padding overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-[130%] opacity-10 parallax-smooth"
        style={{ y: backgroundY }}
      >
        <img src={aboutBg} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-accent/5 blur-3xl parallax-smooth"
        style={{ y: decorY1 }}
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-primary/5 blur-3xl parallax-smooth"
        style={{ y: decorY2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <AnimatedElement direction="left">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                About MAF FM
              </span>
            </AnimatedElement>
            
            <AnimatedElement direction="left" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-primary">Facility Management</span>
              </h2>
            </AnimatedElement>
            
            <AnimatedElement direction="left" delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MAF Facilities Management is a premier facility management company headquartered 
                in the heart of Dubai's Business Bay. Led by Managing Director Abdul Wahab, we 
                bring years of expertise and a commitment to excellence that sets us apart in the industry.
              </p>
            </AnimatedElement>
            
            <AnimatedElement direction="left" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our comprehensive approach to facility management ensures that every aspect of 
                your property is maintained to the highest standards. From technical systems to 
                soft services, we deliver integrated solutions that enhance property value and 
                occupant satisfaction.
              </p>
            </AnimatedElement>

            {/* Director Info */}
            <AnimatedElement direction="left" delay={0.4}>
              <motion.div 
                className="flex items-center gap-4 p-4 bg-muted rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">AW</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Abdul Wahab</div>
                  <div className="text-muted-foreground text-sm">Managing Director</div>
                </div>
              </motion.div>
            </AnimatedElement>
          </div>

          {/* Right Content - Features Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            style={{ x: useTransform(useSpring(scrollYProgress, springConfig), [0, 0.5, 1], [150, 0, 0]), opacity: useTransform(useSpring(scrollYProgress, springConfig), [0, 0.3, 0.5], [0, 0.5, 1]) }}
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
