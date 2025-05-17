'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import internshipgirl3 from 'public/internshipgirl3.png';
import internshipgirl from 'public/internshipgirl.png';
import { Accordion } from '@/components/Accordion';

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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Your First Step Into Tech
          </h2>
          <Link href="/contact">
            <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-green-950 hover:text-white cursor-pointer transition">
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

          <button className="mt-6 px-6 py-2 bg-[#045e52] text-white rounded-lg hover:bg-green-950 hover:text-white cursor-pointer transition">
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
              <Link href={'/contact'}>
                <button className="mt-4 w-fit px-4 py-2 bg-[#045e52] text-white rounded hover:bg-green-950 hover:text-white cursor-pointer transition">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-[#045e52] text-white rounded hover:bg-green-950 hover:text-white cursor-pointer transition">
            Unlock Free
          </button>
        </div> */}
      </section>
      <section className="bg-[#045e52] py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Internships on Code Shiksa
        </h2>

        <Accordion title="Full Stack Web Development">
          {/* <p className="font-semibold mb-2">Full Stack</p> */}
          <ul className="list-none list-inside text-sm space-y-1 text-gray-700">
            <li>✔ Module 1 - HTML</li>
            <li>✔ Module 2 - CSS</li>
            <li>✔ Module 3 - Java Script</li>
            <li>✔ Module 4 - Git & GitHub</li>
            <li>✔ Module 5 - Tailwind Css</li>
            <li>✔ Module 6 - React Js</li>
            <li>✔ Module 7 - Node Js</li>
            <li>✔ Module 8 - Express Js</li>
            <li>✔ Module 9 - MongoDB</li>
            <li>✔ Module 10 - RestFull API</li>
            <li>✔ Module 11 - Next Js</li>
            <li>✔ Module 12 - Deployment</li>
          </ul>
        </Accordion>

        <Accordion title="Digital Marketing">
          {/* <p className="text-gray-600 text-sm">Coming Soon...</p> */}
          <ul className="list-none list-inside text-sm space-y-1 text-gray-700">
            <li>✔ Module 1 - Basic Of Marketing & Digital Marketing</li>
            <li>✔ Module 2 - Website Planning and Creation & Tools</li>
            <li>✔ Module 3 - Importance Of AI Tool in DM </li>
            <li>✔ Module 4 - Paid & Organic Marketing</li>
            <li>✔ Module 5 - Graphic Degigning & Video Editing</li>
            <li>✔ Module 6 - Social Media Marketing</li>
            <li>✔ Module 7 - Affiliate Marketing</li>
          </ul>
        </Accordion>

        <Accordion title="DevOps">
          {/* <p className="text-gray-600 text-sm">Coming Soon...</p> */}
          <ul className="list-none list-inside text-sm space-y-1 text-gray-700">
            <li>✔ Module 1 - Everything About Linux</li>
            <li>✔ Module 2 - Shell Scripting</li>
            <li>✔ Module 3 - Python</li>
            <li>✔ Module 4 - Git & GitHub</li>
            <li>✔ Module 5 - Docker</li>
            <li>✔ Module 6 - Web Server</li>
            <li>✔ Module 7 - Jenkin</li>
            <li>✔ Module 8 - CI/CD</li>
            <li>✔ Module 9 - K8S</li>
            <li>✔ Module 10 - Terraform</li>
            <li>✔ Module 11 - Ansible</li>
            <li>✔ Module 12 - Garfana</li>
          </ul>
        </Accordion>

        <Accordion title="Cloud Computing">
          {/* <p className="text-gray-600 text-sm">Coming Soon...</p> */}
          <ul className="list-none list-inside text-sm space-y-1 text-gray-700">
            <li>✔ Module 1 - Everything About Linux</li>
            <li>✔ Module 2 - Shell Scripting</li>
            <li>✔ Module 3 - Python</li>
            <li>✔ Module 4 - Git & GitHub</li>
            <li>✔ Module 5 - AWS</li>
            <li>✔ Module 6 - Web Server</li>
            <li>✔ Module 7 - Lambda</li>
            <li>✔ Module 8 - Cloud Watch</li>
            <li>✔ Module 9 - VPC</li>
          </ul>
        </Accordion>

        <Accordion title="Graphic Designing">
          <p className="text-gray-600 text-sm">Coming Soon...</p>
        </Accordion>
      </section>
      <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mentorship Card */}
          <div className="bg-[#045e52] text-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Learn with 1:1 Mentorship</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-white rounded-full relative">
                <div className="absolute top-0 left-0 h-1 w-3 bg-white rounded-full"></div>
                <div className="absolute top-0 right-0 h-1 w-3 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="mb-4">Get personalized mentorship from industry experts to fast-track your career.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Interview Coaching</li>
              <li>Resume Building</li>
              <li>Hands-on Project Support</li>
              <li>Personalized Guidance</li>
              <li>Access to High-quality Recorded Lectures</li>
            </ul>
          </div>

          {/* Certification Card */}
          <div className="bg-[#045e52] text-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">{`Codeshiksa’s Professional Certification`}</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-white rounded-full relative">
                <div className="absolute top-0 left-0 h-1 w-3 bg-white rounded-full"></div>
                <div className="absolute top-0 right-0 h-1 w-3 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="mb-4">{`Stand out in the job market with Codeshiksa's verified certification.`}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Endorsed by a Reputed IT Company</li>
              <li>Recognized by Hiring Partners</li>
              <li>Performance-based Certification</li>
              <li>Exclusive Job & Freelance Opportunities</li>
              <li>Exclusive Internship Programs</li>
            </ul>
          </div>
        </div>
      </section>


    </>
  );
};

export default Page;

