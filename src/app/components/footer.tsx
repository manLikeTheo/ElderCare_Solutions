import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Name */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            AgeBuddy
          </h1>
          <div className="social Icons flex space-x-6 py-4">
            <Link href={"#"} className="hover:text-purple-500">
              <FaFacebook size={32} />
            </Link>
            <Link href={"#"} className="hover:text-purple-500">
              <FaLinkedin size={32} />
            </Link>
            <Link href={"#"} className="hover:text-purple-500">
              <FaTwitter size={32} />
            </Link>
            <Link href={"#"} className="hover:text-purple-500">
              <FaFacebook size={32} />
            </Link>
          </div>
        </div>
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <a
            href="tel:+2347012345678"
            className="mt-4 text-xl font-semibold flex items-center gap-4 hover:underline"
          >
            <FaPhone size={20} /> +2347012345678
          </a>
          <a
            href="mailto: support@seniors-tribe.com"
            className="text-xl font-semibold flex items-center gap-4 hover:underline"
          >
            <FaEnvelope size={20} /> support@seniors-tribe.com
          </a>
          <a
            href="#"
            className="text-xl font-semibold flex items-center gap-4 hover:underline"
          >
            <FaLocationArrow size={20} /> Lagos, Nigeria
          </a>
        </div>
        {/* Solutions Section */}
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Our Product Offerings
          </h2>
          <ul className="mt-4 space-y-2">
            <li>📱 Digital Literacy Training</li>
            <li>🤝 Senior Social Clubs</li>
            <li>🏥 Elderly Care Packages</li>
            <li>🌍 Senior-Friendly Adventures</li>
            <li>📋 Employment for Seniors</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-md font-semibold p-2 tracking-wide">
          &copy; {new Date().getFullYear()} Seniors Tribe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
