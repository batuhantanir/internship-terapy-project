"use client";
import React, { useState, useEffect} from "react";

import data from "./expertData/expertData.json";
import Carousel from "./Carousel";

function Experts() {
  const [selectedElement, setSelectedElement] = useState("psikolog");


  useEffect(() => {
	if (document.getElementById(selectedElement) != null) {
		const psikolog = document.getElementById("psikolog");
		const diyetisyen = document.getElementById("diyetisyen");
		const egitmen = document.getElementById("egitmen");
		if (selectedElement == "psikolog") {
		  psikolog.classList.add("after:opacity-100");
		  diyetisyen.classList.remove("after:opacity-100");
		  egitmen.classList.remove("after:opacity-100");
		} else if (selectedElement == "diyetisyen") {
		  diyetisyen.classList.add("after:opacity-100");
		  psikolog.classList.add("after:opacity-0");
		  psikolog.classList.remove("after:opacity-100");
		  egitmen.classList.remove("after:opacity-100");
		} else if (selectedElement == "egitmen") {
		  egitmen.classList.add("after:opacity-100");
		  psikolog.classList.add("after:opacity-0");
		  psikolog.classList.remove("after:opacity-100");
		  diyetisyen.classList.remove("after:opacity-100");
		}
	  }
	}, [selectedElement])

  if (!data) return <div>loading...</div>;

  return (
    <div className="bg-[#FCFCFC]" id="experts">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h5 className="text-3xl font-bold">İhtiyacına En Uygun Uzmanı Seç</h5>
          <div className="flex gap-4 border-b-2 pb-[5.5px]">
            <button
              id="psikolog"
              className="after:block after:bottom-0 after:left-0.5 after:right-0.5 after:h-1.5 after:rounded-t-md after:bg-black after:transition-all after:ease-out after:translate-y-full after:w-full after:content-['']"
              type="button"
              onClick={() => setSelectedElement("psikolog")}
            >
              <span>Psikolog</span>
              <span></span>
            </button>
            <button
              id="diyetisyen"
              type="button"
              className="after:block after:bottom-0 after:left-0.5 after:right-0.5 after:h-1.5 after:rounded-t-md after:bg-black after:transition-all after:ease-out after:translate-y-full after:w-full after:content-[''] after:opacity-0"
              onClick={() => setSelectedElement("diyetisyen")}
            >
              <span>Diyetisyen</span>
              <span></span>
            </button>
            <button
              id="egitmen"
              type="button"
              className="after:block after:bottom-0 after:left-0.5 after:right-0.5 after:h-1.5 after:rounded-t-md after:bg-black after:transition-all after:ease-out after:translate-y-full after:w-full after:content-[''] after:opacity-0"
              onClick={() => setSelectedElement("egitmen")}
            >
              <span>Spor Eğitmeni</span>
              <span></span>
            </button>
          </div>
          <div className="container mx-auto">
            <Carousel
              items={
                selectedElement === "psikolog"
                  ? data.psikolog
                  : selectedElement === "diyetisyen"
                  ? data.diyetisyen
                  : selectedElement === "egitmen"
                  ? data.egitmen
                  : []
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
