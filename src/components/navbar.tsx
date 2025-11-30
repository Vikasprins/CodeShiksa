"use client"; // Required for client-side interactivity
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo1 from "public/logo1.png"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#008dc0] text-white rounded-4xl ">
      <nav className="container mx-auto flex items-center justify-between p-4">

  {/* LEFT — Logo */}
  <Link href="/" className="flex items-center bg-[#008dc0] rounded-4xl">
    <Image src={logo1} alt="logo" height={50} />
  </Link>

  {/* CENTER — Navigation Links */}
  <div
    className={`${
      isOpen ? "flex" : "hidden"
    } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mx-auto text-[18px]">
      <Link href="/" className="hover:text-[#008dc0]" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="/projects" className="hover:text-black" onClick={() => setIsOpen(false)}>Projects</Link>
      <Link href="/internships" className="hover:text-black" onClick={() => setIsOpen(false)}>Internship</Link>
      <Link href="/courses" className="hover:text-black" onClick={() => setIsOpen(false)}>Courses</Link>
      <Link href="/about" className="hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
      <Link href="/contact" className="hover:text-black" onClick={() => setIsOpen(false)}>Contact Us</Link>
    </div>
  </div>

  {/* RIGHT — Login / Profile */}
  <div className="hidden md:flex items-center gap-6 text-[18px]">
    <Link href="/login" className="hover:text-[#008dc0]">Login</Link>
    <Link href="/profile" className="hover:text-[#008dc0]">
      <CgProfile size={24} />
    </Link>
  </div>

  {/* Hamburger (Mobile) */}
  <button
    className="md:hidden text-black"
    onClick={toggleMenu}
  >
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      )}
    </svg>
  </button>
</nav>

    </div>
  );
};

export default Navbar;