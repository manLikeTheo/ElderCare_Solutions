import { Button } from "@/components/ui/button";
import eldercare_heroImage from "../../../../public/Startup Website/eldercare_heroImage.png";
import heartInHand from "../../../../public/Startup Website/heartInHand.png";
import Image from "next/image";
import Link from "next/link";

const LandingPage_Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-12  padding-container z-[10]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-4 pt-1">
        {/* <div className="hero-title mt-0 rounded-3xl bg-gray-500 px-3 py-5 w-fit text-white text-md lg:text-2xl font-semibold uppercase relative flex items-center justify-start">
          <div className="sliding-text absolute bg-amber-500 w-24 h-[80%] left-1 rounded-3xl z-[1]"></div>
          <span className="z-[2]">The best place to find elder care</span>
        </div> */}

        <h1 className="mt-10 text-4xl lg:text-[38px] capitalize font-extrabold leading-[52px] max-sm:leading-[50px]">
          <span className="xl:bg-stone-50 xl:whitespace-nowrap lg:whitespace-nowrap relative z-[10] pr-10">
            Transforming senior care in Nigeria with{" "}
          </span>
          <br />
          <span>
            <span className="text-red-500 inline-block mt-2">
              WellAged Care{" "}
            </span>
          </span>{" "}
          +
        </h1>
        <p className="text-slate-700 text-[21px] font-semibold leading-8 mt-6 mb-12">
          Holistic Senior Care Solutions beyond Clinical Care
        </p>
        <div className="hero-buttons flex  items-center justify-center gap-8">
          <Link href="/about">
            <Button className="btn rounded-xl  bg-rose-400 text-white py-5 px-5 font-semibold text-xl hover:bg-rose-700 hover:text-rose-50">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button className="btn rounded-xl px-5 py-5 font-semibold text-xl bg-white text-rose-600 hover:bg-rose-700 hover:text-rose-50">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="flex justify-start items-start flex-wrap gap-16 w-full mt-20 text-3xl">
          Statistics
        </div>
      </div>

      <div className="relative flex-1  flex justify-center items-center xl:min-h-screen bg-indigo-100 p-3 w-full">
        <Image
          className="w-full object-contain  z-10 rounded-2xl p-2"
          src={eldercare_heroImage}
          alt="eldercare-heroImage"
          width={600}
          height={600}
        />
        <Image
          className="absolute top-0 right-10 z-0 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-contain opacity-40"
          src={heartInHand}
          alt="heartInHand"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default LandingPage_Hero;
