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
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Land Valuation
            </h2>
            <p className="text-lg text-muted-foreground">
              No obligation, no pressure – just an honest, transparent assessment of your land's value
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-medium">
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

                  <Button type="submit" size="lg" className="w-full">
                    Request Free Valuation
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 48 hours with an initial assessment
                  </p>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">0115 123 4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground break-all">info@sherwoodproperty.co.uk</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
                    <p className="text-muted-foreground">
                      Nottingham & across the East Midlands
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. We review your land details</li>
                  <li>2. Initial assessment within 48 hours</li>
                  <li>3. Site visit if needed (at your convenience)</li>
                  <li>4. Detailed valuation report provided</li>
                  <li>5. You decide – no pressure, no obligation</li>
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
