import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Wallet, Users, Star, Truck, Award, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every product undergoes rigorous quality checks",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wallet,
      title: "Best Prices",
      description: "Direct sourcing for competitive wholesale rates",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable logistics across India",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional guidance for your projects",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "6+ Years",
      description: "Trusted experience since 2019",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Star,
      title: "4.5★ Rated",
      description: "Consistently positive reviews",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Award,
      title: "Premium Grade",
      description: "Only the finest natural stones",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: HeartHandshake,
      title: "After Sales",
      description: "Dedicated support always",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">E.G. Associates</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing exceptional value and service that sets us apart in the tiles and sanitary industry.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.05 }}
                className="group text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${reason.color} mb-3 sm:mb-4 md:mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                  <reason.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </motion.div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "7+", label: "Product Categories" },
              { value: "6+", label: "Years Experience" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
