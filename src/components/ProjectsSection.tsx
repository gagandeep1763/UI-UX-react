import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Figma } from "lucide-react";
import ScrollDownButton from "@/components/ScrollDownButton"; // <-- Keep this if used later
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Project Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project is a case study solving a real-world UI/UX problem with clear solutions shown through user flow, wireframes, and final designs.
            </p>
          </div>

          {/* Upper Row - 2 Projects with Full Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Tools Used:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Timeline:</p>
                      <Badge variant="outline" className="text-xs">
                        {project.timeline}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lower Row - 3 Projects with Basic Details Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.slice(2).map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Timeline:</p>
                    <Badge variant="outline" className="text-xs">
                      {project.timeline}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
