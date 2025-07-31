import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

const HomePage = () => {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection onNavigate={handleNavigate} />
      <div id="projects">
        <ProjectsSection />
      </div>
    </>
  );
};

export default HomePage;
