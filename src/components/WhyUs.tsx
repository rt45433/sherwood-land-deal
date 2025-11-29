import { Card } from "@/components/ui/card";
import { Shield, FileText, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "15+ Years of Trust",
      description: "Operating since 2014, we've built our reputation on honesty and fair dealing with landowners across the East Midlands."
    },
    {
      icon: FileText,
      title: "Transparent Offers",
      description: "We show you exactly how we calculate our offer. No hidden fees, no surprises – just straightforward, honest pricing."
    },
    {
      icon: Clock,
      title: "Fast, Simple Process",
      description: "Get a genuine offer quickly, with no pressure and no obligation. We respect your time and your decision."
    },
    {
      icon: TrendingUp,
      title: "Fair Market Prices",
      description: "Our offers reflect real market conditions, actual development costs, and current property values in your area."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of the East Midlands property market, planning environment, and what makes land valuable."
    },
    {
      icon: CheckCircle,
      title: "No Agent Fees",
      description: "Sell directly to us with no estate agent commissions. Even if you're listed with an agent, you pay nothing extra."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Why Sell Your Land To Us?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
            We're not trying to get your land for less than it's worth. We offer what it's genuinely 
            worth based on real development economics – and we'll show you exactly how we work it out.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-7 hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 bg-card/80 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card className="p-6 sm:p-10 bg-primary/5 border-primary/20 shadow-soft backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Our Promise to You
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
                If our offer doesn't meet your expectations, we'll explain exactly why – showing you the 
                detailed breakdown of costs and market values that informed our price. You'll never be 
                left wondering where our figures came from. Whether you sell to us or not, you'll walk 
                away with a clear understanding of what your land is worth.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
