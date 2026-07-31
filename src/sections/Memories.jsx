import BlurFade from "../components/BlurFade";
import TiltCard from "../components/TiltCard";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpg";

const memories = [
  { src: img1, caption: "My favourite smile." },
  { src: img2, caption: "One unforgettable moment." },
  { src: img3, caption: "This picture always makes me smile." },
];

export default function Memories() {
  return (
    <section className="relative py-28 px-6">
      <BlurFade className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">Memories</h2>
        <p className="text-ink/60 font-light mt-3">a few I keep coming back to</p>
      </BlurFade>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {memories.map((m, i) => (
          <BlurFade key={i} delay={i * 0.12}>
            <TiltCard className="rounded-[24px] shadow-gentle bg-white/60 border border-white/60">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[24px]">
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-display italic text-ink/80 px-4 py-5">
                {m.caption}
              </p>
            </TiltCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
