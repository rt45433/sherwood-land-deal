import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why is your offer lower than what I expected?",
      answer: "We base our offers on the residual land value method – the industry standard for land valuation. This means we calculate what's left after subtracting all development costs and required profit margins from the eventual sale value. While it may seem lower than you hoped, it reflects the true market value when all real-world costs are considered. We'll always show you the detailed breakdown so you understand exactly where the numbers come from."
    },
    {
      question: "What if my land doesn't have planning permission?",
      answer: "We value land both with and without planning permission. Land without permission will naturally be valued lower due to the additional risk, time, and cost involved in obtaining it. However, we can still make an offer and explain what the land could be worth if planning is successfully obtained. Our 15+ years of experience helps us assess the realistic potential of your site."
    },
    {
      question: "How long does the valuation process take?",
      answer: "We aim to provide an initial assessment within 48 hours of receiving your details. For a detailed, formal valuation, we may need to conduct a site visit and research local planning policies, which typically takes 5-7 working days. There's never any pressure – we work at a pace that suits you."
    },
    {
      question: "Do I have to pay for the valuation?",
      answer: "No, our valuations are completely free with no obligation whatsoever. Whether you decide to accept our offer or not, there are no fees, no hidden charges, and no pressure. We believe in earning your trust through transparency and professionalism."
    },
    {
      question: "What costs are included in your calculations?",
      answer: "We include all realistic development costs: construction costs, abnormal costs (like utilities, drainage, site access), planning fees, legal fees, marketing and selling costs, finance costs, and a market-standard developer's profit margin. We also factor in any site-specific challenges that could affect development viability."
    },
    {
      question: "I'm already listed with an estate agent – can I still get a valuation?",
      answer: "Absolutely. We work with many sellers who are listed with agents. If you accept our offer, we'll work directly with your agent to handle the transaction professionally. There are no additional fees for you – we understand you may have an existing agency agreement."
    },
    {
      question: "What happens after I accept your offer?",
      answer: "Once you accept our offer, we'll handle all the legal work through solicitors, conduct any necessary surveys, and work toward completion as quickly as possible. We keep you informed at every stage and make the process as smooth and stress-free as we can. Most transactions complete within 8-12 weeks, though this can vary depending on your specific circumstances."
    },
    {
      question: "Why should I trust your figures?",
      answer: "We've been in business since 2014 and have built our reputation on honesty and transparency. We'll provide you with a detailed breakdown showing the GDV (Gross Development Value), all costs, and how we arrived at our offer. You're welcome to get independent valuations or professional advice – we encourage informed decision-making. Our track record speaks for itself."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Common Questions Answered
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in complete transparency. Here are honest answers to the questions we hear most often:
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
