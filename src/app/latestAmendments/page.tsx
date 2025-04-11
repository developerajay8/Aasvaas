"use client";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Uiw from "../../../public/assets/Vector (8).png";
import Courtic from "../../../public/assets/map_courthouse (3).png";

import Image from "next/image";

export default function NewsPage() {
  const latest = [
    {
      title:
        "S.O. 533 (Appointment of Shri Sanjay Parihar, District and Sessions Judge as Special Judge Anti-Corruption.)",
        date: "05-Nov-2024"
    },
    {
      title:
        "S.O. 529 (Appointment of Shri Ajaz Hussain Mir, Naib Tehsildar (LCMA), Srinagar as Executive Magistrate.)",
        date: "05-Nov-2024"

    },
    {
      title:
        "S.O. 526 (Appointment of Public Prosecutor(s), Special Public Prosecutor(s) & Additional Public Prosecutor(s) for conducting criminal cases.)",
        date: "28-Oct-2024"

    },
    {
      title:
        "S.O. 525 (In partial Modification of notification SRO 444 dated 01.10.2018.)",
        date: "28-Oct-2024"

    },
    {
      title:
        "	S.O. 520 (Appointment of Sh. S. Bhupinder Singh (Retd Joint Director of Prosecution) as Special Public Prosecutor.)",
        date: "25-Oct-2024"

    },
    {
      title:
        "S.O. 519 (Appointment of Sh. S. Bhupinder Singh (Retd Joint Director of Prosecution) as Special Public Prosecutor.)",
        date: "25-Oct-2024"

    },
    {
      title:
        "S.O. 518 (Appointment of Officer's of the J&K Prosecution Service as Assistant Public Prosecutor(s) (Asstt. PPs) for conducting criminal cases in the courts.)",
        date: "23-Oct-2024"

    },
    {
      title:
        "S.O. 517 (Up-gradation in the Pay Level of Chief Engineers.)",
        date: "21-Oct-2024"

    },
  ];
  return (
    <div>
      <Header />

      <div className="">
        <div className=" py-[20px] text-center sm:py-[10px] px-[20px] sm:px-[100px] bg-[#e6e6e6]">
          <h1 className="text-[56px] mt-3 font-medium leading-[60px] mb-4">
          Latest Amendments
          </h1>
          <p className="text-[16px] mt-3  leading-[26px] mb-4">
          Access the latest amendments and understand their implications with ease. Dont <br /> let legal changes catch you off guard—our AI simplifies it all.</p>
        </div>
        <div className="grid sm:px-[100px] px-[20px] my-[20px] sm:my-[48px] gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>

      <div className="flex justify-center mb-[24px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 w-max">
        {latest.map((item, index) => (
              <div
                key={index}
                className="sm:bg-[#FAFAFA] bg-[#E6E6E6] border-[1px] border-[#b3b3b3b] p-[16px] rounded-[10px] sm:max-w-[420px] max-w-[361px]"
              >
                <p className="text-[16px] leading-[26px] text-[#343434] line-clamp-2">
                  {item.title}
                </p>
                <div className="flex gap-4 mt-[12px] ">
                  <div className="flex items-center sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Uiw} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      {item.date}
                    </div>
                  </div>

                  <div className="flex  items-center sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Courtic} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      SUPRIME COURT OF INDIA
                    </div>
                  </div>
                </div>

                <div className=" hover:bg-[#2D9CDB] bg-[#f2f2f2] duration-500 cursor-pointer mt-[18px] sm:rounded-[6px] py-[6px] text-center text-[#000000] font-bold ">
                  Read
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
