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
    <section id="how-it-works" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Understanding Residual Land Value
          </h2>
          <p className="text-lg text-muted-foreground">
            We use a transparent, industry-standard method to calculate fair land values. 
            Here's exactly how we work out what your land is worth:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`${step.color} p-4 rounded-xl flex-shrink-0`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{step.example}</span>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-4">
                  <div className="w-px h-8 bg-border" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-8 bg-muted border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Why This Approach?
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
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
