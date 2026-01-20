import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const tilesProducts = [
    {
      name: "Ceramic Tiles",
      description:
        "Premium ceramic tiles perfect for flooring and wall cladding. Available in various sizes, colors, and finishes for residential and commercial projects.",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&h=800&fit=crop&q=90",
      features: ["Water resistant", "Easy maintenance", "Multiple designs", "Durable"],
      sizes: ["30x30 cm", "40x40 cm", "60x60 cm", "Custom sizes"],
      applications: ["Flooring", "Wall Cladding", "Bathrooms", "Kitchens"],
      price: "Contact for pricing",
    },
    {
      name: "Vitrified Tiles",
      description:
        "High-quality vitrified tiles with superior strength and low water absorption. Perfect for high-traffic areas and modern interiors.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&h=800&fit=crop&q=90",
      features: ["High strength", "Low porosity", "Stain resistant", "Long-lasting"],
      sizes: ["60x60 cm", "80x80 cm", "120x60 cm", "Custom"],
      applications: ["Living Rooms", "Offices", "Commercial Spaces", "Outdoor"],
      price: "Contact for pricing",
    },
    {
      name: "Porcelain Tiles",
      description:
        "Premium porcelain tiles with exceptional durability and aesthetic appeal. Ideal for both indoor and outdoor applications.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=90",
      features: ["Extremely durable", "Frost resistant", "Slip resistant", "Premium finish"],
      sizes: ["Various sizes", "Large format available", "Custom options"],
      applications: ["High-traffic Areas", "Outdoor Paving", "Commercial", "Residential"],
      price: "Contact for pricing",
    },
  ];

  const sanitaryProducts = [
    {
      name: "Wash Basin Sinks",
      description:
        "Modern and elegant wash basin sinks in various styles including wall-mounted, countertop, and pedestal designs. Perfect for any bathroom.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&h=800&fit=crop&q=90",
      features: ["Modern designs", "Easy installation", "Durable", "Multiple styles"],
      sizes: ["Various sizes", "Custom options available"],
      applications: ["Bathrooms", "Powder Rooms", "Commercial Spaces"],
      price: "Contact for pricing",
    },
    {
      name: "Toilets & WC",
      description:
        "High-quality toilets and WC suites with water-saving features. Available in wall-mounted and floor-standing options.",
      image: "https://images.unsplash.com/photo-1631889993954-4b1c9b791b1a?w=1200&h=800&fit=crop&q=90",
      features: ["Water efficient", "Easy to clean", "Modern design", "Durable"],
      sizes: ["Standard sizes", "Compact options"],
      applications: ["Residential", "Commercial", "Public Facilities"],
      price: "Contact for pricing",
    },
    {
      name: "Cabinets",
      description:
        "Modern bathroom and kitchen cabinets with premium finishes. Available in various styles and sizes to match your design needs.",
      image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=1200&h=800&fit=crop&q=90",
      features: ["Premium quality", "Modern designs", "Durable materials", "Custom sizes"],
      sizes: ["Various sizes", "Custom options available"],
      applications: ["Bathrooms", "Kitchens", "Commercial Spaces"],
      price: "Contact for pricing",
    },
  ];

  const otherProducts = [
    {
      name: "Waterproofing Solutions",
      description:
        "Advanced waterproofing solutions to protect your structures from water damage. High-quality materials for long-lasting protection.",
      image: "https://images.unsplash.com/photo-1581579184688-0d1f4b6d0d7b?w=1200&h=800&fit=crop&q=90",
      features: ["Advanced technology", "Long-lasting", "Easy application", "Reliable protection"],
      sizes: ["Various packaging", "Different quantities"],
      applications: ["Roofs", "Bathrooms", "Basements", "Terrace"],
      price: "Contact for pricing",
    },
    {
      name: "Laying Gum Bags",
      description:
        "High-quality laying gum bags for tile installation. Ensures strong adhesion and long-lasting tile placement.",
      image: "https://images.unsplash.com/photo-1586864387789-628af9a1fd1b?w=1200&h=800&fit=crop&q=90",
      features: ["Strong adhesion", "Water resistant", "Easy to use", "Quality assured"],
      sizes: ["Various bag sizes", "Bulk quantities"],
      applications: ["Tile Installation", "Construction", "Renovation"],
      price: "Contact for pricing",
    },
    {
      name: "Washing Liquids",
      description:
        "Premium washing liquids for cleaning and maintaining tiles and sanitary ware. Effective and safe for all surfaces.",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1200&h=800&fit=crop&q=90",
      features: ["Effective cleaning", "Safe for surfaces", "Easy to use", "Long-lasting"],
      sizes: ["Various bottle sizes", "Bulk quantities"],
      applications: ["Tile Cleaning", "Sanitary Maintenance", "General Cleaning"],
      price: "Contact for pricing",
    },
    {
      name: "Waterproofing Liquids",
      description:
        "Professional-grade waterproofing liquids for comprehensive water protection. Suitable for various surfaces and applications.",
      image: "https://images.unsplash.com/photo-1615486511484-92e8a9f5a353?w=1200&h=800&fit=crop&q=90",
      features: ["Professional grade", "Multi-surface", "Long-lasting", "Easy application"],
      sizes: ["Various container sizes", "Bulk options"],
      applications: ["Bathrooms", "Kitchens", "Outdoor Areas", "Basements"],
      price: "Contact for pricing",
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient">Product Range</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            All our products are sourced and supplied with a focus on durability, performance, and industry standards.
          </p>
        </motion.div>

        {/* Tiles Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              <span className="text-gradient">Tiles</span> Collection
            </h3>
            <p className="text-muted-foreground">Premium quality tiles for every space</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tilesProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick View Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-elevated"
                  >
                    <Eye className="h-6 w-6 text-primary" />
                  </motion.button>

                  {/* Price Tag */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 glass rounded-full px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-foreground">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#contact">Get Quote</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Waterproofing & Accessories Section (between Tiles and Sanitary) */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              <span className="text-gradient">Waterproofing</span> & Accessories
            </h3>
            <p className="text-muted-foreground">
              Waterproofing solutions, laying gum bags, washing liquids, and waterproofing liquids.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {otherProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quick View Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-elevated"
                  >
                    <Eye className="h-6 w-6 text-primary" />
                  </motion.button>

                  {/* Price Tag */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 glass rounded-full px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-foreground">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#contact">Get Quote</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sanitary Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              <span className="text-gradient">Sanitary</span> Ware
            </h3>
            <p className="text-muted-foreground">Premium sanitary solutions for modern spaces</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sanitaryProducts.map((product, index) => (
              <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedProduct(product)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-elevated"
                >
                  <Eye className="h-6 w-6 text-primary" />
                </motion.button>

                {/* Price Tag */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 glass rounded-full px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-foreground">
                  {product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#contact">Get Quote</a>
                  </Button>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="text-foreground font-semibold mb-1">
                Looking for something specific?
              </p>
              <p className="text-muted-foreground text-sm">
                We offer complete tiles & sanitary solutions with expert guidance.
              </p>
            </div>
            <Button className="shadow-glow" asChild>
              <a href="#contact">
                View Full Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Applications</h4>
                  <ul className="space-y-2">
                    {selectedProduct.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <div>
                  <span className="text-sm text-muted-foreground">Price</span>
                  <p className="text-xl font-bold text-primary">{selectedProduct.price}</p>
                </div>
                <Button size="lg" asChild>
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
