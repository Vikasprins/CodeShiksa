"use client";
import Image from "next/image";
import Link from "next/link";
import herogirl1 from "public/herogirl1.png"
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section
      className="bg-[#045e52] text-white min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
          Welcome to <span className="text-highlight">Code शिक्षा</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-muted">
          Learn full-stack web development with MERN Stack and level up your career.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href={"/internships"}>
            <Button className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-green-950 hover:text-white transition-all cursor-pointer">
              Explore Internship
            </Button>
          </Link>
          <Link href={"/projects"}>
            <Button className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-green-950 hover:text-white transition-all cursor-pointer">
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={herogirl1}
          alt="girl image"

        />
      </div>
    </section>
  );
};

export default HeroSection;
