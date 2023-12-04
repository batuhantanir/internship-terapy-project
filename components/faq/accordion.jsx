"use client";
import React, { useState } from "react";

import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const Accordion = ({ title, content, istrue }) => {
  const [isActive, setIsActive] = useState(istrue ? istrue : false);
  const [hover, setHover] = useState(false);

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="font-semibold">{title}</div>
        <div
          className={`${isActive ? "bg-[#45EAAA]" : "bg-white"}
          hover:bg-[#45EAAA]  stroke-white p-2 rounded-full transition-all duration-500`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {isActive ? (
            <AiFillCaretUp
              style={{
                color: `${isActive && "#FFFFFF"}`,
              }}
            />
          ) : (
            <AiFillCaretDown
              style={{
                color: `${hover ? "#FFFFFF" : "#45EAAA"}`,
              }}
            />
          )}
        </div>
      </div>
      {isActive && <div className="ml-2 pb-8 text-[#00000075]">{content}</div>}
    </div>
  );
};

export default Accordion;
