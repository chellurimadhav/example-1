import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Play, Sparkles, CheckCircle, Award, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Rotate hero background images (one image visible at a time)
  const heroBgImages = useMemo(
    () => [
      // Tiles (1920x1080)
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      // Sanitary (1920x1080)
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1631889993954-4b1c9b791b1a?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=jpg&w=1920&h=1080&q=95&dpr=2",
    ],
    []
  );

  const [bgIndex, setBgIndex] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const id = window.setInterval(() => {
      setBgIndex((prev) => {
        const len = heroBgImages.length || 1;
        // find next non-broken image
        for (let step = 1; step <= len; step++) {
          const next = (prev + step) % len;
          if (!broken[next]) return next;
        }
        return prev;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, [heroBgImages.length, broken]);

  const stats = [
    { value: "6+", label: "Years Experience", delay: 0, icon: Award },
    { value: "500+", label: "Projects Completed", delay: 0.1, icon: CheckCircle },
    { value: "7+", label: "Product Categories", delay: 0.2, icon: Truck },
  ];

  const quickFeatures = [
    { text: "Premium Quality", icon: Shield },
    { text: "Expert Guidance", icon: Award },
    { text: "Timely Delivery", icon: Truck },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 px-4 pb-8 sm:pb-12 md:pb-16"
    >
      {/* Parallax Background - Product Images Only - Big & Clear */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* One-image-at-a-time background slideshow */}
        <motion.img
          key={bgIndex}
          src={heroBgImages[bgIndex]}
          alt="Tiles & Sanitary Products"
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={() => setBroken((p) => ({ ...p, [bgIndex]: true }))}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/32 via-charcoal/20 to-charcoal/32" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* NOTE: previous multi-image strip scroller removed; now we show 1 image at a time */}

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-5xl ml-0 sm:ml-4 md:ml-8 lg:ml-12 w-full">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-5 sm:mb-6 md:mb-8 shadow-soft backdrop-blur-md flex-wrap"
          >
            <span className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${i < 4 ? "text-gold fill-gold" : "text-gold/50 fill-gold/50"}`}
                />
              ))}
            </span>
            <span className="h-3 sm:h-4 w-px bg-border/50" />
            <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
              Trusted Since 2019
            </span>
            <span className="h-3 sm:h-4 w-px bg-border/50" />
            <span className="flex items-center gap-1 text-xs sm:text-sm font-medium text-primary">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">500+ Projects</span>
              <span className="sm:hidden">500+</span>
            </span>
          </motion.div>

          {/* Headline with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-4 sm:mb-5 md:mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-charcoal mb-1 sm:mb-2"
            >
              Complete
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-gradient mb-1 sm:mb-2"
            >
              Tiles & Sanitary
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-primary"
            >
              Solutions
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-5 sm:mb-6 md:mb-7 leading-relaxed"
          >
            Your trusted destination for high-quality{" "}
            <strong className="text-foreground">tiles, sanitary ware, waterproofing solutions</strong>, 
            and construction support products in{" "}
            <strong className="text-primary">Vijayawada, Andhra Pradesh</strong>.
          </motion.p>

          {/* Quick Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-7"
          >
            {quickFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md border border-border/50"
              >
                <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
          >
            <Button 
              size="lg" 
              className="group text-sm sm:text-base md:text-lg px-7 sm:px-9 py-5 sm:py-6 md:py-7 shadow-glow animate-pulse-glow w-full sm:w-auto font-semibold relative overflow-hidden" 
              asChild
            >
              <a href="#products" className="relative z-10 flex items-center justify-center">
                <span>Explore Products</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm sm:text-base md:text-lg px-7 sm:px-9 py-5 sm:py-6 md:py-7 glass border-primary/30 hover:border-primary/50 hover:bg-primary/10 backdrop-blur-md w-full sm:w-auto font-semibold transition-all duration-300" 
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Free Quote
              </a>
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + stat.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glass rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1.2 + stat.delay }}
                  className="flex items-center justify-center mb-2 sm:mb-3"
                >
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">
                    {stat.value}
                  </span>
                </motion.div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">
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
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
