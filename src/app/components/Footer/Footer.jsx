import FooterCTA from "./FooterCTA";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";
import FooterLinks from "./FooterLink";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
  
          {/* Left Side: CTA and Contact */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <FooterCTA />
            <FooterContact />
          </div>
  
          {/* Center: Services */}
          <FooterServices />
  
          {/* Right Side: Links */}
          <FooterLinks />
        </div>
  
        {/* Bottom Bar */}
        <FooterBottomBar />
      </footer>
    );
  }
