import React from "react";

function Benefits() {
  return (
    <div className="flex justify-between gap-4 text-4xl p-6">
      <div className="text-white border-4 p-4 flex-[2]">
        <div className="text-4xl font-semibold text-white border-4 p-4">
          <h2>Amazing benefits of the </h2>
          <h2>
            <span>AgeBuddy</span> Seniors Care Solutions
          </h2>
        </div>
        <div className="benefits-list">
          <div className=" flex gap-3">
            <span>X</span>
            <p>Diital Literacy for Seniors</p>
          </div>
          <div className="flex gap-3">
            <span>X</span>
            <p>On-Demand Seniors Care and Empowerment</p>
          </div>
          <div className=" flex gap-3">
            <span>X</span>
            <p>
              Comprehensive Senior Care Kits bundle to support physical and
              mental well-being
            </p>
          </div>
          <div className=" flex gap-3">
            <span>X</span>
            <p>Seniors Care Community and Social Network</p>
          </div>

          <div className=" flex gap-3">
            <span>X</span>
            <p>Health and Wellness Insights</p>
          </div>
          <div className=" flex gap-3">
            <span>X</span>
            <p>Volunteer and Part-Time job Opportunities</p>
          </div>
        </div>
      </div>
      <div className="text-4xl text-white border-4 p-4 flex-[1]">Right</div>
    </div>
  );
}

export default Benefits;
