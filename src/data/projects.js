import aidpointImage from "@/assets/casestudy-project1.1.jpg";
import rcbImage from "@/assets/casestudy-project2.1.jpg";
import tanjoreCoffeeImage from "@/assets/casestudy-project3.1.jpg";
import smartSonicImage from "@/assets/casestudy-project4.1.jpg";
import framersWatchImage from "@/assets/casestudy-project5.6.jpg";

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
    id: "nesara",
    title: "Nesara",
    subtitle: "Women’s Safety App Design",
    description: "A responsive mobile and web app offering free self-defense training, live safety sessions, and instant access to emergency help through calls, chats, and alert tools.",
    image: rcbImage,
    category: "Safety",
    tools: ["Figma", "UX Research", "Wireframes"],
    timeline: "1 Week",
    features: ["Responsive Design", "Self-Defense Tutorials", "Emergency Support Tools"]
  },
  {
    id: "tanjore-coffee",
    title: "Redesign for Tanjore Degree Coffee",
    subtitle: "Coffee Website Redesign",
    description: "Revamped a website for Tanjore Coffee to enhance user experience and showcase its authentic South Indian flavor.",
    image: tanjoreCoffeeImage,
    category: "Food & Beverage",
    tools: ["Figma", "User Research", "Prototyping"],
    timeline: "4 Days",
    features: ["Visual Redesign", "Enhanced UX", "Brand Storytelling"]
  },
  {
    id: "smart-sonic",
    title: "Smart Sonic Toothbrush",
    subtitle: "Product Website",
    description: "A sleek, modern website for Smart Sonic, promoting a tech-driven toothbrush focused on innovation and brighter smiles. This project was done as a part of a digital marketing internship.",
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
