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
import sandstoneTiles from "@/assets/sandstone-tiles.jpg";
import redSandstone from "@/assets/red-sandstone.jpg";
import sandstoneSlabs from "@/assets/sandstone-slabs.jpg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const products = [
    {
      name: "Tiles & Sanitary Ware",
      description:
        "Premium quality tiles and sanitary ware perfect for residential, commercial, and infrastructure projects. Wide range of designs and finishes available.",
      image: sandstoneTiles,
      features: ["Premium quality", "Multiple designs", "Durable", "Modern finishes"],
      sizes: ["Various sizes available", "Custom options"],
      applications: ["Residential", "Commercial", "Infrastructure", "Renovation"],
      price: "Contact for pricing",
    },
    {
      name: "Waterproofing Solutions",
      description:
        "Advanced waterproofing solutions to protect your structures from water damage. High-quality materials for long-lasting protection.",
      image: redSandstone,
      features: ["Advanced technology", "Long-lasting", "Easy application", "Reliable protection"],
      sizes: ["Various packaging"],
      applications: ["Roofs", "Bathrooms", "Basements", "Terrace"],
      price: "Contact for pricing",
    },
    {
      name: "Construction Support Products",
      description:
        "Complete range of construction support products including laying gum bags, washing liquids, waterproofing liquids, wash basin sinks, and modern cabinets.",
      image: sandstoneSlabs,
      features: ["Complete range", "Quality assured", "Expert support", "Competitive pricing"],
      sizes: ["Various options"],
      applications: ["Construction", "Renovation", "Maintenance", "New Projects"],
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
            Discover our extensive range of high-quality tiles, sanitary ware, waterproofing solutions, 
            and construction support products, carefully sourced to meet the highest standards of durability and performance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
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
