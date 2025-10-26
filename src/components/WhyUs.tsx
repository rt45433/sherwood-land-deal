import { Card } from "@/components/ui/card";
import { Shield, FileText, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "15+ Years of Trust",
      description: "Operating since 2014, we've built our reputation on honesty and fair dealing across the East Midlands."
    },
    {
      icon: FileText,
      title: "Complete Transparency",
      description: "We show you every calculation and cost. No hidden fees, no surprises – just straightforward, honest valuations."
    },
    {
      icon: Clock,
      title: "Fast, Professional Service",
      description: "Get your free valuation quickly, with no pressure and no obligation. We respect your time and decision-making process."
    },
    {
      icon: TrendingUp,
      title: "Market-Based Pricing",
      description: "Our offers reflect real market conditions, actual development costs, and current property values in your area."
    },
    {
      icon: Users,
      title: "Expert Local Knowledge",
      description: "Deep understanding of the East Midlands property market, planning environment, and development landscape."
    },
    {
      icon: CheckCircle,
      title: "No Agent Fees",
      description: "Whether you're listed with an agent or approaching us directly, there are no fees or commissions to pay."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Sherwood Property Solutions?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not trying to get your land for less than it's worth. We're offering what it's actually 
            worth based on real development economics. Here's what makes us different:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Promise to You
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If our offer doesn't meet your expectations, we'll explain exactly why – showing you the 
                detailed breakdown of costs and market values that informed our valuation. You'll never be 
                left wondering where our figures came from. Our goal is to help you make an informed decision 
                about your land, whether you choose to work with us or not.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
