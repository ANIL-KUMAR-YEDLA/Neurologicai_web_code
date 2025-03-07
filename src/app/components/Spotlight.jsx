// "use client";
// export default function Spotlight() {
//   const articles = [
//     {
//       img: "/news1.png",
//       title: "Neurologic.AI has been awarded the Times Business Award 2024...",
//       link: "/newsroom/1"
//     },
//     {
//       img: "/news2.png",
//       title: "Excellence in Healthcare Award at the Health 2.0 Conference in Dubai 2024",
//       link: "/newsroom/2"
//     },
//     {
//       img: "/news3.png",
//       title: "Neurologic AI has been featured in Times of India...",
//       link: "/newsroom/3"
//     },
//     {
//       img: "/news4.png",
//       title: "Honored to be invited among the 50 startups from Hyderabad",
//       link: "/newsroom/4"
//     }
//   ];

//   return (
//     <section className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white py-16 px-24">
//       <h2 className="text-[32px] font-semibold text-[#A55CFF] mb-4">
//         Spotlight On Neurologic
//       </h2>
//       <div className="border-b border-[#A55CFF] mb-8 w-48 mx-auto"></div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {articles.map((article, index) => (
//           <a
//             href={article.link}
//             key={index}
//             className="relative group border border-[#A55CFF] rounded-lg overflow-hidden"
//           >
//             <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
//               <p className="text-sm text-white group-hover:text-[#A55CFF] transition-colors">
//                 {article.title}
//               </p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
