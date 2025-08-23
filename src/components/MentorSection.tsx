// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import vikas from 'public/vikas1.png';

// const MentorSection = () => {
//   return (
//     <section className="w-full bg-[#045e52] text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 gap-10">
      
//       {/* Left Text Content */}
//       <div className="flex-1 text-center md:text-left">
//         <p className="mb-4 inline-block px-3 py-1 border border-white rounded">
//           Meet Your Mentor
//         </p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//           Vikas Prins
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl text-gray-100">
//           {`Hi, I am Vikas Prins, Experienced Software Engineer and Technical Trainer, passionate about DevOps and development, whose vision is to transform everyone's career into IT, irrespective of their background.`}
//         </p>
//         <Link href="/contact">
//           <button className="mt-6 px-8 py-2 bg-white text-[#045e52] font-semibold rounded-lg hover:bg-green-950 hover:text-white cursor-pointer transition">
//             Join ME
//           </button>
//         </Link>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1 flex justify-center items-center">
//         <Image
//           src={vikas}
//           alt="Mentor image"
//           className="max-h-[350px] w-auto object-contain"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default MentorSection;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import Image from 'next/image';

// type TeamMember = {
//   name: string;
//   role: string;
//   image: string;
//   description: string;
// };

// const team: TeamMember[] = [
//    {
//     name: 'Vikas Prins',
//     role: 'CEO & Mentor',
//     image: '/vikas1.png', 
//     description:
//       'Vikas Prins is a Software Engineer and Youtuber, known for his coding & mentoring. He has 1M+ subscribers and mentored 500k+ students. MCA From GJU, worked at  SISC',
//   },
//   {
//     name: 'Manjeet',
//     role: 'CTO & Mentor',
//     image: '/manjeet.png',
//     description:
//       'Manjeet is a Software Engineer and Youtuber, known for his coding & mentoring. He has 1M+ subscribers and mentored 500k+ students. MCA From GJU, worked at  SISC',
//   },
  
//     {
//     name: 'Uma',
//     role: 'Manager & Mentor',
//     image: '/uma.png', 
//     description:
//       'Uma is a creear consular and Youtuber,  She has 1M+ subscribers and mentored 500k+ students.',
//   },
//   // Add more team members here
// ];

// export default function MentorSection() {
//    const [currentSlide, setCurrentSlide] = useState(0);
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     slides: { perView: 1, spacing: 15 },
//   });
//    useEffect(() => {
//     const interval = setInterval(() => {
//       if (instanceRef.current) {
//         instanceRef.current.next();
//       }
//     }, 5000); 
//     return () => clearInterval(interval);
//   }, [instanceRef]);

//   return (
//     <section className="bg-white text-black py-16 px-4">
//       <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
//       <div ref={sliderRef} className="keen-slider">
//         {team.map((member, idx) => (
//           <div
//             key={idx}
//             className="keen-slider__slide flex justify-center items-center"
//           >
//             <div className=" bg-[#045e52]  rounded-[20px] p-6 flex flex-col md:flex-row items-center max-w-4xl shadow-lg">
//               <div className="w-64 h-64 relative flex-shrink-0">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="mt-6 md:mt-0 md:ml-8 max-w-xl">
//                 <h3 className="text-2xl text-white font-semibold">{member.name}</h3>
//                 <p className="text-sm text-gray-300 mt-1">{member.role}</p>
//                 <p className="text-md text-gray-400 mt-4">{member.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const team: TeamMember[] = [
  {
    name: 'Vikas Prins',
    role: 'CEO & Mentor',
    image: '/vikas2.png',
    description:
      "Vikas Prins is an accomplished Software Engineer and Technical Trainer with a strong focus on DevOps and modern software development. As the CEO and Mentor at our academy, his mission is to empower individuals from all backgrounds to successfully transition into IT careers, fostering a new generation of skilled and confident tech professionals.",
  },
  {
    name: 'Manjeet',
    role: 'CTO & Mentor',
    image: '/manjeet.png',
    description:
      "Manjeet, our Chief Technology Officer and Lead Mentor, is a seasoned Software Engineer with deep expertise in full-stack development and system architecture. He is dedicated to driving innovation in technical education and guiding students to build real-world, industry-ready skills for successful careers in IT.",
  },
  {
    name: 'Uma',
    role: 'Manager & Mentor',
    image: '/uma.png',
    description:
      "Uma, our Manager and Mentor, plays a key role in student success and career guidance. With a strong background in academic counseling and mentorship, she is committed to helping learners navigate their career paths and unlock opportunities in the IT industry through skill-based education.",
  },
  {
    name: 'Rajesh',
    role: 'Python Developer & Mentor',
    image: '/rajesh.png',
    description:
      "Rajesh, our Python and Backend Developer, specializes in building robust, scalable server-side applications and APIs. With a strong command of Python, Django, and modern backend architectures, he is passionate about writing clean code and mentoring students in real-world backend development practices.",
  },
];

export default function MentorSection() {
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
  });

  // Auto-play effect
  useEffect(() => {
    const startAutoPlay = () => {
      if (!intervalRef.current && instanceRef.current && !isHovered) {
        intervalRef.current = setInterval(() => {
          if (instanceRef.current) {
            instanceRef.current.next();
          }
        }, 5000);
      }
    };

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (isHovered) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isHovered, instanceRef]);

  return (
    <section className="bg-white text-black py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

      <div
        ref={sliderRef}
        className="keen-slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {team.map((member, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center items-center">
            <div className="bg-[#045e52] rounded-[20px] p-6 flex flex-col md:flex-row items-center max-w-4xl shadow-lg">
              <div className="w-64 h-64 relative flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill={true}
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 max-w-xl">
                <h3 className="text-2xl text-white font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{member.role}</p>
                <p className="text-md text-gray-400 mt-4">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
