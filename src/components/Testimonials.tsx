import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/config/site";

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="bg-secondary py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Quem treina"
            title="Depoimentos"
            subtitle="O que muda depois de algumas semanas no tatame."
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex h-full flex-col border border-border bg-card p-7"
            >
              <blockquote className="flex-1 font-montserrat text-base leading-relaxed text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">{item.name}</p>
                <p className="mt-1 font-montserrat text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
