import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Palette, Figma, Github, Linkedin, ArrowRight } from "lucide-react";
import ScrollDownButton from "@/components/ScrollDownButton";
=======
import { ArrowDown, Mail, User, FolderOpen, Palette, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section 
<<<<<<< HEAD
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
=======
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 255, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto pt-20 md:pt-24">
          {/* Spacer for better positioning */}
          <div className="h-8 md:h-12"></div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Gagandeep D
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl text-muted-foreground mb-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                UI/UX Designer
              </h2>
              
              {/* Description */}
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                Creating simple, intuitive, and meaningful digital experiences
              </p>
              
              {/* Specializations */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                {[
                  "Web & Mobile UI Design",
                  "UX Research & Wireframing", 
                  "Prototyping (Figma)",
                  "Design Systems"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground border border-border/50 hover:bg-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => onNavigate('about')}
                  className="min-w-[140px]"
                >
                  <User className="mr-2 h-4 w-4" />
                  About Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('projects')}
                  className="min-w-[140px] bg-white/80 backdrop-blur-sm hover:bg-white/90"
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  My Projects
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="min-w-[140px] bg-white/60 backdrop-blur-sm hover:bg-white/80"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="text-center order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="relative inline-block">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 scale-110"></div>
                
                {/* Main image container */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/4a8f6ec5-a392-40ef-9670-2629ea9e321d.png"
                    alt="Gagandeep D - UI/UX Designer"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/50 shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary to-accent opacity-30"></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                    <Palette className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="text-center mt-12 lg:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
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
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownButton onNavigate={onNavigate} sectionId="projects" />
      </div>
=======
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
    </section>
  );
};

<<<<<<< HEAD
export default HeroSection;
=======
export default HeroSection;
>>>>>>> bf38bb06c447e39031777e4e22ce82011f97f74b
