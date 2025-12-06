import { Calendar, Trophy, Users, Code, MapPin, Sparkles } from "lucide-react";
import hackathonProject from "@/assets/hackathon-project.jpeg";
import hackathonEvent from "@/assets/hackathon-event.jpeg";

const HackathonsSection = () => {
  const hackathons = [
    {
      name: "Hack The Future",
      date: "December 2024",
      location: "Belgium",
      challenge: "Leviathan's Ledger",
      organizer: "OnCore",
      placement: "4th Place",
      score: "77%",
      teammate: "Sara-Amelia Bilic",
      description: "Worked with 19th century sailing ledgers digitized into PDFs with completely unstructured data—coordinates, dates, weather notes, and handwritten remarks all mixed together.",
      techStack: ["Vue.js", "Mapbox", "GPT-5 Mini", "GeoJSON"],
      achievements: [
        "Processed unstructured historical documents using GPT-5 Mini",
        "Converted extracted data into structured GeoJSON format",
        "Built interactive 3D globe dashboard with ship routes",
        "Visualized historical metadata alongside voyage routes"
      ],
      isFirst: true
    }
  ];

  return (
    <section id="hackathons" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Events & Competitions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hackathons & <span className="text-primary">Conferences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pushing boundaries through competitive coding and collaborative innovation
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* First Hackathon Badge */}
              {hackathon.isFirst && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-mono text-primary">First Hackathon!</span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {hackathon.name}
                    </h3>
                    <p className="text-primary font-mono text-sm mb-3">
                      Challenge: {hackathon.challenge}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {hackathon.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {hackathon.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Code className="w-4 h-4" />
                        {hackathon.organizer}
                      </span>
                    </div>
                  </div>

                  {/* Placement Badge */}
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 border border-primary/20 rounded-xl min-w-[100px]">
                    <Trophy className="w-6 h-6 text-primary mb-1" />
                    <span className="font-bold text-lg text-foreground">{hackathon.placement}</span>
                    <span className="text-xs text-primary font-mono">{hackathon.score}</span>
                  </div>
                </div>

                {/* Teammate */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Teamed with:</span>
                  <span className="text-foreground font-medium">{hackathon.teammate}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-mono text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">Key Achievements</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {hackathon.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Event Photos */}
                <div>
                  <h4 className="text-sm font-mono text-primary mb-3">Event Photos</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl border border-border group/img">
                      <img 
                        src={hackathonEvent} 
                        alt="At Hack The Future event" 
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-sm text-foreground font-medium">Hack The Future 2024</span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-border group/img">
                      <img 
                        src={hackathonProject} 
                        alt="Leviathan's Ledger project dashboard" 
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-sm text-foreground font-medium">Our Project Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Future Events Teaser */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">→</span> Excited to participate in more hackathons and continue growing through these experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;