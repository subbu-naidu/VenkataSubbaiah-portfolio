import { motion } from "framer-motion";
import {
  Code2, Globe, Database, BrainCircuit, Wrench, Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Programming Languages",
    icon: Code2,
    accent: "from-[#3B82F6] to-[#06B6D4]",
    skills: [
      { name: "Python", level: 92 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    accent: "from-[#8B5CF6] to-[#3B82F6]",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 78 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    accent: "from-[#06B6D4] to-[#8B5CF6]",
    skills: [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    accent: "from-[#3B82F6] to-[#8B5CF6]",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "Keras", level: 80 },
      { name: "Transfer Learning", level: 78 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "from-[#8B5CF6] to-[#06B6D4]",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    accent: "from-[#06B6D4] to-[#3B82F6]",
    skills: [
      { name: "DSA", level: 82 },
      { name: "OOP", level: 88 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "Computer Networks", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-40 right-1/4 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Expertise"
          description="A curated stack of technologies I use to build intelligent, scalable, and beautiful software."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-2 hover:border-white/20"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.accent} opacity-10 blur-3xl transition group-hover:opacity-30`} />
              <div className="relative">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${g.accent} shadow-lg`}>
                  <g.icon className="text-white" size={20} />
                </div>
                <h3 className="mb-4 font-bold text-lg text-white">{g.title}</h3>
                <div className="space-y-3">
                  {g.skills.map((s, si) => (
                    <div key={s.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm text-white">{s.name}</span>
                        <span className="font-mono text-[11px] text-[#94A3B8]">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + si * 0.08, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${g.accent}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
