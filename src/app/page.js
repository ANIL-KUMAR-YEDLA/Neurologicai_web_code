import Footer from "./components/Footer/Footer";
import PartnershipSection from "./components/Partner";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <main className="bg-black text-white w-full">

      <PartnershipSection/>
      {/* <Spotlight/> */}
      <Footer />
    </main>
  );
}
