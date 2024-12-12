import React from "react";
import { FaListCheck } from "react-icons/fa6";

const WhatIsInside = () => {
  return (
    <section>
      <div className="text">
        <p>
          <FaListCheck />
          Safety aids for everyday use
        </p>
        <p>
          <FaListCheck />
          Senior Friendly Hygeine essentials
        </p>
        <p>
          <FaListCheck />
          Simple Instructions to get you started .
        </p>
      </div>
      <div className="image"></div>
    </section>
  );
};

export default WhatIsInside;
