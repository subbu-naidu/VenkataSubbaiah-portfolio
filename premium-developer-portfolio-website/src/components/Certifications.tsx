import { motion } from "framer-motion";
import { Award, BadgeCheck, ScrollText, Code2, Globe, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  {
    title: "Machine Learning with Python",
    issuer: "Online Certification",
    icon: BadgeCheck,
    accent: "from-[#3B82F6] to-[#8B5CF6]",
  },
  {
    title: "Python Programming",
    issuer: "Online Certification",
    icon: Code2,
    accent: "from-[#8B5CF6] to-[#06B6D4]",
  },
  {
    title: "Web Development",
    issuer: "Online Certification",
    icon: Globe,
    accent: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    title: "APSCHE SmartInternz Internship",
    issuer: "APSCHE × SmartInternz",
    icon: Award,
    accent: "from-[#3B82F6] to-[#06B6D4]",
  },
  {
    title: "Think Champ Python Full Stack Workshop",
    issuer: "Think Champ",
    icon: GraduationCap,
    accent: "from-[#8B5CF6] to-[#3B82F6]",
  },
  {
    title: "AI & Machine Learning Virtual Internship",
    issuer: "HMIES Solution Pvt. Ltd.",
    icon: ScrollText,
    accent: "from-[#06B6D4] to-[#8B5CF6]",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-40 right-1/4 h-80 w-80 rounded-full bg-[#3B82F6]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continuous learning"
          title="Certifications & Credentials"
          description="Validated skills from programs, workshops, and internships across AI, ML, and full-stack development."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:border-white/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} opacity-10 blur-2xl transition group-hover:opacity-30`} />
              <div className="relative flex items-start gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} shadow-lg`}>
                  <c.icon className="text-white" size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base leading-snug text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#94A3B8]">{c.issuer}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] text-emerald-400">
                    <BadgeCheck size={11} /> Verified
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
