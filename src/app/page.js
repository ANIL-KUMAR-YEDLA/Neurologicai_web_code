import Footer from "./components/Footer/Footer";
import PartnershipSection from "./components/Partner";
import SpotlightSection from "./components/Spotlights/SpotlightSection";

export default function Home() {
  return (
    <main className="bg-black text-white w-full">

      <PartnershipSection/>
      <SpotlightSection/>

      <Footer />
    </main>
  );
}
