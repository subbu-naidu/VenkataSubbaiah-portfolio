import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, User, School, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Interactive3DFaceCard from "./Interactive3DFaceCard";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const details = [
  { icon: User, label: "Name", value: "Venkata Subbaiah Chennamsetty" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech" },
  { icon: BookOpen, label: "Branch", value: "Data Science" },
  { icon: School, label: "College", value: "Sri Mittapalli College of Engineering" },
  { icon: Calendar, label: "Graduation", value: "2027" },
  { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
];

const stats = [
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Internships Completed", value: 2, suffix: "" },
  { label: "Certifications Earned", value: 5, suffix: "+" },
  { label: "Technologies Learned", value: 20, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-40 left-1/4 h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          description="Passionate technology enthusiast building the future with code, data, and intelligence."
        />

        {/* ── Top: photo + intro ── */}
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Interactive 3D circular photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <Interactive3DFaceCard
              size="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[330px] lg:w-[330px]"
              showBadges={false}
              showStatus={false}
            />
          </motion.div>

          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-7 sm:p-9">
              <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] shadow-lg shadow-blue-500/40">
                  <User className="text-white" size={22} />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
                  Venkata Subbaiah Chennamsetty
                </h3>
                <p className="mt-1 text-sm font-medium text-[#60A5FA]">
                  Data Science Student &amp; Software Builder
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                  Passionate technology enthusiast with strong foundations in Python
                  programming, SQL, Machine Learning, Web Development, Data Structures,
                  Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.
                </p>
                <p className="mt-3.5 text-sm leading-relaxed text-[#94A3B8]">
                  I love turning raw data into products, and complex problems into simple,
                  delightful experiences. Currently sharpening my craft through AI &amp; ML
                  internships and real-world full-stack projects.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                      Status
                    </p>
                    <p className="mt-1 text-sm font-semibold text-emerald-400">● Open to work</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">AI / ML / SDE</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-3 sm:col-span-1">
                    <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                      Based in
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">Andhra Pradesh, IN</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Details grid ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 text-[#3B82F6] transition group-hover:from-[#3B82F6] group-hover:to-[#8B5CF6] group-hover:text-white">
                  <d.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                    {d.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white">{d.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="gradient-border rounded-2xl p-4 text-center">
              <p className="gradient-text text-2xl font-bold sm:text-3xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] leading-tight text-[#94A3B8]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
