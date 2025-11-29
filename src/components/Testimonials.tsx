import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David M.",
      location: "Nottingham",
      text: "After years of my land sitting empty, Sherwood Property Solutions made me a fair offer. They explained every cost and why their price was what it was. I appreciated the honesty – no sales pressure, just facts. The whole process from offer to completion was straightforward.",
      rating: 5
    },
    {
      name: "Sarah L.",
      location: "Derby",
      text: "I was initially disappointed with the offer, but they sat down with me and showed me exactly where every pound was going – build costs, planning fees, everything. It made complete sense once I saw the real numbers. Their transparency gave me confidence to sell.",
      rating: 5
    },
    {
      name: "James T.",
      location: "Leicester",
      text: "I had my land listed with an agent for months with no serious buyers. Sherwood made a realistic offer, explained how they calculated it, and completed the purchase in 10 weeks. No messing about, just a professional service from start to finish.",
      rating: 5
    },
    {
      name: "Margaret R.",
      location: "Mansfield",
      text: "What impressed me most was their willingness to explain everything. They didn't just throw a number at me – they showed me comparable sales, development costs, and how they calculated their offer. Even though I didn't accept initially, their honesty brought me back six months later.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Landowners Who've Sold To Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
            Real experiences from people who've sold their land to us across the East Midlands
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in relative border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-5 sm:top-6 right-5 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground/70">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
