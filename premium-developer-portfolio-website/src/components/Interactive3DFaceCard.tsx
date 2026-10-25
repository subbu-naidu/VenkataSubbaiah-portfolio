import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Code2, BrainCircuit, CheckCircle2, AlertCircle } from "lucide-react";

interface Props {
  /** Diameter classes for the circular frame */
  size?: string;
  /** Show the floating side badges */
  showBadges?: boolean;
  /** Show the availability pill under the avatar */
  showStatus?: boolean;
}

/**
 * Interactive3DFaceCard
 *
 * Uses the user's uploaded professional headshot at /profile.png.
 * If the image fails to load, shows a fallback message asking for a new upload
 * instead of replacing with an AI-generated avatar.
 */
export default function Interactive3DFaceCard({
  size = "h-[290px] w-[290px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]",
  showBadges = true,
  showStatus = true,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Raw pointer position, normalised to -0.5 … 0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smooth spring physics → Apple Vision Pro fluidity
  const spring = { damping: 22, stiffness: 180, mass: 0.7 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  // 3D rotation
  const rotateX = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-20, 20]);

  // Layered parallax depth
  const imgX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const ringX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const ringY = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const badgeAX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const badgeAY = useTransform(sy, [-0.5, 0.5], [26, -26]);
  const badgeBX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const badgeBY = useTransform(sy, [-0.5, 0.5], [-30, 30]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
    setGlare({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      o: 0.65,
    });
  };

  const onLeave = () => {
    setHovered(false);
    mx.set(0);
    my.set(0);
    setGlare((g) => ({ ...g, o: 0 }));
  };

  // Touch-based tilt for mobile devices
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      mx.set(Math.min(Math.max(e.gamma / 50, -0.5), 0.5));
      my.set(Math.min(Math.max((e.beta - 45) / 50, -0.5), 0.5));
    };
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      window.addEventListener("deviceorientation", handleOrientation);
    }
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [mx, my]);

  // Touch drag tilt for mobile
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const touch = e.touches[0];
    const r = el.getBoundingClientRect();
    const x = (touch.clientX - r.left) / r.width - 0.5;
    const y = (touch.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const onTouchEnd = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center py-6">
      {/* ── Ambient blue / purple glow field ── */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.30)_0%,rgba(139,92,246,0.18)_45%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)] opacity-30 blur-2xl" />

      <motion.div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        animate={hovered ? { y: 0 } : { y: [0, -16, 0] }}
        transition={
          hovered
            ? { duration: 0.5, ease: "easeOut" }
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
        style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative select-none touch-none"
      >
        {/* ── Rotating gradient ring (outer) ── */}
        <motion.div
          style={{ x: ringX, y: ringY }}
          className="pointer-events-none absolute -inset-5 rounded-full"
        >
          <div className="h-full w-full animate-spin-slow rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,#3B82F6_70deg,transparent_140deg,#8B5CF6_220deg,transparent_290deg,#06B6D4_340deg,transparent_360deg)] opacity-70 blur-[2px]" />
        </motion.div>

        {/* ── Counter-rotating dashed ring ── */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-white/15"
        />

        {/* ── Orbiting accent dots ── */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -inset-5"
        >
          <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#3B82F6] shadow-[0_0_16px_4px_rgba(59,130,246,0.9)]" />
          <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_16px_4px_rgba(139,92,246,0.9)]" />
          <span className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-[#06B6D4] shadow-[0_0_14px_4px_rgba(6,182,212,0.9)]" />
        </motion.div>

        {/* ── Circular photo frame ── */}
        <div
          className={`relative ${size} overflow-hidden rounded-full border-[3px] border-white/20 bg-[#111827] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.9),0_0_60px_rgba(59,130,246,0.35),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-shadow duration-500 group-hover:shadow-[0_35px_80px_-18px_rgba(0,0,0,0.95),0_0_90px_rgba(139,92,246,0.55)]`}
        >
          {/* Photo with parallax depth */}
          {!imgError ? (
            <motion.div style={{ x: imgX, y: imgY }} className="h-full w-full">
              <img
                src="/projects/profile.png"
                alt="Venkata Subbaiah Chennamsetty — Software Engineer & Data Science Student"
                className="h-full w-full scale-[1.08] object-cover object-[center_22%] brightness-[1.01] contrast-[1.02] saturate-[1.01]"
                loading="eager"
                decoding="async"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            </motion.div>
          ) : (
            /* Fallback: ask user to upload new image instead of using AI avatar */
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#111827] to-[#0B0F19] p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6]/15">
                <AlertCircle size={28} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Profile image not found</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                  Please upload your professional headshot<br />
                  as <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-[#60A5FA]">public/profile.png</code>
                </p>
              </div>
            </motion.div>
          )}

          {/* Bottom vignette so text stays readable — lighter to preserve face detail */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent opacity-70" />

          {/* Inner rim light */}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20 ring-inset" />

          {/* Cursor-tracking specular glare */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
            style={{
              opacity: glare.o,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 32%, transparent 62%)`,
              mixBlendMode: "overlay",
            }}
          />

          {/* Loading shimmer while image loads */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 animate-pulse rounded-full bg-[#1a1a2e]" />
          )}

          {/* Status pill inside frame */}
          {showStatus && (
            <div className="absolute inset-x-0 bottom-5 flex justify-center px-6">
              <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[10.5px] font-semibold text-white shadow-lg backdrop-blur-md">
                <CheckCircle2 size={11} className="text-emerald-400" />
                Open to Internships & Roles
              </div>
            </div>
          )}
        </div>

        {/* ── Floating 3D badges ── */}
        {showBadges && (
          <>
            <motion.div
              style={{ x: badgeAX, y: badgeAY, transform: "translateZ(80px)" }}
              className="glass-strong absolute -top-1 -left-8 z-30 hidden items-center gap-2.5 rounded-2xl border border-white/20 py-2.5 pr-3.5 pl-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.65),0_0_26px_rgba(139,92,246,0.4)] backdrop-blur-xl sm:flex lg:-left-12"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] text-white shadow-lg shadow-purple-500/40">
                <BrainCircuit size={17} />
              </span>
              <span className="text-left">
                <span className="block text-xs font-bold text-white">AI & ML Engineer</span>
                <span className="block font-mono text-[9.5px] text-[#94A3B8]">
                  TensorFlow • Keras
                </span>
              </span>
            </motion.div>

            <motion.div
              style={{ x: badgeBX, y: badgeBY, transform: "translateZ(80px)" }}
              className="glass-strong absolute -right-8 -bottom-1 z-30 hidden items-center gap-2.5 rounded-2xl border border-white/20 py-2.5 pr-3.5 pl-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.65),0_0_26px_rgba(6,182,212,0.4)] backdrop-blur-xl sm:flex lg:-right-12"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] text-white shadow-lg shadow-cyan-500/40">
                <Code2 size={17} />
              </span>
              <span className="text-left">
                <span className="block text-xs font-bold text-white">Full Stack Dev</span>
                <span className="block font-mono text-[9.5px] text-[#94A3B8]">
                  Python • Flask • React
                </span>
              </span>
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Hint */}
      <p className="mt-6 flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]/70">
        <Sparkles size={10} className="animate-pulse text-[#3B82F6]" />
        Move your cursor over the photo for 3D perspective
      </p>
    </div>
  );
}
