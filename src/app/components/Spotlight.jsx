// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const spotlightData = [
//   {
//     image: "/news/news1.png", 
//     title: "Neurologic.AI has been awarded the Times Business Award 2024...",
//     link: "/newsroom/times-business-award",
//   },
//   {
//     image: "/news/news2.png", 
//     title: "Excellence in Healthcare Award at the Health 2.0 Conference in Dubai 2024",
//     link: "/newsroom/health-conference-dubai",
//   },
//   {
//     image: "/news/news3.png", 
//     title: "Neurologic AI has been featured in Times of India for...",
//     link: "/newsroom/times-of-india-feature",
//   },
//   {
//     image: "/news/news4.png", 
//     title: "Honored to be invited among the 50 startups from Hyderabad",
//     link: "/newsroom/50-startups-hyderabad",
//   },
// ];

// export default function SpotlightSection() {
//   return (
//     <section className="bg-gradient-to-r from-[#0B001E] to-[#21004D] py-16 px-8">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-[36px] font-semibold font-[Inter] text-transparent bg-clip-text bg-gradient-to-r from-[#5323EC] to-[#7F36F5] mb-4">
//           Spotlight On Neurologic
//         </h2>
//         <div className="flex justify-center mb-8">
//           <div className="border-t-2 border-b-2 border-[#5323EC] w-24"></div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {spotlightData.map((item, index) => (
//           <div
//             key={index}
//             className="relative group border border-[#5025FF] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             {/* Debugging: Log image path to console */}
//             {console.log(`Loading image: ${item.image}`)}

//             {/* Image Component */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={500}
//               height={600}
//               unoptimized // Remove this if you want Next.js to optimize the image
//               className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
//             />

//             {/* Overlay Content */}
//             <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-colors duration-300 flex flex-col justify-end p-4">
//               <p className="text-white text-sm mb-2">{item.title}</p>
//               <Link href={item.link} className="text-[#AA48FE] text-sm hover:text-white transition-colors duration-300">
//                 Read More ➔
//               </Link>
//             </div>
//             <div className="absolute top-2 left-2 bg-[#7F36F5] text-white text-xs px-2 py-1 rounded">
//               • Newsroom
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }