import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F19]"
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#3B82F6] border-r-[#8B5CF6]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#06B6D4] border-l-[#8B5CF6]"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914] via-[#B20710] to-[#7f0509] text-lg font-black text-white shadow-[0_0_28px_rgba(229,9,20,0.7)]">
              VS
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            Venkata Subbaiah Chennamsetty
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-[11px] tracking-[0.3em] text-[#94A3B8] uppercase"
          >
            Software Engineer Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
