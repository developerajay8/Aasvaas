"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Header from "../../../../public/assets/Black.png";
import Header2 from "../../../../public/assets/Vector.svg";
import Header3 from "../../../../public/assets/Group.svg";
import Header4 from "../../../../public/assets/Group 44 (2).png";
import Header5 from "../../../../public/assets/mobilesearch.png";
// import Header6 from "../../../../public/assets/Frame 3385063.png";
// import Header7 from "../../../../public/assets/AI Button (5).png";
// import Header62 from "../../../../public/assets/Frame 3385062.png";
// import Header72 from "../../../../public/assets/AI Button (6).png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  // const [active, setActive] = useState("Home");

  // const handleClick = (id: string, name: string) => {
  //   setActive(name);
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="">
      <div className="bg-[#fff] sm:block hidden ">
        <div className=" max-w-[1440px] mx-auto  items-center flex justify-between">
          <div className="">
            <Link href="/">
            <Image src={Header} alt="logo" className=" px-[16px]"/>
            </Link>
            {/* <img src="./assets/logo.png" alt="" /> */}
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {/* <Link href="/">
                <li className="flex py-[8px] px-[20px] text-[14px] text-[#ffffff] bg-[#2D9CDB]  font-[600]">
                  Try Chat <GoArrowUpRight className="text-[20px] ml-2" />
                </li>
              </Link> */}

              <li className="text-[#1B1B1B] text-[18px] font-[400] hover:text-[#2D9CDB] duration-700">
                <Link href="/">Home </Link>
              </li>
              <li className="text-[#1B1B1B] text-[18px] font-[400] hover:text-[#2D9CDB] duration-700">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="text-[#1B1B1B] text-[18px] font-[400] hover:text-[#2D9CDB] duration-700">
                <Link href="/news">News</Link>
              </li>

              <li className="text-[#1B1B1B] text-[18px] font-[400] hover:text-[#2D9CDB] duration-700">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
            <div className="flex  items-center ">
              <div className="py-[8px] px-[10px]  ">
                <Image src={Header2} alt="search icon" className="" />
                {/* <img src="./assets/Vector.svg" alt="" /> */}
              </div>
              <div className="py-[8px] px-[16px] ">
                <Image src={Header3} alt="Group icon" />
                {/* <img src="./assets/Group.svg" alt="" /> */}
              </div>
              {/* <div className="text-[#ffffff] font-[700] text-[16px] py-[20px] px-[36px] bg-[#2D9CDB] ">
                <Link href="">Sign up/Sign In</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] sm:hidden block">
        <div className="max-w-[993px] mx-auto p-0 m-0 items-center justify-between flex">
          {/* Left Section - Logo & Menu */}
          <div className="flex bg-[#] items-center gap-2">
            {/* Hamburger Menu Button */}
            <button
              className="bg-[#] ml-[6px]"
              onClick={() => setIsOpen(true)}
            >
              <IoMenu className="text-black text-3xl" />
            </button>
            {/* Logo */}
            <div className="bg-white">
            <Link href="/">
              <Image src={Header4} className="ml-3 w-10 h-10" alt="logo"  />
              </Link>
              {/* <img src="./assets/mobilelogo.png" className="ml-2" alt="" /> */}
            </div>
          </div>

          {/* Right Section - Buttons & Icons */}
          <div className="flex items-center gap-2">
            <ul className="hidden">
              <Link href="/chat">
                <li className="py-[6px] px-[10px] text-[12px] text-[#ffffff] bg-[#2D9CDB] font-[700]">
                  Free Trial
                </li>
              </Link>
            </ul>
            <div className="flex items-center">
              <div className="py-[4px] px-[6px]">
                <Image src={Header5} className="w-[18px] h-[18px]" alt="logo" />

                {/* <img
                  src="./assets/mobilesearch.png"
                  className="w-[18px] h-[18px]"
                  alt=""
                /> */}
              </div>
              <div className="py-[4px] px-[10px]">
                <Image src={Header3} className="w-[22px] h-[22px]" alt="logo" />

                {/* <img
                  src="./assets/Group.svg"
                  className="w-[22px] h-[22px]"
                  alt=""
                /> */}
              </div>
              {/* <div className="text-[#ffffff] font-[700] text-[14px] py-[15px] px-[20px] bg-[#2D9CDB] ">
                <Link href="">Sign in</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[100%] h-full max-h-screen z-10 bg-[#E8F4FB] text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto `}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <IoClose className="text-black text-3xl" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-2 mt-4  font-bold">
          <li className=" border-b text-[#2D9CDB] hover:text-[#000] border-[#73BDE7]  p-3 ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/pricing">Pricing</Link>
          </li>

          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/news">News</Link>
          </li>
          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/latestCases">Latest Cases</Link>
          </li>
          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/latestLawPoints">Latest Law Points</Link>
          </li>
          <li className="p-3 text-[#2D9CDB] hover:text-[#000] border-b border-[#73BDE7]  ">
            <Link href="/latestAmendments">Latest Amendments</Link>
          </li>
        </ul>
      </div>

      {/* Overlay (for closing sidebar when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="bg-[#092332]  w-full  z-50">
        <div className="max-w-[1440px] mx-auto md:px-[0px] px-[20px] md:py-[0px] py-[5px]">
         <div className="flex justify-center items-center">
          {/* <div className="md:flex items-center gap-4">
            <p className="md:text-[14px] text-[12px] text-[#ffffff]">Powered by</p>
            <Image src={Header6} alt="" className="md:block hidden"/>
            <Image src={Header62} alt="" className="md:hidden block" />
          </div> */}
          <div className="md:block hidden ">
          <ul className=" flex justify-center  items-center gap-[10px] lg:gap-10 xl:gap-14 py-[16px]">
            <li
              className="rounded-[4px] text-white hover:text-[#2D9CDB] scroll-smooth text-[12px] lg:text-[18px] px-[10px] ">
              <Link href="/latestCases">Latest Cases</Link>
            </li>

            <li
              className="rounded-[4px] text-white hover:text-[#2D9CDB] scroll-smooth text-[12px] lg:text-[18px] px-[10px] ">
              <Link href="/latestLawPoints">Latest Law Points</Link>
            </li>

            <li
              className="rounded-[4px] text-white hover:text-[#2D9CDB] scroll-smooth text-[12px] lg:text-[18px] px-[10px] ">
              <Link href="/latestAmendments"> Latest Amendments </Link>
            </li>
          </ul>
          </div>
          {/* <div className="pr-[20px]">
            <Link href={""}>
            <Image src={Header7} alt="" className="md:block hidden" />
            </Link>
            <Link href={""}>
            <Image src={Header72} alt="" className="md:hidden block" />
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
