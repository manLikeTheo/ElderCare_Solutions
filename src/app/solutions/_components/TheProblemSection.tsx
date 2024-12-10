import React from "react";

const TheProblemSection = () => {
  return (
    <div className="">
      <div className="desc flex flex-col gap-6">
        <p className="problem-text text-xl text-red-600 font-semibold">
          Home Accidents are a leading cuse of injury among seniors
        </p>
        <p className="solution-text text-xl text-blue-600 font-semibold">
          The Elderlty Care Kit is designed to ensure Seniors' safety, comfort
          and convenience at home
        </p>
      </div>
      <div className="graphic"></div>
    </div>
  );
};

export default TheProblemSection;
