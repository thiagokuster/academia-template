import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "ALUNO HÁ 2 ANOS",
    text: "Mudou minha vida completamente. Perdi 25kg, ganhei confiança e fiz amigos incríveis. Os instrutores são excepcionais e o ambiente é motivador.",
  },
  {
    name: "Juliana Martins",
    role: "ALUNA HÁ 1 ANO",
    text: "Sempre tive medo de lutas, mas aqui me sinto segura e acolhida. Aprendi defesa pessoal e melhorei minha forma física como nunca imaginei.",
  },
  {
    name: "Pedro Henrique",
    role: "ALUNO HÁ 3 ANOS",
    text: "Da iniciante a competidor. Hoje sou faixa preta e conquistei meu primeiro título estadual. Gratidão eterna aos mestres dessa academia.",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            DEPOIMENTOS
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Histórias de transformação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="w-10 h-10 text-muted mb-4" />
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bebas text-xl text-foreground tracking-wider">
                  {testimonial.name}
                </h4>
                <p className="font-montserrat text-xs text-accent">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
