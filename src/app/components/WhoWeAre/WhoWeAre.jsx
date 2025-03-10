"use client";
import WhoWeAreHeader from "./WhoWeAreHeader";
import ImageSlider from "./ImageSlider";
import StorySection from "./StorySection";

export default function WhoWeAre() {
  return (
    <section className="bg-black py-16 px-8">
      <WhoWeAreHeader />
      <ImageSlider />
      <StorySection />
    </section>
  );
}
