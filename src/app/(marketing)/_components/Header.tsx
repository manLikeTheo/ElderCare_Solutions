import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "../../../../public/care2Age logo png.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={`/`} className="hover: scale-98">
        <Image
          src="/care2Age logo png.png"
          alt="logo"
          width={200}
          height={200}
        />
      </Link>
      <div className="list-style-none flex gap-4 ">
        <Link href={`/`} className="font-bold text-2xl hover:scale-95">
          Home
        </Link>
        <Link href={`/services`} className="font-bold text-2xl hover:scale-95">
          Services
        </Link>
        <Link href={`/why-us`} className="font-bold text-2xl hover:scale-95">
          Why Us?
        </Link>
        <Link href={"/contact"} className="font-bold text-2xl hover:scale-95">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
