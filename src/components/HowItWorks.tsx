import { ClipboardList, FileCheck, PenTool, Mail } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Share Details",
    description:
      "Provide property and tenant information through our simple form or WhatsApp.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Agreement Drafted",
    description:
      "Our legal experts draft your agreement with all necessary clauses.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Registration Support",
    description:
      "We assist with stamp duty, notary, and sub-registrar formalities.",
  },
  {
    icon: Mail,
    step: "04",
    title: "Quick Delivery",
    description:
      "Receive your registered agreement via email and physical copy.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How It
              <span className="text-secondary"> Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get your rent agreement done in four simple steps. We handle the
              complexity so you don't have to.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-6 text-center shadow-trust hover:shadow-trust-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Step Number */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="absolute w-20 h-20 rounded-full bg-secondary/10 group-hover:scale-110 transition-transform duration-300" />
                      <div className="relative w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
