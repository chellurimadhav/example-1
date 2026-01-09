import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Building2, Truck, Award, Target, Gem } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Only the finest natural sandstone sourced from trusted quarries across India",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Reliable logistics network ensuring timely delivery anywhere in India",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional consultation to help you choose the perfect stone for your project",
    },
  ];

  const highlights = [
    "Wide range of sandstone varieties",
    "Competitive wholesale pricing",
    "Quality assured products",
    "Custom sizing available",
    "Expert consultation included",
    "After-sales support",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-gradient overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4"
            >
              About E.G. Associates
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6"
            >
              Your Trusted Partner in{" "}
              <span className="text-gradient">Natural Stone</span> Since 2019
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              E.G. Associates is a leading trader and wholesaler of premium natural stone 
              products based in Vijayawada, Andhra Pradesh. With over 6 years of experience, 
              we have built a reputation for supplying the highest quality sandstone tiles, 
              red sandstone, and sandstone slabs.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Our commitment to quality, competitive pricing, and exceptional customer service 
              has made us the preferred choice for builders, architects, and homeowners across 
              Andhra Pradesh and beyond.
            </motion.p>

            {/* Checkmarks Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group glass rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow"
                  >
                    <feature.icon className="h-7 w-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-primary-foreground"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold mb-1">19+</div>
                  <div className="text-primary-foreground/80">Google Reviews</div>
                </div>
                <div className="h-px flex-1 mx-6 bg-primary-foreground/20" />
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">4.5★</div>
                  <div className="text-primary-foreground/80">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
