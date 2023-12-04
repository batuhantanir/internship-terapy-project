import React from "react";
import Link from "next/link";
import Image from "next/image";

import Slider from "@/assets/img/slider.webp";

function FirstContent() {
  return (
    <div className="bg-primary pb-8 pt-16">
      <div className="grid container mx-auto lg:gap-[3%] lg:grid-cols-2 lg:px-[9%]">
        <div className="text-secondaryDark text-center lg:text-start lg:self-end lg:flex lg:flex-col">
          <h1 className="font-bold  mb-3 text-xl lg:text-[56px] lg:leading-[52px] lg:font-semibold ">
            Online terapi ile değişimi başlat!
          </h1>
          <div className="inline-block font-semibold text-sm  lg:justify-self-start lg:text-xl">
            <p>Hemen sana en uygun online psikolog ile</p>
            <p>eşleş ve değişime başla</p>
          </div>
        </div>
        <div className=" justify-self-center h-[550px] lg:row-span-2">
          <Image
            src={Slider}
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
        <div className=" justify-self-center self-start lg:justify-self-start text-white ">
          <Link
            href="/"
            className="bg-secondaryDark px-7 py-4 rounded-xl font-semibold lg:text-xl "
          >
            Hemen Başla
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
