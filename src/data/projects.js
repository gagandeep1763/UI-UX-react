import aidpointImage from "@/assets/project-aidpoint.jpg";
import rcbImage from "@/assets/project-rcb.jpg";
import eventImage from "@/assets/project-event.jpg";
import smartSonicImage from "@/assets/casestudy-project4.1.jpg";
import framersWatchImage from "@/assets/Project-framers.jpg";

export const projects = [
  {
    id: "aidpoint",
    title: "Aid Point",
    subtitle: "Health App Design",
    description: "All-in-one mobile app for first aid learning with case studies and quizzes, emergency contacts, and quick-response tools like chat, call, and emergency codes.",
    image: aidpointImage,
    category: "Health",
    tools: ["Figma", "UX Research", "Wireframes"],
    timeline: "1 Week",
    features: ["Responsive Design", "Emergency Contact", "Emergency Tools"]
  },
  {
    id: "rcb",
    title: "RCB Fan Site",
    subtitle: "IPL Team Redesign",
    description: "Complete redesign of Royal Challengers Bangalore fan website with modern UI and enhanced user engagement.",
    image: rcbImage,
    category: "Sports",
    tools: ["Figma", "Prototyping", "User Testing"],
    timeline: "2 Weeks",
    features: ["Team Branding", "Match Updates", "Fan Community"]
  },
  {
    id: "event",
    title: "Event Booking Website",
    subtitle: "Ticket Platform",
    description: "Streamlined event discovery and booking platform with intuitive calendar integration and payment flow.",
    image: eventImage,
    category: "Entertainment",
    tools: ["Figma", "User Journey", "Wireframes"],
    timeline: "3 Weeks",
    features: ["Calendar Integration", "Payment Flow", "Event Discovery"]
  },
  {
    id: "smart-sonic",
    title: "Smart Sonic Toothbrush",
    subtitle: "Product Website",
    description: "A sleek, modern website for Smart Sonic, promoting a tech-driven toothbrush focused on innovation and brighter smiles.",
    image: smartSonicImage,
    category: "Tech Marketing",
    tools: ["Figma", "User Research", "Prototyping"],
    timeline: "2 Weeks",
    features: ["Product Showcase", "Interactive Demo", "Shop Integration"]
  },
  {
    id: "framers-watch",
    title: "Framers Smart Watch Redesign",
    subtitle: "Smart Watch UI/UX",
    description: "The Framers smartwatch redesign emphasizes clarity, usability, and bold branding.",
    image: framersWatchImage,
    category: "Watch",
    tools: ["Figma", "Design System", "Prototyping"],
    timeline: "3 Days",
    features: ["Navigation Redesign", "Booking Flow", "Mobile Responsive"]
  }
];
