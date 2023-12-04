import React from "react";
import Image from "next/image";

//images
import createSession from "@/assets/img/SeansOlustur.webp";

//data import
import data from "./data.js";

//button component
import HowToUseCard from "./HowToUseCard/index.jsx";

function HowToUse() {
  return (
    <div id="howToUse"  className="bg-[#F8F7FF]">
      <div className="container mx-auto px-[6%] py-5">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center ">
          <div className="lg:w-[560px]">
            <div className="text-primaryDark text-center text-3xl lg:self-end mb-5">
              Nasıl Kullanırım?
            </div>
            <div className="grid grid-cols-3 lg:flex lg:justify-center lg:flex-col">
              {data.map((item, idx) => (
                <HowToUseCard
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                  key={idx}
                />
              ))}
            </div>
          </div>
          <div className="mt-5  lg:w-[60%] lg:justify-self-center">
            <Image src={createSession}
            alt="createsesion image" className="w-[150%]" />
          </div>
          <div className="text-[#000000a1] text-center lg:hidden">Terapi seansın için en uygun tarih ve saati, sanaslar sekmesinden kolayca seçerek oluşturun. Seansınıza 24 saat kalana kadar iptal edebilirsiniz.</div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
