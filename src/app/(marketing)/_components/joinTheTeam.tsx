import { Button } from "@/components/ui/button";
import React from "react";

const JoinOurTeam = () => {
  return (
    <div className="join-team px-6 py-4 bg-gradient-to-r from-cyan-200 to-violet-100 grid grid-cols-1 place-items-center lg:grid-cols-2 items-center">
      <div className="text py-4  text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold my-4 text-center">Join Our Team</h2>
        <p className="text  text-lg font-semibold px-6 italic">
          We are looking for talented and passionate individuals eager to
          collaborate on impactful innovative solutions that enhance the lives
          of senior citizens.
        </p>
        <Button className="mt-4 text-2xl px-6 py-8 bg-rose-500 rounded-xl font-bold text-white hover:bg-rose-700">
          Get Onboard
        </Button>
      </div>
      <div className="image w-[320px] h-[200px] bg-slate-800 rounded-2xl"></div>
    </div>
  );
};

export default JoinOurTeam;
