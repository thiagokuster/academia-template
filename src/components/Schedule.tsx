import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const days = ["SEG", "TER", "QUA", "QUI", "SEX"];
const times = [
  "6H", "7:30", "8:30", "9:30", "16H", "17H", "18H", "19H", "20H"
];

const scheduleData: Record<string, Record<string, string>> = {
  "6H": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "7:30": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "8:30": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "9:30": { SEG: "ADULTO", TER: "ADULTO", QUA: "---", QUI: "ADULTO", SEX: "---" },
  "16H": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "17H": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "18H": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
  "19H": { SEG: "ADULTO", TER: "TEENS", QUA: "ADULTO", QUI: "TEENS", SEX: "ADULTO" },
  "20H": { SEG: "ADULTO", TER: "ADULTO", QUA: "ADULTO", QUI: "ADULTO", SEX: "ADULTO" },
};

export const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            NOSSOS HORÁRIOS
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground">
            Horarios atualizados semanalmente
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 w-20"></th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="p-4 text-center font-bebas text-xl tracking-wider text-foreground"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map((time, rowIndex) => (
                  <motion.tr
                    key={time}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: rowIndex * 0.05 }}
                    className="border-t border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    {/* Coluna de horários - sem fundo cinza */}
                    <td className="p-4 font-bebas text-lg text-foreground text-center border-r border-border/50">
                      {time}
                    </td>

                    {/* Dias da semana */}
                    {days.map((day) => {
                      const value = scheduleData[time][day];
                      const isEmpty = value === "---";
                      const isTeens = value === "TEENS";

                      return (
                        <td
                          key={day}
                          className={`p-4 text-center border-r border-border/30 last:border-r-0 font-medium transition-all duration-300 ${isEmpty
                            ? "text-muted-foreground/60"
                            : isTeens
                              ? "bg-violet-950/40 border border-violet-500/30 text-violet-300 font-semibold rounded-md"
                              : "text-foreground"
                            }`}
                        >
                          {isEmpty ? "—" : value}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};