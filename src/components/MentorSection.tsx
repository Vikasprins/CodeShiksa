import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import vikas from 'public/vikas1.png';

const MentorSection = () => {
  return (
    <section className="w-full bg-[#045e52] text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 gap-10">
      
      {/* Left Text Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="mb-4 inline-block px-3 py-1 border border-white rounded">
          Meet Your Mentor
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Vikas Prins
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-100">
          {`Hi, I am Vikas Prins, Experienced Software Engineer and Technical Trainer, passionate about DevOps and development, whose vision is to transform everyone's career into IT, irrespective of their background.`}
        </p>
        <Link href="/contact">
          <button className="mt-6 px-8 py-2 bg-white text-[#045e52] font-semibold rounded-lg hover:bg-green-950 hover:text-white cursor-pointer transition">
            Join ME
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={vikas}
          alt="Mentor image"
          className="max-h-[350px] w-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default MentorSection;
