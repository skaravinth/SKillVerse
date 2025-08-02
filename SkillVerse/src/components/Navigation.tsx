import { Button } from "@/components/ui/button";
import { Brain, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary glow-effect" />
            <span className="text-xl font-bold gradient-text">EmotiCode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isLandingPage ? (
              <>
                <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                  Features
                </a>
                <a href="#languages" className="text-foreground hover:text-primary transition-smooth">
                  Languages
                </a>
                <a href="#demo" className="text-foreground hover:text-primary transition-smooth">
                  Demo
                </a>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-foreground hover:text-primary transition-smooth">
                  Dashboard
                </Link>
                <Link to="/skills" className="text-foreground hover:text-primary transition-smooth">
                  Skills
                </Link>
                <Link to="/learning-path" className="text-foreground hover:text-primary transition-smooth">
                  Learning Path
                </Link>
                <Link to="/profile" className="text-foreground hover:text-primary transition-smooth">
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLandingPage ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="hero">Get Started</Button>
                </Link>
              </>
            ) : (
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {isLandingPage ? (
                <>
                  <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                    Features
                  </a>
                  <a href="#languages" className="text-foreground hover:text-primary transition-smooth">
                    Languages
                  </a>
                  <a href="#demo" className="text-foreground hover:text-primary transition-smooth">
                    Demo
                  </a>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="text-foreground hover:text-primary transition-smooth">
                    Dashboard
                  </Link>
                  <Link to="/skills" className="text-foreground hover:text-primary transition-smooth">
                    Skills
                  </Link>
                  <Link to="/learning-path" className="text-foreground hover:text-primary transition-smooth">
                    Learning Path
                  </Link>
                  <Link to="/profile" className="text-foreground hover:text-primary transition-smooth">
                    Profile
                  </Link>
                </>
              )}
              
              {isLandingPage && (
                <div className="flex flex-col space-y-2 pt-4">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="hero" className="w-full">Get Started</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;