import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { planMessage, plans, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Mensalidade"
            title="Planos"
            subtitle="Quatro opções, do treino duas vezes por semana até a grade livre. O WhatsApp já abre com o plano escolhido."
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "relative flex flex-col border bg-card p-6",
                plan.featured ? "border-primary shadow-[0_0_0_1px_hsl(var(--primary))]" : "border-border",
              )}
            >
              {plan.featured ? (
                <p className="absolute -top-3 left-6 bg-primary px-3 py-1 font-montserrat text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Mais escolhido
                </p>
              ) : null}

              <h3 className="font-display text-3xl font-semibold uppercase tracking-wide" style={{ color: plan.accent }}>
                {plan.name}
              </h3>
              <p className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold leading-none text-foreground">{plan.price}</span>
                <span className="mb-1 font-montserrat text-sm text-muted-foreground">/mês</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="font-montserrat text-sm leading-relaxed text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="mt-8 h-12 w-full font-montserrat text-xs font-semibold uppercase tracking-[0.12em]"
              >
                <a
                  href={whatsappUrl(planMessage(plan.name, plan.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero este plano
                </a>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
