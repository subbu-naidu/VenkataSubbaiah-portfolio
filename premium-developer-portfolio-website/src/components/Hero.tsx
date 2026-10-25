import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Mail, Sparkles, Layers, ArrowRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import BackgroundVideo from "./BackgroundVideo";
import AnimatedMarqueeText from "./AnimatedMarqueeText";
import Interactive3DFaceCard from "./Interactive3DFaceCard";
import MagneticButton from "./MagneticButton";

const typewriterPhrases = [
  "Software Engineer",
  "Data Science Student",
  "AI & ML Enthusiast",
  "Full Stack Developer",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterPhrases[idx];
    const speed = deleting ? 42 : 82;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1700);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx((p) => (p + 1) % typewriterPhrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="gradient-text font-bold">
      {text}
      <span className="animate-blink font-normal text-[#3B82F6]">|</span>
    </span>
  );
}

/* Cinematic entrance easing */
const ease = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 34, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.95, delay, ease },
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-20 lg:pt-24 lg:pb-16"
    >
      {/* Cinematic background video */}
      <BackgroundVideo />

      {/* Infinite parallax marquee text */}
      <AnimatedMarqueeText />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-16 left-6 h-[380px] w-[380px] animate-pulse-glow rounded-full bg-[#3B82F6]/14 blur-[120px]" />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] animate-pulse-glow rounded-full bg-[#8B5CF6]/14 blur-[140px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="pointer-events-none absolute bottom-4 left-1/3 h-[340px] w-[340px] animate-pulse-glow rounded-full bg-[#06B6D4]/12 blur-[110px]"
        style={{ animationDelay: "4s" }}
      />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          {/* ───────── LEFT ───────── */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            {/* Eyebrow */}
            <motion.div
              {...rise(0.05)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur-xl sm:text-xs"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] text-white">
                <Sparkles size={11} />
              </span>
              <span className="font-medium text-white">Available for Internships & SDE Roles</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </motion.div>

            {/* Name — cinematic reveal */}
            <h1 className="mt-6 font-black tracking-tight text-white">
              <motion.span
                {...rise(0.18)}
                className="block text-[2.1rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem]"
              >
                VENKATA SUBBAIAH
              </motion.span>
              <motion.span
                {...rise(0.3)}
                className="gradient-text text-glow mt-1 block text-[2.1rem] leading-[1.02] drop-shadow-[0_0_38px_rgba(59,130,246,0.45)] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem]"
              >
                CHENNAMSETTY
              </motion.span>
            </h1>

            {/* Static subtitle line */}
            <motion.p
              {...rise(0.42)}
              className="mx-auto mt-5 max-w-xl text-[13px] font-medium tracking-wide text-white/75 sm:text-[15px] lg:mx-0"
            >
              Software Engineer
              <span className="mx-2 text-[#3B82F6]">•</span>
              Data Science Student
              <span className="mx-2 text-[#8B5CF6]">•</span>
              AI &amp; ML Enthusiast
            </motion.p>

            {/* Typewriter */}
            <motion.div
              {...rise(0.5)}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg font-medium text-[#94A3B8] sm:text-2xl md:text-[1.7rem] lg:justify-start"
            >
              <span className="text-white/80">I am a</span>
              <Typewriter />
            </motion.div>

            {/* Description */}
            <motion.p
              {...rise(0.58)}
              className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-relaxed text-[#94A3B8] sm:text-base sm:leading-relaxed lg:mx-0"
            >
              Passionate Data Science student focused on building scalable software,
              AI-powered applications, and modern web experiences. Specialising in Python,
              Machine Learning, Flask, and React.
            </motion.p>

            {/* Skill pills */}
            <motion.div
              {...rise(0.64)}
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              {[
                ["Python & ML", "border-blue-500/30 text-blue-400 bg-blue-500/10"],
                ["React & TypeScript", "border-purple-500/30 text-purple-400 bg-purple-500/10"],
                ["Transfer Learning", "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"],
                ["Flask & SQL", "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"],
              ].map(([name, cls]) => (
                <span
                  key={name}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide sm:text-[11px] ${cls}`}
                >
                  {name}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...rise(0.72)}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <MagneticButton href="#projects" strength={0.22}>
                <span className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_15px_38px_rgba(59,130,246,0.62)] sm:px-6">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Layers size={17} />
                  View Projects
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download="Venkata-Subbaiah-Chennamsetty-Resume.pdf"
                strength={0.22}
              >
                <span className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/15">
                  <Download
                    size={16}
                    className="text-[#3B82F6] transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Download Resume
                </span>
              </MagneticButton>

              <MagneticButton href="#contact" strength={0.22}>
                <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-[#CBD5E1] backdrop-blur-lg transition-all duration-300 hover:border-[#3B82F6]/40 hover:bg-white/10 hover:text-white">
                  <Mail size={16} />
                  Contact Me
                </span>
              </MagneticButton>
            </motion.div>

            {/* Socials + terminal */}
            <motion.div
              {...rise(0.8)}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <div className="flex items-center gap-2.5">
                {[
                  { icon: GithubIcon, href: "https://github.com/subbu-naidu", label: "GitHub" },
                  {
                    icon: LinkedinIcon,
                    href: "https://www.linkedin.com/in/venkata-subbaiah-ch",
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: "mailto:mrsubbunaidu@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <MagneticButton key={label} href={href} target="_blank" rel="noreferrer" strength={0.35}>
                    <span
                      aria-label={label}
                      className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#94A3B8] shadow-md backdrop-blur-xl transition-all duration-300 hover:border-[#3B82F6]/60 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.32)]"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </MagneticButton>
                ))}
              </div>

              <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 font-mono text-xs text-[#94A3B8] backdrop-blur-md md:flex">
                <Terminal size={13} className="text-[#3B82F6]" />
                <span className="text-white/60">git commit -m</span>
                <span className="text-[#60A5FA]">"ready for impact"</span>
              </div>
            </motion.div>
          </div>

          {/* ───────── RIGHT: circular 3D profile ───────── */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.15, delay: 0.25, ease }}
            >
              <Interactive3DFaceCard />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="group absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[#94A3B8] transition-colors hover:text-white md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase transition-colors group-hover:text-white">
          Scroll to explore
        </span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur">
          <motion.span
            animate={{ y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-[#3B82F6]"
          />
        </span>
      </motion.a>
    </section>
  );
}
