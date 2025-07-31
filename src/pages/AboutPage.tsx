import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Lightbulb, 
  Heart, 
  TrendingUp,
  Smartphone,
  Globe,
  Palette,
  Users,
  FileText
} from "lucide-react";

const AboutPage = () => {
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
    <section id="about" className="py-10 bg-gradient-to-b from-background to-secondary/30">
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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left">
              <img 
                src="/lovable-uploads/4a8f6ec5-a392-40ef-9670-2629ea9e321d.png"
                alt="Gagandeep D - UI/UX Designer"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-white/50 shadow-2xl hover:scale-105 transition-transform duration-300 mx-auto"
              />
            </div>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                    Hi, I'm <span className="text-primary font-bold">Gagandeep D.</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a UI/UX designer and Computer Science student at RV Institute of Technology and Management, passionate about creating user-friendly digital experiences.
                    <br /><br />
                    With a Google UI/UX certification and hands-on work in healthcare apps, educational platforms, redesigns, responsive websites, and smartwatch UIs, I blend creativity with usability to design clean, intuitive interfaces that solve real-world problems.
                  </p>
                  <Button asChild variant="gradient" size="lg" className="mt-6">
                    <a href="#">
                      <FileText className="mr-2 h-5 w-5" />
                      View My Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

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
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
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
                <Card key={index} className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-foreground">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
