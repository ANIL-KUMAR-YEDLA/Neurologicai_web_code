"use client";
import Image from "next/image";
import Link from "next/link";

export default function SpotlightCard2() {
 return (
    <div className="spotlight-card- relative w-[300px] h-[426.331px] ml-4 flex-shrink-0 rounded-lg shadow-md border border-[#A400FF] overflow-hidden">
      <Image
        src="/news/news2.png"
        alt="Excellence in Healthcare Award at the Health 2.0 Conference in Dubai 2024"
        width={325}
        height={426}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 w-full h-[138.71px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"></div>

      {/* Title and Read More */}
      <div className="absolute bottom-0 p-4 w-[306px] h-[136px] flex flex-col text-white mb-34 z-10 bg-[rgba(75,0,130,0.5)]">
        <p className="w-[294.246px] h-[118px] text-[#EAD2FF] text-[20px] italic font-normal leading-[33.301px] tracking-[0.52px] flex-shrink-0 p-2 rounded-lg font-poppins">
          <span className="font-bold">Excellence in Healthcare Award</span> at the Health 2.0 Conference in Dubai 2024
        </p>
      </div>

      <div className="absolute bottom-2 right-2">
            <Link href="/newsroom/50-startups-hyderabad" className="flex items-center justify-center text-[#A400FF] text-sm hover:text-white transition">
              <span className="text-center font-[K2D] text-[16.651px] font-normal leading-[16.651px] mr-1">
                Read More
              </span>
              <Image
                src="/Vector.png"
                alt="Icon"
                width={12}
                height={12}
                className="inline-block"
              />
            </Link>


      </div>

      {/* Newsroom Badge */}
      <div className="absolute top-2 left-2 bg-[rgba(140,69,255,0.4)] backdrop-blur-md text-white text-xs px-2 py-1 rounded flex items-center gap-2">
        <span>• Newsroom</span>
      </div>
    </div>
  );
}
