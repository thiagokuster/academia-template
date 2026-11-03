import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site, stats } from "@/config/site";
import heroImage from "@/assets/hero-kickboxing.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-10 pt-32 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-montserrat text-xs font-semibold uppercase tracking-[0.34em] text-primary">
            {site.eyebrow}
          </p>
          <h1 className="font-display text-6xl font-semibold uppercase leading-[0.88] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {site.heroTitle[0]}
            <br />
            {site.heroTitle[1]}
            <br />
            {site.heroTitle[2].replace(".", "")}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-montserrat text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.12em]">
              <a href="#contact">Aula experimental</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-foreground/30 bg-background/40 px-8 font-montserrat text-sm font-semibold uppercase tracking-[0.12em] backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#pricing">Ver planos</a>
            </Button>
          </div>
        </motion.div>

        <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-foreground/15 pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-semibold uppercase tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 font-montserrat text-xs leading-snug text-muted-foreground md:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
