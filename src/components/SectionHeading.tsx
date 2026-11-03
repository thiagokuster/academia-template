type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
      <p className="mb-3 font-montserrat text-xs font-semibold uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl font-semibold uppercase leading-none tracking-tight text-foreground md:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 font-montserrat text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
