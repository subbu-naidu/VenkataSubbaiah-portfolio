import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 font-mono text-[11px] tracking-widest text-[#94A3B8] uppercase backdrop-blur"
      >
        <span className="h-1 w-1 rounded-full bg-[#3B82F6]" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 font-bold text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title.split(" ").map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="gradient-text">{word}</span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base text-[#94A3B8] sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
