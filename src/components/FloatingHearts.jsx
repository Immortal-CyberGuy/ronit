import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * A handful of tiny hearts drifting upward very slowly in the hero
 * background. Deliberately sparse and low-opacity so it reads as
 * atmosphere, not decoration.
 */
export default function FloatingHearts({ count = 10 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: 4 + ((i * 97) % 92),
        size: 10 + ((i * 37) % 16),
        duration: 14 + ((i * 13) % 10),
        delay: (i * 1.7) % 8,
        opacity: 0.12 + ((i * 11) % 20) / 100,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-[-5%] text-primary"
          style={{ left: `${h.left}%`, fontSize: h.size, opacity: h.opacity }}
          initial={{ y: 0 }}
          animate={{ y: "-120vh" }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  );
}
