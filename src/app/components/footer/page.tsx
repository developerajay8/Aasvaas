"use client";

import { useState } from "react";
import Footer from "../../../../public/assets/Logo white (1).png";
import Footer3 from "../../../../public/assets/indeed.png";
import Footer4 from "../../../../public/assets/insta.png";
import Footer5 from "../../../../public/assets/x.png";
import Footer6 from "../../../../public/assets/call.png";
import Footer7 from "../../../../public/assets/mail.png";
import Footer8 from "../../../../public/assets/map.png";
import Footer9 from "../../../../public/assets/mouse.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  return (
    <div id="footer" className="scroll-smooth">
      <div className="bg-[#092332] md:py-[80px] py-[40px]">
        <div className="max-w-[1241px] mx-auto sm:flex gap-14 xl:px-[0px] px-[20px]">
          <div className="max-w-[353px]">
            <Image src={Footer} alt="Jda bg" className="" />
            {/* <img src="./assets/footerlogo.png" alt="" /> */}
            <div className="text-[16px] py-[14px] text-[#E2E2E4] leading-[26px] max-w-[394px] ">
              We’re revolutionizing the legal space with cutting-edge AI
              technology. Designed for individuals and startups, our tools bring
              legal clarity to your fingertips.
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
              <a target="_blank" href="https://www.linkedin.com/company/aasvaa">
                <Image src={Footer3} alt="Jda bg" className="" />
              </a>
              <a target="_blank" href="https://www.instagram.com/gojuris.ai/">
                <Image src={Footer4} alt="Jda bg" className="" />
              </a>
              <a target="_blank" href="https://x.com/Gojurisai">
                <Image src={Footer5} alt="Jda bg" className="" />
              </a>
            </div>
          </div>

          <div className="max-w-[151px] sm:pt-[0px] pt-[18px]">
            <h6 className="text-[22px] font-bold text-[#EFEFF1] ">Explore</h6>
            <ul className="list-disc pl-6 pt-[12px] underline text-[#E2E2E4] text-[16px] leading-[29px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="">Database</Link>
              </li>
              <li>
                <Link href="/latestAmendments">Amendments</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="">Bare acts</Link>
              </li>
              <li>
                <Link href="">Articles</Link>
              </li>
              <li>
                <Link href="/latestLawPoints">Low-points</Link>
              </li>
              <li>
                <Link href="">Students Arena</Link>
              </li>
              <li>
                <Link href="">Blogs</Link>
              </li>
              <li>
                <Link href="">E-Book</Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[218px] sm:pt-[0px] pt-[18px]">
            <h6 className="text-[22px] font-bold text-[#EFEFF1] ">About Us.</h6>
            <ul className="list-disc pl-6 pt-[12px] underline text-[#E2E2E4] text-[16px] leading-[29px]">
              <li>
                <Link href="">Our Company</Link>
              </li>
              <li>
                <Link href="">Our Leadership</Link>
              </li>
              <li>
                <Link href="">Our Values</Link>
              </li>
              <li>
                <Link href="">Advancing the Rule of Law</Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[272px] sm:pt-[0px] pt-[18px]">
            <h6 className="text-[22px] font-bold text-[#EFEFF1] ">Contact</h6>
            <div className="  flex items-center gap-4 pt-[12px] text-[#E2E2E4] text-[18px] leading-[29px]">
              <Image src={Footer6} alt="vector-icon" className="" />
              {/* <img src="./assets/call.png" alt="" /> */}
              +91 80588 88814
            </div>
            <div className=" flex items-center gap-4 pt-[12px] text-[#E2E2E4] text-[18px] leading-[29px]">
              <Image src={Footer7} alt="vector-icon" className="" />
              {/* <img src="./assets/mail.png" alt="" /> */}
              support@gojuris.com
            </div>
            <div className=" flex gap-4 items-center pt-[12px] text-[#E2E2E4] text-start text-[18px] leading-[29px]">
              <Image src={Footer8} alt="vector-icon" className="w-[30px] " />
              {/* <img src="./assets/map.png" alt="" /> */}
              3rd Floor, BTH Sansthan Path, Malviya Nagar, Jaipur, Rajasthan
              302017
            </div>

            <div className="flex max-w-[272px]  mt-[20px] rounded-[4px]  bg-white shadow-md overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 p-4 text-[#878680] text-[12px] placeholder-gray-400 outline-none"
              />
              <button className="bg-[#2D9CDB] px-5 flex items-center justify-center ">
                <Image src={Footer9} alt="vector-icon" className="" />
                {/* <img src="./assets/mouse.png" alt="" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#041219] sm:block hidden">
        <footer className=" max-w-[1241px] mx-auto text-white  py-3 px-5 flex justify-between items-center">
          <p className="text-[14px]">
            ©️ All Copyright 2025 by Aasvaa Inov. Lab
          </p>
          <div className="flex gap-4">
            <Link href="TermsOfUse" className="hover:underline">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="privacyPolicy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>

      <div className="bg-[#041219] sm:hidden block">
        <footer className=" max-w-[1241px] mx-auto text-white py-3 px-5 ">
          <p className="text-[14px] text-center">
            ©️ All Copyright 2025 by Aasvaa Inov. Lab
          </p>
          <div className="flex justify-around pt-[10px]">
            <Link href="TermsOfUse" className="hover:underline">
              <div> Terms of Use</div>{" "}
            </Link>
            <span>|</span>
            <Link href="privacyPolicy" className="hover:underline">
              <div>Privacy Policy</div>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
