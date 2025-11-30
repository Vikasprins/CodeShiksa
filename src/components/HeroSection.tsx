"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "public/heroImg.webp"
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section
      className="bg-white  min-h-[60vh] flex flex-col items-center justify-between px-6 md:px-16 py-10 gap-10 "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-black">
          <span className="text-[#008dc0]">Become Skilled</span> With Guidance, <br />
From Real Industry Practitioners
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-black">
          Learn full-stack web development with MERN Stack and level up your career.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href={"/internships"}>
            <Button className="px-3 py-3 bg-accent text-[#008dc0] font-semibold rounded-full hover:bg-[#008dc0] text-[18px] hover:text-white transition-all cursor-pointer">
              Explore Internship
            </Button>
          </Link>
          <Link href={"/projects"}>
            <Button className="px-3 py-3 bg-accent text-[#008dc0] font-semibold rounded-full hover:bg-[#008dc0] text-[18px] hover:text-white transition-all cursor-pointer">
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={hero}
          alt="girl image"
          height={500}
          width={600}
          className="items-center justify-center "

        />
      </div>
    </section>
  );
};

export default HeroSection;


// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import * as THREE from 'three'
// import NET from '@/vanta/net' // path to your file (the code you shared)

// const HeroSection: React.FC = () => {
//   const vantaRef = useRef<HTMLDivElement>(null)
//   const [vantaEffect, setVantaEffect] = useState<any>(null)

//   useEffect(() => {
//     if (!vantaEffect && vantaRef.current) {
//       const effect = NET({
//         el: vantaRef.current,
//         THREE: THREE,
//         color: 0x773fff,
//         lineColor: 0xff3fff, 
//         backgroundColor: 0xffffff,
//         points: 10,
//         maxDistance: 20,
//         spacing: 15,
//         showDots: true,
//       })
//       setVantaEffect(effect)
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])

//   return (
//     <div ref={vantaRef} className="h-[100vh] w-full relative flex items-center justify-center">
//       <div className="relative z-10 text-center text-black">
//         <h1 className="text-[60px] font-bold mb-4"> <span className='text-[#008dc0]'>Master Skills</span> That Work, <br />
// From Experts Who Use Them Daily</h1>
//         <p className="text-lg mb-6">Learn full-stack web development with MERN Stack and level up your career.</p>
//         <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
//           Get Started
//         </button>
//       </div>
//     </div>
//   )
// }

// export default HeroSection










// "use client";

// import React from "react";
// import Link from "next/link";
// import { Button } from "./ui/moving-border";

// const HeroSection = () => {
//   const stars = Array.from({ length: 20 });

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#045e52] to-[#090a0f] overflow-hidden">
//       <div className="night absolute inset-0 rotate-45">
//         {stars.map((_, i) => (
//           <div
//             key={i}
//             className="shooting_star absolute h-[2px] bg-gradient-to-r from-[#5f91ff] to-transparent rounded-full drop-shadow-[0_0_6px_rgba(105,155,255,1)]"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               opacity: 0.8,
//             }}
//           />
//         ))}
//       </div>

//       <h1 className="z-10 text-6xl text-white font-bold text-center">
//         Welcome to Code शिक्षा 
//         <p className="text-lg md:text-xl max-w-xl mx-auto text-muted mt-5">
//           Learn full-stack web development with MERN Stack and level up your career.
//         </p>
//           <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
//            <Link href={"/internships"}>
//            <Button className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-green-950 hover:text-white transition-all cursor-pointer">
//              Explore Internship
//            </Button>
//          </Link>
//           <Link href={"/projects"}>
//             <Button className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-green-950 hover:text-white transition-all cursor-pointer">
//                Explore Projects
//              </Button>
//            </Link>
//         </div>
//       </h1>
           
      

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes tail {
//           0% {
//             width: 0;
//           }
//           30% {
//             width: 100px;
//           }
//           100% {
//             width: 0;
//           }
//         }

//         @keyframes shooting {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(300px);
//           }
//         }

//         @keyframes shining {
//           0% {
//             width: 0;
//           }
//           50% {
//             width: 30px;
//           }
//           100% {
//             width: 0;
//           }
//         }

//         .shooting_star {
//           animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
//         }

//         .shooting_star::before,
//         .shooting_star::after {
//           content: "";
//           position: absolute;
//           top: 50%;
//           right: 0;
//           height: 2px;
//           width: 30px;
//           transform: translateX(50%) rotateZ(45deg);
//           border-radius: 100%;
//           background: linear-gradient(
//             -45deg,
//             rgba(0, 0, 255, 0),
//             rgba(95, 145, 255, 1),
//             rgba(0, 0, 255, 0)
//           );
//           animation: shining 3s ease-in-out infinite;
//         }

//         .shooting_star::after {
//           transform: translateX(50%) rotateZ(-45deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;
