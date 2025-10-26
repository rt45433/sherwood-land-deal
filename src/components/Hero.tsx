import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MapPin className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium">Serving the East Midlands</span>
            <Calendar className="h-4 w-4 text-white ml-2" />
            <span className="text-sm text-white font-medium">Since 2014</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Fair, Transparent Land Valuations
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover the true value of your land
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            With over 15 years of experience across Nottingham and the East Midlands, we provide honest, 
            detailed valuations using the proven residual land value method – whether your land has 
            planning permission or not.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90 shadow-large">
              Get Your Free Valuation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white text-white hover:bg-white/10"
            >
              How It Works
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Transparent Process</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">£0</div>
              <div className="text-sm text-white/80">Obligation Fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
