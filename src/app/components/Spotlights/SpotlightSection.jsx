"use client";
import SpotlightCard1 from "./SpotLightCard/SpotlightCard1";
import SpotlightCard2 from "./SpotLightCard/SpotlightCard2";
import SpotlightCard3 from "./SpotLightCard/SpotlightCard3";
import SpotlightCard4 from "./SpotLightCard/SpotlightCard4";
import SpotlightHeader from "./SpotlightHeader";

export default function SpotlightSection() {
  return (
    <section className="relative bg-black py-16 px-8">

      <div className="absolute w-[486.289px] h-[255.201px] rounded-full bg-[rgba(140,69,255,0.49)] blur-[152px] left-1/2 transform -translate-x-1/2 -top-10"></div>

      <SpotlightHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 ml-24">
        <SpotlightCard1 />
        <SpotlightCard2 />
        <SpotlightCard3 />
        <SpotlightCard4 />
      </div>
    </section>
  );
}
