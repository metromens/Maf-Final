import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
const navLinks = [{
  name: "Home",
  href: "/#home",
  isExternal: false
}, {
  name: "About",
  href: "/#about",
  isExternal: false
}, {
  name: "Services",
  href: "/services",
  isExternal: true
}, {
  name: "Contact",
  href: "/#contact",
  isExternal: false
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out flex justify-center",
      isScrolled ? "py-3" : "py-5"
    )}>
      <div className={cn(
        "transition-all duration-700 ease-in-out px-4 sm:px-6 lg:px-10 py-3",
        "bg-gradient-to-r from-maroon via-maroon-dark to-maroon backdrop-blur-md",
        "w-[92%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-6xl",
        isScrolled ? "shadow-elevated" : "shadow-lg",
        // Keep rounded-2xl on mobile, pill shape only on md+
        "rounded-2xl md:rounded-full"
      )}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/#home" className="flex items-center">
            <img 
              src={logo} 
              alt="MAF Facility Management" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="gold-underline font-medium text-primary-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="gold3d" size="lg" asChild className="rounded-full">
              <a href="tel:+971567803422" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="font-medium py-3 px-4 text-primary-foreground hover:text-accent hover:bg-primary-foreground/5 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gold3d" size="lg" asChild className="mt-3 rounded-full">
                <a href="tel:+971567803422" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};