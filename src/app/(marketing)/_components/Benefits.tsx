// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Image from "next/image";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
function Benefits() {
  return (
    <div className="flex justify-between gap-4 text-4xl p-6 bg-stone-100">
      <div className=" p-4 flex-[2]">
        <div className="text-4xl font-semibold text-slate-800 capitalize p-5">
          <h2 className="text-5xl font-semibold shadow-sm ">
            Amazing benefits of the{" "}
          </h2>
          <h2>
            <span className="text-amber-400 text-5xl">AgeBuddy</span> Digital
            Companion
          </h2>
        </div>
        <div className="benefits-list py-8 *:py-3 text-slate-900 font-semibold">
          <div className=" flex gap-3">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>Digital Literacy for Seniors</p>
          </div>
          <div className="flex gap-3">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>On-Demand Seniors Care and Empowerment</p>
          </div>
          <div className=" flex gap-3">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>
              Comprehensive Senior Care Kits bundle to support physical and
              mental well-being
            </p>
          </div>
          <div className=" flex gap-3">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>Seniors Care Community and Social Network</p>
          </div>

          <div className=" flex gap-3">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>Health and Wellness Insights</p>
          </div>
          <div className=" flex gap-3 items-center">
            <span>
              <FaCheckCircle size={36} className="text-green-500" />
            </span>
            <p>Volunteer and Part-Time job Opportunities</p>
          </div>
        </div>
      </div>
      <div className="text-4xl text-white  p-4 flex-[1] flex justify-center items-center ">
        <Image
          className="shadow-lg shadow-stone-400"
          src="/AgeBuddy Home Screen UI.jpg"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Benefits;
