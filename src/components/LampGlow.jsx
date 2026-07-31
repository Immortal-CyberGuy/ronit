import { motion } from "framer-motion";

/**
 * A soft spotlight-cone effect for the proposal section: two beams of
 * light converge toward a glowing centerline, then the content beneath
 * settles into place. Stands in for a heavier "lamp" component while
 * staying quiet and slow.
 */
export default function LampGlow() {
  return (
    <div className="absolute inset-x-0 top-0 h-[60vh] flex justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0.4, width: "8rem" }}
        whileInView={{ opacity: 0.85, width: "24rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        style={{
          background: "conic-gradient(from 90deg at left, rgba(255,77,109,0.55), transparent)",
        }}
        className="absolute top-0 right-1/2 h-64 md:h-80"
      />
      <motion.div
        initial={{ opacity: 0.4, width: "8rem" }}
        whileInView={{ opacity: 0.85, width: "24rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        style={{
          background: "conic-gradient(from 270deg at right, rgba(255,77,109,0.55), transparent)",
        }}
        className="absolute top-0 left-1/2 h-64 md:h-80"
      />
      <motion.div
        initial={{ width: "6rem", opacity: 0.3 }}
        whileInView={{ width: "16rem", opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute top-56 md:top-72 h-1 rounded-full bg-primary blur-sm"
      />
    </div>
  );
}
