import { Button } from "@/components/ui/button";

const LandingPage_Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 border-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      {/* <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-4 pt-28">
        <div className="hero-title mt-0 rounded-3xl bg-gray-500 px-3 py-5 w-fit text-white text-md lg:text-2xl font-semibold uppercase relative flex items-center justify-start">
          <div className="sliding-text absolute bg-amber-500 w-24 h-[80%] left-1 rounded-3xl z-[1]"></div>
          <span className="z-[2]">The best place to find elder care</span>
        </div>
      </div> */}
      <h1>
        <span>Transforming senior care in Nigeria with </span>
        <br />
        <span>
          <span className="">AgeBuddy </span>
        </span>
        NG
      </h1>
      <p>
        Simplified services for everyday senior needs, from digital assistance
        to lifestyle perks.
      </p>
      <div className="hero-buttons flex  items-center gap-8 mt-5">
        <Button className="btn rounded-xl  bg-amber-500 py-5 px-5 font-semibold text-lg hover:bg-black hover:text-amber-500">
          Get Started
        </Button>
        <Button className="btn rounded-xl px-5 py-5 font-semibold text-lg bg-white text-amber-600 hover:bg-amber-200">
          Learn More
        </Button>
      </div>
      <div className="flex justify-start items-start flex-wrap gap-16 w-full mt-20 text-3xl">
        Statistics
      </div>
    </section>
  );
};

export default LandingPage_Hero;
