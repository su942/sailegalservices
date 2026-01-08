import { FileText, Home, Building, Stamp, Scale, Shield } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Rent Agreement Drafting",
    description:
      "Professionally drafted rent agreements that protect both landlord and tenant interests.",
  },
  {
    icon: Home,
    title: "Leave & License Agreement",
    description:
      "Legally compliant leave and license agreements for residential properties.",
  },
  {
    icon: Building,
    title: "Commercial Agreements",
    description:
      "Comprehensive commercial rental agreements for shops, offices, and warehouses.",
  },
  {
    icon: Stamp,
    title: "Registration Assistance",
    description:
      "Complete support for document registration at Sub-Registrar office.",
  },
  {
    icon: Scale,
    title: "Notary Services",
    description:
      "Authentication and notarization of legal documents by certified notaries.",
  },
  {
    icon: Shield,
    title: "Police Verification",
    description:
      "Assistance with tenant verification and police verification documentation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-trust-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Legal Documentation
              <span className="text-secondary"> Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From drafting to registration, we handle all aspects of your
              property documentation needs with expertise and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-trust hover:shadow-trust-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
