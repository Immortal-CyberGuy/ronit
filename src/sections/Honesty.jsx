import BlurFade from "../components/BlurFade";
import GlassCard from "../components/GlassCard";

export default function Honesty() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <BlurFade className="w-full max-w-xl">
        <GlassCard className="px-8 py-12 md:px-14 md:py-16 text-center">
          <div className="space-y-5 text-ink/75 font-light leading-relaxed text-lg md:text-xl">
            <p>I don't know how you feel about me.</p>
            <p>Maybe this surprises you. Maybe you already knew.</p>
            <p className="text-ink font-normal pt-2">
              Either way, I simply wanted to be honest.
            </p>
            <p className="text-primary font-display italic text-xl md:text-2xl pt-2">
              Some feelings deserve more than staying unspoken.
            </p>
          </div>
        </GlassCard>
      </BlurFade>
    </section>
  );
}
