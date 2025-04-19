"use client"; // Required for client-side interactivity
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo3 from "public/logo3.png"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#045e52] text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl sm:text-2xl text-white">
          {/* Code <span className="text-white">शिक्षा</span> */}
          <Image src={logo3} alt="logo" height={30} />
        </Link>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          {/* Main Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
            <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/internships" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Internship
            </Link>
            <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>

          {/* User Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="/login" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link href="/profile" className="hover:text-gray-400 text-center" onClick={() => setIsOpen(false)}>
            <CgProfile size={22}/>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;