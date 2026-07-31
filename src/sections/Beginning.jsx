import BlurFade from "../components/BlurFade";
import GlassCard from "../components/GlassCard";

export default function Beginning() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <BlurFade className="w-full max-w-xl">
        <GlassCard className="px-8 py-12 md:px-14 md:py-16 text-center">
          <div className="space-y-4 text-ink/75 font-light leading-relaxed text-lg md:text-xl">
            <p>Sometimes...</p>
            <p>someone quietly enters your life...</p>
            <p>
              and slowly becomes <span className="text-primary font-normal">your favorite thought.</span>
            </p>
          </div>
          <p className="mt-8 font-display text-xl md:text-2xl text-ink">
            I never expected that person would be you.
          </p>
        </GlassCard>
      </BlurFade>
    </section>
  );
}
