import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "OURO",
    price: "R$ 190",
    period: "/MÊS",
    color: "#D4AF37", // Dourado
    features: [
      "Treino 5x por semana.",
      "Até 2 professores pré-determinados.",
    ],
    message: "Olá! Tenho interesse no **Plano Ouro** (R$ 190/mês). Pode me explicar como funciona a inscrição, os horários e as formas de pagamento?",
  },
  {
    name: "PRATA",
    price: "R$ 150",
    period: "/MÊS",
    color: "#A8A8A8", // Prateado
    features: [
      "Treino 3x por semana.",
      "Professores e horários fixos.",
    ],
    featured: true,
    message: "Olá! Tenho interesse no **Plano Prata** (R$ 150/mês) - o mais popular. Pode me explicar como funciona a inscrição, os horários e as formas de pagamento?",
  },
  {
    name: "BRONZE",
    price: "R$ 130",
    period: "/MÊS",
    color: "#CD7F32", // Bronze
    features: [
      "Treino 2x por semana.",
      "Professores e horários fixos.",
    ],
    message: "Olá! Tenho interesse no **Plano Bronze** (R$ 130/mês). Pode me explicar como funciona a inscrição, os horários e as formas de pagamento?",
  },
  {
    name: "CHAMPION",
    price: "R$ 210",
    period: "/MÊS",
    color: "#3B82F6", // Azul
    features: [
      "Quantidade de treinos livres.",
      "Maior flexibilidade.",
      "Até 3 professores.",
    ],
    message: "Olá! Tenho interesse no **Plano Champion** (R$ 210/mês). Pode me explicar como funciona a inscrição, os horários e as formas de pagamento?",
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubscribe = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/SEU_NUMERO_AQUI?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
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
              className={`bg-card border-2 p-8 rounded-2xl relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              style={{
                borderColor: plan.featured ? plan.color : "#333",
                boxShadow: plan.featured ? `0 0 25px ${plan.color}30` : "none",
              }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent px-6 py-1.5 rounded-full">
                  <span className="font-montserrat text-xs font-bold text-foreground tracking-widest">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className="font-bebas text-3xl tracking-wider mb-4"
                  style={{ color: plan.color }}
                >
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

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className="font-montserrat text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe(plan.message)}
                className="w-full h-14 text-base font-semibold font-montserrat transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: plan.color,
                  color: "#000000",
                  fontWeight: "700",
                }}
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