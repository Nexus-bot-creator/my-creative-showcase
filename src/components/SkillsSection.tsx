import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Python", "MongoDB"],
  "Tools": ["Git", "Docker", "VS Code", "Vercel"],
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
