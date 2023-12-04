"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import changeIslandHeader from "./changeIslandHeader";
//brand logo
import terappinPurple from "@/public/terappinPurple.svg";
//icons
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
  //hamburger meu button change
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //scroll event
  const [offset, setOffset] = useState(0);
  //change language menu
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(Math.floor(window.scrollY));
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
  useEffect(() => {
    changeIslandHeader(offset);
  }, [offset]);
  return (
    <>
      <div
        className={`fixed w-full h-screen bg-gradient-to-b from-primaryDark transition-all delay-500 z-40 ${
          isMenuOpen ? "show" : "hidden"
        }`}
      ></div>
      <header
        id="header"
        className={`sticky top-0 flex flex-wrap justify-self-center  items-center justify-between  px-[2%]  transition-all  duration-500 text-secondaryDark  w-[90%] mx-auto  py-3 lg:flex-nowrap lg:gap-16 rounded-3xl lg:rounded-full lg:py-6 z-50
       ${
         isMenuOpen ? "min-h-fit  bg-[#fbfafa] mt-5 rounded-3xl mx-auto " : ""
       }`}
      >
        <Link href="#" className="flex items-center w-[110px] h-[47px]  ml-2">
          <Image className=" fill-primaryDark" src={terappinPurple} alt="Terappin" />
        </Link>

        <button
          id="hamburger"
          className="mr-2 lg:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross2 className="font-medium" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
        <nav
          className={` justify-between items-center w-full ${
            isMenuOpen ? "show" : "hidden"
          } lg:flex`}
        >
          <div
            className={`flex items-center gap-4 font-semibold ${
              isMenuOpen && "flex-col"
            } lg:flex-row `}
          >
            <Link href="#howToUse">NASIL ÇALIŞIR</Link>
            <Link href="#aLittleBitAboutUs">HAKKIMIZDA</Link>
            <Link href="#experts">PSİKOLOGLARIMIZ</Link>
            <Link href="#faq">S.S.S.</Link>
            <Link href="#" className="cursor-pointer">
              TESTLER
              <span className="bg-[#E8E9FD] px-[4px] py-[2px] rounded-full text-xs ml-1">
                Yeni
              </span>
            </Link>
          </div>
          <div className="flex relative flex-col gap-1 my-2 items-center lg:flex-row">
            <div className="flex justify-center lg:h-[55px] lg:w-[100px] mx-2">
              <div
                className={`border border-neutral text w-fit  rounded-2xl flex flex-col items-center justify-center overflow-hidden ${
                  isLanguageMenuOpen
                    ? "min-h-[100px] lg:absolute left-2 top-0 "
                    : "min-h-[50px]"
                }`}
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <button
                  className={`flex w-full h-[50px] items-center px-2 gap-2 ${
                    isLanguageMenuOpen ? "bg-gray-100 " : ""
                  }`}
                >
                  <TbWorld className="stroke-1 scale-125 h-[20px]" />
                  <span>TR</span>
                  <MdKeyboardArrowDown className="scale-105 w-[20px]" />
                </button>
                <button
                  className={`w-full h-[50px] ${
                    isLanguageMenuOpen ? "border-t bg-white" : "hidden"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <Link
              href="#"
              className="text-secondary font-bold px-6 py-3 rounded-2xl"
            >
              GİRİŞ YAP
            </Link>
            <Link
              href="#"
              className="bg-secondary text-white font-bold px-6 py-3 rounded-2xl"
            >
              HEMEN KAYDOL
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
