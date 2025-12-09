import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedElement } from "./AnimatedElement";
import { services, Service } from "@/data/services";
import servicesBg from "@/assets/services-bg.jpg";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <Link to={`/services/${service.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.05,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        className="group relative bg-card rounded-xl p-6 shadow-card overflow-hidden h-full cursor-pointer"
      >
        <ServiceCardContent service={service} />
      </motion.div>
    </Link>
  );
};

const ServiceCardContent = ({ service }: { service: Service }) => (
  <>
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
      <service.icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">
      {service.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {service.description}
    </p>
  </>
);

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="services" className="relative section-padding overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%] opacity-[0.03] parallax-smooth"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />
      
      {/* Solid Background */}
      <div className="absolute inset-0 bg-muted" />

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute left-10 top-20 w-20 h-20 border border-accent/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-20 bottom-40 w-32 h-32 border border-primary/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedElement>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              What We Offer
            </span>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Comprehensive <span className="text-primary">FM Services</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="text-muted-foreground text-lg">
              From technical maintenance to soft services, we provide end-to-end facility 
              management solutions tailored to your property's unique requirements.
            </p>
          </AnimatedElement>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
