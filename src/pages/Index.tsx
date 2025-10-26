import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResidualValueBreakdown from "@/components/ResidualValueBreakdown";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ResidualValueBreakdown />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
