import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 px-4 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact <span className="text-accent">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions about our properties or need assistance with your booking? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="bg-background/50"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                        <p className="text-muted-foreground">
                          Rainbow Street, Jabal Amman<br />
                          Amman, Jordan 11183
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                        <p className="text-muted-foreground">+962 6 123 4567</p>
                        <p className="text-muted-foreground">+962 77 123 4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground">info@revafarms.com</p>
                        <p className="text-muted-foreground">bookings@revafarms.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                        <p className="text-muted-foreground">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Friday - Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;