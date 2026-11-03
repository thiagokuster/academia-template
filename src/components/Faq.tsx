import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/config/site";

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        </motion.div>

        <Accordion type="single" collapsible className="mx-auto max-w-3xl border border-border bg-card px-5 md:px-8">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-xl font-semibold uppercase tracking-wide text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
