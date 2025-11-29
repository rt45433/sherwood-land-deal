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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sherwood Property Solutions" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div>
              <h2 className="font-bold text-base sm:text-lg text-foreground tracking-tight">Sherwood Property Solutions</h2>
              <p className="text-xs text-muted-foreground font-medium">Land Buyers Since 2014</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200">
              How We Value
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200">
              FAQ
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200">
              Success Stories
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="shadow-soft hover:shadow-medium transition-all duration-200">
              Get An Offer
            </Button>
          </nav>
          
          <Button onClick={() => scrollToSection("contact")} size="sm" className="md:hidden">
            Sell Your Land
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
