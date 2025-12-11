import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark py-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <span className="text-accent-foreground font-display font-bold text-lg">M</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-primary-foreground">
                  MAF FM
                </span>
                <span className="text-xs tracking-wider text-primary-foreground/60">
                  FACILITIES MANAGEMENT
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Excellence in facility care across UAE. Your trusted partner for 
              comprehensive property management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm w-fit"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <motion.a
                href="tel:+971567803422"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                +971 56 780 3422
              </motion.a>
              <motion.a
                href="mailto:wahab@maffm.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                wahab@maffm.com
              </motion.a>
              <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Ontario Tower, Business Bay, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-primary-foreground/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-primary-foreground/50 text-sm">
            © {currentYear} MAF Facilities Management. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
