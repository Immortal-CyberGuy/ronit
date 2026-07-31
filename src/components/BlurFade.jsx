import { motion } from "framer-motion";

/**
 * Wraps children in a gentle blur + fade + rise reveal, triggered once
 * when the element scrolls into view. Used for nearly every block of
 * copy in the experience so reading feels unhurried rather than flashy.
 */
export default function BlurFade({
  children,
  delay = 0,
  duration = 0.9,
  y = 18,
  className = "",
  as: Component = motion.div,
}) {
  return (
    <Component
      initial={{ opacity: 0, filter: "blur(10px)", y }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
