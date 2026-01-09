import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Builder & Contractor",
      content: "Excellent quality sandstone at competitive prices. E.G. Associates has been our trusted supplier for all major projects. Their delivery is always on time.",
      rating: 5,
      project: "Residential Complex, Vijayawada",
    },
    {
      name: "Priya Sharma",
      role: "Interior Designer",
      content: "The variety of natural stone options they offer is impressive. Their team provided great guidance in selecting the right stone for my client's villa project.",
      rating: 5,
      project: "Luxury Villa, Hyderabad",
    },
    {
      name: "Mohammed Ismail",
      role: "Architect",
      content: "Professional service and premium quality products. The red sandstone we sourced for the temple project was absolutely stunning. Highly recommended!",
      rating: 5,
      project: "Temple Construction, Guntur",
    },
    {
      name: "Venkat Rao",
      role: "Homeowner",
      content: "Transformed my home's exterior with their sandstone cladding. The quality exceeded my expectations and the price was very reasonable.",
      rating: 4,
      project: "Home Renovation, Vijayawada",
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative glass rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-br from-primary to-accent rounded-full p-3 shadow-glow">
                  <Quote className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-gold fill-gold"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <h4 className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Project</p>
                  <p className="text-sm font-medium text-primary">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-secondary rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.5 Average Rating</span>
            <span className="h-4 w-px bg-border" />
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              View All Reviews →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
