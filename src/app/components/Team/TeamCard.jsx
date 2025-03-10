"use client";
import Image from "next/image";

export default function TeamCard({ name, role, education, image }) {
  return (
    <div className="w-[260px] h-[150px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 text-center">
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full mb-2"
      />
      <h3 className="text-[16px] font-bold text-black">{name}</h3>
      <p className="text-[14px] text-[#5323EC]">{role}</p>
      <p className="text-[12px] text-[#B3B3B3]">{education}</p>
    </div>
  );
}
