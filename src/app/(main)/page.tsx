// app/page.tsx or app/home/page.tsx

import React from "react";

import PopularTopics from "@/components/PopularTopics";
import PopularCourses from "@/components/PopularCourses";
import PopularProjects from "@/components/PopularProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MentorSection from "@/components/MentorSection";
import WhatYouLookingFor from "@/components/WhatYouLookingFor";

export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <PopularTopics />
      </div>
      <div>
        <PopularProjects />
      </div>
      <div>
        <PopularCourses />
      </div>
      <div>
        <MentorSection />
      </div>
      <div>
        <WhatYouLookingFor />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}
