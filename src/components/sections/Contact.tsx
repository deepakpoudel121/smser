import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-9862546765"],
    action: "tel:+9779862546765",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["southasia.materials.lab@gmail.com"],
    action: "mailto:southasia.materials.lab@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Sirjana Chowk, Bharatpur-10", "Chitwan, Nepal"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24/7 Support Available", "Testing: 8 AM - 6 PM"],
    action: "#",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const whatsappNumber = "9779862546765";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Quote Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Service Required:* ${formData.service}

*Project Details:*
${formData.message}
    `.trim();

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message has been prepared. Please send it via WhatsApp.",
    });
    
    // Clear form after submission
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleScheduleCall = () => {
    const scheduleMessage = encodeURIComponent("Hi, I would like to schedule a call to discuss my project requirements.");
    window.open(`https://wa.me/${whatsappNumber}?text=${scheduleMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sa-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sa-gold/30 bg-sa-gold/10 mb-4">
            <span className="text-xs font-semibold text-sa-gold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your{" "}
            <span className="text-gradient-primary">Project?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact our team for expert consultation and competitive quotes. 
            We're here to support your testing needs 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.action}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-sa-gold/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sa-gold/10 border border-sa-gold/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-sa-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </a>
            ))}

            {/* Google Map */}
            <a 
              href="https://www.google.com/maps/place/SouthAsia+Materials+Science+and+Engineering+Research+Centre/@27.6663353,84.4290607,18z/data=!4m9!1m2!2m1!1sSirjana+Chowk,+Bharatpur-10,+Chitwan,+Nepal!3m5!1s0x3994fb0032b21b43:0x8e775e19835dcc26!8m2!3d27.6672971!4d84.4298093!16s%2Fg%2F11zjkpzl9p?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-48 rounded-xl overflow-hidden border border-border/50 group cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.8244046107905!2d84.42906072496721!3d27.666335267711684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb0032b21b43%3A0x8e775e19835dcc26!2sSouthAsia%20Materials%20Science%20and%20Engineering%20Research%20Centre!5e0!3m2!1sen!2snp!4v1766043272862!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Open in Google Maps</p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+977-98XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="geotechnical">Geotechnical & Geophysical</option>
                      <option value="foundation">Foundation Testing</option>
                      <option value="ndt">Non-Destructive Testing</option>
                      <option value="pavement">Pavement Investigation</option>
                      <option value="construction">Construction Materials</option>
                      <option value="environmental">Environmental Testing</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button type="button" variant="hero-outline" size="lg" onClick={handleScheduleCall}>
                    Schedule a Call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};