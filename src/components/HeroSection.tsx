import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-chalet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Jordanian villa with traditional architecture and desert views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your Perfect
          <span className="block text-luxury drop-shadow-lg">Jordanian Retreat</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience luxury villas across Jordan's stunning landscapes. From Amman's hills to Wadi Rum's desert.
        </p>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-luxury max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Location
              </label>
              <Input 
                placeholder="Where do you want to go?" 
                className="h-12 border-border focus:ring-accent"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                Check-in
              </label>
              <Input 
                type="date" 
                className="h-12 border-border focus:ring-accent"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                Check-out
              </label>
              <Input 
                type="date" 
                className="h-12 border-border focus:ring-accent"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Guests
              </label>
              <Input 
                type="number" 
                placeholder="2" 
                min="1"
                className="h-12 border-border focus:ring-accent"
              />
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="w-full md:w-auto px-12 h-14 text-lg">
            <Search className="w-5 h-5 mr-2" />
            Search Chalets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;