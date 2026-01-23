import logo from "@/assets/sherwood-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sherwood Property Solutions" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">Sherwood Property Solutions</h3>
                <p className="text-sm opacity-80">Est. 2014</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              We buy land for residential development across Nottingham and the East Midlands. 
              Fair offers, transparent pricing, no fees.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  How We Value Land
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="opacity-90 hover:opacity-100 transition-opacity">
                  Get An Offer
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Phone: 01158 716 385</li>
              <li>Email: info@sherwoodproperty.co.uk</li>
              <li>Service Area: East Midlands, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Sherwood Property Solutions Limited. All rights reserved.</p>
          <p className="mt-2">Registered in England. Buying land across Nottingham and the East Midlands.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
