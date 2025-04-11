import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Contact from "../components/contact/page";
import Vector from "../../../public/assets/call.png"
import Vector2 from "../../../public/assets/mail.png"
import Vector3 from "../../../public/assets/map.png"
import Image from "next/image";


export default function NewsPage() {
  return (
    <div>
      <Header />
      <div className="p-[20px] sm:p-[100px]">
        <div className="sm:flex mb-[24px] justify-around">
          <div className="sm:w-[40%]">
            <h1 className="text-[24px] text-[#2D9CDB] font-bold">
              Are you interested in learning more?
            </h1>
            <p className="text-[18px] leading-[29px] mt-7 text-black">
              We are seeking partnerships with tax and legal professionals,
              researchers, and universities to join us on this journey. If this
              opportunity interests you, please reach out to us.
            </p>
          </div>
          <div className="sm:w-[40%] mt-10 sm:mt-0">
            <div className="border-[1px] drop-shadow-lg border-[#bcbbc0] rounded-[10px] p-[20px] cursor-pointer">
              <h6 className="text-[22px] font-bold text-black ">Gojuris Powered by Aasvaa</h6>
              <div className=" flex items-center gap-4 pt-[12px] text-black text-[18px] leading-[29px]">
                <Image src={Vector} alt="vector-icon" className="" />
                {/* <img src="./assets/call.png" alt="" /> */}
                +91 80588 88814
              </div>
              <div className=" flex items-center gap-4 pt-[12px] text-black text-[18px] leading-[29px]">
                <Image src={Vector2} alt="vector-icon" className="" />
                {/* <img src="./assets/mail.png" alt="" /> */}
                support@gojuris.com
              </div>
              <div className=" flex gap-4 items-center pt-[12px] text-black text-start text-[18px] leading-[29px]">
                <Image src={Vector3} alt="vector-icon" className="" />
                {/* <img src="./assets/map.png" alt="" /> */}
                3rd Floor, BTH Sansthan Path, Malviya Nagar, Jaipur, Rajasthan
                302017
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md p-[20px] rounded-[10px]">
        <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}
