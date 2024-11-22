import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heart_image from "../../../../public/Fitness Project/heart.png";
import hero_image_back from "../../../../public/Fitness Project/hero_image_back.png";
import hero_image from "../../../../public/Fitness Project/hero_image.png";
import calories from "../../../../public/Fitness Project/calories.png";

const Hero = () => {
  return (
    <div className="flex justify-between ">
      <div className="left-h flex-[3] p-6 bg-slate-500">
        <Header />
        {/* The best place to find seniors care */}
        <div className="hero-title mt-16 rounded-3xl bg-gray-500 px-3 py-5 w-fit text-white text-lg font-semibold uppercase relative flex items-center justify-start">
          <div className="sliding text absolute bg-amber-500 w-24 h-[80%] left-1 rounded-3xl z-[1]"></div>
          <span className="z-[2]">The best place to find seniors care</span>
        </div>
        {/* hero heading */}
        <div className="hero-text text-5xl font-bold flex-col gap-6 uppercase text-white overflow-inherit pt-8">
          <div className="">
            <span>Shape </span>
            <span>Your</span>
          </div>
          <div className="">
            <span>Ideal Body</span>
          </div>
          <div className="text-lg font-semibold spacing-wide w-[80%] capitalize pt-5">
            <p>
              Find the right care for your loved one. We've got you covered!
            </p>
          </div>
        </div>
        <div className="figures flex gap-4">
          <div className="flex flex-col">
            <span className="text-white text-4xl">+140</span>
            <span className="text-gray-500 uppercase text-lg">
              Expert Coaches
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-4xl">+850</span>
            <span className="text-gray-500 uppercase text-lg">
              Members Joined
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-4xl">+45</span>
            <span className="text-gray-500 uppercase text-lg">
              Fitness Programs
            </span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons flex gap-4 mt-5">
          <Button className="btn rounded-md bg-amber-500 py-5 font-semibold text-lg">
            Get Started
          </Button>
          <Button className="btn rounded-md py-5 font-semibold text-lg bg-white text-amber-600">
            Learn More
          </Button>
        </div>
      </div>
      <div className="right-h flex-[1] relative bg-amber-600">
        <Button className="btn rounded-md bg-white px-4 py-6 font-semibold text-xl absolute text-amber-600 top-10 right-10">
          Join Now
        </Button>
        <div className="heart-rate flex flex-col bg-gray-500 w-fit p-3 gap-2 items-start rounded-md absolute top-24 right-10">
          <Image src={heart_image} alt="heart" width={48} height={100} />
          <span className="font-bold text-lg text-gray-700">Heart Rate</span>
          <span className="font-bold text-3xl text-white">bpm</span>
        </div>
        {/* hero images */}
        <Image
          className="absolute top-20 right-20 w-[20rem]"
          src={hero_image}
          alt="hero"
        />
        {/* <Image
          src={hero_image_back}
          alt="hero"
          className="hero-image absolute top-5 right-100 "
          width={600}
          height={600}
        /> */}
      </div>
    </div>
  );
};

export default Hero;
