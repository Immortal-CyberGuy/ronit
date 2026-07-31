import { Smile, Heart, Sun, Sparkles, Zap } from "lucide-react";
import BlurFade from "../components/BlurFade";
import GlassCard from "../components/GlassCard";

const reasons = [
  { icon: Smile, label: "Your smile" },
  { icon: Heart, label: "Your kindness" },
  { icon: Sun, label: "Your positivity" },
  { icon: Sparkles, label: "The way you make ordinary moments feel special" },
  { icon: Zap, label: "Your energy" },
];

export default function WhyYou() {
  return (
    <section className="relative py-28 px-6">
      <BlurFade className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">Why you</h2>
      </BlurFade>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {reasons.map(({ icon: Icon, label }, i) => (
          <BlurFade key={i} delay={i * 0.1} className={i === reasons.length - 1 ? "sm:col-span-2" : ""}>
            <GlassCard className="h-full flex items-center gap-4 px-6 py-6">
              <span className="shrink-0 w-11 h-11 rounded-full bg-secondary flex items-center justify-center">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </span>
              <p className="text-ink/80 font-light text-base md:text-lg">{label}</p>
            </GlassCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
