import { Shield, Code, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Penetration testing, forensics, and network security"
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack web and mobile application development"
    },
    {
      icon: Globe,
      title: "Trilingual",
      description: "English (Native), Arabic (Native), French (Advanced)"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <span className="text-primary font-mono text-sm">// ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Building <span className="text-gradient">Secure</span> Solutions
            </h2>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Motivated Cybersecurity student at HOWEST Hogeschool West-Vlaanderen with extensive 
                technical skills including penetration testing, computer forensics, and network security.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trilingual professional with hands-on experience in IT support, hardware troubleshooting, 
                and software development. Currently pursuing a Bachelor of Science in Cybersecurity with 
                an expected graduation in 2026.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seeking to leverage academic knowledge and practical experience in challenging 
                cybersecurity roles upon graduation.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl border-gradient card-gradient hover:glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 p-6 rounded-xl border-gradient card-gradient">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="font-mono font-semibold text-lg text-foreground">
                  Bachelor of Science in Cybersecurity
                </h3>
                <p className="text-primary font-medium">HOWEST Hogeschool West-Vlaanderen</p>
                <p className="text-muted-foreground text-sm mt-1">Expected Graduation: 2026 • Brugge, Belgium</p>
                <p className="text-muted-foreground text-sm mt-3">
                  <span className="text-foreground">Relevant Coursework:</span> Network Security, Penetration Testing, 
                  Digital Forensics, Server Administration, Web and Software Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
