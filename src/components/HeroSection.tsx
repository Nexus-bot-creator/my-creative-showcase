import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Creative Developer &
            <br />
            Designer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Crafting beautiful digital experiences with modern technologies
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="http://github.com/Nexus-bot-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/keshav-sharma-212918387"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:keshavsharma09538@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.youtube.com/@k-s-h1r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
