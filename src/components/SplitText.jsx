import { motion } from "framer-motion";

/**
 * Splits a heading into words and reveals them with a soft stagger.
 * Keeps each word intact (rather than per-letter) so it reads calmly
 * instead of feeling like a flashy typing effect.
 */
export default function SplitText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  stagger = 0.06,
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
