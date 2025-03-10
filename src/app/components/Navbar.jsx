import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex z-1000 relative bg-transparent gap-32 justify-center items-center w-full h-[15vh] text-lg text-white font-bold">
      <Link href="/about" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        About Us
      </Link>
      <Link href="/verticals" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        Verticals
      </Link>
      <Link href="/services" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        Services
      </Link>
      <Link href="/" className="nav-link">
        <Image
          src="/Logo.png"
          alt="Neurologicai logo"
          width={250}
          height={250}
        />
      </Link>
      <Link href="/resources" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        Resources
      </Link>
      <Link href="/news" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        News & Updates
      </Link>
      <Link href="/contact" className="nav-link hover:bg-gradient-to-r hover:from-[#5025FF] hover:to-[#AA48FE] hover:text-transparent hover:bg-clip-text transition duration-300">
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
