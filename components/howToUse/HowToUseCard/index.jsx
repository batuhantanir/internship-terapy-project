import React from "react";
import Image from "next/image";

function HowToUseCard({ title, desc, icon }) {
  return (
    <div className=" rounded-3xl">
      <div className="flex flex-col lg:px-7 lg:py-6 ">
        <div className="flex flex-col text-center lg:text-start lg:flex-row items-center  rounded-xl">
          <div
            className="bg-gradient-to-b from-purple-600 to-blue-600 p-3 rounded-full 
                    "
          >
            <Image src={icon} alt={title} />
          </div>
          <div className="ml-4 text-base lg:text-xl ">{title}</div>
        </div>

        <div className="text-start text-[#00000072] leading-5 ml-16  hidden lg:block ">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default HowToUseCard;
