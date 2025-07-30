import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Figma } from "lucide-react";
import smartsonicImage from "@/assets/project-smartsonic.jpg";
import rcbImage from "@/assets/project-rcb.jpg";
import eventImage from "@/assets/project-event.jpg";
import gopravaasaImage from "@/assets/project-gopravasa.jpg";
import uberImage from "@/assets/project-uber.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: "smartsonic",
      title: "SmartSonic Electric Toothbrush",
      subtitle: "Website Design",
      description: "Modern, eco-friendly e-commerce site promoting bamboo electric toothbrushes with recycling program integration.",
      image: smartsonicImage,
      category: "E-commerce",
      tools: ["Figma", "UX Research", "Wireframes"],
      timeline: "1 Week",
      features: ["Responsive Design", "Eco-friendly Branding", "Checkout Flow"]
    },
    {
      id: "rcb",
      title: "RCB Fan Site",
      subtitle: "IPL Team Redesign",
      description: "Complete redesign of Royal Challengers Bangalore fan website with modern UI and enhanced user engagement.",
      image: rcbImage,
      category: "Sports",
      tools: ["Figma", "Prototyping", "User Testing"],
      timeline: "2 Weeks",
      features: ["Team Branding", "Match Updates", "Fan Community"]
    },
    {
      id: "event",
      title: "Event Booking Website",
      subtitle: "Ticket Platform",
      description: "Streamlined event discovery and booking platform with intuitive calendar integration and payment flow.",
      image: eventImage,
      category: "Entertainment",
      tools: ["Figma", "User Journey", "Wireframes"],
      timeline: "3 Weeks",
      features: ["Calendar Integration", "Payment Flow", "Event Discovery"]
    },
    {
      id: "gopravasa",
      title: "Gopravasa",
      subtitle: "Ecommerce Web Design",
      description: "Travel and tourism e-commerce platform focusing on seamless booking experience and destination exploration.",
      image: gopravaasaImage,
      category: "Travel",
      tools: ["Figma", "User Research", "Prototyping"],
      timeline: "2 Weeks",
      features: ["Booking System", "Destination Guides", "Travel Planning"]
    },
    {
      id: "uber",
      title: "Uber Website Redesign",
      subtitle: "UI/UX in Figma",
      description: "Modern redesign of Uber's web platform with improved navigation and enhanced user experience.",
      image: uberImage,
      category: "Transportation",
      tools: ["Figma", "Design System", "Prototyping"],
      timeline: "1 Week",
      features: ["Navigation Redesign", "Booking Flow", "Mobile Responsive"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Selected Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the UI/UX projects I've designed. Each includes user flow, wireframes, 
              final UI screens, and reasoning behind design decisions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 mb-12">
            {/* First row - 2 featured projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge 
                      className="absolute top-3 left-3 bg-white/90 text-foreground border-0"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 md:p-8">
                    {/* Project Info */}
                    <div className="mb-6">
                      <h3 className="font-bold text-xl md:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-3">{project.subtitle}</p>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools & Timeline */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        📅 Timeline: {project.timeline}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Figma className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Second row - 3 projects in smaller cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(2).map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge 
                      className="absolute top-3 left-3 bg-white/90 text-foreground border-0"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Info */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
                      <p className="text-sm text-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools & Timeline */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tools.slice(0, 2).map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                        {project.tools.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tools.length - 2}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        📅 {project.timeline}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Figma className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                🔍 Detailed Case Studies
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each project includes comprehensive user flow analysis, wireframes, final UI screens, 
                and detailed reasoning behind design decisions. Click on any project to explore the full process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View All on Figma
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Behance Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;