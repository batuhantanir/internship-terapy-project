"use client";
import React from "react";
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import img from "@/components/experts/expertData/image/1681463018595719.png";

function CarouselCard({ item }) {
  return (
    <div className="flex h-full justify-center rounded-lg border border-gray-50 bg-white mx-2">
      <div className="flex h-full flex-col justify-between px-4 py-4">
        <div className="mb-3 flex h-full flex-col justify-between">
          <div>
            <div className="flex flex-col items-center px-8 text-center">
              <a href="/">
                <div className="flex justify-center">
                  <div className={`relative rounded-full p-1 md:h-[115px] md:w-[115px] border-2 ${item.activity == "Çevrim içi" ? "border-green-500" : "border-red-500"} h-[90px] w-[90px]`}>
                    <div className="md:hidden">
                      <Image src={img} width={80} height={80} alt="image" />
                    </div>
                    <div className="hidden md:block">
                      <Image
                        src={img}
                        className="z-0 rounded-full border-2 border-white bg-white object-cover"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="z-0 -ml-4 mt-3 flex h-4 w-4 self-start rounded-full md:mt-5 border-[3px]  border-white "></div>
                </div>
                <div className="-mt-3 flex flex-col items-center text-center ">
                  <div className="z-0 h-6">
                    <div className={`mb-3 w-20 rounded-full  border  ${item.activity == "Çevrim içi" ? "bg-green-200" : "border-red-500 bg-white"} py-1 text-xs font-semibold `}>
                      <p className="inline-flex align-middle text-xs">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="/">
                <h2 className="text-lg font-bold text-gray-600">{item.name}</h2>
              </a>
              <div className="max-h-[165px] overflow-hidden">
                <p className="mt-1 text-xs leading-5 text-gray-600 ">
                  {item.expertise}
                </p>
              </div>
              <div className="mt-1 flex h-6 w-full justify-center pt-3 space-s-3">
                <div className="flex items-center space-s-1">
                  <BsCameraVideo />

                  <p className="text-xs text-gray-400">{item.video}</p>
                </div>
                <div className="flex items-center space-s-1">
                  <BsTelephone />

                  <p className="text-xs text-gray-400">{item.call}</p>
                </div>
                <div className="flex items-center space-s-1">
                  <TbWorld />
                  <div className="flex">
                    <span className="px-1 text-xs text-gray-400">
                      {item.language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap justify-center text-sm">
                {item.Tags.map((tag, idx) => (
                  <a
                    className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-themeBlack hover:border-transparent hover:bg-gray-100"
                    href="/"
                    key={idx}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <p className="font-semibold text-themeBlack cursor-pointer">
              Eğitim ve Sertifikaları Gör
            </p>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="inset-x-4 flex flex-col items-center justify-center px-2 text-center  ">
          <div className="mx-8 w-5/6 border-t border-gray-200"></div>
          <div className="flex flex-col items-center pb-2 pt-4 text-xs">
            <div className="flex flex-1 items-center justify-start space-x-2">
              <div className="flex space-x-2">
                <span className="flex">
                  <div className="flex items-center justify-between space-s-1">
                    <div className="flex text-sm font-semibold text-themeBlack">
                      <span data-testid="price-test-symbol">₺</span>
                      <span data-testid="price-test-amount">{item.money}</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-themeBlack">
                    /Seans
                  </span>
                </span>
                <span className="text-sm text-themeBlack">(Minimum Tutar)</span>
              </div>
            </div>
          </div>
          <a
            className="my-2 w-60 bg-[#34A0A4] cursor-pointer rounded-full bg-secondary-500 p-2 align-middle text-xs font-medium text-white md:w-64"
            href="/"
          >
            Hemen Başla
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
