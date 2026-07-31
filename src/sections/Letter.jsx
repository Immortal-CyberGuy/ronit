import BlurFade from "../components/BlurFade";
import GlassCard from "../components/GlassCard";

export default function Letter() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <BlurFade className="w-full max-w-xl">
        <GlassCard className="px-8 py-14 md:px-16 md:py-20">
          <p className="font-display text-2xl md:text-3xl text-ink mb-8">Dear Divyansha,</p>
          <div className="space-y-5 text-ink/75 font-light leading-relaxed text-base md:text-lg">
            <p>Life is unpredictable. People come and go.</p>
            <p>But sometimes, someone leaves an impact without even trying.</p>
            <p className="text-ink font-normal pt-2">
              Thank you for becoming one of the happiest parts of my days.
            </p>
          </div>
        </GlassCard>
      </BlurFade>
    </section>
  );
}
