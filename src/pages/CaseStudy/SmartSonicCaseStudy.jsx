import React from "react";
import smartSonicImage from "@/assets/casestudy-project4.1.jpg";
import responsibilitiesImage from "@/assets/casestudy-project4.2.jpg";
import outcomeImage1 from "@/assets/casestudy-project4.3.jpg";
import outcomeImage2 from "@/assets/casestudy-project4.4.jpg";

const Card = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

const SmartSonicCaseStudy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={smartSonicImage} alt="Smart Sonic Toothbrush" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold mb-4">Smart Sonic Toothbrush</h1>
              <p className="text-xl text-gray-600 mb-4">
                Internship Project | Team of 3
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Domain:</span> Digital Marketing, UI/UX Design
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Tools Used:</span> Figma | Canva | Meta Business Suite | Google Docs | Instagram
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Timeline:</span> 2 Weeks
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Key Features:</span> Product Showcase | Interactive Demo | Shop Integration
              </p>
            </div>
          </div>
        </div>

        <Card title="Overview">
          <p>
            As part of my digital marketing internship, I collaborated on a branding and promotional campaign for Smart Sonic, an innovative tech-driven toothbrush brand. The goal was to build a strong digital identity, design an engaging website interface, and execute a compelling social media campaign that highlights the product’s smart features, aesthetics, and health benefits.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card title="Team Composition">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Gagandeep (My Role):</strong> UI/UX Designer & Social Media Strategist</li>
              <li><strong>Chiranth:</strong> Blog & Content Creator</li>
              <li><strong>Aryan:</strong> SEO & Analytics Specialist</li>
            </ul>
          </Card>
          <Card title="Objective">
            <p>
              To create a visually impactful and conversion-friendly digital presence for Smart Sonic that enhances user trust, brand awareness, and social engagement.
            </p>
          </Card>
        </div>

        <Card title="My Responsibilities">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔷 UI/UX Design (Figma)</h3>
                <p>
                  Crafted a clean, modern website interface focused on showcasing the toothbrush’s smart features. Emphasized product innovation using bold typography, ample white space, and an intuitive user flow with interactive previews and clear “Buy Now” CTAs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔷 Social Media Strategy & Execution</h3>
                <p>
                  Developed and executed a structured content plan across Instagram and LinkedIn. This included designing carousel posts, reels, and theme-based weekly content while leveraging analytics for optimized post timing, reach, and engagement through premium visual storytelling.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <img src={responsibilitiesImage} alt="Responsibilities" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </Card>

        <Card title="Key Features & Highlights">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Homepage with sleek hero section</li>
                <li>Minimalist product card design</li>
                <li>Desktop and mobile responsiveness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>High-engagement posts on product usage</li>
                <li>Strategized giveaways and influencer pitches</li>
                <li>Grew organic followers via curated hashtags</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card title="Challenges">
            <ul className="list-disc list-inside space-y-2">
              <li>Designing a premium-feeling interface with limited assets.</li>
              <li>Maintaining consistency between design and marketing visuals.</li>
              <li>Balancing visual appeal with informational content.</li>
            </ul>
          </Card>
          <Card title="Outcome">
            <ul className="list-disc list-inside space-y-2">
              <li>Delivered a polished digital prototype of the website.</li>
              <li>Executed a social campaign with positive feedback.</li>
              <li>Gained experience in cross-functional teamwork.</li>
            </ul>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
                <img src={outcomeImage1} alt="Outcome 1" className="rounded-lg shadow-md h-96 w-full object-cover" />
            </div>
            <div className="md:w-1/2">
                <img src={outcomeImage2} alt="Outcome 2" className="rounded-lg shadow-md h-96 w-full object-cover" />
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src={smartSonicImage} alt="Conclusion" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg text-gray-700">
                This project allowed me to combine creative design thinking with digital marketing execution. By focusing on both user experience and audience engagement, I helped shape a cohesive digital identity for Smart Sonic that balanced functionality, brand voice, and visual impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSonicCaseStudy;
