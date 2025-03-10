"use client";
import TeamHeader from "./TeamHeader";
import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  return (
    <section className="bg-black py-16 px-8">
      <TeamHeader />
      <TeamGrid />
    </section>
  );
}
