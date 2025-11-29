import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What kind of land do you buy?",
      answer: "We purchase land suitable for residential development – from single building plots to larger sites. We're interested in land with or without planning permission across Nottingham and the East Midlands. If you're unsure whether your land would suit us, get in touch and we'll let you know."
    },
    {
      question: "Why might your offer be lower than I expected?",
      answer: "We base our offers on the residual land value method – the industry standard for land pricing. This calculates what's left after subtracting all development costs and required profit margins from the eventual sale value of completed homes. While it may seem lower than you hoped, it reflects the true market value when all real-world costs are considered. We'll always show you the detailed breakdown so you understand exactly where the numbers come from."
    },
    {
      question: "What if my land doesn't have planning permission?",
      answer: "We buy land both with and without planning permission. Land without permission will naturally command a lower price due to the additional risk, time, and cost involved in obtaining it. However, we can still make an offer and explain what the land could be worth if planning is successfully granted. Our 15+ years of experience helps us assess the realistic potential of your site."
    },
    {
      question: "How quickly can you make me an offer?",
      answer: "We aim to provide an initial assessment within 48 hours of receiving your details. For a detailed offer, we may need to conduct a site visit and research local planning policies, which typically takes 5-7 working days. There's never any pressure – we work at a pace that suits you."
    },
    {
      question: "Do I have to pay anything?",
      answer: "No. There are no fees, no charges, and no obligation whatsoever. We cover our own costs. Whether you decide to accept our offer or not, you won't pay us a penny. We believe in earning your trust through transparency and professionalism."
    },
    {
      question: "I'm already listed with an estate agent – can you still buy my land?",
      answer: "Absolutely. We work with many sellers who are listed with agents. If you accept our offer, we'll work directly with your agent to handle the transaction professionally. There are no additional fees for you – we understand you may have an existing agency agreement."
    },
    {
      question: "What happens after I accept your offer?",
      answer: "Once you accept, we'll handle all the legal work through solicitors, conduct any necessary surveys, and work toward completion as quickly as possible. We keep you informed at every stage and make the process as smooth and stress-free as we can. Most transactions complete within 8-12 weeks, though this can vary depending on your specific circumstances."
    },
    {
      question: "How do I know your offer is fair?",
      answer: "We've been buying land since 2014 and have built our reputation on honesty and transparency. We'll provide you with a detailed breakdown showing the Gross Development Value (GDV), all costs, and how we arrived at our offer. You're welcome to get independent valuations or professional advice – we encourage informed decision-making. Our track record speaks for itself."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Common Questions Answered
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              We believe in complete transparency. Here are honest answers to the questions we hear most often:
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl px-5 sm:px-6 shadow-soft hover:shadow-medium transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 sm:py-6">
                  <span className="text-base sm:text-lg font-bold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground/80 pb-5 sm:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
