import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setEnabled(true);
      document.body.classList.add("has-cursor");
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, label")) setHover(true);
      else setHover(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor rounded-full bg-white"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
        style={{ width: 8, height: 8 }}
      />
      <motion.div
        className="custom-cursor rounded-full border border-white/60"
        animate={{
          x: pos.x - (hover ? 24 : 16),
          y: pos.y - (hover ? 24 : 16),
          scale: hover ? 1.2 : 1,
          opacity: hover ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        style={{ width: hover ? 48 : 32, height: hover ? 48 : 32 }}
      />
    </>
  );
}
