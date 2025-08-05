import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectCard = ({ project, fullDetails = false, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${fullDetails ? 'h-64' : 'h-48'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary">
            {project.category}
          </Badge>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
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

          {fullDetails ? (
            <div className="space-y-3 mt-auto">
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
          ) : (
            <div className="mb-4 mt-auto">
              <p className="text-xs font-semibold text-foreground mb-1">Timeline:</p>
              <Badge variant="outline" className="text-xs">
                {project.timeline}
              </Badge>
            </div>
          )}

          <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
            <Button size="sm" className="w-full" asChild>
              <Link to={`/project/${project.id}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Case Study
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
