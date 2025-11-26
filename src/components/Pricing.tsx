import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "BÁSICO",
    price: "R$ 149",
    period: "/MÊS",
    features: [
      "2x por semana",
      "Acesso às aulas iniciante",
      "Vestiário e armário",
      "Avaliação física inicial",
    ],
  },
  {
    name: "STANDARD",
    price: "R$ 249",
    period: "/MÊS",
    features: [
      "Treino ilimitado",
      "Todas as aulas (exceto luta)",
      "Vestiário e armário",
      "Acompanhamento mensal",
      "Acesso ao app de treinos",
    ],
    featured: true,
  },
  {
    name: "PREMIUM",
    price: "R$ 399",
    period: "/MÊS",
    features: [
      "Treino ilimitado",
      "Todas as aulas + luta",
      "Personal fight training 1x/semana",
      "Nutrição esportiva",
      "Acesso prioritário",
      "Suporte 24/7",
    ],
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            PLANOS E VALORES
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Escolha o plano ideal para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-card border-2 p-8 ${
                plan.featured ? "border-accent" : "border-border"
              } hover:border-accent transition-all duration-300 relative`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent px-4 py-1">
                  <span className="font-montserrat text-xs font-bold text-foreground">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-bebas text-3xl text-foreground tracking-wider mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-bebas text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-montserrat text-sm text-muted-foreground mb-2">
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-montserrat text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleContact}
                className="w-full bg-primary hover:bg-accent font-montserrat font-semibold"
              >
                ASSINAR AGORA
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
