import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaCopyright,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import blob_scene_haikei from "../../../public/Startup Website/blob_scene_haikei.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${blob_scene_haikei.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white py-8"
      aria-label="Footer"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
        {/* Brand Section */}
        <div className="flex flex-col border-4">
          <Link
            href="/"
            className="flex items-center hover:scale-95 transition-transform"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-900 to-violet-900 bg-clip-text text-transparent md:text-4xl">
              WellAged Care
            </h1>
          </Link>
          <div className="flex space-x-6 py-4 text-2xl">
            <Link href="#" className="hover:text-indigo-900 transition-colors">
              <FaFacebook size={32} />
            </Link>
            <Link href="#" className="hover:text-indigo-900 transition-colors">
              <FaLinkedin size={32} />
            </Link>
            <Link href="#" className="hover:text-indigo-900 transition-colors">
              <FaTwitter size={32} />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-200 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <nav aria-label="Contact Information" className="space-y-4">
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
            <address className="flex items-center gap-4 text-xl font-semibold not-italic hover:underline transition-transform hover:scale-105">
              <FaLocationArrow size={20} />
              No. 4, Ogundiran Street, Ikotun, Lagos, Nigeria
            </address>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-900 to-indigo-900 bg-clip-text text-transparent">
            Quick Links
          </h2>
          <nav aria-label="Quick Links" className="mt-4 space-y-3 text-xl">
            {[
              "Digital Literacy Training",
              "Senior Social Clubs",
              "Elderly Care Packages",
              "Senior-Friendly Adventures",
              "Employment for Seniors",
            ].map((link, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex items-center gap-2 hover:underline transition-transform hover:scale-105"
              >
                <FaLocationArrow size={18} />
                {link}
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
