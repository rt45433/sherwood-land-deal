import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Thank You!",
      description: "We've received your request and will get back to you within 48 hours with your free valuation.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Get Your Free Land Valuation
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              No obligation, no pressure – just an honest, transparent assessment of your land's value
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-10 shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01234 567890"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Land Location *
                      </label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Nottingham, NG1 1AA"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell us about your land
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Size of land, current use, planning status, any other relevant details..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-soft hover:shadow-medium transition-all duration-200 font-semibold">
                    Request Free Valuation
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs sm:text-sm text-muted-foreground/70 text-center">
                    We typically respond within 48 hours with an initial assessment
                  </p>
                </form>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-5 sm:p-6 border-border/50 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-2xl shadow-soft flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Call Us</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/80 font-medium">0115 123 4567</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 border-border/50 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-2xl shadow-soft flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Email Us</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/80 break-all font-medium">info@sherwoodproperty.co.uk</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 border-border/50 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-2xl shadow-soft flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Service Area</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/80">
                      Nottingham & across the East Midlands
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 bg-primary/5 border-primary/20 shadow-soft backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">What Happens Next?</h3>
                <ol className="space-y-2 text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                  <li className="flex gap-2"><span className="font-semibold text-primary">1.</span> We review your land details</li>
                  <li className="flex gap-2"><span className="font-semibold text-primary">2.</span> Initial assessment within 48 hours</li>
                  <li className="flex gap-2"><span className="font-semibold text-primary">3.</span> Site visit if needed (at your convenience)</li>
                  <li className="flex gap-2"><span className="font-semibold text-primary">4.</span> Detailed valuation report provided</li>
                  <li className="flex gap-2"><span className="font-semibold text-primary">5.</span> You decide – no pressure, no obligation</li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
