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
      description: "High-quality tiles, sanitary ware, and construction materials sourced from trusted manufacturers",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Timely delivery ensuring your projects stay on schedule",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional consultation to help you choose the perfect products for your project",
    },
  ];

  const highlights = [
    "Wide range of tiles & sanitary products",
    "Competitive pricing",
    "Quality assured products",
    "Waterproofing solutions",
    "Expert consultation included",
    "After-sales support",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-warm-gradient overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
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
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4 sm:mb-6"
            >
              Your Trusted Partner in{" "}
              <span className="text-gradient">Tiles & Sanitary</span> Since 2019
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
            >
              Established in 2019, E.G. Associates has grown into a reliable name in the tiles 
              and sanitary industry. With years of hands-on experience, we have successfully 
              supported a wide range of residential, commercial, and government infrastructure projects.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
            >
              Our expertise is backed by our involvement in several large-scale works, including 
              the Ongole to Gudivada Railway Platform Parking Tiles Project, completed between 
              2020 and 2021. This project stands as a testament to our commitment to quality 
              materials, timely execution, and professional service.
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
                className="group glass rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow"
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
              className="bg-gradient-to-br from-primary to-accent rounded-xl md:rounded-2xl p-4 sm:p-6 text-primary-foreground"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">500+</div>
                  <div className="text-primary-foreground/80 text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div className="h-px flex-1 mx-3 sm:mx-6 bg-primary-foreground/20" />
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">6+</div>
                  <div className="text-primary-foreground/80 text-xs sm:text-sm">Years Experience</div>
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
