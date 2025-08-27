import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Calendar, Award, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-accent">Jordan Retreats</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are passionate about sharing Jordan's incredible beauty and hospitality 
            through carefully curated luxury accommodations that showcase the best 
            of our ancient land and modern comfort.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, Jordan Retreats was born from a deep love for Jordan's 
                diverse landscapes and rich cultural heritage. From the bustling streets 
                of Amman to the otherworldly silence of Wadi Rum, we believe every corner 
                of Jordan tells a story worth experiencing.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of local experts handpicks each property, ensuring that every 
                stay offers not just luxury and comfort, but an authentic connection to 
                Jordan's timeless spirit and warm hospitality.
              </p>
              <Button variant="default" size="lg">
                Explore Our Properties
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d2d7d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Traditional Jordanian architecture in Petra"
                className="rounded-2xl shadow-luxury w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every experience we create is guided by these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Authentic Hospitality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We honor Jordan's tradition of warm welcome, ensuring every guest 
                  feels at home while experiencing genuine local culture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From the smallest detail to the grandest view, we maintain the 
                  highest standards in everything we offer.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Trust & Safety</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your safety and peace of mind are paramount. All our properties 
                  are thoroughly vetted and regularly inspected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Luxury Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">2000+</div>
              <div className="text-muted-foreground">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Local experts passionate about sharing Jordan's wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-nature rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ahmad Saleh</h3>
                <p className="text-accent font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Born in Amman, Ahmad has spent over 15 years in hospitality, 
                  bringing his vision of authentic Jordanian experiences to life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-nature rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">LK</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Layla Khoury</h3>
                <p className="text-accent font-medium mb-4">Head of Guest Experience</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With a background in luxury hospitality, Layla ensures every 
                  guest experience exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-nature rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">ON</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Omar Nasser</h3>
                <p className="text-accent font-medium mb-4">Property Relations Manager</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Omar works closely with property owners to maintain our high 
                  standards and expand our exceptional portfolio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience Jordan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you discover the perfect retreat for your Jordanian adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Browse Properties
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;