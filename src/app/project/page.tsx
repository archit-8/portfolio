"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import React, { useEffect } from "react";
import Head from "next/head";
export default function Page() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "projects";
    }
  }, []);

  return (
    <div className=" p-40  bg-gray-700 text-red">
      <Head>
        <title>{document.title}</title>
      </Head>
      <div>
        <div className="text-center">
          <h2 className=" text-teal-600 mt-10  text-4xl font-semibold tracking-wide">
            My Projects
          </h2>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  
        justify-center"
        >
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Full Stack
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                when we talk about technology, Full Stack Development / Web
                Development has been ranking first among the best or
                highest-paying IT Jobs. It has become the most interesting field
                for coders. Since full-stack development has gained a lot of
                craze in tech society, you might be thinking what are some of
                the best full-stack development
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Andorid
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                These projects are developed using multiple programming
                languages like C++, Kotlin, Java, and so on. For Android project
                development the most important programming language is Java.
                These Android projects are deployed to the devices running in
                the Android operating system which consist of tablets,
                smartphones, smartwatches, and other devices.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Java
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                Creating Java projects helps sharpen your skills and boosts your
                confidence as a developer. It provides practical application of
                theoretical knowledge. Building a portfolio showcasing completed
                projects empowers you for job interviews, giving you solutions,
                code, apps, and projects to display to recruiters
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Backend
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                A backend project is a project that involves working on the
                server-side of a web application123. A backend project typically
                includes designing and building APIs, creating and optimizing
                databases, and writing business logic for project features and
                requirements13. A backend project can be used to prove your web
                development skills and show your ability to work with different
                types of frameworks and code2.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Cloud services
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                PaaS is a category of cloud computing that provides a platform
                and environment to allow developers to build applications and
                services over the internet. PaaS services are hosted in the
                cloud and accessed by users simply via their web browser. A PaaS
                provider hosts the hardware and software on its own.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient
            className="flex flex-col rounded-[22px]
            bg-gray-700
            dark:bg-zinc-900 overflow-hidden h-full "
          >
            <div
              className="  p-4 sm:p-6 px-4 flex flex-col items-center  
            flex-grow"
            >
              <p
                className="text-sm sm:text-3xl text-black mt-4 mb-2 
               dark:text-neutral-200"
              >
                Tech support
              </p>
              <p
                className=" text-white text-left mt-4  dark:text-neutral-400 
              flex-grow"
              >
                One place to fix any issue with any device - day or night.
                Seamlessly transition between getting support by virtual house
                calls, phone, chat, and DIY guides. Schedule a callback to have
                a Tech Pro fix it on your schedule, not theirs.
              </p>
            </div>
          </BackgroundGradient>
        </div>
      </div>
      <div className="mt-40 text-center"></div>
    </div>
  );
}
