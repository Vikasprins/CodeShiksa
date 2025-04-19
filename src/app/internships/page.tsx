// 
// import React from "react";
// import { Vortex } from "../../components/ui/vortex";

// export default function page() {
//   return (
//     <div className="w-full mx-auto   h-[30rem] overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           Internship In Hisar
//         </h2>

//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//           burned and you&apos;ll have a scar.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2  text-white ">Watch trailer</button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }


'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import internshipgirl3 from 'public/internshipgirl3.png';
import internshipgirl from 'public/internshipgirl.png';

const Page = () => {
  const programs = [
    {
      title: 'BCA Internship',
      description:
        'Implement your creativity, computer applications, and software knowledge into real projects with our BCA internship.',
      benefits: [
        'Work on real-world projects',
        'Placement Assistance',
        'Learn from the best industry experts',
        'Stipend (based on performance)',
      ],
      duration: '3 to 6 Months',
    },
    {
      title: 'B.Tech Internship',
      description:
        'B.Tech internship at Code Shiksa opens new possibilities for learning the technical skills that are needed to shape the future and secure your seat in top companies.',
      benefits: [
        'Work on real-world projects',
        'Placement Assistance',
        'Work under the guidance of industry experts',
        'Stipend (based on performance)',
      ],
      duration: '3 to 6 Months',
    },
    {
      title: 'MCA Internship',
      description:
        'Apply for an MCA internship at Code Shiksa and unlock endless opportunities. You will not only learn the key skills associated to MCA but also from other verticals.',
      benefits: [
        'Opportunity to work on real-world projects',
        'Placement Assistance',
        'Work with the best industry experts',
        'Stipend (based on performance)',
      ],
      duration: '3 to 6 Months',
    },
    {
      title: 'M.Tech Internship',
      description:
        'Looking for a reliable M.Tech Internship in Hisar? Code Shiksa is your mentor and a team that is always filled with countless opportunities and becomes a backbone for you in life.',
      benefits: [
        'Get hands-on real-world projects',
        'Placement Assistance',
        'Timely support from technical experts',
        'Stipend (based on performance)',
      ],
      duration: '3 to 6 Months',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-auto md:h-[400px] bg-[#045e52] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-white space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Internship In Hisar
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Your First Step Into Tech
          </h2>
          <Link href="/join">
            <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-orange-700 transition">
              Join Us
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-6 md:mt-0 flex justify-center items-center">
          <Image
            src={internshipgirl}
            alt="girl image"
            className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 lg:px-20 py-12 items-center">
        <div className="flex justify-center">
          <Image
            src={internshipgirl3}
            alt="Internship Visual"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Kick-Start Your Career With Code Shiksa
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Are you looking for internships in Hisar? If yes, Code Shiksa has got you all covered!
            We have come up with the most trending internships in Hisar that can help you scale up your skills.
            So, whether you are a 12th-pass student, bachelor, or fresher who wants to switch careers;
            we have internship opportunities for all. So what are you waiting for? Apply Now!
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-6">
            Who can Apply?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✅ Candidates who are available for full-time (in-office) internship</li>
            <li>✅ Students who can start the internship immediately</li>
            <li>✅ Those who are available for 2 months duration</li>
            <li>✅ Candidates who are from Hisar or open to relocate to Hisar</li>
            <li>✅ Students who have relevant skills and interests</li>
            <li>✅ College students who are pursuing IT or any other degree</li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-[#045e52] text-white rounded-lg hover:bg-orange-700 transition">
            Reach Us
          </button>
        </div>
      </div>

      {/* Program Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Most Popular Internship Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-[#045e52] rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-[#045e52] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {program.description}
                </p>
                <h4 className="font-semibold mb-2">Benefits of our {program.title}</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <p className="mt-3 font-medium">Duration: {program.duration}</p>
              </div>
              <button className="mt-4 w-fit px-4 py-2 bg-[#045e52] text-white rounded hover:bg-orange-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-[#045e52] text-white rounded hover:bg-orange-700 transition">
            Unlock Free
          </button>
        </div>
      </section>
    </>
  );
};

export default Page;

