import { Wrench, Cpu, Users, Package } from "lucide-react";
import upgr8Image from "@/assets/upgr8-work.jpeg";

const UPGR8Section = () => {
  const services = [
    { icon: Wrench, text: "Computer & Mobile Device Repairs" },
    { icon: Cpu, text: "Custom PC Builds" },
    { icon: Users, text: "Customer Support Systems" },
    { icon: Package, text: "Inventory & Vendor Management" }
  ];

  return (
    <section id="upgr8" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// ENTREPRENEURSHIP</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Co-Founder at <span className="text-gradient">UPGR8</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-gradient">
                <img 
                  src={upgr8Image} 
                  alt="Moaaz working at UPGR8 repair station"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <p className="font-mono text-primary text-sm">UPGR8 • Zaventem, Belgium</p>
                  <p className="text-foreground font-semibold">"Don't Wait, Upgrade"</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 mb-6">
                <span className="font-mono text-primary text-sm">CO-FOUNDER & TECHNICIAN</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Co-founded and operated a computer repair and mobile device service business. 
                Combining technical expertise with entrepreneurial vision to deliver quality 
                IT solutions to clients in Belgium.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{service.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                <p className="text-sm text-muted-foreground italic">
                  "Building custom PC systems, diagnosing complex hardware issues, and implementing 
                  efficient service tracking systems for optimal customer experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPGR8Section;
