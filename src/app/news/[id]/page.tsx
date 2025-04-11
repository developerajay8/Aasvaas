"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import Image from "next/image";


interface NewsItem {
  heading: string;
  date: string;
  context: string;
  imageUrl: string;
}

export default function NewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    fetch(`/api/news?id=${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <div className="sm:p-[100px] p-[20px]">
        <div className="sm:flex">
          <div className="sm:w-[50%]">
            <div className="flex w-[250px] border-[1px] px-[10px] py-[5px] bg-[#e6e6e6] border-[#b3b3b3] rounded-[5px]">
              <div>
                <Image
                  src="/assets/Vector (8).png"
                  alt="Date Icon"
                  width={18}
                  height={21}
                />
              </div>
              <div>
                <h4 className="text-[14px] ml-[8px] text-[#343434]">
                  Date of Decision {news.date}
                </h4>
              </div>
            </div>
            <div className="mt-[32px]">
              <p className="text-[22px] sm:text-[44px] sm:leading-[50px] font-medium">
                {news.heading}
              </p>
            </div>
          </div>
          <div className="sm:ml-10 mt-5 sm:mt-0">
            <Image
              src={news.imageUrl}
              alt="Date Icon"
              width={610}
              height={342}
            />
          </div>
        </div>

        <div className="sm:mt-[80px] mt-[20px]">
          <p className="text-[18px] text-left leading-[25px] font-normal">{news.context}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
