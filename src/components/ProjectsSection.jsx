import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Project Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project is a case study solving a real-world UI/UX problem with clear solutions shown through user flow, wireframes, and final designs.
            </p>
          </div>

          {/* Upper Row - 2 Projects with Full Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.id} project={project} fullDetails delay={index * 200} />
            ))}
          </div>

          {/* Lower Row - 3 Projects with Basic Details Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.slice(2).map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
