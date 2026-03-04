import { useState } from "react";
import { Users, Shield, Mail, AlertTriangle, CheckCircle, Brain, Code, Cpu, Sparkles, Layers, Zap, Cloud, Rocket, Network, Globe, Server, ShieldCheck, X } from "lucide-react";
import ctiPresentation from "@/assets/cti-presentation.jpeg";
import ctiSpeakers from "@/assets/cti-speakers.jpeg";
import ml6Huggingface from "@/assets/ml6-huggingface.jpg";
import ipv6Presentation from "@/assets/photo_2026-03-04_01-02-01.jpg";
import ipv6EuStatus from "@/assets/photo_2026-03-04_01-02-01 (2).jpg";
import ipv6Transition from "@/assets/photo_2026-03-04_01-02-01 (3).jpg";
import ipv6Security from "@/assets/photo_2026-03-04_01-02-01 (4).jpg";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-background/80 border border-border hover:bg-muted transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <div
        className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-xl border border-border shadow-2xl"
        />
        <p className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent text-center text-sm font-medium rounded-b-xl">
          {alt}
        </p>
      </div>
    </div>
  );
};

interface ClickableImageProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  aspectSquare?: boolean;
}

const ClickableImage = ({ src, alt, caption, className = "", aspectSquare = false }: ClickableImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-xl border border-border group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${aspectSquare ? 'object-cover aspect-square' : 'object-contain'} transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-sm text-foreground font-medium">{caption}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            Click to enlarge
          </span>
        </div>
      </div>
      <ImageModal src={src} alt={alt} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

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
                  <ClickableImage
                    src={ctiPresentation}
                    alt="CTI: From threats to intelligence presentation"
                    caption="Presentation Slide"
                  />
                  <ClickableImage
                    src={ctiSpeakers}
                    alt="With speakers Niels Desloover and Sandro Manzo"
                    caption="With Niels Desloover & Sandro Manzo"
                  />
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
                <ClickableImage
                  src={ml6Huggingface}
                  alt="Niels Rogge presenting at ML6 & Hugging Face session"
                  caption="Niels Rogge - ML6 & Hugging Face"
                />
              </div>
            </div>
          </div>
        </div>

        {/* .NET 10 Demystified Session */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mt-8">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                .NET
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                Web Development
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">.NET 10 Demystified</h3>
            <p className="text-muted-foreground">
              Presented by <span className="text-foreground font-medium">Kevin De Rudder</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">.NET Expert @ Howest</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Key Takeaways
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Performance & Unification */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Performance & Unification</h5>
                      <p className="text-sm text-muted-foreground">
                        .NET 10 continues Microsoft's mission to unify the development platform with significant performance gains and developer productivity features.
                      </p>
                    </div>
                  </div>
                </div>

                {/* C# Language Improvements */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">C# Language Updates</h5>
                      <p className="text-sm text-muted-foreground">
                        Latest language improvements in C#, runtime and library updates, along with enhanced tooling and cross-platform capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cloud-Native */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Cloud-Native Enhancements</h5>
                      <p className="text-sm text-muted-foreground">
                        New cloud-native capabilities for enterprise applications, microservices architecture, and AI integrations in .NET.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Practical Insights */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Practical Application</h5>
                      <p className="text-sm text-muted-foreground">
                        Actionable insights on how .NET 10 fits into current projects and opens new possibilities for modern web development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Overall Impression</h5>
                    <p className="text-sm text-muted-foreground">
                      Kevin's session effectively separated hype from essentials, providing a clear roadmap for adopting .NET 10. His experience as both a developer and conference organizer (Techorama) brought practical, real-world perspectives to the latest .NET innovations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IPv6 Transition Session */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mt-8">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                Networking
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                Infrastructure
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                Security
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Transitioning to IPv6</h3>
            <p className="text-muted-foreground">
              Presented by <span className="text-foreground font-medium">Nico Declerck</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Network Admin, Linux Sysadmin & Cisco Instructor @ Howest</p>
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

                {/* Why IPv6 */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Why IPv6 Now?</h5>
                      <p className="text-sm text-muted-foreground">
                        IPv4 was born in 1981 enabling end-to-end worldwide communication. The transition to IPv6 is inevitable and can no longer be postponed as ISPs and large organizations are already adopting it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EU Status */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Network className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">EU IPv6 Adoption Status</h5>
                      <p className="text-sm text-muted-foreground">
                        Belgium leads in EU IPv6 adoption with 57.52% end-user penetration. The session covered detailed metrics from Google, Apnic, Facebook, Akamai, and Cloudflare measurements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transition Strategies */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Server className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Dual Stack in Practice</h5>
                      <p className="text-sm text-muted-foreground">
                        Learn to deploy IPv6 in your infrastructure today with real-world configurations, routing, firewalls, and security considerations. "Dual Stack where you can, tunnel where you must."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Considerations */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Path to IPv6 Only</h5>
                      <p className="text-sm text-muted-foreground">
                        Both IPv6 and legacy IP have vulnerabilities. Implementing dual stack creates dual attack surface. The end goal is IPv6 only – the less IPv4 you run, the more secure the network gets.
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
                        Nico's practical approach to IPv6 transition was eye-opening, covering everything from the history of IPv4 to modern dual-stack strategies. His experience as a Cisco Instructor and researcher brought deep technical insights with a security-by-design focus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Photos */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-primary mb-4">Event Photos</h4>
                <div className="grid grid-cols-2 gap-4">
                  <ClickableImage
                    src={ipv6Presentation}
                    alt="Nico Declerck presenting IPv4 history"
                    caption="IPv4 History"
                    aspectSquare
                  />
                  <ClickableImage
                    src={ipv6EuStatus}
                    alt="EU IPv6 adoption status slide"
                    caption="EU Status Update"
                    aspectSquare
                  />
                  <ClickableImage
                    src={ipv6Transition}
                    alt="IPv4 to IPv6 transition mechanisms"
                    caption="Transition Mechanisms"
                    aspectSquare
                  />
                  <ClickableImage
                    src={ipv6Security}
                    alt="Path to IPv6 only security considerations"
                    caption="Security Path"
                    aspectSquare
                  />
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
