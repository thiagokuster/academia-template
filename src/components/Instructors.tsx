import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const instructors = [
  {
    name: "INSTRUTOR 01",
    title: "FAIXA PRETA | EXPERIENCIA AVANCADA",
    bio: "Profissional certificado com foco em tecnica, seguranca e evolucao dos alunos.",
    image: instructor1,
  },
  {
    name: "INSTRUTORA 02",
    title: "FAIXA PRETA | PREPARACAO FISICA",
    bio: "Especialista em condicionamento, mobilidade e desenvolvimento progressivo.",
    image: instructor2,
  },
  {
    name: "INSTRUTOR 03",
    title: "FAIXA PRETA | PERFORMANCE",
    bio: "Atua no aprimoramento tecnico e no preparo para treino recreativo ou competitivo.",
    image: instructor3,
  },
];

export const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            NOSSOS INSTRUTORES
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Aprenda com os melhores profissionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <h3 className="font-bebas text-3xl text-foreground tracking-wider mb-2">
                {instructor.name}
              </h3>
              <p className="font-montserrat text-sm text-accent mb-3">
                {instructor.title}
              </p>
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed">
                {instructor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
