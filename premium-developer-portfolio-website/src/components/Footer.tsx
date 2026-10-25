import { Heart, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914] via-[#B20710] to-[#7f0509] shadow-[0_0_20px_rgba(229,9,20,0.55)]">
                <span className="text-sm font-black text-white">VS</span>
              </div>
              <span className="font-semibold text-white">Venkata Subbaiah Chennamsetty</span>
            </a>
            <p className="mt-4 max-w-md text-sm text-[#94A3B8]">
              Software Engineer & Data Science Student building intelligent, human-first
              products with modern web and AI technologies.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: GithubIcon, href: "https://github.com/subbu-naidu", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/venkata-subbaiah-ch", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mrsubbunaidu@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#94A3B8] transition hover:border-[#3B82F6]/50 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/70 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">More</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Experience", "experience"],
                ["Certifications", "certifications"],
                ["GitHub", "github"],
                ["Contact", "contact"],
              ].map(([l, id]) => (
                <li key={l}>
                  <a href={`#${id}`} className="text-white/70 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Venkata Subbaiah Chennamsetty. Crafted with{" "}
            <Heart className="inline h-3 w-3 text-red-400" fill="currentColor" /> and code.
          </p>
          <a
            href="#home"
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition hover:border-[#3B82F6]/50"
          >
            Back to top
            <ArrowUp size={12} className="transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
