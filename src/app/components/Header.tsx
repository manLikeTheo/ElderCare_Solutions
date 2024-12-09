"use client"; // This is a client component
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import logo from "../../../../public/care2Age logo png.png";
// import bars from "../../../public/Fitness Project/bars.png";
import { FaHamburger } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="flex group justify-between gap-8 items-center px-8 bg-slate-500 shadow-xl shadow-slate-600 border-b-2 border-slate-400">
      {/* Logo */}
      <Link href={`/`} className="hover:scale-90">
        <Image
          src="/care2Age logo png.png"
          alt="logo"
          width={250}
          height={250}
        />
      </Link>
      <ul className="hidden h-full lg:flex gap-10 text-slate-100 hover:*:opacity-75">
        {NAV_LINKS.map((link) =>
          link.dropdown ? (
            <li
              key={link.href}
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                className="regular-24 flex gap-2  items-center border-2 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                href={link.href}
              >
                {link.label}
                <FaChevronDown size={24} />
              </Link>
              {isDropdownOpen && (
                <ul className="absolute solutions-dropdown text-xl p-3 rounded shadow-lg w-48 z-100 bg-slate-500 text-slate-100 font-semibold leading-relaxed top-full left-0">
                  {link.dropdown.map((dropdownLink) => (
                    <li
                      key={dropdownLink.href}
                      className="py-2 px-4 hover:font-extrabold hover:scale-90 transition-all"
                    >
                      <Link href={dropdownLink.href}>{dropdownLink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <Link
              href={link.href}
              key={link.href}
              className="regular-24 font-bold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          )
        )}
        {/* <li>
          <Link href={`/`} className="font-bold text-2xl hover:scale-95">
            Home
          </Link>
        </li>
        <li
          className="relative group font-bold text-2xl cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link
            href={`/solutions
        `}
            className="font-bold text-2xl hover:scale-95"
          >
            Solutions
          </Link>
          {isDropdownOpen && (
            <ul className="solutions-dropdown text-xl p-3 rounded shadow-lg w-48 z-50 absolute bg-white text-slate-800 top-full left-0 *:py-2 transition ease-in-out duration-300">
              <li className="py-2 transition ease-in-out duration-300 hover:scale-105 hover:bg-gray-300">
                <a href="">AgeBuddy Digital Companion </a>
              </li>
              <li className="py-2 transition ease-in-out duration-300 hover:scale-105 hover:bg-gray-300">
                <a href="">Elderly Care Kits</a>
              </li>
              <li className="transition ease-in-out duration-300 hover:scale-105 hover:bg-gray-300">
                <a href="">Localized Support Services</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href={`/about`} className="font-bold text-2xl hover:scale-95">
            About Us
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="font-bold text-2xl hover:scale-95">
            Contact
          </Link>
        </li> */}
      </ul>
      <span className="text-gray-100 hover:scale-90 cursor-pointer lg:hidden">
        <FaHamburger className="" size={32} />
      </span>
    </nav>
  );
};

export default Header;
