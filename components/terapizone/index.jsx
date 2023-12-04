"use client";
import React from "react";
import Piece from "./piece";

import datas from "./datas.js";

function Terapizone() {
  return (
    <div className="bg-white ">
      <div className="flex flex-col items-center lg: justify-center  md:flex-row gap-4 py-10">
        {datas.map((data, idx) => (
          <Piece data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Terapizone;
