import { motion } from "framer-motion";
import { CheckCircle2, Building2, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Exp = {
  role: string;
  company: string;
  logo: string;
  period: string;
  mode: string;
  accent: string;
  glow: string;
  responsibilities: string[];
};

const timeline: { year: string; items: Exp[] }[] = [
  {
    year: "2026",
    items: [
      {
        role: "AI & Machine Learning Virtual Intern",
        company: "SmartInternz",
        logo: "SI",
        period: "May 2026 – Jul 2026",
        mode: "Virtual Internship",
        accent: "from-[#8B5CF6] to-[#06B6D4]",
        glow: "rgba(139,92,246,0.35)",
        responsibilities: [
          "Machine learning implementation",
          "Data analysis",
          "Python development",
          "Debugging and testing",
          "Software development workflow",
        ],
      },
      {
        role: "AI & Machine Learning Virtual Intern",
        company: "HMIES Solution Pvt. Ltd.",
        logo: "HM",
        period: "Jun 2026 – Aug 2026",
        mode: "Virtual Internship",
        accent: "from-[#3B82F6] to-[#8B5CF6]",
        glow: "rgba(59,130,246,0.35)",
        responsibilities: [
          "Data preprocessing",
          "Machine learning model development",
          "Python programming",
          "Problem solving",
          "Model training and evaluation",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#06B6D4]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career milestones"
          title="Experience Timeline"
          description="Hands-on AI & Machine Learning internships that shaped my journey in data science and software engineering."
        />

        <div className="relative">
          {timeline.map((group) => (
            <div key={group.year} className="relative">
              {/* ── Year marker ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mb-10 flex items-center gap-4 sm:gap-6"
              >
                <div className="relative shrink-0">
                  <span className="pointer-events-none absolute -inset-3 rounded-2xl bg-[#3B82F6]/25 blur-2xl" />
                  <span className="relative flex h-16 w-24 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] text-2xl font-black tracking-tight text-white shadow-[0_0_35px_rgba(59,130,246,0.5)] sm:h-[72px] sm:w-28 sm:text-3xl">
                    {group.year}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase">
                    Timeline Year
                  </p>
                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {group.items.length} AI &amp; ML Internships
                  </p>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:block" />
              </motion.div>

              {/* ── Animated vertical line ── */}
              <div className="absolute top-[88px] bottom-6 left-[30px] w-px overflow-hidden sm:left-[46px]">
                <div className="h-full w-full bg-white/10" />
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                  className="absolute inset-0 bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] shadow-[0_0_14px_rgba(59,130,246,0.7)]"
                />
              </div>

              {/* ── Entries ── */}
              <div className="space-y-8 pl-[62px] sm:pl-[94px]">
                {group.items.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    {/* Connector node */}
                    <span className="absolute top-8 -left-[42px] flex h-4 w-4 items-center justify-center sm:-left-[58px]">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-[#3B82F6]/40" />
                      <span
                        className={`relative h-3.5 w-3.5 rounded-full bg-gradient-to-br ${exp.accent} shadow-[0_0_14px_rgba(59,130,246,0.9)] ring-4 ring-[#0B0F19]`}
                      />
                    </span>
                    {/* Horizontal connector */}
                    <span className="absolute top-[38px] -left-[30px] h-px w-[26px] bg-gradient-to-r from-[#3B82F6]/60 to-transparent sm:-left-[46px] sm:w-[42px]" />

                    {/* Card */}
                    <div className="relative">
                      <div
                        className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                        style={{ background: exp.glow }}
                      />
                      <div className="glass-strong relative overflow-hidden rounded-2xl border border-white/10 p-5 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-white/25 sm:p-7">
                        {/* Accent bar */}
                        <span
                          className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${exp.accent}`}
                        />

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            {/* Company logo placeholder */}
                            <span
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${exp.accent} text-sm font-black tracking-tight text-white shadow-lg sm:h-14 sm:w-14 sm:text-base`}
                            >
                              {exp.logo}
                            </span>
                            <div className="min-w-0">
                              <h3 className="text-base leading-snug font-bold text-white sm:text-lg">
                                {exp.role}
                              </h3>
                              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-[#60A5FA]">
                                <Building2 size={13} />
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] whitespace-nowrap text-white/80">
                              <CalendarDays size={11} className="text-[#8B5CF6]" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10.5px] whitespace-nowrap text-emerald-400">
                              <MapPin size={11} />
                              {exp.mode}
                            </span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mt-5 border-t border-white/8 pt-4">
                          <p className="font-mono text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase">
                            Responsibilities
                          </p>
                          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {exp.responsibilities.map((r) => (
                              <li
                                key={r}
                                className="flex items-start gap-2 text-[13px] text-white/80"
                              >
                                <CheckCircle2
                                  size={13}
                                  className="mt-[3px] shrink-0 text-emerald-400"
                                />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
