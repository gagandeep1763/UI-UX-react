import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Lightbulb,
  Heart,
  Smartphone,
  Globe,
  Palette,
  Users,
} from "lucide-react";
import ScrollDownButton from "./ScrollDownButton";

const AboutSection = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const experiences = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Healthcare Apps",
      description: "Designed user-friendly medical interfaces with clear navigation.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Educational Platforms",
      description: "Built clean, engaging layouts for online learning.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Portfolio Redesigns",
      description: "Revamped personal branding with modern, responsive designs.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Smartwatch UIs",
      description: "Created minimal, intuitive interfaces for wearable devices.",
    },
  ];

  const principles = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Great design solves real problems and enhances usability.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "User-Centered",
      description: "Every decision is made with the user's needs in mind.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Trust Building",
      description: "Design that builds confidence and trust with users.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          </div>

          {/* Introduction */}
          <Card className="mb-12 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                  Hi, I'm <span className="text-primary font-bold">Gagandeep D.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  I am a passionate UI/UX designer dedicated to crafting clean and intuitive digital experiences.
                  <br />
                  I transform ideas into user-friendly designs that solve real-world problems.
                  <br />
                  I am committed to continuous growth and delivering exceptional results.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Principles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              My Design Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {principle.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground text-justify">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Project Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-foreground">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground text-justify">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Always Learning */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/20">
            <CardContent className="p-8 text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">🌱 Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                With hands-on project experience, internships, and constant curiosity, I stay updated with the latest design trends and user experience best practices.
              </p>
              <p className="text-lg font-medium text-foreground">
                Let's collaborate and create something impactful.
              </p>
            </CardContent>
          </Card>

          <ScrollDownButton onNavigate={onNavigate} sectionId="projects" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
