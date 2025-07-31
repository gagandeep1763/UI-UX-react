import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Lightbulb, 
  Heart, 
  TrendingUp,
  Smartphone,
  Globe,
  Palette,
  Users
} from "lucide-react";
<<<<<<< HEAD
import ScrollDownButton from "./ScrollDownButton";

const AboutSection = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const experiences = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Healthcare Apps",
      description: "Designed user-friendly medical interfaces with clear navigation."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Educational Platforms", 
      description: "Built clean, engaging layouts for online learning."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Portfolio Redesigns",
      description: "Revamped personal branding with modern, responsive designs."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Smartwatch UIs",
      description: "Created minimal, intuitive interfaces for wearable devices."
=======

const AboutSection = () => {
  const experiences = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Healthcare apps",
      description: "Designing intuitive medical interfaces"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "E-commerce websites", 
      description: "Creating seamless shopping experiences"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Blockchain platforms",
      description: "Simplifying complex financial interfaces"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Portfolio redesigns",
      description: "Crafting personal brand experiences"
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
    }
  ];

  const principles = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Great design solves real problems and enhances usability"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "User-Centered",
      description: "Every decision is made with the user's needs in mind"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Trust Building",
      description: "Design that builds confidence and trust with users"
    }
  ];

  return (
<<<<<<< HEAD
    <section id="about" className="py-10 bg-gradient-to-b from-background to-secondary/30">
=======
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
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
<<<<<<< HEAD
                  Hi, I'm <span className="text-primary font-bold">Gagandeep D.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  I am a passionate UI/UX designer dedicated to crafting clean and intuitive digital experiences.
                  <br />
                  I transform ideas into user-friendly designs that solve real-world problems.
                  <br />
                  I am committed to continuous growth and delivering exceptional results.
=======
                  Hi! I'm <span className="text-primary font-bold">Gagandeep D</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A dedicated UI/UX Designer based in <Badge variant="outline" className="mx-1">Bangalore</Badge>
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  I transform ideas into smooth, user-centered digital products that make a difference in people's lives.
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Design Principles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              My Design Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {principle.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{principle.title}</h4>
<<<<<<< HEAD
                    <p className="text-sm text-muted-foreground text-justify">{principle.description}</p>
=======
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
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
<<<<<<< HEAD
                <Card key={index} className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
=======
                <Card key={index} className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-foreground">{exp.title}</h4>
<<<<<<< HEAD
                        <p className="text-sm text-muted-foreground text-justify">{exp.description}</p>
=======
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning */}
<<<<<<< HEAD
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/20">
=======
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
            <CardContent className="p-8 text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                🌱 Always Learning
              </h3>
<<<<<<< HEAD
              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
=======
              <p className="text-muted-foreground leading-relaxed mb-6">
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
                With hands-on project experience, internships, and constant curiosity, 
                I stay updated with the latest design trends and user experience best practices.
              </p>
              <p className="text-lg font-medium text-foreground">
                Let's collaborate and create something impactful.
              </p>
            </CardContent>
          </Card>
<<<<<<< HEAD
          <ScrollDownButton onNavigate={onNavigate} sectionId="projects" />
=======
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default AboutSection;
=======
export default AboutSection;
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
