import { motion, useScroll, useTransform } from "framer-motion";

const row1 = [
  "DATA SCIENCE",
  "•",
  "SOFTWARE ENGINEER",
  "•",
  "AI ENGINEER",
  "•",
  "FULL STACK DEVELOPER",
  "•",
];

const row2 = [
  "PYTHON",
  "•",
  "MACHINE LEARNING",
  "•",
  "WEB DEVELOPMENT",
  "•",
  "PROBLEM SOLVER",
  "•",
];

const row3 = [
  "DEEP LEARNING",
  "•",
  "REACT",
  "•",
  "FLASK",
  "•",
  "SQL",
  "•",
  "TENSORFLOW",
  "•",
];

function Row({
  items,
  animation,
  dot,
  text,
  sizes,
}: {
  items: string[];
  animation: string;
  dot: string;
  text: string;
  sizes: string;
}) {
  return (
    <div className={`${animation} flex w-max items-center gap-8 font-black tracking-tighter ${sizes}`}>
      {[...items, ...items, ...items, ...items].map((t, i) => (
        <span key={i} className={t === "•" ? `${dot} text-3xl sm:text-4xl` : text}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function AnimatedMarqueeText() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -140]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 140]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -90]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex select-none flex-col justify-around overflow-hidden py-8">
      <motion.div style={{ y: y1 }} className="overflow-hidden whitespace-nowrap">
        <Row
          items={row1}
          animation="animate-marquee-left"
          dot="text-[#3B82F6]/25"
          text="text-white/[0.055]"
          sizes="text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="overflow-hidden whitespace-nowrap">
        <Row
          items={row2}
          animation="animate-marquee-right"
          dot="text-[#8B5CF6]/25"
          text="text-white/[0.06]"
          sizes="text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
        />
      </motion.div>

      <motion.div style={{ y: y3 }} className="hidden overflow-hidden whitespace-nowrap sm:block">
        <Row
          items={row3}
          animation="animate-marquee-left-fast"
          dot="text-[#06B6D4]/25"
          text="text-white/[0.04]"
          sizes="text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
        />
      </motion.div>
    </div>
  );
}
