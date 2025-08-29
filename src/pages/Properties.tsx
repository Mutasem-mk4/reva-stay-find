import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChaletCard from "@/components/ChaletCard";
import BookingModal from "@/components/BookingModal";
import chalet1 from "@/assets/chalet-1.jpg";
import chalet2 from "@/assets/chalet-2.jpg";
import chalet3 from "@/assets/chalet-3.jpg";

const Properties = () => {
  const [selectedChalet, setSelectedChalet] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chalets = [
    {
      id: "1",
      name: "Amman Hills Villa",
      location: "Amman, Jordan",
      price: 175,
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
      price: 295,
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
      price: 125,
      rating: 4.7,
      reviews: 156,
      guests: 4,
      image: chalet3,
      amenities: ["WiFi", "Desert Views", "Stargazing", "Bedouin Experience", "Traditional Meals"],
    },
    {
      id: "4",
      name: "Petra Mountain Retreat",
      location: "Petra, Jordan",
      price: 220,
      rating: 4.8,
      reviews: 98,
      guests: 5,
      image: chalet1,
      amenities: ["WiFi", "Mountain Views", "Historic Sites", "Guided Tours", "Local Cuisine"],
    },
    {
      id: "5",
      name: "Aqaba Beach Villa",
      location: "Aqaba, Jordan",
      price: 185,
      rating: 4.6,
      reviews: 145,
      guests: 7,
      image: chalet2,
      amenities: ["WiFi", "Beach Access", "Water Sports", "Private Beach", "Sunset Views"],
    },
    {
      id: "6",
      name: "Jerash Heritage House",
      location: "Jerash, Jordan",
      price: 155,
      rating: 4.7,
      reviews: 78,
      guests: 5,
      image: chalet3,
      amenities: ["WiFi", "Historic Location", "Cultural Tours", "Traditional Architecture", "Garden"],
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
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 px-4 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                All <span className="text-accent">Properties</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our complete collection of luxury villas and chalets across Jordan's most beautiful destinations.
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
        </section>
      </main>
      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        chaletName={selectedChaletData?.name || ""}
      />
    </div>
  );
};

export default Properties;