import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/config/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="h-8 w-1.5 bg-primary" aria-hidden="true" />
            <span className="font-display text-3xl font-semibold uppercase tracking-[0.18em] text-foreground">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Seções">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "font-montserrat text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="inline-flex h-10 items-center bg-primary px-4 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Aula grátis
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-foreground xl:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="menu-mobile"
          className="absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-5rem)] flex-col gap-2 overflow-y-auto bg-background px-6 py-6 xl:hidden"
          aria-label="Seções"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-border py-4 font-display text-3xl font-semibold uppercase tracking-wide text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex h-12 items-center justify-center bg-primary font-montserrat text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Agendar aula experimental
          </a>
        </nav>
      ) : null}
    </header>
  );
};
