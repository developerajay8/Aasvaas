

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Slider1 from "../../../../public/Group 133.png"
// import Slider2 from "../../../../public/Virtual legal assitance.png"

// Dynamic slides data
const slides = [
  {
    title: "Gojuris Chatbot",
    description:
      "The Gojuris Chatbot is trained on 1 crore+ Indian legal cases and delivers precise answers",
    points: ["Smart Case Summaries", "Document Analyzer", "AI Document Review"],
    click: ["Explore More"],
    image: "/Group 133.png", // Replace with actual image path
  },
  {
    title: "Mobile application",
    description: "Access your AI legal assistant anytime, anywhere.",
    points: ["iOS & Android Apps", "Voice Search", "Offline Mode"],
    click: ["Download"],
    image: "/Virtual legal assitance.png",
  },
  {
    title: "AI-Driven Case Search",
    description: "Stop scrolling through endless databases. Gojuris offers:",
    points: ["Citation search", "Statutes wise search", "Advance search"],
    click: ["Explore More"],
    image: "/image.png",
  },
];

export default function SliderSection() {
  const [progress, setProgress] = useState(0); // 0, 1, 2 for progress bar

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const totalWidth =
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
    const scrollPercentage = scrollLeft / totalWidth;

    if (scrollPercentage < 0.33) setProgress(0);
    else if (scrollPercentage < 0.66) setProgress(1);
    else setProgress(2);
  };

  return (
    <div className="w-full overflow-hidden bg-[#E6E6E6] sm:hidden block">
      {/* Horizontal Scroll Container */}
      <div
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        onScroll={handleScroll}
        style={{ scrollBehavior: "smooth" }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full snap-center px-[20px] max-w-[1240px] mx-auto md:flex justify-between py-[40px]"
          >
            <div className="md:my-auto md:mt-0 mb-[22px]">
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                width={500}
                height={300}
              />
            </div>
            <div className="max-w-[530px]">
              <h5 className="text-[28px] text-[#1B1B1B] font-[500] leading-[36px]">
                {slide.title}
              </h5>
              <p className="text-[#1B1B1B] text-[16px] pb-[18px] font-[500] leading-[26px] pt-[12px]">
                {slide.description}
              </p>
              {slide.points.map((point, idx) => (
                <ul
                  key={idx}
                  className="list-disc border-t-[1px] border-[#b3b3b3] pl-[28px]"
                >
                  <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                    {point}
                  </li>
                </ul>
              ))}
              <ul className="list-disc border-t-[1px] border-[#b3b3b3] pl-[28px]"></ul>

              <button className="py-[15px] mt-[32px] cursor-pointer rounded-[6px] text-[16px] font-bold bg-[#2D9CDB] text-[#1B1B1B] px-[20px]">
                {slide.click}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Fixed Progress Bar (No Extra Scroll) */}
      <div className="max-w-[1240px] mx-auto overflow-hidden pb-[40px]">
        <div className="w-[210px] mx-auto rounded-[10px] h-[5px] bg-[#c4c4c4] mt-4 relative">
          <motion.div
            className="h-[5px] rounded-[10px] bg-[#2D9CDB]"
            animate={{
              width: progress === 0 ? "33%" : progress === 1 ? "66%" : "100%",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}
