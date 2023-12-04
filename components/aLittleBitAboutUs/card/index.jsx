import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ item }) {
  return (
    <div
      className="flex flex-col items-center rounded-b-2xl
   py-10 px-6 border-t-8 border-t-[#FE7163] bg-white w-fit font-semibold"
    >
      <Image
        src={item.img}
        alt={`${item.title} image`}
        width={200}
        height={200}
        quality={100}
        className="md:min-w-[135px]  md:min-h-[135px] xl:min-w-[200px] xl:min-h-[200px]"
      />
      <h5 className="text-2xl text-[#4344E5] whitespace-nowrap">{item.title}</h5>
      <Link className="border-b border-b-[#FE7163] mt-5 hover:border-black hover:text-[#FE7163] " href="#">
        DAHA FAZLA
      </Link>
    </div>
  );
}

export default Card;
