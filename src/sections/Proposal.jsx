import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import LampGlow from "../components/LampGlow";
import MagneticButton from "../components/MagneticButton";
import BlurFade from "../components/BlurFade";

export default function Proposal() {
  const [answer, setAnswer] = useState(null); // null | "yes" | "wait"

  const fireConfetti = useCallback(() => {
    const colors = ["#FF4D6D", "#FADADD", "#FFFFFF"];
    const duration = 1600;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors,
    });
  }, []);

  function handleYes() {
    setAnswer("yes");
    fireConfetti();
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-bg via-[#3a1420] to-[#2a0e17]">
      <LampGlow />

      <div className="relative z-10 w-full max-w-lg text-center">
        <BlurFade duration={1.1}>
          <Heart className="mx-auto mb-8 text-primary" size={56} strokeWidth={1.2} fill="#FF4D6D" />
        </BlurFade>

        <AnimatePresence mode="wait">
          {!answer && (
            <motion.div
              key="ask"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl text-white leading-snug">
                Divyansha...
              </h2>
              <p className="font-display text-2xl md:text-4xl text-white/90 mt-4 leading-snug">
                Would you like <br className="hidden sm:block" /> to start something beautiful <br className="hidden sm:block" /> with me?
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton
                  onClick={handleYes}
                  className="focus-ring bg-primary text-white font-medium px-10 py-4 rounded-full shadow-soft"
                >
                  YES ❤️
                </MagneticButton>
                <MagneticButton
                  onClick={() => setAnswer("wait")}
                  className="focus-ring bg-white/10 border border-white/30 text-white font-medium px-10 py-4 rounded-full backdrop-blur-md"
                >
                  I Need More Time 😊
                </MagneticButton>
              </div>
            </motion.div>
          )}

          {answer === "yes" && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl md:text-4xl text-white leading-snug">
                You just made me the happiest person alive ❤️
              </p>
            </motion.div>
          )}

          {answer === "wait" && (
            <motion.div
              key="wait"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl text-white leading-snug">
                No problem ❤️
              </p>
              <p className="text-white/75 font-light mt-4 text-lg">
                Take all the time you need.
                <br />
                I just wanted you to know how I truly feel.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
