"use client";
import { FC } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Link from "next/link";

const WhatYouLookingFor: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What You Looking for?
          </h2>
          <p className="text-gray-600 mt-2">
            Our dynamic educational platform offers you the tools and resources <br />
            to propel yourself towards a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Teacher Card */}
          <div className="bg-[#045e52] shadow-md rounded-xl p-6 flex flex-col items-start space-y-4">
            <FaChalkboardTeacher size={40} className="text-white" />
            <h3 className="text-xl font-semibold text-white">
              Do You Want Teach Here
            </h3>
            <p className="text-white">
              Our dynamic educational platform offers you the tools supportive community.
            </p>
            <Link href="/teach">
              <button className="mt-2 px-5 py-2 bg-white text-[#045e52] rounded hover:bg-gray-800 transition">
                Get started
              </button>
            </Link>
          </div>

          {/* Student Card */}
          <div className="bg-[#045e52] text-white shadow-md rounded-xl p-6 flex flex-col items-start space-y-4">
            <PiStudentFill size={40} />
            <h3 className="text-xl font-semibold">
              Do You Want Learn Here
            </h3>
            <p>
              Our dynamic educational platform offers you the tools supportive community.
            </p>
            <Link href="/learn">
              <button className="mt-2 px-5 py-2 bg-white text-teal-900 font-semibold rounded hover:bg-gray-100 transition">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLookingFor;
