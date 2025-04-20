"use client";
import Image from "next/image";
import herogirl1 from "public/herogirl1.png"

const HeroSection = () => {
  return (
    <section
      className="bg-[#045e52] text-white min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
          Welcome to <span className="text-highlight">Code शिक्षा</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-muted">
          Learn full-stack web development with MERN Stack and level up your career.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-green-950 hover:text-white transition-all"
        >
          Get Started
        </button>
      </div>
      <div>
        <Image 
        src={herogirl1}
        alt="girl image"
        
        />
      </div>
    </section>
  );
};

export default HeroSection;




// 'use client'
// export default function HeroSection() {

//   return (
//     <div className="bg-white">
     

//       <div
//         className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center"
//         style={{ backgroundImage: 'url(/herosection5.avif)' }}
//       >
//         <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold tracking-tight text-balance text-white sm:text-7xl">
//               Invest in <span className='text-yellow-500'>Knowledge</span>, Secure Your Future
//             </h1>
//             <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
//               Elevate your education with expert guidance to stay ahead in a competitive world.
//             </p>
           
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff6b91] to-[#6b5bff] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }




// "use client";
// import React from 'react'
// import { cn } from "@/lib/utils";
// import { Boxes } from "@/components/ui/background-boxes";
// import Image from "next/image";
// import first from "public/first.webp"

// const HeroSection = () => {
//   return (
//     <div className="min-h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
//     <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

//     <Boxes />
//     <div className="flex items-center gap-64 ">
//       <div>
//         <div className="">
//           <h1 className={cn("md:text-6xl text-xl  font-[40px] text-white relative z-20  ")}>
//             Investing in
//           </h1>
//           <h1 className={cn("md:text-6xl text-xl  font-[40px] text-white relative z-20 ")}>
//              Knowledge and
//           </h1>
//           <h1 className={cn("md:text-6xl text-xl font-bold text-yellow-500 relative z-20 mt-2")}>
//             Your Future
//           </h1>
//         </div>

//         <p className=" mt-2 text-neutral-300 relative z-20">
//           we are always availed to consult on taking your
//         </p>
//         <p className=" mt-2 text-neutral-300 relative z-20">
//           higher education to the next level so you can stay
//         </p>
//       </div>
//       <div className=" relative z-20">
//         <Image
//           src={first}
//           // fill
//           alt='image'
//           height={500}
//           // width={300}
//           style={{ objectFit: "cover" }}
//         />
//       </div>

//     </div>
//   </div>
//   )
// }

// export default HeroSection

// "use client";
// import React from "react";
// import { cn } from "@/lib/utils";
// import { Boxes } from "@/components/ui/background-boxes";
// import Image from "next/image";
// import first from "public/first.webp";

// const HeroSection = () => {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
//       {/* Background Mask */}
//       <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

//       {/* Background Boxes */}
//       <Boxes />

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 px-4 md:px-8 lg:px-16 py-12">
//         {/* Text Section */}
//         <div className="text-center md:text-left max-w-lg">
//           <h1
//             className={cn(
//               "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
//             )}
//           >
//             Investing in
//           </h1>
//           <h1
//             className={cn(
//               "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
//             )}
//           >
//             Knowledge and
//           </h1>
//           <h1
//             className={cn(
//               "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mt-2"
//             )}
//           >
//             Your Future
//           </h1>
//           <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300">
//             We are always available to consult on taking your higher education to
//             the next level so you can stay competitive.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
//           <Image
//             src={first}
//             alt="Hero image"
//             width={500}
//             height={500}
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//             priority // Optional: for faster loading of above-the-fold image
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



