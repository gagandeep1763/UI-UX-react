import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, FolderOpen, Mail, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "/about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const getButtonClassName = () =>
    `text-slate-800 hover:text-white transition-colors text-shadow-lg rounded-full bg-transparent hover:bg-gradient-to-r from-primary to-accent`;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b"
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Gag's Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Button
                  asChild
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className={getButtonClassName()}
                >
                  <Link to={item.id} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </Button>
              ))}
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
                {navItems.map((item) => (
                  <Button
                    asChild
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    className="justify-start text-slate-800 hover:text-primary hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Link to={item.id} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button
          asChild
          variant="gradient"
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Link to="/contact">
            <Mail className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
