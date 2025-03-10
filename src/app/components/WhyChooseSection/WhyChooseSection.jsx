"use client";
import WhyChooseHeader from "./WhyChooseheader";
import FeatureList from "./FeatureList";
import ConnectButton from "./ConnectButton";
import GlobeIllustration from "./GlobeIllustration";

export default function WhyChooseSection() {
  return (
    <section className="bg-black py-16 px-8 flex flex-col items-center">
      <WhyChooseHeader />
      <div className="flex justify-between items-start max-w-7xl mx-auto mt-8">
        <div className="flex-1 mr-12">
          <FeatureList />
        </div>
        <div className="flex flex-col items-center">
          <GlobeIllustration />
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}
