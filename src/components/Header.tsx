import { Button } from "@/components/ui/button";
import { Mountain, Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">Jordan Retreats</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
              {t('home')}
            </Link>
            <a href="#chalets" className="text-foreground hover:text-accent transition-colors font-medium">
              {t('properties')}
            </a>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
              {t('about')}
            </Link>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              {t('contact')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-foreground hover:text-accent"
            >
              <Languages className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="font-medium">
              {t('nav.signin')}
            </Button>
            <Button variant="default">
              {t('nav.listproperty')}
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
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                {t('nav.home')}
              </Link>
              <a href="#chalets" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                {t('nav.properties')}
              </a>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                {t('nav.about')}
              </Link>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium py-2">
                {t('nav.contact')}
              </a>
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full justify-start"
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  {t('nav.signin')}
                </Button>
                <Button variant="default" className="w-full">
                  {t('nav.listproperty')}
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