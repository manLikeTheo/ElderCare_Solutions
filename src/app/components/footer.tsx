import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaCopyright,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import blob_scene_haikei from "../../../public/Startup Website/blob_scene_haikei.png";
import layered_wave from "../../../public/images/layered_wave.svg";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${layered_wave.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white py-8"
      aria-label="Footer"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-8">
        {/* Brand Section */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform"
          >
            <h1 className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-violet-200 to-indigo-200 bg-clip-text text-transparent md:text-4xl">
              WellAged Care
            </h1>
          </Link>
          <div className="flex space-x-6 py-4 text-2xl">
            <Link href="#" className="hover:text-cyan-600 transition-colors">
              <FaFacebook size={32} />
            </Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">
              <FaLinkedin size={32} />
            </Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">
              <FaTwitter size={32} />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <nav aria-label="Contact Information" className="space-y-6">
            <div className="flex items-center gap-4 text-xl font-semibold">
              <FaClock size={20} />
              <span>Available 24/7</span>
            </div>
            <a
              href="tel:+2347012345678"
              className="flex items-center gap-4 text-xl font-semibold hover:underline transition-transform hover:scale-105"
            >
              <FaPhone size={20} />
              +2347012345678
            </a>
            <a
              href="mailto:support@wellagedcare.com"
              className="flex items-center gap-4 text-xl font-semibold hover:underline transition-transform hover:scale-105"
            >
              <FaEnvelope size={20} />
              support@wellagedcare.com
            </a>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent">
            Quick Links
          </h2>
          <nav aria-label="Quick Links" className="mt-4 space-y-3 text-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 hover:underline transition-transform hover:scale-105 text-2xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xl">
        <p className="flex justify-center gap-2 items-center">
          <FaCopyright size={20} />
          {new Date().getFullYear()} WellAged Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
