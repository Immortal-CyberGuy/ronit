import { useRef } from "react";
import Hero from "./sections/Hero";
import StoryIntro from "./sections/StoryIntro";
import Beginning from "./sections/Beginning";
import Memories from "./sections/Memories";
import WhyYou from "./sections/WhyYou";
import Letter from "./sections/Letter";
import Honesty from "./sections/Honesty";
import Proposal from "./sections/Proposal";
import Footer from "./sections/Footer";

export default function App() {
  const storyRef = useRef(null);

  function scrollToStory() {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="relative">
      <Hero onBegin={scrollToStory} />
      <div ref={storyRef}>
        <StoryIntro />
      </div>
      <Beginning />
      <Memories />
      <WhyYou />
      <Letter />
      <Honesty />
      <Proposal />
      <Footer />
    </main>
  );
}
