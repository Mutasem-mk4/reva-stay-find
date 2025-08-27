import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Wifi, Car, Coffee } from "lucide-react";

interface ChaletCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  image: string;
  amenities: string[];
  onBookingClick: (chaletId: string) => void;
}

const ChaletCard = ({
  id,
  name,
  location,
  price,
  rating,
  reviews,
  guests,
  image,
  amenities,
  onBookingClick
}: ChaletCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="group hover:shadow-warm transition-all duration-300 overflow-hidden bg-gradient-card border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name} - luxury chalet in ${location}`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground font-medium">
            ${price}/night
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-luxury">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium text-sm text-foreground">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-accent" />
          <span className="text-sm text-foreground">Up to {guests} guests</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs flex items-center gap-1">
              {getAmenityIcon(amenity)}
              {amenity}
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => onBookingClick(id)}
        >
          Request Booking
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChaletCard;