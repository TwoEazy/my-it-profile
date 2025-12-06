import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import iforceLogo from "@/assets/iforce-logo.png";

const InternshipSection = () => {
  return (
    <section id="internship" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-mono">
            {"<"}Upcoming Internship{"/>"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white rounded-lg">
              <img src={iforceLogo} alt="I-FORCE Logo" className="w-24 h-auto" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded">
                  Upcoming
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Digital Forensics & Incident Response Intern
              </h3>
              <a 
                href="https://i-force.be/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold text-lg inline-flex items-center gap-1 transition-colors"
              >
                I-FORCE
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Independent Investigations with IT expertise. Focused on <span className="text-foreground font-medium">Fraud, Fact Finding & Forensics</span>. 
              Advisory services towards IT Security & Integrity.
            </p>
            <p className="leading-relaxed">
              Since their founding in 2003, I-FORCE has built a solid reputation as an independent forensic audit firm 
              specializing in fraud investigation. A growing client base that consistently calls upon their expertise, 
              both in the private sector, government, and international institutions.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <Button 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-mono gap-2"
              asChild
            >
              <a href="https://i-force.be/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Visit I-FORCE
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
