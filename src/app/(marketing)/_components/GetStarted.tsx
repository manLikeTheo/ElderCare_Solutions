import React from "react";

const GetStarted = () => {
  return (
    <div className="py-4  text-center flex flex-col items-center">
      <div className="heading">
        <h1 className="heading text-3xl text-stone-200 font-bold capitalize py-3">
          How to get started
        </h1>
        <p className="text text-stone-200 text-lg font-semibold px-6 italic">
          Using <b className="text-amber-400 text-xl">AgeBuddy </b> is simple
          and easy. Complete the onboarding process to get started.
        </p>
      </div>
      <div className="image-steps py-5">
        <div className="img w-[400px] h-[400px] bg-slate-800 rounded-2xl">
          Image
        </div>
        <div className="steps">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
