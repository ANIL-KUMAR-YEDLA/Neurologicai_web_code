"use client";
import Image from "next/image";
import Link from "next/link";

export default function SpotlightCard3() {
  return (
      <div className="spotlight-card- relative w-[300px] h-[426.331px] ml-4 flex-shrink-0 rounded-lg shadow-md border border-[#A400FF] overflow-hidden">
        <Image
          src="/news/news3.png"
          alt="Neurologic AI has been featured in Times of India for..."
          width={325}
          height={426}
          className="w-full h-full object-cover"
        />
  
        
        <div className="absolute bottom-0 w-full h-[138.71px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"></div>
  
        {/* Title and Read More */}
        <div className="absolute bottom-0 p-4 w-[302px] h-[136px] flex flex-col text-white mb-34 z-10 bg-[rgba(0,0,0,0.5)]">
          <p className="w-[275.601px] h-[116.041px] text-[#EAD2FF] text-[20px] italic font-normal leading-[33.301px] tracking-[0.52px] flex-shrink-0 p-2 rounded-lg font-poppins">
            Neurologic AI has been featured in {" "}
            <span className="font-bold">Times of India</span> for...
          </p>
        </div>

  

      <div className="absolute bottom-2 right-1">
            <Link href="/newsroom/50-startups-hyderabad" className="flex items-center justify-center text-[#A400FF] text-sm hover:text-white transition">
              <span className="text-center font-k2d text-[16.651px] font-black leading-[16.651px] mr-1">
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
