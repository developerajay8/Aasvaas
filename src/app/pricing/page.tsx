import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

export default function NewsPage() {
  const data = [
    {
      title: "Essential",
      price: "₹ 31100",
      icon: "FEATURES",
      contentfirst: "AI SEARCH",

      contentsecond: "CHAT BOT",
      contentdesc: "Ask Unlimited Questions ",
      contentdesc2: "Chat History ",
      contentdesc3: "Generate a Draft",

      contentthird: "SMART SUMMARY",
      contentthirdcontentdisc: "Summary for All Judgments",
      contentthirdcontentdisc2: "Real time summary ",
      contentthirdcontentdisc3: "Legal Principles",
      contentthirdcontentdisc4: "Other components of a judgment like Dispute, Contentions, Ratio Decidendi, Judge's view and Final Decision",

      contentfourth: "Search Suggestions (TOPIC) ",
      contentfive: "Advance Search (All Parameters in a single page)",
      contentsix: "Translation in Multiple Languages",
      contentseven: "AI Audio Reader",
      contenteight: "Basic Searches like Citation Search, Statutes Search, Subject, Topic & Other parameters",
      contentnine: "Criminal Module (Acquittal and Conviction based searches)",

      contentten: "DATABASE",
      contentten2: "SC & All High Courts",
      contentten3: "Central & State Laws",
      contentten4: "Latest News",
      contentten5: "Latest Law points",
      contentten6: "Deeds & Drafting's",
      contentten7: "Articles",
      contentten8: "Reports",
      button: "Get started"

    },
    {
      title: "Premium",
      price: "₹ 51800",
      icon: "Essential + All Features & Databases ",
      contentfirst: "AI SEARCH",
      contentsecond: "VIRTUAL CHAT ASSISTANT",
      contentthird: "AI Case Recommender",
      contentthirdss: "Intelligently suggests similar and relevant cases based on your query, ensuring you never miss a crucial precedent. Powered by advanced legal AI, it enhances research efficiency by identifying parallel judgments instantly",

      contentfourth: "LEGAL CAPSULES",
      contentfive: "SMART NOTIFICATIONS ",
      contentsix: "NEWS PORTAL",
      contentseven: "Auto Case Alert",
      contenteight: "Create Own Digests",
      contentnine: "Basic Searches like Citation Search, Statutes Search, Subject, Topic & Other parameters",
      contentten: "Criminal Module (Acquittal and Conviction based searches)",
      contenteleven: "DATABASE",
      contenteleven2: "SC & All High Courts",
      contenteleven3: "Latest News",
      contenteleven4: "Latest Law points",
      contenteleven5: "Deeds & Drafting's",
      contenteleven6: "Articles",
      contenteleven7: "Reports",
      contenteleven8: "Privy Council Judgments",
      contenteleven9: "Federal Courts",
      contenteleven10: "Tribunals & Commissions",
      contenteleven11: "Original Journals True Prints",
      contenteleven12: "Legal Draft Hub",
      contenteleven13: "Central & State Laws",

      button: "Get started"

    },
    {
      title: "Elite",
      price: "₹ 81500",
      icon: "Essential + Premium + All Features & Databases  ",
      contentfirst: "AI SEARCH",
      contentsecond: "SuperSteno (with all sections) ",
      contentsecondbluetext: "for detail visit www.supersteno.com ",
      contentthird: "Graphical Representations of Referred Cases and their status",
      

      contentfourth: "Legal Draft Hub",
      contentfive: "Multiple Download/Print CART ",
      contentsix: "E-Books",
      contentseven: "Student Text Books",
      contenteight: "FAQs",
      contentnine: "Basic Searches like Citation Search, Statutes Search, Subject, Topic & Other parameters",
      contentten: "Criminal Module (Acquittal and Conviction based searches)",
      contenteleven: "DATABASE",
      contenteleven2: "SC & All High Courts",
      contenteleven3: "Latest News",
      contenteleven4: "Latest Law points",
      contenteleven5: "Deeds & Drafting's",
      contenteleven6: "Articles",
      contenteleven7: "Reports",
      contenteleven8: "Central & State Laws",
      contenteleven9: "International Case-Laws",
      contenteleven10: "nternational Treaties",
      contenteleven11: "Policy Documents",
      contenteleven12: "Foreign Legislations",

      button: "Get started"

    },
  ]
  return (
    <div>
      <Header />
      <div className=" pt-[20px] text-center sm:py-[10px] px-[20px] sm:px-[100px] bg-[#e6e6e6]">
        <h1 className="text-[56px] mt-3 font-medium leading-[60px] mb-4">
          Start with a plan that suits your firm
        </h1>
        <p className="text-[16px] mt-3  leading-[26px] mb-4">
          Online exclusive: Special promo prices are for new customers only
        </p>
      </div>
      <div>
        <section className="bg-white ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">

            <div className="space-y-8 sm:mt-[50px] mt-[20px] lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-10 w-[100%]  lg:space-y-0">
            {data.map((item, index) => (
              <div key={index} className="relative flex flex-col p-[24px] mx-auto w-[100%] text-black-900 bg-[#F6F6F6] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  dark:text-white">
                <h3 className="mb-4 text-[28px] text-[#1B1B1B] font-medium">
                  {item.title}
                </h3>
                
                <div className="flex items-baseline">
                  <span className="mr-2 text-[64px] text-[#2D9CDB] font-bold">
                    {item.price}
                  </span>
                  <span className="text-[#2D9CDB] dark:text-black-400">/mo</span>
                </div>
                <div className="text-[#343434] text-[18px] font-bold ">{item.icon}</div>
                <div className="border border-[#1A6996] my-[20px]"></div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    <span className="text-black font-semibold">{item.contentfirst}</span>
                  </li>
                  <div className="">
                    <li className="flex items-center space-x-3">
                  <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">
                <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                  </div>
                    <span className="text-black font-semibold">{item.contentsecond}</span>
                  </li>
                  <ul className="list-disc pl-[50px] pt-[4px] text-[#343434] text-[14px] ">
                  {item.contentdesc && <li>{item.contentdesc}</li>}
                  {item.contentdesc2 && <li>{item.contentdesc2}</li>}
                  {item.contentdesc3 && <li>{item.contentdesc3}</li>}
                  </ul>
                  <ul className="list-disc pl-[50px] pt-[4px] text-[#007AFF] text-[14px] ">
                  {item.contentsecondbluetext && <li>{item.contentsecondbluetext}</li>}
                 
                  </ul>


                  </div>
                  <div className="">
                  <li className="flex items-start space-x-3">
  <div className="bg-[#000] rounded-full flex items-center justify-center w-[20px] h-[20px] flex-shrink-0 mt-[3px]">
    <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
  </div>
  <span className="text-black font-semibold">{item.contentthird}</span>
</li>
                  <ul className="list-disc pl-[50px] pt-[4px] text-[#343434] text-[14px] ">
                {item.contentthirdcontentdisc && <li>{item.contentthirdcontentdisc}</li>}
                {item.contentthirdcontentdisc2 && <li>{item.contentthirdcontentdisc2}</li>}
                {item.contentthirdcontentdisc3 && <li>{item.contentthirdcontentdisc3}</li>}
                {item.contentthirdcontentdisc4 && <li>{item.contentthirdcontentdisc4}</li>}
                {item.contentthirdss && <li>{item.contentthirdss}</li>}
                  </ul>
                  </div>
                  <li className="flex items-center space-x-3">
                  <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

<FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
  </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contentfourth}</span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                  <div className="bg-[#000] rounded-[50px] flex-shrink-0 mt-[3px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contentfive}</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contentsix}</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                  <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contentseven}</span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                  <div className="bg-[#000] flex-shrink-0 mt-[3px] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contenteight}</span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                  <div className="bg-[#000] flex-shrink-0 mt-[3px] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">

                  <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                    </div>
                    
                    <span className="text-black">
                      <span className="font-semibold">{item.contentnine}</span>
                    </span>
                  </li>
                  <div className="">
                    <li className="flex items-start space-x-3">
                  <div className="bg-[#000] flex-shrink-0 mt-[3px] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">
                <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
                  </div>
                    <span className="text-black font-semibold">{item.contentten}</span>
                  </li>
                  <ul className="list-disc pl-[50px] pt-[4px] text-[#343434] text-[14px] ">
                  {item.contentdesc && <li>{item.contentdesc}</li>}
                  {item.contentdesc2 && <li>{item.contentdesc2}</li>}
                  {item.contentdesc3 && <li>{item.contentdesc3}</li>}
                  {item.contentdesc && <li>{item.contentdesc}</li>}
                  {item.contentdesc2 && <li>{item.contentdesc2}</li>}
                  {item.contentdesc3 && <li>{item.contentdesc3}</li>}
                  {item.contentdesc3 && <li>{item.contentdesc3}</li>}
                  </ul>
                  </div>
                  <div className="mb-[40px]">
                    <li className="flex items-center space-x-3">
                      
                    {!(item.contentdesc || item.contentdesc2 || item.contentdesc3) && (
  <div className="bg-[#000] rounded-[50px] flex items-center justify-center w-[20px] h-[20px]">
    <FaCheck className="text-[#ffffff] text-[12px] font-bold"/>
  </div>
)}

                    <span className="text-black font-semibold">{item.contenteleven}</span>
                  </li>
                  <ul className="list-disc pl-[50px] pt-[4px] text-[#343434] text-[14px] ">
                  {item.contenteleven2 && <li>{item.contenteleven2}</li>}
                  {item.contenteleven3 && <li>{item.contenteleven3}</li>}
                  {item.contenteleven4 && <li>{item.contenteleven4}</li>}
                  {item.contenteleven5 && <li>{item.contenteleven5}</li>}
                  {item.contenteleven6 && <li>{item.contenteleven6}</li>}
                  {item.contenteleven7 && <li>{item.contenteleven7}</li>}
                  {item.contenteleven8 && <li>{item.contenteleven8}</li>}
                  {item.contenteleven9 && <li>{item.contenteleven9}</li>}
                  {item.contenteleven10 && <li>{item.contenteleven10}</li>}
                  {item.contenteleven11 && <li>{item.contenteleven11}</li>}
                  {item.contenteleven12 && <li>{item.contenteleven12}</li>}
                  {item.contenteleven13 && <li>{item.contenteleven13}</li>}
                  </ul>
                  </div>
                </ul>
                <div className="mx-24px">
                <div className="absolute rounded-[50px] bottom-[30px] left-0 w-full bg-[#2D9CDB] flex justify-center px-5">
  <Link
    href="#"
    className="font-medium text-[18px] text-[#F6F6F6] bg-[#2D9CDB] py-2.5 rounded-[30px] w-full max-w-[300px] text-center"
  >
    SUBSCRIBE
  </Link>
</div>
</div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
