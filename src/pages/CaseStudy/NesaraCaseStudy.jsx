import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import nesaraImage from "@/assets/casestudy-project2.1.jpg";
import goalImage from "@/assets/casestudy-project2.4.jpg";
import conclusionImage from "@/assets/casestudy-project2.3.jpg";
import finalImage1 from "@/assets/casestudy-project2.2.jpg";
import finalImage2 from "@/assets/casestudy-project2.5.jpg";
import finalImage3 from "@/assets/casestudy-project2.6.jpg";
import digitalPrototypeImage1 from "@/assets/casestudy-project2.7.png";
import digitalPrototypeImage2 from "@/assets/casestudy-project2.8.png";
import paperWireframe1 from "@/assets/casestudy-project2.9.jpg";
import paperWireframe2 from "@/assets/casestudy-project2.10.jpg";
import paperWireframe3 from "@/assets/casestudy-project2.11.jpg";
import paperWireframe4 from "@/assets/casestudy-project2.12.jpg";
import AnimatedCard from "@/components/AnimatedCard";

const NesaraCaseStudy = () => {
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
              <img src={nesaraImage} alt="Nesara App" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Nesara: Women Safety App</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                A responsive web and mobile application for self-defense training and emergency support.
              </p>
              <div className="text-left space-y-2 text-gray-600">
                <p><span className="font-semibold text-gray-800">Role:</span> UI/UX Designer</p>
                <p><span className="font-semibold text-gray-800">Tools Used:</span> Figma</p>
              </div>
            </div>
          </div>
        </div>

        <AnimatedCard title="Problem Statement">
          <p>
            Many women face safety threats and lack access to proper self-defense training or quick emergency help. Existing safety apps often miss combining both. There's a need for a simple, responsive platform that offers both self-defense education and instant support in emergencies.
          </p>
        </AnimatedCard>

        <AnimatedCard title="Goal">
          <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
            <li>Empowers women with structured self-defense education through video tutorials and live sessions</li>
            <li>Enables instant access to emergency support using features like SOS, GPS tracking, and emergency codes</li>
            <li>Promotes emotional well-being and safety awareness through community forums, expert support.</li>
          </ul>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard title="5 W’s – Nesara App" className="mb-0">
                <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
                    <li><span className="font-semibold">Who?</span> Women seeking safety, self-defense, and emergency support.</li>
                    <li><span className="font-semibold">What?</span> A mobile/web app offering self-defense training, SOS tools, and mental wellness.</li>
                    <li><span className="font-semibold">When?</span> During unsafe situations—travel, isolation, or unexpected danger.</li>
                    <li><span className="font-semibold">Where?</span> Usable anywhere—home, public places, transport, workplaces.</li>
                    <li><span className="font-semibold">Why?</span> To empower women with the tools and knowledge to act confidently in emergencies.</li>
                </ul>
            </AnimatedCard>
            <AnimatedCard title="Problems in Current Safety Apps" className="mb-0">
                <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
                    <li>Lack of structured self-defense learning – Most apps focus only on SOS and ignore preventive training.</li>
                    <li>Confusing or slow emergency access – During panic, multiple steps or unclear interfaces fail.</li>
                    <li>No emotional support – Mental well-being and confidence-building tools are often missing.</li>
                    <li>Poor UI/UX under pressure – Complex or cluttered layouts increase response time in emergencies.</li>
                    <li>Disjointed tools – Users must use separate apps for safety tips, emergency alerts, and community support.</li>
                </ul>
            </AnimatedCard>
        </div>

        <AnimatedCard title="Research & UX Process Overview">
          <ul className="list-disc list-inside space-y-2">
            <li>Conducted interviews and surveys with women to understand real fears, daily risks, and expectations from safety apps.</li>
            <li>Analyzed popular safety apps to identify gaps in emergency access, interface clarity, and usability.</li>
            <li>Created user personas and mapped out emotional journeys to guide design choices.</li>
            <li>Researched Indian laws on women’s safety and worked briefly as a volunteer to understand on-ground emergency response.</li>
            <li>Followed a full UX design process: empathize → define → ideate → prototype → test, ensuring the app stayed reliable under real stress.</li>
          </ul>
        </AnimatedCard>

        <div className="grid md:grid-cols-1 gap-12 mb-12">
            <AnimatedCard title="Paper Wireframes" className="h-full">
                <p>These initial sketches helped explore core layouts and user flows for Aid Point. Some early ideas were later refined or removed as stronger design solutions emerged during the digital wireframing phase.</p>
                <div className="grid md:grid-cols-4 gap-8 mt-8">
                    <img src={paperWireframe1} alt="Paper Wireframe 1" className="rounded-lg shadow-lg w-full h-auto" />
                    <img src={paperWireframe2} alt="Paper Wireframe 2" className="rounded-lg shadow-lg w-full h-auto" />
                    <img src={paperWireframe3} alt="Paper Wireframe 3" className="rounded-lg shadow-lg w-full h-auto" />
                    <img src={paperWireframe4} alt="Paper Wireframe 4" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
            </AnimatedCard>
        </div>

        <div className="grid md:grid-cols-1 gap-12 mb-12">
            <AnimatedCard title="Digital Prototypes" className="h-full">
                <p>An interactive Figma prototype showcasing user flows from onboarding to emergency features, designed for clarity, speed, and accessibility</p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <img src={digitalPrototypeImage1} alt="Digital Prototype 1" className="rounded-lg shadow-lg w-full h-auto object-contain" />
                    <img src={digitalPrototypeImage2} alt="Digital Prototype 2" className="rounded-lg shadow-lg w-full h-auto object-contain" />
                </div>
            </AnimatedCard>
        </div>

        <AnimatedCard title="Core Features (UI/UX)">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Self-Defense Learning Hub</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Structured video tutorials with progress tracking</li>
                <li>Live instructor sessions with reminders</li>
                <li>Badges and certificates for milestones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Emergency Support System</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>One-tap SOS with GPS sharing</li>
                <li>Quick dial to emergency contacts</li>
                <li>Smart emergency codes for different situations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Safety Toolkit</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Manage emergency contacts</li>
                <li>AI-powered safety chatbot</li>
                <li>Alerts, shelters, and travel safety tips</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community & Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Anonymous safety discussions</li>
                <li>Mental health check-ins and affirmations</li>
                <li>Expert help on laws and self-defense</li>
              </ul>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard title="Final Outcome">
          <p>Delivered high-fidelity web and mobile prototypes, praised for strong user empathy, clear and accessible UI, and culturally sensitive design. Mentors recognized it as a high-impact safety solution, now under consideration for a real-world pilot with a safety NGO.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <img src={goalImage} alt="Nesara Goal" className="rounded-lg shadow-lg w-full h-auto" />
            <img src={finalImage1} alt="Final Design 1" className="rounded-lg shadow-lg w-full h-auto" />
            <img src={finalImage2} alt="Final Design 2" className="rounded-lg shadow-lg w-full h-auto" />
            <img src={finalImage3} alt="Final Design 3" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </AnimatedCard>

        <div className="bg-white p-6 md:p-12 rounded-xl shadow-2xl mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 text-center">Conclusion</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={conclusionImage} alt="Nesara Conclusion" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-700">
                Nesara represents a mission to empower women through thoughtful design. With its dual approach of preventive self-defense training and real-time emergency support, it creates a digital environment where users feel in control, safe, and supported.
              </p>
              <p className="text-base md:text-lg text-gray-700 mt-4">
                By using accessible, responsive, and emotionally intuitive design, this project bridges the gap between fear and confidence. It demonstrates how UI/UX can make a meaningful difference—not just on screen, but in people’s real lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NesaraCaseStudy;
