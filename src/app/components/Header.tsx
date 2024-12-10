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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex group justify-between gap-8 items-center px-8 bg-slate-500 shadow-xl shadow-slate-600 border-b-2 border-slate-400">
      {/* Logo */}
      <Link href={`/`} className="hover:scale-90 w-auto h-auto">
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
                <ul className="absolute solutions-dropdown text-xl p-3 rounded opacity-100 w-[320px] z-100 bg-slate-600 text-slate-100 font-semibold leading-relaxed top-full left-0">
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
        <ul className="absolute top-20 right-0 w-[50%] p-2 text-xl bg-slate-500 text-slate-100 font-semibold leading-relaxed lg:hidden">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <li
                key={link.href}
                className="py-2 px-4 hover:font-extrabold hover:scale-95 transition-all relative"
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
                        className="py-2 px-4 hover:font-extrabold hover:scale-95 transition-all"
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
