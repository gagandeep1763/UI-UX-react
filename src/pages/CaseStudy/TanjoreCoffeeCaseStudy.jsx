import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import tanjoreCoffeeImage from "@/assets/casestudy-project3.1.jpg";
import brandImage from "@/assets/casestudy-project3.2.jpg";
import contributionsImage from "@/assets/casestudy-project3.5.jpg";
import outcomeImage from "@/assets/casestudy-project3.3.jpg";
import conclusionImage from "@/assets/casestudy-project3.4.jpg";

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

const TanjoreCoffeeCaseStudy = () => {
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
              <img src={tanjoreCoffeeImage} alt="Tanjore Degree Coffee" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Redesign for Tanjore Degree Coffee</h1>
              <p className="text-xl text-gray-600 mb-6">
                Solo Project
              </p>
              <div className="text-left space-y-2 text-gray-600">
                <p><span className="font-semibold text-gray-800">Client:</span> Tanjore Degree Coffee</p>
                <p><span className="font-semibold text-gray-800">Internship Provider:</span> ShadowFox</p>
                <p><span className="font-semibold text-gray-800">Role:</span> UI/UX Designer</p>
                <p><span className="font-semibold text-gray-800">Tools Used:</span> Figma, Canva</p>
                <p><span className="font-semibold text-gray-800">Project Duration:</span> 4 Days</p>
              </div>
            </div>
          </div>
        </div>

        <AnimatedCard title="Objective">
          <p>
            To redesign the website for Tanjore Degree Coffee, a traditional South Indian beverage brand, by blending cultural authenticity with a clean, modern interface. The goal was to elevate brand storytelling while enhancing user experience through interactive and responsive design.
          </p>
        </AnimatedCard>

        <AnimatedCard title="Understanding the Brand">
          <p>
            Before designing, I focused on the essence of the brand:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 text-lg">
            <li>Deep-rooted South Indian coffee heritage</li>
            <li>Simple and trustworthy identity built over the years</li>
            <li>Signature products like Filter Coffee and Rose Milk</li>
          </ul>
          <p className="mt-6">
            The challenge was to preserve traditional values while making the experience fresh, minimal, and web-ready.
          </p>
        </AnimatedCard>

        <div className="my-12 flex justify-center">
          <img src={brandImage} alt="Understanding the Brand" className="rounded-lg shadow-xl max-w-5xl" />
        </div>

        <AnimatedCard title="My Contributions">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-3/5">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">UI/UX Design (Figma)</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Designed high-fidelity website mockups with a clean and intuitive layout</li>
                <li>Created mobile-responsive screens to ensure smooth experience across devices</li>
                <li>Applied parallax scrolling and hover effects to demonstrate interactivity</li>
                <li>Prioritized readability and flow using bold typography, ample white space, and product-focused imagery.</li>
                <li>Key sections designed: Home, About Us, Product Display, and Testimonials</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Visual Storytelling (Canva)</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Built custom hero banners, icons, and brand-centric visuals</li>
                <li>Ensured visual consistency with brand colors and South Indian cultural themes</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interactive & Functional Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Smooth Parallax Transitions for visual delight</li>
                <li>Interactive CTAs like “Order Now” & “Know Our Story”</li>
                <li>Client Testimonials for building trust</li>
                <li>SEO-Ready Layout with clean structure and content hierarchy</li>
                <li>Minimal E-commerce Integration (for future scalability)</li>
              </ul>
            </div>
            <div className="md:w-2/5">
              <img src={contributionsImage} alt="My Contributions" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <AnimatedCard title="Design Approach" className="h-full">
            <ul className="list-disc list-inside space-y-3">
              <li><strong>User-Centered Navigation:</strong> Visitors can access any major section in 1–2 clicks</li>
              <li><strong>Cultural Connection:</strong> Integrated brand story through a simple timeline and heritage-inspired design</li>
              <li><strong>Conversion-Focused CTAs:</strong> Highlighted buying and brand engagement actions clearly</li>
            </ul>
          </AnimatedCard>
          <div className="flex items-center justify-center">
            <img src={outcomeImage} alt="Final Outcome" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
            <AnimatedCard title="What I Gained" className="h-full">
                <ul className="list-disc list-inside space-y-3">
                    <li>Learned to balance traditional branding with modern UI patterns</li>
                    <li>Strengthened skills in interactive prototyping, user flow design, and storytelling</li>
                    <li>Developed an eye for creating scalable designs aligned with real client requirements</li>
                </ul>
            </AnimatedCard>
            <AnimatedCard title="Final Outcome" className="h-full">
                <ul className="list-disc list-inside space-y-3">
                    <li>Delivered the complete design within 4 days as a solo designer.</li>
                    <li>Received great feedback from mentors for layout, storytelling, and usability.</li>
                    <li>Client was extremely happy, praising the modern yet rooted design.</li>
                    <li>The design was approved for development handoff without any changes.</li>
                </ul>
            </AnimatedCard>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-2xl mt-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src={conclusionImage} alt="Conclusion" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Conclusion</h2>
              <p className="text-lg text-gray-700 mb-6">
                The project concluded on a high note with overwhelming appreciation from the manager, who shared:
              </p>
              <blockquote className="p-6 bg-gray-100 border-l-4 border-gray-400 italic text-gray-600">
                "I have no words to say, I am very much happy with this design, no changes are required, fantastic work. I’ll be giving you an LOR from my end when the program ends. Kindly avoid sharing the client project design anywhere, even on LinkedIn. You can wait until the submission forms are sent to submit this work. You will definitely reach great heights, all the best for that."
              </blockquote>
              <p className="mt-6 text-lg text-gray-700">
                This recognition made the effort truly rewarding and marked a proud milestone in my design journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanjoreCoffeeCaseStudy;
