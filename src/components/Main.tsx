"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Crop from "../images/crop2.jpg";
import { BackgroundGradient } from "./ui/background-gradient";

function Main() {
  return (
    <div className="w-full  md:  flex items-center py-40">
      <div
        className="grid grid-cols-1  max-w-[1240px] w-full mx-auto sm:grid-cols-2 md:grid-cols-2 
         flex-auto justify-between items-center"
      >
        <div className="flex   items-left rounded-full">
          <BackgroundGradient className="rounded-full w-410px h-360px">
            <Image src={Crop} alt="/" width={400} height={350} />
          </BackgroundGradient>
        </div>

        <div className="  grid-cols-1 text-left md:grid-cols-2   ">
          <h1 className="py-4 text-5xl text-left text-black-900">
            An Interactive <br />
            Designer
          </h1>
          <p className="py-4  text-black break-normal text-left text-xl mx-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            <br />
          </p>
          <button className="text-black border-2 rounded-sm border-black bg-slate-500 hover:bg-pink-600 hover:border-pink-600 font-bold py-2 px-4">
            Button
          </button>

          <a
            href="#"
            className="px-3 font-medium text-black-600 underline dark:text-blue-500 hover:no-underline"
          >
            My works
          </a>
          <div className="  mx-auto p-2 py-10 flex-col  md:flex flex-cols-2  ">
            <div className="items-left  max-w-[120px] ">
              <h1 className="text-black font-bold">Follow me on </h1>
            </div>
            <div className=" flex  justify-between  py-5 max-w-[300px]    ">
              <div className="bg-red-700 rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle">
                <a target='"_blank' href="https://in.linkedin.com/">
                  {" "}
                  <FaLinkedin />
                </a>
              </div>
              <div className="bg-red-700 rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle">
                <a target="_blank" href="https://github.com/">
                  <FaGithub />
                </a>
              </div>
              <div className="bg-red-700 rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/?hl=en&tab=wm"
                >
                  <AiOutlineMail />
                </a>
              </div>
              <div className="bg-red-700 rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle">
                <a target="_blank" href="">
                  <BsFillPersonLinesFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
