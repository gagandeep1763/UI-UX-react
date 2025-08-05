import aidpointImage from "@/assets/project-aidpoint.jpg";
import rcbImage from "@/assets/project-rcb.jpg";
import eventImage from "@/assets/project-event.jpg";
import gopravaasaImage from "@/assets/project-gopravasa.jpg";
import uberImage from "@/assets/project-uber.jpg";

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
    id: "gopravasa",
    title: "Gopravasa",
    subtitle: "Ecommerce Web Design",
    description: "Travel and tourism e-commerce platform focusing on seamless booking experience and destination exploration.",
    image: gopravaasaImage,
    category: "Travel",
    tools: ["Figma", "User Research", "Prototyping"],
    timeline: "2 Weeks",
    features: ["Booking System", "Destination Guides", "Travel Planning"]
  },
  {
    id: "uber",
    title: "Uber Website Redesign",
    subtitle: "UI/UX in Figma",
    description: "Modern redesign of Uber's web platform with improved navigation and enhanced user experience.",
    image: uberImage,
    category: "Transportation",
    tools: ["Figma", "Design System", "Prototyping"],
    timeline: "1 Week",
    features: ["Navigation Redesign", "Booking Flow", "Mobile Responsive"]
  }
];
