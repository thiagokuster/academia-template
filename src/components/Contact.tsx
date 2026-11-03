import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/SectionHeading";
import { goals, site, whatsappUrl } from "@/config/site";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [goal, setGoal] = useState<string>(goals[0].value);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    if (cleanName.length < 2) {
      setError("Informe seu nome para montarmos a mensagem.");
      return;
    }

    const goalLabel = goals.find((item) => item.value === goal)?.label ?? goals[0].label;
    const message = `Olá! Meu nome é ${cleanName}. Quero agendar uma aula experimental. Meu objetivo é ${goalLabel.toLowerCase()}.`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setError("");
  };

  return (
    <section id="contact" className="bg-secondary py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Visite a academia"
            title="Contato"
            subtitle="Agende a aula experimental pelo formulário ou chame direto no WhatsApp."
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <form onSubmit={submit} className="space-y-4 border border-border bg-card p-6" noValidate>
              <div className="space-y-2">
                <label htmlFor="nome" className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Nome
                </label>
                <Input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  className="h-12"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "nome-erro" : undefined}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="objetivo" className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Objetivo
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={goal}
                  onChange={(event) => setGoal(event.target.value)}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 font-montserrat text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {goals.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              {error ? (
                <p id="nome-erro" role="alert" className="font-montserrat text-sm text-primary">
                  {error}
                </p>
              ) : null}
              <Button type="submit" className="h-12 w-full font-montserrat text-xs font-semibold uppercase tracking-[0.14em]">
                Quero minha aula experimental
              </Button>
            </form>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-montserrat text-sm leading-relaxed text-muted-foreground hover:text-foreground">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:+${site.phoneE164}`} className="font-montserrat text-sm text-muted-foreground hover:text-foreground">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="font-montserrat text-sm text-muted-foreground hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-montserrat text-sm text-muted-foreground hover:text-foreground">
                  {site.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="min-h-[360px] overflow-hidden border border-border lg:min-h-full">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Mapa: ${site.fullName}`}
              className="h-full min-h-[360px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
