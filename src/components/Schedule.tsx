import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { day: "SEGUNDA", time: "06:00 - 07:30", level: "INICIANTE", time2: "18:00 - 19:30", level2: "AVANÇADO" },
  { day: "TERÇA", time: "06:00 - 07:30", level: "INTERMEDIÁRIO", time2: "18:00 - 19:30", level2: "LUTA" },
  { day: "QUARTA", time: "06:00 - 07:30", level: "INICIANTE", time2: "18:00 - 19:30", level2: "AVANÇADO" },
  { day: "QUINTA", time: "06:00 - 07:30", level: "INTERMEDIÁRIO", time2: "18:00 - 19:30", level2: "LUTA" },
  { day: "SEXTA", time: "06:00 - 07:30", level: "INICIANTE", time2: "18:00 - 19:30", level2: "AVANÇADO" },
  { day: "SÁBADO", time: "09:00 - 11:00", level: "TODOS OS NÍVEIS", time2: "", level2: "" },
];

export const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            HORÁRIOS DAS AULAS
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Escolha o melhor horário para seu treino
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-4">
          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-6 hover:border-accent transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="font-bebas text-2xl text-foreground tracking-wider md:w-32">
                  {item.day}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-montserrat text-muted-foreground">{item.time}</span>
                    <span className="font-montserrat text-sm text-foreground bg-muted px-3 py-1 w-fit">
                      {item.level}
                    </span>
                  </div>
                  {item.time2 && (
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-montserrat text-muted-foreground">{item.time2}</span>
                      <span className="font-montserrat text-sm text-foreground bg-muted px-3 py-1 w-fit">
                        {item.level2}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
