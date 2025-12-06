import { ExternalLink, Github, Shield, Activity, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Shield,
      title: "Mobile Security App",
      description: "A feature-rich, security-focused Android note-taking application built with modern Android development practices. Implements encrypted note storage, user authentication, and advanced security monitoring to demonstrate cybersecurity principles in mobile application development.",
      tech: ["Kotlin", "Jetpack Compose", "Android SDK", "SQLite"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Activity,
      title: "HaraHealth",
      description: "A full stack health tracking and medicine delivery web application that tracks your health vitals and provides drone delivered medicine to your location as soon as possible.",
      tech: ["Vue.js", "Java", "SQLite"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Bug,
      title: "Web Pentesting Honeypot",
      description: "Designed and implemented a comprehensive honeypot environment to analyze attacker behaviors and techniques. Features a dual-system architecture with a secure admin panel and an intentionally vulnerable pentesting platform with IDOR, SQL injection, XSS, and CSRF challenges.",
      tech: ["PHP", "MariaDB", "Elasticsearch", "Kibana", "NGINX"],
      color: "from-red-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>

          {/* Projects grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group p-6 md:p-8 rounded-xl border-gradient card-gradient hover:glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Explore more projects on GitHub</p>
            <Button 
              size="lg"
              className="bg-card hover:bg-card/80 border border-primary/50 text-foreground font-mono glow"
              asChild
            >
              <a href="https://github.com/TwoEazy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
