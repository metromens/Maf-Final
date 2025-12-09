import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/AnimatedElement";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || "");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="maroon">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-maroon-dark/80" />
        
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20"
          style={{ opacity }}
        >
          <Link 
            to="/#services" 
            className="self-start inline-flex items-center px-3 py-1.5 text-sm rounded-md bg-white text-primary font-medium mb-6 group border-2 border-white relative overflow-hidden transition-colors duration-300 hover:text-white"
          >
            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform relative z-10" />
            <span className="relative z-10">Back to Services</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
              <service.icon className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Description & Features */}
            <div>
              <AnimatedElement direction="left">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  About This Service
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {service.fullDescription}
                </p>
              </AnimatedElement>

              <AnimatedElement direction="left" delay={0.1}>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>

            {/* Right - Benefits & CTA */}
            <div>
              <AnimatedElement direction="right">
                <div className="bg-muted rounded-2xl p-8 mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-background rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-accent font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>

              <AnimatedElement direction="right" delay={0.2}>
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Contact us today to discuss your {service.title.toLowerCase()} needs.
                  </p>
                  <Button 
                    variant="gold" 
                    size="xl"
                    onClick={() => navigate("/#contact")}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-20 pt-10 border-t border-border">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link 
                  to={`/services/${prevService.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Previous</div>
                    <div className="font-medium">{prevService.title}</div>
                  </div>
                </Link>
              ) : <div />}
              
              {nextService ? (
                <Link 
                  to={`/services/${nextService.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <div className="text-sm text-muted-foreground">Next</div>
                    <div className="font-medium">{nextService.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
