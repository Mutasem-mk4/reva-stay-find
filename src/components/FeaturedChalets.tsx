import { useState } from "react";
import ChaletCard from "./ChaletCard";
import BookingModal from "./BookingModal";
import chalet1 from "@/assets/chalet-1.jpg";
import chalet2 from "@/assets/chalet-2.jpg";
import chalet3 from "@/assets/chalet-3.jpg";

const FeaturedChalets = () => {
  const [selectedChalet, setSelectedChalet] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chalets = [
    {
      id: "1",
      name: "Cozy Alpine Retreat",
      location: "Whistler, BC",
      price: 299,
      rating: 4.9,
      reviews: 127,
      guests: 6,
      image: chalet1,
      amenities: ["WiFi", "Parking", "Breakfast", "Fireplace", "Hot Tub"],
    },
    {
      id: "2",
      name: "Modern Lakeside Chalet",
      location: "Banff, AB",
      price: 459,
      rating: 4.8,
      reviews: 89,
      guests: 8,
      image: chalet2,
      amenities: ["WiFi", "Parking", "Lake Access", "Sauna", "Balcony"],
    },
    {
      id: "3",
      name: "Traditional Mountain Lodge",
      location: "Jasper, AB",
      price: 349,
      rating: 4.7,
      reviews: 156,
      guests: 4,
      image: chalet3,
      amenities: ["WiFi", "Parking", "Garden", "Hiking Trails", "Mountain View"],
    },
  ];

  const handleBookingClick = (chaletId: string) => {
    setSelectedChalet(chaletId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedChalet(null);
  };

  const selectedChaletData = chalets.find(c => c.id === selectedChalet);

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-accent">Chalets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our hand-picked selection of premium chalets, each offering unique charm 
            and breathtaking views in Canada's most beautiful mountain destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chalets.map((chalet) => (
            <ChaletCard
              key={chalet.id}
              {...chalet}
              onBookingClick={handleBookingClick}
            />
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        chaletName={selectedChaletData?.name || ""}
      />
    </section>
  );
};

export default FeaturedChalets;