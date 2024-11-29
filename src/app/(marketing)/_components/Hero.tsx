import React from "react";
import Header from "../../components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heart_image from "../../../../public/Fitness Project/heart.png";
import hero_image_back from "../../../../public/Fitness Project/hero_image_back.png";
import hero_image from "../../../../public/Fitness Project/hero_image.png";
import calories from "../../../../public/Fitness Project/calories.png";
import african_elderly from "../../../../public/images/african_elderly.png";

const Hero = () => {
  return (
    <div className="flex justify-between ">
      <div className="left-h flex-[3] pb-10">
        {/* <Header /> */}
        <div className="px-10 ">
          <div className="hero-title mt-10 rounded-3xl bg-gray-500 px-3 py-6 w-fit text-white text-lg font-semibold uppercase relative flex items-center justify-start">
            <div className="sliding text absolute bg-amber-500 w-24 h-[80%] left-1 rounded-3xl z-[1]"></div>
            <span className="z-[2]">The best place to find elder care</span>
          </div>
          {/* hero heading */}
          <div className="hero-text text-5xl font-bold flex-col gap-6 uppercase text-white overflow-inherit pt-3">
            <div className="hero-heading flex flex-col gap-2 pb-5">
              <div className="">
                <span>Empowering Seniors </span>
                <span>with </span>
              </div>
              <div className="">
                <span className="text-amber-400 tracking-wider"> AgeBuddy</span>
              </div>
              <p className="text-[18px] text-amber-500 tracking-wider italic capitalize py-2">
                - Compassionate, Innovative, and Affordable Solutions for Better
                Living
              </p>
            </div>
            <div className="text-[18px] w-[70%] capitalize flex flex-col iems-justify gap-2 font-semibold line-clamp-2 tracking-wide *:py-1">
              <p className="flex gap-3">
                Instant Access to Senior Care Assistance at Your Fingertips
                {/* <span className="font-bold">Holistic Care Solutions:</span>
                Offering practical, emotional, and social support for seniors. */}
              </p>
              <p className=" flex gap-3">
                A trusted digital companion for seniors and their families.
                {/* <span className="font-bold">Empowering Digital Inclusion:</span>
                Helping seniors confidently embrace technology. */}
              </p>
              <p className="flex gap-3">
                Enjoy curated health, travel, and lifestyle perks for seniors.
                {/* <span className="font-bold">Stress-Free Living:</span>
                {"  "}
                Simplified services for everyday senior needs, from digital
                assistance to lifestyle perks. */}
              </p>
            </div>
            {/* <div className="text-lg font-semibold spacing-wide w-[80%] capitalize pt-2">
              <p className="tracking-wider text-xl pb-4">
                Transforming senior care in Nigeria with digital tools and
                personal touch.
              </p>
            </div> */}
            {/* <div className="desc w-[70%] text-left text-[16px]  capitalize flex flex-col iems-center gap-2">
              <p className="font-bold line-clamp-2 tracking-wide">
                Ease worries and foster independence for seniors with our
                trusted, community-driven services.
              </p>
              <p className="tracking-wide">
                Whether combating loneliness, accessing digital tools, or
                engaging in meaningful activities, Seniors Tribe ensures seniors
                and their families receive unparalleled support
              </p>
            </div> */}
          </div>
          <div
            className="figures flex gap-8 py-6 text-white font-semibold  w-fit"
            style={{ textShadow: "8px 8px 8px #000000" }}
          >
            <div className="flex flex-col">
              <span className=" text-4xl">+140</span>
              <span className=" uppercase text-lg">Expert Coaches</span>
            </div>
            <div className="flex flex-col">
              <span className=" text-4xl">+850</span>
              <span className=" uppercase text-lg">Members Joined</span>
            </div>
            <div className="flex flex-col">
              <span className=" text-4xl">+45</span>
              <span className=" uppercase text-lg">Fitness Programs</span>
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
      </div>
      <div className="right-h flex-[1] relative bg-amber-600">
        <Button className="btn rounded-lg bg-white px-4 py-6 font-semibold text-xl absolute text-amber-600 hover:bg-black hover:text-white top-10 right-10">
          Join Now
        </Button>
        <div className="heart-rate flex flex-col bg-gray-500 w-fit p-3 gap-2 items-start rounded-md absolute top-24 right-10">
          <Image src={heart_image} alt="heart" width={48} height={100} />
          <span className="font-bold text-lg text-gray-700">Heart Rate</span>
          <span className="font-bold text-3xl text-white">bpm</span>
        </div>
        {/* hero images */}
        <Image
          className="absolute top-20 right-20 object-cover"
          src={african_elderly}
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
