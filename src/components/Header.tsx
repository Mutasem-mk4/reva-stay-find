import { Button } from "@/components/ui/button";
import { Mountain, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">Jordan Retreats</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#chalets" className="text-foreground hover:text-accent transition-colors font-medium">
              Properties
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button variant="default">
              List Your Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-card">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Home
              </a>
              <a href="#chalets" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Properties
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button variant="default" className="w-full">
                  List Your Property
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;