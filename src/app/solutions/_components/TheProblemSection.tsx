import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const TheProblemSection = ({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row px-6">
      <div className="problem flex flex-col gap-6 bg-rose-100 px-6 py-10 ring-4 ring-rose-400 rounded-3xl">
        <p className="problem-text text-2xl text-rose-800 font-semibold">
          {problem}
        </p>
      </div>
      <span className="place-self-center ">
        <FaArrowRight size={48} />
      </span>
      <div className="solution flex flex-col gap-6 bg-indigo-100  px-6 py-10 ring-4 ring-indigo-500 rounded-3xl">
        <p className="solution-text text-2xl text-indigo-800 font-semibold">
          {solution}
        </p>
      </div>
      <div className="graphic"></div>
    </div>
  );
};

export default TheProblemSection;
