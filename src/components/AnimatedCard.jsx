import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedCard = ({ title, children, className }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-xl shadow-lg mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
};

export default AnimatedCard;
