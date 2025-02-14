import { Button } from "@/components/ui/button";
import eldercare_heroImage from "../../../../public/Startup Website/eldercare_heroImage.png";
import heartInHand from "../../../../public/Startup Website/heartInHand.png";
import Image from "next/image";
import Link from "next/link";

const LandingPage_Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-12 max-container padding-container z-[10]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-4 pt-1">
        <h1 className="mt-4 text-4xl lg:text-[38px] capitalize font-extrabold leading-[52px] max-sm:leading-[50px]">
          <span className="xl:bg-stone-50 xl:whitespace-nowrap lg:whitespace-nowrap relative z-[10] pr-10">
            Transforming senior care in Nigeria with{" "}
          </span>
          <br />
          <span>
            <span className="text-rose-600 inline-block mt-2">
              WellAged Care{" "}
            </span>
          </span>{" "}
          +
        </h1>
        <p className="text-slate-700 text-[21px] font-semibold leading-10 tracking-wider mt-8 mb-16">
          Integrated Senior Care Solutions - Beyond medical support! Beyond
          distance!
        </p>
        <div className="hero-buttons flex  items-center justify-center gap-8">
          <Link href="/about">
            <Button className="btn rounded-xl  bg-rose-600 text-white p-6 font-semibold text-xl hover:bg-rose-700 hover:text-white/90 hover:scale-105 transition-all duration-300 ease-in-out">
              Learn More About Us
            </Button>
          </Link>
        </div>
        {/* Statistics */}
        <div className="flex justify-start items-start flex-wrap gap-8 w-full mt-16">
          <div className="flex flex-col gap-2 pr-8 border-r-2 border-rose-100">
            <h3 className="text-4xl font-bold text-rose-700">1K+</h3>
            <p className="text-slate-600 font-medium">Seniors Helped</p>
          </div>

          <div className="flex flex-col gap-2 pr-8 border-r-2 border-rose-100">
            <h3 className="text-4xl font-bold text-rose-700">98%</h3>
            <p className="text-slate-600 font-medium">Satisfaction Rate</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-rose-700">87%</h3>
            <p className="text-slate-600 font-medium">Digital Adoption</p>
          </div>
        </div>
      </div>

      {/* hero image */}
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
