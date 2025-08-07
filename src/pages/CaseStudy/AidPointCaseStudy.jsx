import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aidpointImage from "@/assets/project-aidpoint.jpg";
import caseStudyImage1 from "@/assets/casestudy-project1.1.jpg";
import caseStudyImage2 from "@/assets/casestudy-project1.2.jpg";
import caseStudyImage3 from "@/assets/casestudy-project1.3.jpg";
import caseStudyImage4 from "@/assets/casestudy-project1.4.jpg";
import caseStudyImage5 from "@/assets/casestudy-project1.5.png";
import AnimatedCard from "@/components/AnimatedCard";

const AidPointCaseStudy = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`bg-white p-8 rounded-xl shadow-2xl mb-16 transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={aidpointImage} alt="Aid Point App" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AID POINT</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                All-in-one mobile app for first aid education and emergency assistance.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Category:</span> HealthTech | First Aid | Emergency UX
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Project Focus:</span> UX Research, UI/UX Design
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Tools Used:</span> Figma | UX Research | Wireframes
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Timeline:</span> 1 Week
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Key Features:</span> Responsive Design | Emergency Contact | Emergency Tools
              </p>
            </div>
          </div>
        </div>

        <AnimatedCard title="Problem Statement">
          <p>
            Many individuals today lack access to proper first aid education, which leaves them unprepared and prone to panic during emergencies. This often stems from the absence of a centralized, reliable, and easy-to-understand resource that can guide them in critical moments. Users frequently struggle to find trustworthy information on how to respond to medical emergencies or to connect quickly with the appropriate emergency services. This gap can lead to delays in providing essential care, putting lives at risk.
          </p>
        </AnimatedCard>

        <AnimatedCard title="Goal">
          <p className="mb-2">
            To design a mobile application that:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Educates users about first aid using case studies and quizzes</li>
            <li>Provides quick access to emergency services: Doctor, Ambulance, and Pharmacy</li>
            <li>Offers additional emergency communication options like chat, call, chatbot, and uses Code Purple and Code Blue for rapid response</li>
          </ul>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedCard title="Pain Points" className="mb-0">
            <ul className="list-disc list-inside space-y-1">
              <li>Inability to recall first aid steps in stressful moments</li>
              <li>Lack of awareness about whom to contact</li>
              <li>Frustration from navigating multiple apps in emergencies</li>
            </ul>
          </AnimatedCard>
          <AnimatedCard title="Target Users" className="mb-0">
            <ul className="list-disc list-inside space-y-1">
              <li>Students, parents, teachers, and the general public</li>
              <li>Especially people in areas with limited first responder access</li>
            </ul>
          </AnimatedCard>
        </div>

        <AnimatedCard title="Research Approach (UI/UX)">
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>User Interviews:</strong> Interacted with users from various backgrounds to understand their experiences, challenges, and emotions during medical emergencies.</li>
            <li><strong>Surveys:</strong> Conducted surveys to assess general awareness of first aid and the accessibility of emergency resources.</li>
            <li><strong>Competitive Analysis:</strong> Evaluated current first aid apps and platforms to identify usability gaps, missing features, and design shortcomings.</li>
            <li><strong>Persona Development:</strong> Built user personas to represent target users and align design decisions with real-world needs and behavior patterns.</li>
          </ul>
            <hr className="my-4" />
            <h2 className="text-2xl font-bold mb-3">UX Design Process</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Empathize</strong> – Gathered insights from research to understand user needs, fears, and priorities.</li>
                <li><strong>Define</strong> – Clearly outlined the main problems: lack of first aid knowledge, confusion in emergencies, and difficulty reaching help.</li>
                <li><strong>Ideate</strong> – Brainstormed multiple solutions, sketched wireframes, and shortlisted features that directly solve user problems.</li>
                <li><strong>Prototype</strong> – Designed low-fidelity wireframes and digital prototypes with a focus on simplicity, clarity, and quick access in urgent scenarios.</li>
                <li><strong>Test</strong> – Shared prototypes for feedback, analyzed user responses, and improved the design for better usability and emergency readiness.</li>
            </ul>
        </AnimatedCard>
        <AnimatedCard title="Paper Wireframes">
          <p className="mb-4">
            These initial sketches helped explore core layouts and user flows for Aid Point. Some early ideas were later refined or removed as stronger design solutions emerged during the digital wireframing phase.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
                <img src={caseStudyImage3} alt="Paper Wireframe 1" className="rounded-lg shadow-md w-full h-auto object-contain" />
            </div>
            <div className="md:w-1/3">
                <img src={caseStudyImage4} alt="Paper Wireframe 2" className="rounded-lg shadow-md w-full h-auto object-contain" />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard title="Digital Prototype">
          <p className="mb-4">
            An interactive Figma prototype showcasing user flows from onboarding to emergency features, designed for clarity, speed, and accessibility.
          </p>
          <div className="flex items-center justify-center">
            <img src={caseStudyImage5} alt="Digital Prototype" className="rounded-lg shadow-md" />
          </div>
        </AnimatedCard>

        <AnimatedCard title="Core App Features (UI Flow)">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Learn First Aid</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Case Study Modules</li>
                <li>Interactive Quizzes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Emergency Section</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Contact Doctor</li>
                <li>Call Ambulance</li>
                <li>Locate Pharmacy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">More Options in Emergency</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Chat Support</li>
                <li>Direct Call</li>
                <li>Chatbot Assistance</li>
                <li>Code Purple (Psychiatric Emergency)</li>
                <li>Code Blue (Medical Emergency)</li>
              </ul>
            </div>
          </div>
        </AnimatedCard>

        <div className="bg-white p-6 md:p-12 rounded-xl shadow-2xl mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={caseStudyImage2} alt="Conclusion" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-base md:text-lg text-gray-700">
                Aid Point simplifies first aid education and emergency response through a user-centered design. With a streamlined UX, clear layout, and accessible visuals, the app ensures users can learn and act without confusion—even in high-stress situations. By combining interactive learning with emergency tools like chat, call, chatbot, and coded alerts, the app empowers quick, confident action. This project highlights the power of UX in designing fast, intuitive, and life-saving solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AidPointCaseStudy;
