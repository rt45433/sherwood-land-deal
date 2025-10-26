import { Button } from "@/components/ui/button";
import logo from "@/assets/sherwood-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sherwood Property Solutions" className="h-12 w-12" />
            <div>
              <h2 className="font-bold text-lg text-foreground">Sherwood Property Solutions</h2>
              <p className="text-xs text-muted-foreground">Trusted since 2014</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Free Valuation
            </Button>
          </nav>
          
          <Button onClick={() => scrollToSection("contact")} size="sm" className="md:hidden">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
