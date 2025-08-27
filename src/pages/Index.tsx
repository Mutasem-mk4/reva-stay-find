import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedChalets from "@/components/FeaturedChalets";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedChalets />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
