
  import Image from "next/image";

  export default function FooterBottom() {
    return (
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
          
          {/* Left Side: Copyright Text */}
          <div className="mt-24 ml-[500px] text-center text-[#B3B3B3] text-[14px] pt-4">
              <p>Copyright©2025 Neurologic AI</p>
          </div> 
          
          {/* Right Side: Awards Image */}
          <div 
          className=" mb-[90px] w-[171.103px] h-[71.374px] flex-shrink-0 rounded-[23px]"
          style={{
            background: "url('/awards.png') lightgray -0.054px 0px / 100.063% 134.932% no-repeat"
          }}
        />
          
        </div>
      </div>
    );
  }
  