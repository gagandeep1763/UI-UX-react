import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface ScrollDownButtonProps {
  onNavigate: (section: string) => void;
  sectionId: string;
}

const ScrollDownButton = ({ onNavigate, sectionId }: ScrollDownButtonProps) => {
  return (
    <div className="text-center mt-12 lg:mt-16">
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => onNavigate(sectionId)}
        className="animate-bounce"
      >
        <ArrowDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ScrollDownButton;
