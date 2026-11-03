import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { instructors } from "@/config/site";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const photos = [instructor1, instructor2, instructor3];

export const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="bg-secondary py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Equipe"
            title="Instrutores"
            subtitle="Faixa-preta em todas as turmas, do primeiro treino à preparação para competir."
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {instructors.map((instructor, index) => (
            <motion.article
              key={instructor.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={photos[index]}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-foreground">
                {instructor.name}
              </h3>
              <p className="mt-1 font-montserrat text-sm font-medium text-primary">{instructor.title}</p>
              <p className="mt-3 font-montserrat text-sm leading-relaxed text-muted-foreground">{instructor.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
