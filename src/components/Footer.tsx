import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sai Legal Services</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Your trusted partner for all legal documentation needs.
                Professional, affordable, and hassle-free services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "How It Works", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:+919594021883"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 95940 21883
                </a>
                <a
                  href="mailto:sailegalservices2004@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sailegalservices2004@gmail.com
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-4 h-4" />
                  Mumbai, Maharashtra
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Sai Legal Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
