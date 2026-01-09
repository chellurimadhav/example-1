import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import sandstoneTiles from "@/assets/sandstone-tiles.jpg";
import redSandstone from "@/assets/red-sandstone.jpg";
import sandstoneSlabs from "@/assets/sandstone-slabs.jpg";
import heroSandstone from "@/assets/hero-sandstone.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: heroSandstone, alt: "Premium Sandstone Texture", category: "Texture" },
    { src: sandstoneTiles, alt: "Sandstone Tiles", category: "Tiles" },
    { src: redSandstone, alt: "Red Sandstone", category: "Red Stone" },
    { src: sandstoneSlabs, alt: "Sandstone Slabs", category: "Slabs" },
    { src: heroSandstone, alt: "Natural Stone Pattern", category: "Pattern" },
    { src: sandstoneTiles, alt: "Floor Tiles", category: "Tiles" },
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient">Stone Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the natural beauty and variety of our premium sandstone products.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-80 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-sandstone-light text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-sandstone-light hover:text-gold transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-sandstone-light hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-sandstone-light hover:text-gold transition-colors"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sandstone-light text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
