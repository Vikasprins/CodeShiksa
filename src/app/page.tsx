"use client";
import React from "react";

// import { cn } from "@/lib/utils";
// import { Boxes } from "@/components/ui/background-boxes";
// import Image from "next/image";
// import first from "public/first.webp"
import PopularTopics from "@/components/PopularTopics";
import PopularCourses from "@/components/PopularCourses";
import PopularProjects from "@/components/PopularProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MentorSection from "@/components/MentorSection";
import WhatYouLookingFor from "@/components/WhatYouLookingFor";
export function BackgroundBoxesDemo() {
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
      <div>
        <Footer />
      </div>
    </>

  );
}
export default BackgroundBoxesDemo