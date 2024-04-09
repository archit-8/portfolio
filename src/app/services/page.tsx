export const metadata = {
  title: "services",
};

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
const testimonials = [
  {
    title:
      "A full-stack developer is someone who can develop both client-side (front-end) and server-side (back-end) components of a web application",
    name: "",
    quote: "Full stack",
  },
  {
    quote: "Troubleshooting Assistance",
    title:
      "Tech support helps users troubleshoot issues with their hardware and software they guide users to identify and resolve issues",
    name: "",
  },
  {
    quote: "Product Guidance",
    name: "",
    title:
      "Tech support provides instructions on using products effectively.They explain features, settings, and functionalities, ensuring users make the most of their technology",
  },
  {
    quote: "Hardware Support",
    name: "",
    title:
      "Hardware technicians address issues related to physical devices such as computers, printers, and scanners.",
  },
  {
    title:
      "Tech support assists with software-related problems From installation to troubleshooting, they ensure software operates seamlessly for users",
    name: "",
    quote: "Software Assistance",
  },
];
const testimonial = [
  {
    title:
      "A full-stack developer is someone who can develop both client-side (front-end) and server-side (back-end) components of a web application",
    name: "",
    quote: "Full stack",
  },
  {
    quote: "Troubleshooting Assistance",
    title:
      "Tech support helps users troubleshoot issues with their hardware and software they guide users to identify and resolve issues",
    name: "",
  },
  {
    quote: "Product Guidance",
    name: "",
    title:
      "Tech support provides instructions on using products effectively.They explain features, settings, and functionalities, ensuring users make the most of their technology",
  },
  {
    quote: "Hardware Support",
    name: "",
    title:
      "Hardware technicians address issues related to physical devices such as computers, printers, and scanners.",
  },
  {
    title:
      "Tech support assists with software-related problems From installation to troubleshooting, they ensure software operates seamlessly for users",
    name: "",
    quote: "Software Assistance",
  },
];
function Testimonial() {
  return (
    <div className=" py-40 w-full  h-screen bg-gray-900">
      <h2 className=" text-center text-4xl text-white mb-10">
        Hear our Services
      </h2>

      <div
        className="rounded-md p-20 flex flex-col antialiased  
       bg-white-700 dark:bg-black dark:bg-grid-white/[0.05] items-center 
       justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div
        className=" rounded-md flex flex-col antialiased
       bg-white-700 dark:bg-black dark:bg-grid-white/[0.05] items-center 
       justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonial}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Testimonial;
