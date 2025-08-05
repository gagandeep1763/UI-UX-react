import React from "react";
import framersWatchImage from "@/assets/Project-framers.jpg";
import caseStudyImage from "@/assets/casestudy-project5.1.jpg";
import caseStudyImage2 from "@/assets/casestudy-project5.3.jpg";
import caseStudyImage3 from "@/assets/casestudy-project5.4.png";
import caseStudyImage4 from "@/assets/casestudy-project5.5.jpg";
import caseStudyImage5 from "@/assets/casestudy-project5.6.jpg";
import conclusionImage from "@/assets/casestudy-project5.2.jpg";

const FramersCaseStudy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={framersWatchImage} alt="Framers Smart Watch" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold mb-4">Framers Smart Watch Redesign</h1>
              <p className="text-xl text-gray-600 mb-4">
                A sleek and modern UI/UX design for a smart watch, focusing on intuitive navigation and user engagement.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Category:</span> Watch
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Project Focus:</span> UI Design
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Tools Used:</span> Figma | Design System | Prototyping
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Timeline:</span> 3 Days
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Key Features:</span> Navigation Redesign |Brand Emphasis | Battery-Efficient Design
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3">Problem Statement</h2>
          <p className="text-gray-700">
            Smartwatches today often overwhelm users with cluttered interfaces, limited personalization, and inconsistent brand identity. Users, especially first-time smartwatch owners, struggle with navigation, accessibility, and understanding key features quickly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3">Goal</h2>
          <p className="text-gray-700">
            To redesign the Framers smartwatch interface with a focus on clear visual hierarchy, modern branding, and a seamless user experience. The aim was to display only essential information, reduce visual clutter, and enhance usability through bold typography, minimal design, and battery-friendly dark mode — creating a smart, user-centered interface that aligns with Framers’ tech-forward identity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-3/5 p-4">
              <h2 className="text-2xl font-bold mb-3">Research Approach</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>User Interviews:</strong> Gathered insights from smartwatch users to understand frustrations with current designs.</li>
                <li><strong>Competitive Analysis:</strong> Evaluated interfaces of existing smartwatch brands to identify usability gaps.</li>
                <li><strong>Persona Development:</strong> Defined key user types like the Tech Enthusiast and the Minimalist User to guide design decisions.</li>
              </ul>
              <hr className="my-4" />
              <h2 className="text-2xl font-bold mb-3">Design Strategy</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">Branding Focus:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Emphasized the core tagline: “Powered by Framers – Making the world smarter”</li>
                <li>Used bold, high-contrast typography to reinforce brand identity</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">UI Goals:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Simplicity:</strong> Kept only essential elements on the screen</li>
                <li><strong>Clarity:</strong> Ensured readability with white and red text over a black background</li>
                <li><strong>Modern Appeal:</strong> Balanced layout, bold font, minimal distractions</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Design Tool Used:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Figma</strong> – Used for both wireframing and final design prototyping</li>
              </ul>
            </div>
            <div className="md:w-2/5 p-4">
              <img src={caseStudyImage} alt="Case Study Image" className="rounded-lg shadow-lg mb-8 h-64 w-full object-cover" />
              <img src={caseStudyImage2} alt="Case Study Image 2" className="rounded-lg shadow-lg h-64 w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3">Digital Prototypes</h2>
          <p className="text-gray-700">
            Started with low-fidelity digital layouts to define the overall structure, content hierarchy, and functionality of the smartwatch interface. Special attention was given to typography choices for readability, and color contrast to ensure accessibility in various lighting conditions. These early prototypes laid the foundation for a minimal yet functional design, allowing fast iterations and quick user feedback before progressing to high-fidelity visuals.
          </p>
          <div className="flex items-center justify-center mt-4">
            <img src={caseStudyImage3} alt="Prototypes" className="rounded-lg shadow-md max-h-96" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-3">Testing and Feedback</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Shared digital prototypes with 5 users from the interview stage</li>
                    <li>Key feedback highlights:</li>
                    <ul className="list-disc list-inside ml-6">
                        <li>Bold text and clean UI were easy to read</li>
                        <li>Dark UI was preferred for both style and battery savings</li>
                        <li>Users liked the non-distracting, focused layout</li>
                    </ul>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-3">Final Outcome</h2>
                <p className="text-gray-700">
                    A smartwatch home screen design that is:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    <li>Clear and readable</li>
                    <li>Minimal and clutter-free</li>
                    <li>Strong in brand identity</li>
                    <li>Enhanced user satisfaction through reduced complexity and better visual hierarchy</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
                <img src={caseStudyImage4} alt="Final Design 1" className="rounded-lg shadow-md h-96 w-full object-cover" />
            </div>
            <div className="md:w-1/2">
                <img src={caseStudyImage5} alt="Final Design 2" className="rounded-lg shadow-md h-96 w-full object-cover" />
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={conclusionImage} alt="Conclusion" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg text-gray-700">
                The redesigned smartwatch interface centers on simplicity and sharp branding. Using a user-focused, digital-first process in Figma, the design ensures a responsive and accessible experience without any unnecessary distractions. Skipping traditional sketches allowed for faster prototyping and cleaner iteration, aligning perfectly with modern UI/UX workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramersCaseStudy;
