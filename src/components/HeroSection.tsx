import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-dubai.webp";

const springConfig = { stiffness: 300, damping: 50, restDelta: 0.001 };

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Frame-by-frame parallax: background moves slower than scroll for depth effect
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Frame-by-frame Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[150%] -top-[25%]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          y: backgroundY,
          scale: backgroundScale,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/50 to-maroon-dark/80" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6"
          >
            Excellence in{" "}
            <span className="text-accent">Facility Care</span>
            <br />
            Across UAE
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Delivering comprehensive facility management solutions with unwavering commitment 
            to quality, safety, and operational excellence since our establishment.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20"
          >
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent">15+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent">200+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Properties Managed</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent">24/7</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Support Available</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};
