import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-block mb-8 px-4 py-2 border-gradient rounded-lg bg-card/50 backdrop-blur-sm">
            <code className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">$</span> whoami
            </code>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">MOAAZ</span>{" "}
            <span className="text-gradient glow-text">ELJAMOUS</span>
          </h1>

          {/* Title with typing effect */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-mono text-muted-foreground typing-cursor">
              Cybersecurity Student & IT Entrepreneur
            </h2>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Brugge, Belgium</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-mono"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-mono"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/TwoEazy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:glow transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:glow transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:moaazeljamous@protonmail.com"
              className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:glow transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </button>
    </section>
  );
};

export default HeroSection;
