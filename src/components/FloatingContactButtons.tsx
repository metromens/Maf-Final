import { motion } from "framer-motion";
import whatsappIcon from "@/assets/icon-whatsapp.png";
import emailIcon from "@/assets/icon-email.png";
import phoneIcon from "@/assets/icon-phone.png";

const contactOptions = [
  {
    icon: whatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/971567803422",
    isCircleIcon: true,
  },
  {
    icon: emailIcon,
    label: "Email",
    href: "mailto:wahab@maffm.com",
    isCircleIcon: false,
  },
  {
    icon: phoneIcon,
    label: "Call",
    href: "tel:+971567803422",
    isCircleIcon: true,
  },
];

export const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {contactOptions.map((option, index) => (
        <motion.a
          key={option.label}
          href={option.href}
          target={option.label === "WhatsApp" ? "_blank" : undefined}
          rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-full shadow-lg overflow-hidden flex items-center justify-center ${!option.isCircleIcon ? 'bg-white' : ''}`}
          aria-label={option.label}
        >
          <img 
            src={option.icon} 
            alt={option.label} 
            className={option.isCircleIcon ? "w-full h-full object-cover" : "w-8 h-8 object-contain"}
          />
        </motion.a>
      ))}
    </div>
  );
};
