import BlurFade from "../components/BlurFade";
import GlassCard from "../components/GlassCard";

export default function StoryIntro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <BlurFade className="w-full max-w-xl">
        <GlassCard className="px-8 py-12 md:px-14 md:py-16 text-center">
          <p className="font-display text-2xl md:text-3xl text-ink mb-8">
            Hi Divyansha <span className="text-primary">❤</span>
          </p>
          <div className="space-y-5 text-ink/75 font-light leading-relaxed text-base md:text-lg">
            <p>Before you continue, I have one small request.</p>
            <p>Please don't rush. Read everything.</p>
            <p className="text-ink font-normal">
              Every single word here comes from my heart.
            </p>
          </div>
        </GlassCard>
      </BlurFade>
    </section>
  );
}
