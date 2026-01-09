import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroImage from "@/assets/hero-sandstone.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "6+", label: "Years Experience", delay: 0 },
    { value: "1000+", label: "Happy Clients", delay: 0.1 },
    { value: "50+", label: "Product Varieties", delay: 0.2 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Sandstone Texture"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[20%] w-24 h-24 rounded-full bg-terracotta/5 blur-2xl"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8 shadow-soft"
          >
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < 4 ? "text-gold fill-gold" : "text-gold/50 fill-gold/50"}`}
                />
              ))}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="text-sm font-medium text-foreground">
              4.5 Rating on Google
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Since 2019
            </span>
          </motion.div>

          {/* Headline with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6"
          >
            <span className="text-charcoal">Premium</span>
            <br />
            <span className="text-gradient">Sandstone</span>
            <span className="text-charcoal"> & </span>
            <br />
            <span className="text-primary">Natural Stone</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Trusted wholesaler and distributor of high-quality sandstone tiles, 
            red sandstone, and natural stone slabs in <strong className="text-foreground">Vijayawada, Andhra Pradesh</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" className="group text-base px-8 py-6 shadow-glow animate-pulse-glow" asChild>
              <a href="#products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 glass border-primary/20 hover:bg-primary/5" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Get Free Quote
              </a>
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + stat.delay }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 + stat.delay }}
                  className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
