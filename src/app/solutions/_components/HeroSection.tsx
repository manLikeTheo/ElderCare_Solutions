import { useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroSection = ({
  title,
  tagline,
  description,
  heroImage,
}: {
  title: string;
  tagline: string;
  description: string;
  heroImage?: any;
}) => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 1,
    },
  };
  return (
    // Hero Content
    <div className="">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2 gap-4 items-center px-1">
        <div className="grid grid-cols-1 place-items-center *:my-3">
          <h1 className="text-4xl text-center md:text-4xl capitalize lg:text-4xl font-extrabold py-2">
            {title}
          </h1>
          <p className="Tagline text-pretty text-center italic text-lg font-bold lg:text-xl">
            {tagline}
          </p>
          <p className="description text-xl font-semibold text-center py-1 lg:text-xl">
            {description}
          </p>
        </div>
        <div className="digital-companion-image text-3xl">
          <Image
            className="rounded-xl"
            src={heroImage}
            alt="heroImage"
            width={420}
            height={420}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
