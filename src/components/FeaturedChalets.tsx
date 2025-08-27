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
      name: "Amman Hills Villa",
      location: "Amman, Jordan",
      price: 250,
      rating: 4.9,
      reviews: 127,
      guests: 6,
      image: chalet1,
      amenities: ["WiFi", "Parking", "City Views", "Pool", "Traditional Design"],
    },
    {
      id: "2",
      name: "Dead Sea Luxury Retreat",
      location: "Dead Sea, Jordan",
      price: 420,
      rating: 4.8,
      reviews: 89,
      guests: 8,
      image: chalet2,
      amenities: ["WiFi", "Parking", "Sea View", "Infinity Pool", "Spa Access"],
    },
    {
      id: "3",
      name: "Wadi Rum Desert Lodge",
      location: "Wadi Rum, Jordan",
      price: 180,
      rating: 4.7,
      reviews: 156,
      guests: 4,
      image: chalet3,
      amenities: ["WiFi", "Desert Views", "Stargazing", "Bedouin Experience", "Traditional Meals"],
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
            Featured <span className="text-accent">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our hand-picked selection of luxury villas across Jordan, from historic Amman
            to the magical Wadi Rum desert and the healing waters of the Dead Sea.
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