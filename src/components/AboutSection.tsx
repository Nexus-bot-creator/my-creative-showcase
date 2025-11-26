import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <img
            src="/profile copy.jpg"
            alt="Profile"
            className="mx-auto rounded-full w-32 h-32 mb-6 mt-8 object-cover"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer and designer with a love for creating innovative digital
            solutions. With years of experience in web development, I specialize in building
            responsive, user-friendly applications that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                Clean Code
              </h3>
              <p className="text-muted-foreground text-center">
                Writing maintainable, scalable code following best practices and modern standards
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                Modern Design
              </h3>
              <p className="text-muted-foreground text-center">
                Creating beautiful, intuitive interfaces that users love to interact with
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                Fast Performance
              </h3>
              <p className="text-muted-foreground text-center">
                Optimizing applications for speed and efficiency across all devices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
