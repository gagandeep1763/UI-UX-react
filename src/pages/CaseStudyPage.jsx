import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AidPointCaseStudy from "./CaseStudy/AidPointCaseStudy";
import FramersCaseStudy from "./CaseStudy/FramersCaseStudy";
import SmartSonicCaseStudy from "./CaseStudy/SmartSonicCaseStudy";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CaseStudyPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [containerRef, isContainerVisible] = useScrollAnimation({ threshold: 0.1 });

  if (!project) {
    return <div>Project not found</div>;
  }

  if (project.id === "aidpoint") {
    return <AidPointCaseStudy />;
  }

  if (project.id === "framers-watch") {
    return <FramersCaseStudy />;
  }

  if (project.id === "smart-sonic") {
    return <SmartSonicCaseStudy />;
  }

  return (
    <div
      ref={containerRef}
      className={`container mx-auto px-4 py-8 mt-16 transition-all duration-1000 ${isContainerVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className={`transition-all duration-1000 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      </div>
      <div
        className={`transition-all duration-1000 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default CaseStudyPage;
