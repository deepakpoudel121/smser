import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { label: "Geotechnical Testing", href: "#geotechnical" },
    { label: "Foundation Testing", href: "#foundation" },
    { label: "Non-Destructive Testing", href: "#ndt" },
    { label: "Pavement Investigation", href: "#pavement" },
    { label: "Construction Materials", href: "#construction" },
    { label: "Environmental Testing", href: "#environmental" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Careers", href: "#contact" },
    { label: "News & Blog", href: "#blog" },
  ],
  resources: [
    { label: "Testing Standards", href: "#" },
    { label: "Technical Papers", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Client Portal", href: "#" },
    { label: "Contact Support", href: "#contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="South Asia Logo" className="w-12 h-12 object-contain" />
                    <div className="hidden sm:block">
  <span className="text-lg font-bold tracking-tight text-foreground">SouthAsia Materials</span>
  <p className="text-[10px] text-muted-foreground tracking-wider">LAB & ENGINEERING RESEARCH</p>
</div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Southasia Materials Science and Engineering Research - Nepal's trusted partner for 
              comprehensive materials testing and quality assurance solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+9779862546765" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-sa-gold transition-colors">
                <Phone className="w-4 h-4 text-sa-gold" />
                <span>+977-9862546765</span>
              </a>
              <a href="mailto:southasia.materials.lab@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-sa-gold transition-colors">
                <Mail className="w-4 h-4 text-sa-gold" />
                <span>southasia.materials.lab@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-sa-gold" />
                <span>Sirjana Chowk, Bharatpur-10, Chitwan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-sa-gold/10 hover:text-sa-gold transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-sa-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-sa-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-sa-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>© 2025 South Asia. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>Reg. No: 367842/081/082</span>
              <span className="hidden md:inline">|</span>
              <span>PAN: 622371582</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
