import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, User, FolderOpen } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 255, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto pt-20 md:pt-24">
          {/* Spacer for better positioning */}
          <div className="h-16 md:h-20"></div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Gagandeep D
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            UI/UX Designer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Creating simple, intuitive, and meaningful digital experiences
          </p>
          
          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            {[
              "Web & Mobile UI Design",
              "UX Research & Wireframing", 
              "Prototyping (Figma)",
              "Design Systems"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-foreground border border-border/50 hover:bg-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => onNavigate('about')}
              className="min-w-[160px]"
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => onNavigate('projects')}
              className="min-w-[160px] bg-white/80 backdrop-blur-sm hover:bg-white/90"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              My Projects
            </Button>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => onNavigate('contact')}
              className="min-w-[160px] bg-white/60 backdrop-blur-sm hover:bg-white/80"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <p className="text-sm text-muted-foreground mb-4">
              👇 Scroll down to view selected projects or learn more about me.
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('about')}
              className="animate-bounce"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;