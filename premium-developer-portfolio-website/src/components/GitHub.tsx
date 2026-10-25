import { motion } from "framer-motion";
import { GitFork, Star, GitCommit, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";

const languages = [
  { name: "Python", pct: 45, color: "#3B82F6" },
  { name: "JavaScript", pct: 22, color: "#8B5CF6" },
  { name: "HTML/CSS", pct: 18, color: "#06B6D4" },
  { name: "C", pct: 10, color: "#f59e0b" },
  { name: "SQL", pct: 5, color: "#10b981" },
];

const stats = [
  { label: "Public Repos", value: "12+", icon: GithubIcon },
  { label: "Contributions", value: "200+", icon: GitCommit },
  { label: "Stars Earned", value: "20+", icon: Star },
  { label: "Forks", value: "8+", icon: GitFork },
];

// Build a fake contribution grid for visual purposes
const weeks = 26;
const days = 7;
function seededGrid() {
  const cells: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      const seed = Math.sin(w * 12.9898 + d * 78.233) * 43758.5453;
      const rnd = seed - Math.floor(seed);
      col.push(Math.min(4, Math.floor(rnd * 5)));
    }
    cells.push(col);
  }
  return cells;
}
const grid = seededGrid();
const heat = ["bg-white/5", "bg-[#3B82F6]/30", "bg-[#3B82F6]/60", "bg-[#8B5CF6]/70", "bg-[#06B6D4]"];

export default function GitHub() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open source"
          title="GitHub Activity"
          description="Where I build, learn, and share — publicly and consistently."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-6 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]">
                <GithubIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">@subbu-naidu</p>
                <a
                  href="https://github.com/subbu-naidu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#3B82F6] hover:underline"
                >
                  View profile <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-[#94A3B8]">
                    <s.icon className="h-3.5 w-3.5" />
                    <p className="text-[10px] tracking-widest uppercase">{s.label}</p>
                  </div>
                  <p className="mt-1 font-bold text-xl gradient-text">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-3 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">Top Languages</p>
              <div className="flex h-2 overflow-hidden rounded-full bg-white/5">
                {languages.map((l) => (
                  <motion.div
                    key={l.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ background: l.color }}
                  />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                    <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                    {l.name} <span className="text-white/60">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-strong rounded-3xl p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">Contribution Graph</h3>
                <p className="text-xs text-[#94A3B8]">Last 6 months of activity</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#94A3B8]">
                <span>Less</span>
                {heat.map((c, i) => (
                  <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <div className="flex gap-1">
                {grid.map((col, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {col.map((v, di) => (
                      <motion.div
                        key={di}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: (wi * 7 + di) * 0.004 }}
                        className={`h-3.5 w-3.5 rounded-sm ${heat[v]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { name: "HematoVision", desc: "Blood cell classification with Transfer Learning", stars: 8 },
                { name: "AI-Video-Flow", desc: "Cinematic AI generation experiments", stars: 5 },
              ].map((r) => (
                <a
                  key={r.name}
                  href="https://github.com/subbu-naidu"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-sm text-white group-hover:text-[#3B82F6]">
                        {r.name}
                      </p>
                      <p className="mt-1 text-xs text-[#94A3B8]">{r.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#94A3B8]">
                      <Star size={11} /> {r.stars}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
