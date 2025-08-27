import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-luxury" />
              <span className="text-2xl font-bold">Jordan Retreats</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your gateway to luxury Jordanian villas and authentic Middle Eastern experiences.
              Discover Jordan's hidden gems from ancient cities to mystical deserts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Home
              </a>
              <a href="#chalets" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Browse Properties
              </a>
              <a href="#about" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Villa Rentals
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Property Management
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Concierge Services
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-luxury transition-colors">
                Event Planning
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-luxury" />
                <span className="text-primary-foreground/80">+962 6 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-luxury" />
                <span className="text-primary-foreground/80">info@jordanretreats.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-luxury mt-0.5" />
                <span className="text-primary-foreground/80">
                  Rainbow Street 123<br />
                  Amman, Jordan 11183
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Jordan Retreats. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-luxury transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-luxury transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-luxury transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;