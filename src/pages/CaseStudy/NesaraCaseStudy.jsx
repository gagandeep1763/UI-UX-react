import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import nesaraImage from "@/assets/casestudy-project2.1.jpg";
import wireframeImage from "@/assets/casestudy-project2.2.jpg";
import prototypeImage from "@/assets/casestudy-project2.3.jpg";

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
              <img src={nesaraImage} alt="Nesara App" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Nesara: Women Safety App</h1>
              <p className="text-xl text-gray-600 mb-6">
                A responsive web and mobile application for self-defense training and emergency support.
              </p>
              <div className="text-left space-y-2 text-gray-600">
                <p><span className="font-semibold text-gray-800">Role:</span> UI/UX Designer</p>
                <p><span className="font-semibold text-gray-800">Tools Used:</span> Figma</p>
              </div>
            </div>
          </div>
        </div>

        <AnimatedCard title="🎯 Goal">
          <p>
            To design a responsive web and mobile application that provides free self-defense training, offers instant emergency support, and encourages confidence and awareness through interactive learning and community support.
          </p>
        </AnimatedCard>

        <AnimatedCard title="😣 Pain Points">
          <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
            <li>Lack of access to free, quality self-defense content.</li>
            <li>Delay in accessing emergency help.</li>
            <li>Difficulty navigating multiple platforms in high-stress situations.</li>
            <li>Fear of safety when commuting or staying alone.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="🧠 Research Approach">
          <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
            <li><strong>User Interviews:</strong> Conducted interviews with women from different age groups to understand their daily safety concerns.</li>
            <li><strong>Surveys:</strong> Collected data on access to safety tools and which features they would trust.</li>
            <li><strong>Competitor Analysis:</strong> Analyzed existing apps to identify design gaps and complicated emergency access systems.</li>
            <li><strong>Persona Development:</strong> Created realistic personas reflecting the emotions, frustrations, and goals of target users.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="💡 UX Design Process">
          <p>
            The design process followed a user-centered approach to ensure the final product was intuitive, accessible, and comforting.
          </p>
          <ol className="list-decimal list-inside space-y-3 mt-4 text-lg">
            <li><strong>Empathize:</strong> Captured real-life safety experiences to understand stress factors.</li>
            <li><strong>Define:</strong> Framed core problems like lack of accessible training and ineffective emergency triggers.</li>
            <li><strong>Ideate:</strong> Brainstormed features like video tutorials, panic button, and live training alerts.</li>
            <li><strong>Prototype:</strong> Developed low-fidelity paper wireframes, followed by high-fidelity digital prototypes in Figma.</li>
            <li><strong>Test:</strong> Tested prototypes with users for accessibility, speed, and emotional comfort.</li>
          </ol>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="flex items-center justify-center">
                <img src={wireframeImage} alt="Paper Wireframes" className="rounded-lg shadow-lg w-full" />
            </div>
            <AnimatedCard title="✍️ Paper Wireframes" className="h-full">
                <p>Initial sketches focusing on:</p>
                <ul className="list-disc list-inside space-y-3 mt-4">
                    <li>Home with quick SOS</li>
                    <li>Training dashboard</li>
                    <li>Live session reminders</li>
                    <li>Emergency services card section</li>
                </ul>
            </AnimatedCard>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
            <AnimatedCard title="💻 Digital Prototypes" className="h-full">
                <p>Created responsive designs for both web and mobile using Figma. Focused on:</p>
                <ul className="list-disc list-inside space-y-3 mt-4">
                    <li>Clean UI with bold, readable text and calming color schemes.</li>
                    <li>Prominent emergency action buttons.</li>
                    <li>Personalized dashboard with upcoming sessions, tutorial progress, and emergency contact setup.</li>
                </ul>
            </AnimatedCard>
            <div className="flex items-center justify-center">
                <img src={prototypeImage} alt="Digital Prototypes" className="rounded-lg shadow-lg w-full" />
            </div>
        </div>

        <AnimatedCard title="🚀 Core Features">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Self-Defense Learning Hub</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Structured video tutorials (Beginner → Advanced)</li>
                <li>Live sessions with trainers</li>
                <li>Progress tracker and certificates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Emergency Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>One-touch SOS button with live location sharing</li>
                <li>Quick links to Police, Ambulance, and Trusted Contacts</li>
                <li>Emergency code colors (Code Red/Green)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Safety Toolkit</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Add Emergency Contacts</li>
                <li>Chat with a Safety Bot</li>
                <li>Access location-aware alerts</li>
              </ul>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard title="🧑‍💻 My Responsibilities">
          <ul className="list-disc list-inside space-y-3">
            <li>UI/UX Design in Figma (all screens: mobile & web)</li>
            <li>Created digital prototypes, style guides, and interaction logic</li>
            <li>Developed paper wireframes and defined flows</li>
            <li>Designed emergency card UI and visual icon system</li>
            <li>Coordinated with peers for content ideas and interactions</li>
            <li>Created Instagram post concepts and mockups to raise app awareness</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="🏁 Final Outcome">
            <ul className="list-disc list-inside space-y-3">
                <li>Delivered the complete prototype with responsive mobile & web screens</li>
                <li>App design was well-received by mentors and users during testing</li>
                <li>Recognized for clarity, safety-first approach, and user empathy</li>
                <li>Team appreciated visual hierarchy, color balance, and emergency accessibility</li>
                <li>Currently under consideration for pilot launch with a safety NGO</li>
            </ul>
        </AnimatedCard>

        <div className="bg-white p-12 rounded-xl shadow-2xl mt-16">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">✨ Conclusion</h2>
          <p className="text-lg text-gray-700 text-center">
            Nesara was a meaningful project aimed at empowering women through design thinking and accessibility. By combining proactive training with emergency action, the app ensures every user feels safe, supported, and confident. From structured learning to instant SOS access, this app transforms digital design into real-world impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NesaraCaseStudy;
