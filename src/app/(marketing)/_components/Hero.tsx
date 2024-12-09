import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heart_image from "../../../../public/Fitness Project/heart.png";
import hero_image_back from "../../../../public/Fitness Project/hero_image_back.png";
import hero_image from "../../../../public/Fitness Project/hero_image.png";
import calories from "../../../../public/Fitness Project/calories.png";
import african_elderly from "../../../../public/images/african_elderly.png";
import senior_tech from "../../../../public/Startup Website/senior_tech.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-neutral-100 max-container padding-container flex flex-col sm:flex-col-reverse gap-20 p-6 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-black">
      <div className="flex-[3] pb-6 ">
        <div className="px-10 py-5 border-2 border-red-500 flex flex-col items-center lg:items-baseline">
          <div className="hero-title mt-0 rounded-3xl bg-gray-500 px-3 py-5 w-fit text-white text-md lg:text-2xl font-semibold uppercase relative flex items-center justify-start">
            <div className="sliding-text absolute bg-amber-500 w-24 h-[80%] left-1 rounded-3xl z-[1]"></div>
            <span className="z-[2]">The best place to find elder care</span>
          </div>
          {/* hero heading */}
          <div className="hero-text text-2xl lg:text-5xl font-bold flex-col gap-6 uppercase text-white overflow-inherit py-3">
            <div className="hero-heading flex flex-col gap-2 pb-5">
              <div className="text-black text-4xl">
                <span>Empowering Your Golden Years with</span>
                {/* <span>with </span> */}
              </div>
              <span className="text-amber-500 tracking-wider text-3xl lg:text-4xl">
                {" "}
                AgeBuddy
              </span>
              <p className="text-lg lg:text-[18px] text-amber-600 tracking-wider italic capitalize py-2">
                - Compassionate, Innovative, and Affordable Solutions for Better
                Living
              </p>
            </div>
            <div className="text-lg lg:text-xl w-[70%] capitalize flex flex-col iems-justify gap-2 font-semibold line-clamp-2 tracking-wide  text-black">
              <p className="flex items-baseline gap-3">
                <FaArrowRight />
                Instant Access to Senior Care Assistance at Your Fingertips
              </p>
              <p className=" flex items-baseline gap-3">
                <FaArrowRight />A trusted digital companion for seniors and
                their families.
              </p>
              <p className="flex items-baseline gap-3">
                <FaArrowRight />
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
            className="figures flex justify-center text-center gap-3 lg:gap-8 py-6 text-stone-600 font-semibold  w-fit"
            // style={{ textShadow: "1px 1px 1px #000000" }}
          >
            <div className="flex flex-col font-semibold">
              <span className="text-2xl lg:text-4xl">+140</span>
              <span className=" uppercase text-md lg:text-lg">
                Expert Coaches
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-4xl">+850</span>
              <span className=" uppercase text-md lg:text-lg">
                Members Joined
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-4xl">+45</span>
              <span className=" uppercase text-md lg:text-lg">
                Fitness Programs
              </span>
            </div>
          </div>

          {/* hero buttons */}
          <div className="hero-buttons flex  items-center gap-8 mt-5">
            <Button className="btn rounded-xl  bg-amber-500 py-5 px-5 font-semibold text-lg hover:bg-black hover:text-amber-500">
              Get Started
            </Button>
            <Button className="btn rounded-xl px-5 py-5 font-semibold text-lg bg-white text-amber-600 hover:bg-amber-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="right-h flex-[1] relative bg-amber-600 border-2 border-black">
        <Button className="sm:hidden rounded-xl bg-white px-4 py-6 font-semibold text-xl absolute text-amber-600 hover:bg-black hover:text-white top-10 right-10">
          Join Now
        </Button>
        <div className="heart-rate flex flex-col bg-gray-500 p-3 gap-2 items-start rounded-md absolute top-[2rem] left-[2rem] ">
          <Image src={heart_image} alt="heart" width={48} height={100} />
          <span className="font-bold text-lg text-gray-700">Heart Rate</span>
          <span className="font-bold text-3xl text-white">bpm</span>
        </div>
        {/* hero images */}
        <Image
          // width={600}
          // height={600}
          className="absolute top-20 right-20 object-cover border-4"
          src={hero_image}
          alt="hero"
        />
        <Image
          src={hero_image_back}
          alt="hero"
          className="hero-image absolute top-5 right-100 "
          // width={600}
          // height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
