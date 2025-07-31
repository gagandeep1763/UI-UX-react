import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, Figma, Github, Linkedin, ArrowRight } from "lucide-react";
import ScrollDownButton from "@/components/ScrollDownButton";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden"
    >
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Gag's
              <Figma className="inline h-12 w-12 ml-4 text-primary" />
              <Palette className="inline h-12 w-12 ml-4 text-primary" />
              <br />
              <div className="inline-block">
                Portfolio
                <div className="flex justify-center space-x-4 mt-16">
                  <a href="https://github.com/gagandeep1763" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/gagandeep-d-06b88b297/" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce [animation-delay:0.4s]">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                  </a>
                </div>
              </div>
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              I'm Gagandeep D., a <span className="text-primary font-semibold">UI/UX designer</span> and <span className="text-accent font-semibold">technologist</span>. I design user-centric digital experiences that blend simplicity with purpose. From responsive apps to intuitive interfaces, my work focuses on solving real problems through clean, engaging, and accessible design. I believe thoughtful design can connect people, elevate products, and leave a lasting impression.
            </p>
            <Button asChild variant="gradient" size="lg" className="group">
              <Link to="/about">
                Know More 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownButton onNavigate={onNavigate} sectionId="projects" />
      </div>
    </section>
  );
};

export default HeroSection;
