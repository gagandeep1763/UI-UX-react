import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ScrollDownButton from "./ScrollDownButton";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-200 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-yellow-200 rounded-full animate-blob"></div>
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto pt-20 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GAGAN'S
                <br />
                PORTFOLIO
              </h1>
            </div>

            {/* Right Content */}
            <div className="text-left animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
                    I'm Gagandeep D., a <span className="text-pink-500 font-semibold">UI/UX designer</span> and <span className="text-purple-500 font-semibold">technologist</span> passionate about creating intuitive, user-centered digital experiences. I design clean interfaces, thoughtful user flows, and responsive layouts that not only solve real-world problems but also build trust and leave a lasting impression. I believe great design is functional, engaging, and impactful.
                  </p>
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="font-semibold group"
                    >
                      Know more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ScrollDownButton onNavigate={onNavigate} sectionId="projects" />
      </div>
    </section>
  );
};

export default HeroSection;
