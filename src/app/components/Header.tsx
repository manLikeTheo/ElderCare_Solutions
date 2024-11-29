import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "../../../../public/care2Age logo png.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 bg-transparent shadow-lg shadow-slate-600">
      {/* Logo */}
      <Link href={`/`} className="hover:scale-95">
        <Image
          src="/care2Age logo png.png"
          alt="logo"
          width={250}
          height={250}
        />
      </Link>
      <div className="list-style-none flex gap-4 text-slate-100 hover:*:opacity-75">
        <Link href={`/`} className="font-bold text-2xl hover:scale-95">
          Home
        </Link>
        <Link href={`/services`} className="font-bold text-2xl hover:scale-95">
          Solutions
        </Link>
        <Link href={`/about`} className="font-bold text-2xl hover:scale-95">
          About Us
        </Link>
        <Link href={"/contact"} className="font-bold text-2xl hover:scale-95">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
