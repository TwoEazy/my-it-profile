import { Users, Shield, Mail, AlertTriangle, CheckCircle, Brain, Code, Cpu, Sparkles } from "lucide-react";
import ctiPresentation from "@/assets/cti-presentation.jpeg";
import ctiSpeakers from "@/assets/cti-speakers.jpeg";
import ml6Huggingface from "@/assets/ml6-huggingface.jpg";

const TechMeetSection = () => {
  return (
    <section id="techmeet" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Tech & Meet</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sessions & <span className="text-primary">Networking</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insightful tech sessions and professional networking events I've attended
          </p>
        </div>

        {/* CTI Session */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                Cybersecurity
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                Threat Intelligence
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">CTI: From Threats to Intelligence</h3>
            <p className="text-muted-foreground">
              Presented by <span className="text-foreground font-medium">Niels Desloover</span> and <span className="text-foreground font-medium">Sandro Manzo</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Centre for Cybersecurity Belgium</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Key Takeaways */}
              <div className="space-y-6">
                <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Key Takeaways
                </h4>
                
                {/* BAPS */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Belgian Anti-Phishing Shield (BAPS)</h5>
                      <p className="text-sm text-muted-foreground">
                        A system that warns internet users when browsing fraudulent or malicious websites by redirecting them to a warning page. This action is taken at the Belgian DNS level.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BeFish */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">BeFish Service</h5>
                      <p className="text-sm text-muted-foreground">
                        Users can forward suspicious phishing emails to <span className="font-mono text-primary">suspicious@safeweb.be</span> where they are analyzed and blocked to protect less attentive users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Overall Impression</h5>
                      <p className="text-sm text-muted-foreground">
                        An informative session showing how collaborative threat intelligence and proactive defenses are strengthening Belgium's cybersecurity landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Photos */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-primary mb-4">Event Photos</h4>
                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-xl border border-border group">
                    <img 
                      src={ctiPresentation} 
                      alt="CTI: From threats to intelligence presentation" 
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-sm text-foreground font-medium">Presentation Slide</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl border border-border group">
                    <img 
                      src={ctiSpeakers} 
                      alt="With speakers Niels Desloover and Sandro Manzo" 
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-sm text-foreground font-medium">With Niels Desloover & Sandro Manzo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ML6 & Hugging Face Session */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mt-8">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                Machine Learning
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                Open-Source AI
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">ML6 on Open-Source AI & Hugging Face</h3>
            <p className="text-muted-foreground">
              Presented by <span className="text-foreground font-medium">Niels Rogge</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">ML6 & Hugging Face @ Howest</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Key Takeaways */}
              <div className="space-y-6">
                <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Key Takeaways
                </h4>
                
                {/* Open-Source AI Types */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Open-Source AI Landscape</h5>
                      <p className="text-sm text-muted-foreground">
                        Explored the differences between closed-source, open-weight, and fully open-source AI, and how these approaches influence security, control, and customization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hugging Face Ecosystem */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Hugging Face Ecosystem</h5>
                      <p className="text-sm text-muted-foreground">
                        How Hugging Face functions as a collaborative platform for AI development, similar to how GitHub transformed software engineering.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modern Tooling */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Modern AI Tooling</h5>
                      <p className="text-sm text-muted-foreground">
                        Explored tools like vLLM, SGLang, and Unsloth AI, along with strategies for hardware selection and efficient production deployment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Overall Impression</h5>
                      <p className="text-sm text-muted-foreground">
                        What stood out most was how open-source collaboration fosters accessibility, innovation, and transparency in AI. The session offered technical depth and a clear perspective on how open models are driving the next generation of intelligent systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-primary mb-4">Event Photo</h4>
                <div className="relative overflow-hidden rounded-xl border border-border group">
                  <img 
                    src={ml6Huggingface} 
                    alt="Niels Rogge presenting at ML6 & Hugging Face session" 
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm text-foreground font-medium">Niels Rogge - ML6 & Hugging Face</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMeetSection;
