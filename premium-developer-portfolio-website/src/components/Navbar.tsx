import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/subbu-naidu", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/venkata-subbaiah-ch",
    label: "LinkedIn",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Netflix-style: hide on scroll down, expand on scroll up
      if (y > 260 && y > lastY + 6) setHidden(true);
      else if (y < lastY - 6) setHidden(false);
      lastY = y;

      // Active section detection
      const sections = links.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    setDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50"
      >
        <div
          className={`w-full border-b transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/90 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "border-transparent bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px]"
          }`}
        >
          <nav
            className={`mx-auto flex max-w-[1400px] items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-10 ${
              scrolled ? "h-[60px] lg:h-[64px]" : "h-[64px] lg:h-[72px]"
            }`}
          >
            {/* ── LEFT: Netflix-style VS logo with animated red glow ── */}
            <button
              onClick={() => go("#home")}
              aria-label="Go to home"
              className="group relative flex shrink-0 items-center gap-2.5"
            >
              <span className="animate-red-pulse pointer-events-none absolute -inset-3 rounded-full bg-[#E50914]/45 blur-2xl transition-colors duration-500 group-hover:bg-[#E50914]/75" />
              <span
                className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#E50914] via-[#B20710] to-[#7f0509] font-black tracking-tighter text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.9)] ${
                  scrolled ? "h-8 w-8 text-sm" : "h-9 w-9 text-base"
                }`}
              >
                VS
              </span>
              <span className="hidden text-[15px] font-bold tracking-tight text-white sm:inline">
                Venkata Subbaiah
                <span className="text-[#E50914]">.</span>
              </span>
            </button>

            {/* ── CENTER: Navigation with Netflix underline ── */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.name}>
                    <button
                      onClick={() => go(l.href)}
                      className={`group relative px-3.5 py-2 text-[13.5px] font-medium transition-all duration-300 hover:scale-[1.06] xl:px-4 ${
                        isActive
                          ? "text-white"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      {l.name}
                      {/* Floating active indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveUnderline"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute inset-x-2.5 -bottom-0.5 h-[3px] rounded-full bg-[#E50914] shadow-[0_0_12px_#E50914,0_0_24px_rgba(229,9,20,0.7)]"
                        />
                      )}
                      {/* Hover glowing underline */}
                      {!isActive && (
                        <span className="absolute inset-x-2.5 -bottom-0.5 h-[3px] origin-center scale-x-0 rounded-full bg-[#E50914]/70 shadow-[0_0_12px_rgba(229,9,20,0.8)] transition-transform duration-300 group-hover:scale-x-100" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* ── RIGHT: Resume, socials, theme ── */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <a
                href="/resume.pdf"
                download="Venkata-Subbaiah-Chennamsetty-Resume.pdf"
                className="group relative hidden items-center gap-1.5 overflow-hidden rounded-md bg-[#E50914] px-4 py-2 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(229,9,20,0.35)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#F6121D] hover:shadow-[0_0_28px_rgba(229,9,20,0.65)] sm:flex"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Download size={14} />
                Resume
              </a>

              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="hidden h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[#94A3B8] transition-all duration-300 hover:scale-110 hover:border-[#E50914]/60 hover:text-white hover:shadow-[0_0_16px_rgba(229,9,20,0.35)] md:flex"
                >
                  <s.icon className="h-[17px] w-[17px]" />
                </a>
              ))}

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[#94A3B8] transition-all duration-300 hover:scale-110 hover:border-[#E50914]/60 hover:text-white"
              >
                {dark ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-[#E50914]/60 lg:hidden"
              >
                <Menu size={18} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── MOBILE: Netflix full-screen slide-out menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
              className="absolute top-0 right-0 flex h-full w-full max-w-[420px] flex-col border-l border-white/10 bg-[#0B0F19]/95 backdrop-blur-2xl"
            >
              {/* Red ambient glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#E50914]/25 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8B5CF6]/15 blur-[100px]" />

              {/* Header */}
              <div className="relative flex h-[64px] shrink-0 items-center justify-between border-b border-white/10 px-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#E50914] to-[#7f0509] text-sm font-black text-white shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                    VS
                  </span>
                  <span className="text-sm font-bold text-white">Menu</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-[#E50914]/60 hover:text-[#E50914]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Large nav links */}
              <nav className="relative flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-1">
                  {links.map((l, i) => {
                    const isActive = active === l.href.slice(1);
                    return (
                      <motion.li
                        key={l.name}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                      >
                        <button
                          onClick={() => go(l.href)}
                          className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-white/[0.07] text-white"
                              : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-6 w-[3px] rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-[#E50914] shadow-[0_0_12px_#E50914]"
                                  : "bg-white/10 group-hover:bg-[#E50914]/60"
                              }`}
                            />
                            <span className="text-[22px] font-bold tracking-tight">
                              {l.name}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60"
                          />
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  href="/resume.pdf"
                  download="Venkata-Subbaiah-Chennamsetty-Resume.pdf"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#E50914] px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(229,9,20,0.45)] transition hover:bg-[#F6121D]"
                >
                  <Download size={16} /> Download Resume
                </motion.a>
              </nav>

              {/* Social icons at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative shrink-0 border-t border-white/10 px-5 py-5"
              >
                <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase">
                  Connect with me
                </p>
                <div className="flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#94A3B8] transition-all duration-300 hover:scale-110 hover:border-[#E50914]/60 hover:text-white hover:shadow-[0_0_18px_rgba(229,9,20,0.4)]"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                  <a
                    href="mailto:mrsubbunaidu@gmail.com"
                    aria-label="Email"
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-sm text-[#94A3B8] transition-all duration-300 hover:border-[#E50914]/60 hover:text-white"
                  >
                    mrsubbunaidu@gmail.com
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
