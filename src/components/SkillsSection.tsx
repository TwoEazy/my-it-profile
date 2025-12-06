const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security",
      skills: ["Penetration Testing", "Forensic Analysis", "OSINT", "Security Monitoring", "Cyber Defense", "WAFs"]
    },
    {
      title: "Languages",
      skills: ["C#", "Java", "PHP", "JavaScript", "SQL", "Kotlin", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      skills: ["Vue.js", ".NET", "Android SDK", "Jetpack Compose"]
    },
    {
      title: "Tools",
      skills: ["Burp Suite", "Wireshark", "Kibana", "Elasticsearch", "NGINX", "Figma", "Miro"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// TECH STACK</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="p-6 rounded-xl border-gradient card-gradient"
              >
                <h3 className="font-mono font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
