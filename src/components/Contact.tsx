import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            ENTRE EM CONTATO
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Tire suas dúvidas e agende uma aula experimental
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bebas text-xl text-foreground tracking-wider mb-2">
                  ENDEREÇO
                </h3>
                <p className="font-montserrat text-sm text-muted-foreground">
                  Rua dos Lutadores, 123 - Centro<br />
                  São Paulo, SP - CEP 01234-567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bebas text-xl text-foreground tracking-wider mb-2">
                  TELEFONE / WHATSAPP
                </h3>
                <p className="font-montserrat text-sm text-muted-foreground">
                  (11) 98765-4321
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bebas text-xl text-foreground tracking-wider mb-2">
                  E-MAIL
                </h3>
                <p className="font-montserrat text-sm text-muted-foreground">
                  contato@suaacademia.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bebas text-xl text-foreground tracking-wider mb-2">
                  INSTAGRAM
                </h3>
                <p className="font-montserrat text-sm text-muted-foreground">
                  @suaacademia
                </p>
              </div>
            </div>

            <Button
              onClick={() => window.open("https://wa.me/5511987654321", "_blank")}
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-accent font-montserrat font-semibold"
            >
              FALE PELO WHATSAPP
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976290149454!2d-46.6614!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknNDEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Academia"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
