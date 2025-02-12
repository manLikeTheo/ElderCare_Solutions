"use client"; // This is a client component
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex group justify-between gap-8 items-center px-8 bg-sky-700/90 shadow-lg shadow-slate-300 z-50 relative">
      {/* Logo */}
      <Link href={`/`} className="hover:scale-90 w-auto h-auto">
        <Image
          className=""
          src="/WellAged Care+ Logo.png"
          alt="wellAged logo"
          width={80}
          height={80}
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
                className="regular-24 flex gap-2  items-center  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                href={link.href}
              >
                {link.label}
                <FaChevronDown size={24} />
              </Link>
              {isDropdownOpen && (
                <ul className="absolute solutions-dropdown text-xl px-10 py-12 rounded opacity-100 w-[380px] *:py-3 z-50 bg-sky-700 text-slate-100 font-semibold leading-relaxed top-full left-0">
                  {link.dropdown.map((dropdownLink) => (
                    <li
                      key={dropdownLink.href}
                      className="py-2 px-4 hover:font-extrabold hover:scale-105 transition-all hover:bg-sky-600"
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
              className="regular-24 font-bold text-gray-50 flexCenter cursor-pointer pb-1 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          )
        )}
      </ul>
      {/* Hamburger Nenu Functionality */}
      <button
        className="text-gray-100 hover:scale-90 cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaHamburger className="" size={36} />
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="absolute top-20 right-0 w-[50%] p-2 text-xl bg-sky-700 text-slate-100 font-semibold leading-relaxed lg:hidden">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <li
                key={link.href}
                className="py-2 px-4 hover:font-extrabold hover:scale-105 transition-all  relative"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {link.label}
                  <FaChevronDown size={24} />
                </Link>
                {isDropdownOpen && (
                  <ul className="">
                    {link.dropdown.map((dropdownLink) => (
                      <li
                        key={dropdownLink.href}
                        className="py-2 px-4 hover:font-extrabold hover:scale-95 transition-all hover:bg-sky-600"
                      >
                        <Link href={dropdownLink.href}>
                          {dropdownLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={link.href}
                className="py-2 px-4 hover:font-extrabold hover:scale-90 transition-all"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
