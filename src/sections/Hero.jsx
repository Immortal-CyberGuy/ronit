import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";
import FloatingHearts from "../components/FloatingHearts";
import SplitText from "../components/SplitText";
import MagneticButton from "../components/MagneticButton";

export default function Hero({ onBegin }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <AuroraBackground />
      <FloatingHearts />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="tracking-[0.3em] uppercase text-xs md:text-sm text-primary/70 mb-6"
      >
        a small, handmade thing
      </motion.p>

      <SplitText
        text="For Divyansha ❤️"
        as="h1"
        className="font-display font-semibold text-ink text-[13vw] leading-[1.05] sm:text-6xl md:text-7xl"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-lg md:text-xl text-ink/70 font-light max-w-md"
      >
        I made something special for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12"
      >
        <MagneticButton
          onClick={onBegin}
          className="focus-ring bg-primary text-white font-medium px-9 py-4 rounded-full shadow-soft hover:shadow-lg transition-shadow"
        >
          Let's Begin
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/30 text-xs tracking-widest"
      >
        scroll
      </motion.div>
    </section>
  );
}
