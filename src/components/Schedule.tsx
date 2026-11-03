import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { scheduleDays, scheduleSlots, type ClassName, type DayId } from "@/config/site";
import { cn } from "@/lib/utils";

const classTone: Record<Exclude<ClassName, null>, string> = {
  Adulto: "bg-foreground/10 text-foreground",
  Teens: "bg-primary/15 text-primary",
};

const ClassBadge = ({ value }: { value: ClassName }) => {
  if (!value) {
    return <span className="font-montserrat text-sm text-muted-foreground">Sem aula</span>;
  }

  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 font-montserrat text-xs font-semibold uppercase tracking-wide", classTone[value])}>
      {value}
    </span>
  );
};

export const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [day, setDay] = useState<DayId>("seg");

  return (
    <section id="schedule" className="bg-background py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Grade semanal"
            title="Horários"
            subtitle="Segunda a sexta. A turma teens acontece terça e quinta, às 19h."
          />
        </motion.div>

        <div className="mx-auto max-w-5xl md:hidden">
          <div className="mb-4 grid grid-cols-5 gap-1.5" role="tablist" aria-label="Dia da semana">
            {scheduleDays.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={day === item.id}
                aria-label={item.full}
                onClick={() => setDay(item.id)}
                className={cn(
                  "px-1 py-2 font-montserrat text-xs font-semibold uppercase tracking-wide",
                  day === item.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <ul className="border border-border bg-card">
            {scheduleSlots.map((slot) => (
              <li key={slot.time} className="flex items-center justify-between border-b border-border px-4 py-4 last:border-b-0">
                <span className="font-display text-2xl font-semibold tracking-wide text-foreground">{slot.time}</span>
                <ClassBadge value={slot.classes[day]} />
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto hidden max-w-5xl overflow-x-auto border border-border bg-card md:block"
        >
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr>
                <th className="w-28 p-4 text-left font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Hora
                </th>
                {scheduleDays.map((item) => (
                  <th key={item.id} className="p-4 text-center font-display text-xl font-semibold tracking-wider text-foreground">
                    {item.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleSlots.map((slot) => (
                <tr key={slot.time} className="border-t border-border">
                  <th className="p-4 text-left font-display text-xl font-semibold tracking-wide text-foreground">
                    {slot.time}
                  </th>
                  {scheduleDays.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <ClassBadge value={slot.classes[item.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center gap-4 font-montserrat text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-foreground/70" /> Adulto
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-primary" /> Teens
          </span>
        </div>
      </div>
    </section>
  );
};
