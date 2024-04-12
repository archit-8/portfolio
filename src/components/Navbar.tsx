"use client";
import React, { useState, useEffect } from "react";
import logo from "../images/email.svg";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo.jpg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (nav && !event.target.closest(".toggle-menu")) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl bg-gray-100 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center">
          <a href="https://mail.google.com/mail/u/0/?hl=en&tab=wm">
            <Image src={logo} alt="/" width={20} height={20} />
          </a>
          <div className="hidden sm:block ml-2">jone33@gmail.com</div>
        </div>
        <div className="ml-15 h-12 w-12 ">
          <Image src={logo2} alt="/" className="rounded-full" />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/project">
              <li className="ml-10 text-sm hover:border-b">Projects</li>
            </Link>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/about">About</Link>
            </li>

            <Link href="/services">
              <li className="ml-10 text-sm hover:border-b">Service</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm hover:border-b">Contact</li>
            </Link>
          </ul>

          {/* Toggle menu */}
          <div onClick={handleNav} className="md:hidden toggle-menu">
            <AiOutlineMenu size={45} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:fixed left-0 top-0 w-full h-screen bg-white-700" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 sm:w-[75%] md:w-[45%] h-screen bg-gray-500  p-10 ease-in  duration-500 toggle-menu"
              : "fixed left-[-100%] top-0 w p-10  ease-in duration-0 toggle-menu"
          }
        >
          <div className="h-ful ">
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-white-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300   my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-2xl text-black">
                let build together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/project">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <li className="py-4 text-sm">
                <Link href="/about">About</Link>
              </li>

              <Link href="/services">
                <li className="py-4 text-sm">Service</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-[#5651e5]">Follow me on</p>
              <div className="flex justify-between my-4 w-full sm:-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 coursor-pointer hover:sacle">
                  <a target="_blank" href="https://in.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 coursor-pointer hover:sacle">
                  <a target="_blank" href="https://github.com/">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 coursor-pointer hover:sacle">
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/u/0/?hl=en&tab=wm"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 coursor-pointer hover:sacle">
                  <a target="_blank" href="">
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
