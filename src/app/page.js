import Footer from "./components/Footer/Footer";
import PartnershipSection from "./components/Partner";
import SpotlightSection from "./components/Spotlights/SpotlightSection";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import MissionVisionSection from "./components/MissionVision/MissionVisionSection";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import TeamSection from "./components/Team/TeamSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white w-full">

      <Navbar/>
      {/* <PartnershipSection/>
      <SpotlightSection/> */}
      <WhoWeAre/>
      <MissionVisionSection/>
      <WhyChooseSection/>
      {/* <TeamSection/> */}
      {/* <Footer /> */}
    </main>
  );
}
