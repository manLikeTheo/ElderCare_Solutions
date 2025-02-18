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
import blob_scene_haikei from "../../../public/Startup Website/blob_scene_haikei.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${blob_scene_haikei.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" text-white py-5 justify-center items-center"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-6 gap-8 justify-between items-start">
        {/* Brand Name */}
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-900 to-violet-900 bg-clip-text text-transparent md:text-4xl">
            WellAged Care
          </h1>
          <div className="social Icons flex space-x-6 py-4 md:text-4xl">
            <Link href={"#"} className=" hover:text-indigo-900">
              <FaFacebook size={32} />
            </Link>
            <Link href={"#"} className="hover:text-indigo-900">
              <FaLinkedin size={32} />
            </Link>
            <Link href={"#"} className="hover:text-indigo-900">
              <FaTwitter size={32} />
            </Link>
            <Link href={"#"} className="hover:text-indigo-900">
              <FaFacebook size={32} />
            </Link>
          </div>
        </div>
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-200 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <a
            href="tel:+2347012345678"
            className="mt-4 text-xl font-semibold flex items-center gap-4 hover:underline hover:scale-105"
          >
            <FaPhone size={20} /> +2347012345678
          </a>
          <a
            href="mailto: support@seniors-tribe.com"
            className="text-xl font-semibold flex items-center gap-4 hover:underline hover:scale-105"
          >
            <FaEnvelope size={20} /> support@wellagedcare.com
          </a>
          <a
            href="#"
            className="text-xl font-semibold flex items-center gap-4 hover:underline hover:scale-105"
          >
            <FaLocationArrow size={20} />
            No. 4, Ogundiran Street, Ikotun, Lagos, Nigeria
          </a>
        </div>
        {/* Solutions Section */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-900 to-indigo-900 bg-clip-text text-transparent">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 *:text-2xl ">
            <a
              href="#"
              className="flex items-center gap-2 hover:underline hover:scale-105"
            >
              <FaLocationArrow size={18} /> Digital Literacy Training
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline hover:scale-105"
            >
              <FaLocationArrow size={18} /> Senior Social Clubs
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline hover:scale-105"
            >
              <FaLocationArrow size={18} /> Elderly Care Packages
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline hover:scale-105"
            >
              <FaLocationArrow size={18} /> Senior-Friendly Adventures
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline hover:scale-105"
            >
              <FaLocationArrow size={18} /> Employment for Seniors
            </a>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xl">
        <p className="flex justify-center gap-2 items-center">
          <FaCopyright size={20} />
          {new Date().getFullYear()} WellAged Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
