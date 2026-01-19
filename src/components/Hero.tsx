import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Play, Sparkles, CheckCircle, Award, Truck, Shield } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Tiles & Sanitary Solutions"
          className="w-full h-full object-cover scale-110"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/50" />
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
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl ml-0 sm:ml-4 md:ml-8 lg:ml-12">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-soft backdrop-blur-md"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-5 sm:mb-6 md:mb-7"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-6 sm:mb-7 md:mb-9 leading-relaxed"
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
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-9"
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-14"
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
            className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-lg mx-auto"
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
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
