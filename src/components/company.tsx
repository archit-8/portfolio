"use client";
import React from "react";
import gog from "../images/google.png";
import Image from "next/image";
import ad from "../images/ad.jpg";
import micro from "../images/micro.jpg";
import orc from "../images/or.jpg";
import apple from "../images/apple.jpg";
import acc from "../images/acc.jpg";
import mh from "../images/mahi.png";
import fb from "../images/fb.jpg";
import { BackgroundGradient } from "./ui/background-gradient";
function company() {
  return (
    <div
      className="max-w-[1240px] w-full  h-full   mx-auto 
      justify-between mt-[-90px] sm:flex flex-cols-2   md:flex flex-cols-2 "
    >
      <div className=" flex-col mb-[50px] text-justify  max-w-[450px]">
        <h1 className="text-5xl ">
          Meet my <br /> recent Clients
        </h1>
      </div>

      <div className=" grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 w-[700px]   ">
        <div className="flex  ">
          <div className="flex items-center  ">
            <Image src={gog} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">google</h1>
          </div>
          <div className="flex  items-center px-7">
            <Image src={ad} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className=" ml-1 text-lg">adobe</h1>
          </div>
          <div className="flex items-center px-7">
            <Image src={micro} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">microsoft</h1>
          </div>
          {/* <div className="flex items-center px-7">
            <Image src={acc} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">Accenture</h1>
          </div> */}
        </div>
        <div className="flex py-5">
          <div className="flex items-center  ">
            <Image src={apple} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">Apple</h1>
          </div>
          <div className="flex  items-center px-9">
            <Image src={orc} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className=" ml-1 text-lg">oracle</h1>
          </div>
          <div className="flex items-center px-7   ">
            <Image src={mh} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">mahindra</h1>
          </div>
          {/* <div className="flex items-center px-7">
            <Image src={fb} alt="/" className="h-10 w-10 rounded-full " />
            <h1 className="ml-1 text-lg">facebook</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default company;
