"use client"
import React from "react";

function Piece({ data }) {
  return (
    <div className="flex flex-col items-center text-center w-[300px] ">
      <div className="text-[50px] mb-6">{data.icon}</div>
      <h5 className="font-bold mb-2">{data.title}</h5>
      <p className="text-[#00000096]">{data.description}</p>
    </div>
  );
}

export default Piece;
