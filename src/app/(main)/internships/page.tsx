'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from 'public/heroImg.webp';
import { Accordion } from '@/components/Accordion';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
      <section className="relative w-full bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      
      {/* Background Decorative Blob (Optional for style) */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-[#008dc0] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008dc0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            New Batch Starting Soon
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#008dc0] leading-tight mb-6">
            Launch Your Career with an <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">Internship in Hisar</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Stop just learning syntax. Start building real projects. Get mentored by industry experts and take your first confident step into the Tech World.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#008dc0] text-white font-semibold rounded-xl hover:text-black hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            
            <Link href="/courses" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                View Curriculum
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" /> 100% Practical
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" /> Certificate Included
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 relative w-full flex justify-center md:justify-end z-10">
          {/* Main Image with styling */}
          <div className="relative rounded-2xl p-2 bg-white/50 backdrop-blur-sm border border-white shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
             <Image
              src={heroImg}
              alt="Student working on laptop"
              width={600}
              height={500}
              priority
              className="rounded-xl w-full max-w-[400px] md:max-w-[500px] h-auto object-cover"
            />
            
            {/* Floating Card Element for Depth */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Career Growth</p>
                  <p className="text-sm font-bold text-gray-900">High Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

      {/* Info Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 lg:px-20 py-12 items-center">
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

          <button className="mt-6 px-6 py-2 bg-[#008dc0] text-white rounded-lg hover:bg-green-950 hover:text-white cursor-pointer transition">
            Reach Us
          </button>
        </div>
      </div> */}

      {/* Program Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Most Popular Internship Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-[#008dc0] rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-[#008dc0] mb-2">
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
                <button className="mt-4 w-fit px-4 py-2 bg-[#008dc0] text-white rounded hover:bg-green-950 hover:text-white cursor-pointer transition">
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
      <section className="bg-[#008dc0] py-16 px-6 sm:px-10 lg:px-20">
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
          <div className=" text-black rounded-lg p-6 shadow-md border border-[#008dc0]">
            <h3 className="text-xl font-bold text-center mb-4">Learn with 1:1 Mentorship</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-[#008dc0] rounded-full relative">
                <div className="absolute top-0 left-0 h-1 w-3 bg-[#008dc0] rounded-full"></div>
                <div className="absolute top-0 right-0 h-1 w-3 bg-[#008dc0] rounded-full"></div>
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
          <div className=" text-black rounded-lg p-6 shadow-md border border-[#008dc0]">
            <h3 className="text-xl font-bold text-center mb-4">{`Codeshiksa’s Professional Certification`}</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-[#008dc0] rounded-full relative">
                <div className="absolute top-0 left-0 h-1 w-3 bg-[#008dc0] rounded-full"></div>
                <div className="absolute top-0 right-0 h-1 w-3 bg-[#008dc0] rounded-full"></div>
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

