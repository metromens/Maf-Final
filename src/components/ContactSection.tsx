import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import contactBg from "@/assets/contact-bg.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+971 56 780 3422",
    href: "tel:+971567803422",
  },
  {
    icon: Mail,
    title: "Email",
    value: "wahab@maffm.com",
    href: "mailto:wahab@maffm.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ontario Tower, Business Bay, Dubai, UAE",
    href: "https://maps.google.com/?q=Ontario+Tower+Business+Bay+Dubai",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Support Available",
    href: null,
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
  
  // Left section animation (comes from left, stays visible)
  const leftX = useTransform(smoothProgress, [0, 0.3], [-200, 0]);
  const leftOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  
  // Right section animation (comes from right, stays visible)
  const rightX = useTransform(smoothProgress, [0, 0.3], [200, 0]);
  const rightOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%] parallax-smooth"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-maroon-dark/90" />

      {/* Floating Elements */}
      <motion.div
        className="absolute left-20 top-20 w-40 h-40 rounded-full border border-accent/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-40 bottom-20 w-60 h-60 rounded-full border border-primary-foreground/5"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="parallax-smooth"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Let's Discuss Your{" "}
              <span className="text-accent">FM Needs</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Ready to experience excellence in facility management? Contact us today 
              for a consultation and discover how we can enhance your property operations.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-300 ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                  whileHover={item.href ? { 
                    scale: 1.03, 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(201,169,98,0.3)"
                  } : {}}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <div>
                    <div className="text-primary-foreground/60 text-sm">{item.title}</div>
                    <div className="text-primary-foreground font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div 
            style={{ x: rightX, opacity: rightOpacity }}
            className="parallax-smooth"
          >
            <motion.div 
              className="bg-card rounded-2xl p-8 shadow-elevated"
              whileHover={{ boxShadow: "0 25px 60px -15px rgba(0,0,0,0.3)" }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </motion.div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your facility management needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="maroon"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
