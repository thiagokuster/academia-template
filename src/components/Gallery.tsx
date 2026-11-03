import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryAlts } from "@/config/site";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export const Gallery = () => {
  const ref = useRef(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? current : (current + 1) % images.length));
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="No tatame"
            title="Galeria"
            subtitle="Clique em uma foto para ampliar. As setas do teclado também navegam."
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.button
              key={galleryAlts[index]}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              onClick={() => setActive(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ampliar foto: ${galleryAlts[index]}`}
            >
              <img
                src={image}
                alt={galleryAlts[index]}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={galleryAlts[active]}
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center text-foreground"
            aria-label="Fechar galeria"
            onClick={() => setActive(null)}
          >
            <X />
          </button>
          <button
            type="button"
            className="absolute left-3 z-10 inline-flex h-11 w-11 items-center justify-center bg-card text-foreground md:left-6"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
            }}
          >
            <ChevronLeft />
          </button>
          <img
            src={images[active]}
            alt={galleryAlts[active]}
            className="max-h-[82svh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-3 z-10 inline-flex h-11 w-11 items-center justify-center bg-card text-foreground md:right-6"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current + 1) % images.length));
            }}
          >
            <ChevronRight />
          </button>
          <p className="absolute bottom-5 font-montserrat text-sm text-muted-foreground">
            {active + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </section>
  );
};
