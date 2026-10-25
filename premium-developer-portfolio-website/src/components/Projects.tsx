import { motion } from "framer-motion";
import {
  ExternalLink,
  Info,
  Brain,
  Library,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Brain;
  accent: string;
  glow: string;
  tech: string[];
  features: string[];
  highlights: string[];
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "HematoVision",
    category: "AI / Deep Learning",
    subtitle: "Advanced Blood Cell Classification Using Transfer Learning",
    description:
      "A complete AI-powered healthcare application that classifies blood cell types from microscope images using Transfer Learning. Built end-to-end with TensorFlow, Keras, Flask, SQL and Python — from dataset preprocessing and model fine-tuning to a deployed web interface with persistent prediction history.",
    image: "/projects/hematovision.png",
    icon: Brain,
    accent: "from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6]",
    glow: "rgba(6,182,212,0.35)",
    tech: ["Python", "TensorFlow", "Keras", "Flask", "SQL", "OpenCV", "NumPy"],
    features: [
      "Medical image classification with 90%+ accuracy",
      "Transfer Learning on pre-trained CNN backbones",
      "Drag & drop image upload with instant inference",
      "Flask REST API with SQL prediction history",
      "Confusion matrix & confidence score analytics",
    ],
    highlights: ["Deep Learning", "Transfer Learning", "Medical Imaging", "Model Deployment"],
    live: "#projects",
    github: "https://github.com/subbu-naidu",
  },
  {
    title: "Library Management System",
    category: "Full Stack Web Application",
    subtitle: "Books, Members, Borrowing & Fines — all in one dashboard",
    description:
      "A modern Library Management System that helps librarians efficiently manage books, categories, members, borrowing records and returns. Features secure authentication, a powerful admin dashboard, real-time availability tracking and an automated fine calculation engine — all wrapped in a fully responsive interface.",
    image: "/projects/library-management.png",
    icon: Library,
    accent: "from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]",
    glow: "rgba(59,130,246,0.35)",
    tech: ["Python", "Flask", "SQLite / MySQL", "Jinja2", "Bootstrap", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication with login & registration",
      "Admin dashboard with live library analytics",
      "Book & category management (full CRUD)",
      "Advanced search and multi-filter catalog",
      "Borrow / return system with due-date tracking",
      "Automated fine management for overdue books",
    ],
    highlights: [
      "Full CRUD Operations",
      "Authentication System",
      "Database Integration",
      "Responsive UI",
      "Real-time Availability",
    ],
    live: "#projects",
    github: "https://github.com/subbu-naidu",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#3B82F6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Case studies of what I've built — from AI-powered healthcare diagnostics to full-stack web platforms."
        />

        <div className="space-y-16 lg:space-y-24">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* ── Preview image ── */}
                  <motion.div
                    initial={{ opacity: 0, x: flipped ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-7 ${flipped ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative">
                      {/* Glow behind */}
                      <div
                        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-90"
                        style={{ background: p.glow }}
                      />

                      <div className="glass-strong relative overflow-hidden rounded-[1.6rem] border border-white/12 p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:-translate-y-2">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-3 py-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                          <span className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 font-mono text-[10px] text-[#94A3B8]">
                            {p.title.toLowerCase().replace(/\s+/g, "-")}.app
                          </span>
                        </div>

                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.1rem] bg-[#0B0F19]">
                          <img
                            src={p.image}
                            alt={`${p.title} — ${p.subtitle}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                          />
                          {/* Sheen sweep */}
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent" />

                          {/* Floating category chip */}
                          <span
                            className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase shadow-lg`}
                          >
                            {p.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* ── Content ── */}
                  <motion.div
                    initial={{ opacity: 0, x: flipped ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-5 ${flipped ? "lg:order-1" : "lg:order-2"}`}
                  >
                    {/* Index + icon */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-lg`}
                      >
                        <p.icon size={20} />
                      </span>
                      <span className="font-mono text-xs tracking-[0.25em] text-[#94A3B8] uppercase">
                        0{i + 1} / Case Study
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#60A5FA]">{p.subtitle}</p>

                    <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{p.description}</p>

                    {/* Key features */}
                    <div className="mt-6">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase">
                        Key Features
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/80">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-emerald-400"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10.5px] font-medium text-white/70"
                        >
                          <Layers size={10} className="text-[#8B5CF6]" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-5">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase">
                        Tech Stack
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[#3B82F6]/25 bg-[#3B82F6]/10 px-2.5 py-1 font-mono text-[10.5px] text-[#93C5FD] transition hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <a
                        href={p.live}
                        className={`group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${p.accent} px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03]`}
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                        <ExternalLink size={15} />
                        View Project
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-white/35 hover:bg-white/10"
                      >
                        <GithubIcon className="h-4 w-4" />
                        GitHub Repository
                        <ArrowUpRight size={14} className="opacity-60" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/subbu-naidu"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-white/10"
          >
            <Info size={15} className="text-[#3B82F6]" />
            Explore all repositories on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
