import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Heart, Target } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "CONDICIONAMENTO",
    description: "Melhore sua forma física e resistência com treinos de alta intensidade",
  },
  {
    icon: Shield,
    title: "DEFESA PESSOAL",
    description: "Aprenda técnicas eficazes de proteção e autoconfiança",
  },
  {
    icon: Heart,
    title: "SAÚDE",
    description: "Perda de peso, fortalecimento muscular e bem-estar completo",
  },
  {
    icon: Target,
    title: "FOCO",
    description: "Desenvolva disciplina mental e concentração para a vida",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            O QUE É KICKBOXING?
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kickboxing é uma arte marcial moderna que combina técnicas de soco do boxe com chutes potentes. 
            É um treino completo que transforma corpo e mente, desenvolvendo força, agilidade, 
            coordenação e confiança. Seja para defesa pessoal, competição ou condicionamento físico, 
            o kickboxing oferece resultados incomparáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border p-8 hover:border-accent transition-all duration-300 group"
            >
              <benefit.icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors mb-4" />
              <h3 className="font-bebas text-2xl text-foreground tracking-wider mb-3">
                {benefit.title}
              </h3>
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
