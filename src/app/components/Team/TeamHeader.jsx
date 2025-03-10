"use client";
import Link from "next/link";

export default function TeamHeader() {
  return (
    <div className="text-center mb-8">
      <h2 className="w-[454px] h-[74.294px] flex-shrink-0 text-center font-poppins text-[48px] font-semibold leading-none tracking-[0.96px] text-transparent bg-clip-text bg-gradient-to-r from-[#5025FF] to-[#AA48FE]">
        Team Neurologic
      </h2>

      <Link href="/contact">
        <button className="w-[166.652px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#5323EC] via-[#4B0082] to-[#170226] text-white font-[Poppins] text-[16px] font-medium transition hover:opacity-90 flex items-center justify-center gap-2">
          Contact Us
          <img src="/Vector.png" alt="Arrow" className="w-[11.975px] h-[12px]" />
        </button>
      </Link>
    </div>
  );
}
