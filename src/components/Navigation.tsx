import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, User, FolderOpen, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getButtonClassName = (isScrolled: boolean) =>
    `${
      isScrolled
        ? 'text-foreground hover:text-white'
        : 'text-white/90 hover:text-white'
    } transition-colors text-shadow-lg rounded-full bg-transparent hover:bg-gradient-to-r from-primary to-accent`;


  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b' 
          : 'bg-transparent'
      }`}>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
              Gag's portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm" className={getButtonClassName(isScrolled)}>
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span className="ml-2">Home</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className={getButtonClassName(isScrolled)}>
                <Link to="/about">
                  <User className="h-4 w-4" />
                  <span className="ml-2">About</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className={getButtonClassName(isScrolled)}>
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  <span className="ml-2">Contact</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-border/50">
            <div className="container px-4 mx-auto py-4">
              <div className="flex flex-col space-y-2">
                <Button asChild variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary hover:bg-gray-100 rounded-full transition-colors">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Home className="h-4 w-4" />
                    <span className="ml-2">Home</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary hover:bg-gray-100 rounded-full transition-colors">
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="h-4 w-4" />
                    <span className="ml-2">About</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary hover:bg-gray-100 rounded-full transition-colors">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Mail className="h-4 w-4" />
                    <span className="ml-2">Contact</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button asChild variant="gradient" size="icon" className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Link to="/contact">
            <Mail className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </>
  );
}
