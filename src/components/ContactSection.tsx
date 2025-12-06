import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "moaazeljamous@protonmail.com",
      href: "mailto:moaazeljamous@protonmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+32 456 113 376",
      href: "tel:+32456113376"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "TwoEazy",
      href: "https://github.com/TwoEazy"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-mono text-sm">// GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Interested in collaborating on cybersecurity projects or have an opportunity to discuss? 
            Feel free to reach out!
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Brugge, Belgium</span>
          </div>

          {/* Contact links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-5 rounded-xl border-gradient card-gradient hover:glow transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-mono"
            asChild
          >
            <a href="mailto:moaazeljamous@protonmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
