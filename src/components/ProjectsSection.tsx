import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const projects = [
  {
    title: "SIH project (AI- internship finder)",
    description: "A protoype of a website that gives proper internship and insights",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://lovable.dev/projects/a951c33d-54cf-4b60-8459-182ed42c5b61",
  },
  {
    title: "DS-Projects",
    description: "All Data Science internals (1,2) and assignment (2025) explained via video through videos",
    image: project2,
    tags: ["Internal-1", "Internal-2", "Assignment"],
    youtubeUrl: "https://www.youtube.com/@k-s-h1r",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {index === 0 ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube size={16} className="mr-2" />
                        Youtube
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
