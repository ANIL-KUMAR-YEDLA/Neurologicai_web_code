import Image from "next/image";
import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex items-start gap-4">
      <div>
        <div
            className="w-[183.726px] h-[46.347px] flex-shrink-0 bg-lightgray"
            style={{
                backgroundImage: "url('/logo.png')",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                aspectRatio: "183.73 / 46.35",
            }}
        ></div>

        <div className="flex items-center gap-[99.62px] mt-4">
            <Link href="https://linkedin.com" target="_blank">
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={40} height={40} className="hover:opacity-75 transition" />
            </Link>
            <Link href="mailto:info@neurologicai.com">
                <Image src="/mail-icon.png" alt="Email" width={40} height={40} className="hover:opacity-75 transition" />
            </Link>
        </div>

      </div>
      
      <div className="flex flex-col justify-center items-start space-y-2 ml-4">
        <div className="flex flex-col justify-center w-[330.469px] h-[61.893px] flex-shrink-0 text-[#686868] font-[Inter] text-[15px] font-normal leading-[23px] tracking-[-0.45px]">
            254 Chapman Rd, Ste 208 #17957, Newark, Delaware 19702, United States - 19702
        </div>
        <div className="flex flex-col justify-center w-[146.556px] h-[20.631px] flex-shrink-0 text-[#686868] font-[Inter] text-[15px] font-normal leading-[23px] tracking-[-0.45px]">
            info@neurologicai.com
        </div>
      </div>


    </div>
  );
}
