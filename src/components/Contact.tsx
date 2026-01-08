import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-trust-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Your
              <span className="text-secondary"> Rent Agreement?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Contact us today for a quick consultation. We're here to help you
              with all your legal documentation needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-trust">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a
                    href="tel:+919594021883"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Phone
                      </p>
                      <p className="text-foreground font-medium">
                        +91 95940 21883
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919594021883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        WhatsApp
                      </p>
                      <p className="text-foreground font-medium">
                        +91 95940 21883
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:sailegalservices2004@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Email
                      </p>
                      <p className="text-foreground font-medium">
                        sailegalservices2004@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Location
                      </p>
                      <p className="text-foreground font-medium">
                        Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Working Hours
                      </p>
                      <p className="text-foreground font-medium">
                        Mon - Sat: 9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-hero-gradient rounded-2xl p-8 md:p-10 text-primary-foreground shadow-trust-xl">
              <h3 className="text-2xl font-bold mb-4">
                Get Your Agreement Today!
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Whether you're a landlord or tenant, we make the process simple
                and stress-free. Reach out to us through any of the following
                methods:
              </p>

              <div className="space-y-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full"
                  asChild
                >
                  <a href="tel:+919594021883">
                    <Phone className="w-5 h-5" />
                    Call: +91 95940 21883
                  </a>
                </Button>

                <Button
                  variant="heroOutline"
                  size="xl"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/919594021883?text=Hi, I need help with a rent agreement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70 text-center">
                  Free consultation • No hidden charges • Quick turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
