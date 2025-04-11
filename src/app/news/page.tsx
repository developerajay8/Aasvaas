"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import News1 from "../../../public/assets/Vector (8).png"
import Image from "next/image";

interface NewsItem {
  heading: string;
  date: string;
  context: string;
  imageUrl: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);


  return (
    <div>
      <Header />

      <div className="">
        <div className=" py-[20px] sm:py-[10px] px-[20px] sm:px-[100px] bg-[#e6e6e6] text-left">
          <h1 className="text-[56px] mt-3 font-medium leading-[60px] mb-4">
            News
          </h1>
        </div>
        <div className="grid sm:px-[100px] px-[20px] my-[20px] sm:my-[48px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Link key={index} href={`/news/${index}`}>
              <div className="border-[1px] bg-[#e6e6e6] border-[#bcbbc0] rounded-[10px] p-2 cursor-pointer">
                <Image
                  src={item.imageUrl}
                  alt={item.heading}
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  width={382}
                  height={200}
                />
                <h3 className="text-lg line-clamp-2 px-2 font-[16px] mt-2">
                  {item.heading}
                </h3>

                <div className="flex justify-between p-[6px] mt-[10px]">
                  <div className="flex items-center bg-[#CCCCCC] border-[#bcbbc0] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={News1} alt="" />
                    <div className="text-[#343434] text-[14px]">
                      {item.date}
                    </div>
                  </div>
                  <div className="bg-[#2D9CDB] cursor-pointer text-[14px] text-[#16151F] font-bold px-[12px] py-[7px] rounded-[6px]">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
