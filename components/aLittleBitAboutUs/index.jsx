import React from "react";

//data
import data from "./data";
import Card from "./card";

function ALitleBitAboutUs() {
  return (
    <div id="aLittleBitAboutUs" className="bg-[#4344E5]">
      <div className="container mx-auto px-[6%] py-[30px] xl:px-[3%]">
        <div className="text-white">
          <h3 className=" font-bold text-center lg:text-2xl">
            BIZIM HAKKIMIZDA BIRAZ
          </h3>
          <p className="text-4xl font-bold text-center py-[20px] lg:py-[50px] lg:text-6xl">
            yapmayı seviyoruz
          </p>
        </div>
        <div className="grid justify-items-center gap-y-8 gap-x-4 md:px-24  md:grid-cols-2 xl:gap-x-0 lg:px-0 lg:grid-cols-4 2xl:px-32">
          {data.map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ALitleBitAboutUs;
