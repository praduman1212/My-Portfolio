'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdCall } from "react-icons/md";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-3 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[4px] sm:px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/formal pic.png"
            alt="Logo"
            width={30}
            height={30}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:selffont-bold ml-[8px] sm:ml-[10px] text-sm sm:text-base text-gray-300">Praduman Sharma</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[320px] sm:w-[400px] md:w-[500px] h-full flex-row items-center justify-between md:mr-10 lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[8px] sm:mr-[15px] px-[10px] sm:px-[20px] py-[7px] sm:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-3 sm:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
          {/* Email Icon */}
          <Link
            href="mailto:sharmapraduman6@gmail.com"
            className="flex items-center"
            title="Email"
          >
            <MdEmail className="h-6 w-6 text-white" />
          </Link>
          {/* Call Icon */}
          <Link
            href="tel:+919520949165"
            className="flex items-center"
            title="Call"
          >
            <MdCall className="h-6 w-6 text-white" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl sm:text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-4 sm:p-5 flex flex-col items-center text-gray-300 md:hidden z-50">
          {/* Links */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
            {/* Email Icon */}
            <Link
              href="mailto:sharmapraduman6@gmail.com"
              className="flex items-center"
              title="Email"
            >
              <MdEmail className="h-8 w-8 text-white" />
            </Link>
            {/* Call Icon */}
            <Link
              href="tel:+919520949165"
              className="flex items-center"
              title="Call"
            >
              <MdCall className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};