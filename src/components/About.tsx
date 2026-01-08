import { Users, Award, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24hrs", label: "Quick Turnaround" },
  { icon: MapPin, value: "Mumbai", label: "Local Expertise" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in
              <span className="text-secondary"> Legal Documentation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sai Legal Services has been providing reliable and professional
              legal documentation services for over a decade, helping thousands
              of clients with their property agreements.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-trust hover:shadow-trust-xl transition-shadow duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why We're Different
              </h3>
              <div className="space-y-4">
                {[
                  "Expert legal professionals with deep knowledge of property laws",
                  "Transparent pricing with no hidden charges",
                  "Quick turnaround time - most agreements within 24 hours",
                  "Complete assistance from drafting to registration",
                  "Dedicated support for all your queries",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-trust-surface rounded-3xl p-8 md:p-10">
              <blockquote className="text-lg text-foreground italic mb-6">
                "We believe in making legal documentation accessible, affordable,
                and stress-free for everyone. Our mission is to simplify the
                complex world of property agreements."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                  SL
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sai Legal Services</p>
                  <p className="text-sm text-muted-foreground">
                    Trusted Since 2014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
