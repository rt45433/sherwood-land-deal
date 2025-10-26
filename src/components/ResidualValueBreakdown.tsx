import { Card } from "@/components/ui/card";
import { Home, Minus, Calculator, Coins } from "lucide-react";

const ResidualValueBreakdown = () => {
  const steps = [
    {
      icon: Home,
      title: "Gross Development Value (GDV)",
      description: "The total market value of all completed properties on the site",
      example: "£2,000,000",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Minus,
      title: "Less: All Development Costs",
      description: "Build costs, planning fees, utilities, infrastructure, legal fees, and selling costs",
      example: "£1,200,000",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: Calculator,
      title: "Less: Developer's Profit",
      description: "Industry-standard profit margin (typically 15-20% of GDV) and finance costs",
      example: "£350,000",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Coins,
      title: "Residual Land Value",
      description: "The remaining amount – this is what we can offer for your land",
      example: "£450,000",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Understanding Residual Land Value
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
            We use a transparent, industry-standard method to calculate fair land values. 
            Here's exactly how we work out what your land is worth:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-5 sm:p-8 shadow-soft hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className={`${step.color} p-3 sm:p-4 rounded-2xl flex-shrink-0 shadow-soft`}>
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{step.title}</h3>
                    <span className="text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">{step.example}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <div className="w-px h-6 bg-gradient-to-b from-border to-transparent" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <Card className="p-6 sm:p-10 bg-primary/5 border-primary/20 shadow-soft backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
              Why This Approach?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground/80 text-center leading-relaxed">
              This residual method is the same approach used by professional developers and valuers across 
              the UK. It ensures you receive a fair offer based on real market conditions and actual costs – 
              not guesswork. We're completely transparent about every figure that goes into your valuation, 
              so you understand exactly where the numbers come from.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResidualValueBreakdown;
