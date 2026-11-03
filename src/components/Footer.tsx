import { Facebook, Instagram, Youtube } from "lucide-react";
import { navItems, site } from "@/config/site";

const socials = [
  { href: site.instagramUrl, label: "Instagram", icon: Instagram },
  { href: site.facebookUrl, label: "Facebook", icon: Facebook },
  { href: site.youtubeUrl, label: "YouTube", icon: Youtube },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#hero" className="font-display text-3xl font-semibold uppercase tracking-[0.16em] text-foreground">
              {site.name}
            </a>
            <p className="mt-3 max-w-xs font-montserrat text-sm leading-relaxed text-muted-foreground">
              {site.fullName}. {site.addressLines[0]}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Rodapé">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 font-montserrat text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
