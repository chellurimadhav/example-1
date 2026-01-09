import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowUp, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    "Sandstone Tiles",
    "Red Sandstone",
    "Sandstone Slabs",
    "Natural Stone",
    "Wall Cladding",
    "Flooring Solutions",
  ];

  return (
    <footer className="bg-dark-gradient text-sandstone-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-sandstone/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-cream mb-4">
              E.G. Associates
            </h3>
            <p className="text-sandstone text-sm leading-relaxed mb-6">
              Premium sandstone and natural stone supplier in Vijayawada. 
              Quality you can trust, prices you'll love. Serving builders, architects, 
              and homeowners since 2019.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="h-10 w-10 rounded-lg bg-sandstone/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-cream text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sandstone hover:text-gold hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-semibold text-cream text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sandstone hover:text-gold hover:translate-x-1 inline-block transition-all"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-cream text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sandstone">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm">
                  49-4-12/2, RCC Building, Carmel Nagar,
                  <br />Vijayawada - 520004, AP
                </span>
              </li>
              <li>
                <a
                  href="tel:+919246774777"
                  className="flex items-center gap-3 text-sandstone hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="font-semibold">+91 92467 74777</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sandstone">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-sm">info@egassociates.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sandstone text-sm">
              © {currentYear} E.G. Associates. All rights reserved.
            </p>
            <p className="text-sandstone/50 text-xs mt-1">
              GST: 37ADFPE2702B1ZC | Since 2019
            </p>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
