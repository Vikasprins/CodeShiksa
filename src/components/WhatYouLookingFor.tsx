import { FC } from "react";

const WhatYouLookingFor: FC = () => {
  return (
     <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mentorship Card */}
          <div className="bg-white text-black rounded-lg p-6 shadow-md border border-[#008dc0]">
            <h3 className="text-xl font-bold text-center mb-4">Learn with 1:1 Mentorship</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-[#008dc0] rounded-full relative">
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
          <div className="bg-white text-black rounded-lg p-6 shadow-md border border-[#008dc0]">
            <h3 className="text-xl font-bold text-center mb-4">{`Codeshiksa’s Professional Certification`}</h3>
            <div className="flex justify-center mb-4">
              <div className="w-3/4 h-1 bg-[#008dc0] rounded-full relative">
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
  );
};

export default WhatYouLookingFor;
