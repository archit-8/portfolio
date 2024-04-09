"client user";
import React from "react";
import gog from "../images/google.png";
import Image from "next/image";
import ad from "../images/ad.jpg";
import micro from "../images/micro.jpg";
import orc from "../images/or.jpg";
import apple from "../images/apple.jpg";
import acc from "../images/acc.jpg";
import mh from "../images/micro.jpg";
import fb from "../images/fb.jpg";
function company() {
  return (
    <div className="w-full   text-center ">
      <div className="max-w-[1240px] w-full  h-full  mx-auto p-2 flex-auto justify-between items-center  md:flex flex-cols-2 mt-[-100px] ">
        <div className="text-left flex-col  h-full  max-w-[450px]">
          <h1 className="text-6xl p-5">Meet my recent Clients</h1>
        </div>
        <div className="w-[700px] ">
          <div className="flex py-5">
            <div className="flex items-center px-7 ">
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
            <div className="flex items-center px-7">
              <Image src={orc} alt="/" className="h-10 w-10 rounded-full " />
              <h1 className="ml-1 text-lg">oracle</h1>
            </div>
          </div>
          <div className="flex py-4">
            <div className="flex items-center px-7 ">
              <Image src={apple} alt="/" className="h-10 w-10 rounded-full " />
              <h1 className="ml-1 text-lg">Apple</h1>
            </div>
            <div className="flex  items-center px-7">
              <Image src={acc} alt="/" className="h-10 w-10 rounded-full " />
              <h1 className=" ml-1 text-lg">Accenture</h1>
            </div>
            <div className="flex items-center px-7   ">
              <Image src={mh} alt="/" className="h-10 w-10 rounded-full " />
              <h1 className="ml-1 text-lg">mahindra</h1>
            </div>
            <div className="flex items-center px-7">
              <Image src={fb} alt="/" className="h-10 w-10 rounded-full " />
              <h1 className="ml-1 text-lg">facebook</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default company;
