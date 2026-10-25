import { motion } from "framer-motion";
import { Trophy, Rocket, Brain, Building, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Rocket,
    title: "Deployed AI Healthcare App",
    text: "Developed and deployed a production-grade AI-powered healthcare application for blood cell classification.",
    color: "from-[#3B82F6] to-[#8B5CF6]",
  },
  {
    icon: Brain,
    title: "AI/ML Internships Completed",
    text: "Successfully completed multiple AI & Machine Learning virtual internships with industry mentors.",
    color: "from-[#8B5CF6] to-[#06B6D4]",
  },
  {
    icon: Code2,
    title: "End-to-End ML Projects",
    text: "Built end-to-end machine learning projects from data preprocessing to model deployment.",
    color: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    icon: Building,
    title: "Software Engineering Foundations",
    text: "Strong foundation in software engineering principles, DSA, OOP, DBMS, OS, and Networks.",
    color: "from-[#3B82F6] to-[#06B6D4]",
  },
  {
    icon: Trophy,
    title: "Hackathons & Tech Events",
    text: "Active participant in hackathons and technical events to sharpen problem-solving skills.",
    color: "from-[#8B5CF6] to-[#3B82F6]",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-40 left-1/3 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Achievements & Milestones"
          description="Moments and wins that mark the journey so far."
        />

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#3B82F6]/50 via-[#8B5CF6]/50 to-transparent md:left-8" />
          <ul className="space-y-6">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                <div className={`absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${it.color} shadow-lg shadow-blue-500/30 md:h-14 md:w-14`}>
                  <it.icon className="text-white" size={20} />
                </div>
                <div className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/20 sm:p-6">
                  <h3 className="font-bold text-base text-white sm:text-lg">{it.title}</h3>
                  <p className="mt-1 text-sm text-[#94A3B8]">{it.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
