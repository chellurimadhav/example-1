import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Award } from "lucide-react";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sanitaryPartners = [
    { name: "Moonwave", logo: "Moonwave" },
    { name: "RAK", logo: "RAK" },
    { name: "Cera", logo: "Cera" },
    { name: "Seron", logo: "Seron" },
  ];

  const tilesPartners = [
    { name: "Leading Brands", logo: "Premium Tiles" },
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Trusted <span className="text-gradient">Brand Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We work with leading brands to ensure quality and reliability in every project.
          </p>
        </motion.div>

        {/* Sanitary Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Sanitary Partners
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {sanitaryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h4 className="font-serif font-semibold text-sm sm:text-base md:text-lg text-foreground">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tiles Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Tiles Partners
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {tilesPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-serif font-semibold text-lg text-foreground">
                  {partner.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-2">To be updated</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-6">
            <Award className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-foreground font-semibold mb-1">
                Authorized Dealers & Distributors
              </p>
              <p className="text-muted-foreground text-sm">
                Quality assured products from trusted brand partners
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
