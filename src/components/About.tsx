import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/config/site";
import aboutImage from "@/assets/gallery-1.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-secondary py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              {about.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-semibold uppercase leading-[0.92] tracking-tight text-foreground md:text-7xl">
              {about.title}
            </h2>
            <p className="mt-6 max-w-xl font-montserrat text-base leading-relaxed text-foreground md:text-lg">
              {about.lead}
            </p>
            <p className="mt-4 max-w-xl font-montserrat text-base leading-relaxed text-muted-foreground">
              {about.body}
            </p>
            <a
              href="#schedule"
              className="mt-8 inline-flex font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-primary"
            >
              Ver a grade da semana
            </a>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Alunos em treino de kickboxing"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 border border-border bg-background/90 p-4 backdrop-blur-sm">
              <p className="font-montserrat text-sm leading-relaxed text-foreground">{about.note}</p>
            </figcaption>
          </motion.figure>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {about.steps.map((item, index) => (
            <li key={item.step} className="bg-secondary p-6 md:p-7">
              <p className="font-display text-3xl font-semibold text-primary">{item.step}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="sr-only">Etapa {index + 1} de {about.steps.length}</span>
            </li>
          ))}
        </ol>

        <ul className="mt-px grid grid-cols-1 border border-border sm:grid-cols-3">
          {about.audiences.map((item) => (
            <li key={item.title} className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
