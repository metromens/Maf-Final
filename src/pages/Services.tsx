import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
};

export default Services;
