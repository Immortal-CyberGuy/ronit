import { motion } from "framer-motion";

/**
 * A slow-moving field of soft rose/blush gradient blobs behind the
 * hero. Stands in for a heavier "aurora" effect but stays calm and
 * performant — big blurred shapes drifting, nothing sharp or neon.
 */
export default function AuroraBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,77,109,0.18) 0%, rgba(255,77,109,0) 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(250,218,221,0.55) 0%, rgba(250,218,221,0) 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,200,210,0.35) 0%, rgba(255,200,210,0) 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
