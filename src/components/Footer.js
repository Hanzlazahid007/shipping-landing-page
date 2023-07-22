import React from "react";
import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="main flex flex-col  xl:flex xl:flex-row xl:pt-[8rem] pt-[4rem]   justify-between ">
        <div className="pic flex justify-center mb-10 xl:mb-0 -mt-6 items-start xl:w-1/2">
          <Image src="/g8.png" width={120} height={120} alt="a" />
        </div>
        <div className="service w-[100%]  xl:m-0 xl:w-1/5">
          <h1 className="text-[#2F9379] font-medium text-center xl:text-left">
            Discover
          </h1>
          <ul className="mt-3 ">
            <li className="text-[#333333]  text-center xl:text-left">Home</li>
            <li className="text-[#333333] text-center xl:text-left">
              Our Service
            </li>

            <li className="text-[#333333] text-center xl:text-left">Article</li>
          </ul>
        </div>
        <div className=" xl:w-1/3">
          <h1 className="text-[#2F9379] mt-7 xl:mt-0 font-medium text-center xl:text-left">
            Learn More
          </h1>
          <ul className="mt-3">
            <li className="text-[#333333] text-center xl:text-left">
              About US
            </li>
            <li className="text-[#333333] text-center xl:text-left">
              Privacy policy
            </li>
            <li className="text-[#333333] text-center xl:text-left">FAQ</li>
            <li className="text-[#333333] text-center xl:text-left">
              TErms & Condition
            </li>
          </ul>
        </div>
        <div className="contact xl:w-1/3">
          <h1 className="text-[#2F9379] mb-4 xl:mb-0 mt-7 xl:mt-0 font-medium text-center xl:text-left">
            Contact
          </h1>
          <ul className="xl:mt-3">
            <li className="text-[#333333] text-center xl:text-left xl:w-auto w-[70%] m-auto ">
              {" "}
              Gedung Medical, Jl HR Rasuna Said Kav 1-2 Bl X-5 Menara Karya Lt
              22-23,Kuningan Timur, Jakarta
            </li>
          </ul>
        </div>
        <div className="xl:w-1/2 xl:flex xl:justify-start xl:ml-20  flex justify-center xl-mt-0 mt-6">
          <div className=" xl:m-1 xl:p-2 mr-3 ">
            <BiLogoFacebook className="bg-[#2F9379] rounded-full  text-white  text-2xl p-[.20rem]" />
          </div>
          <div className=" xl:m-1 xl:p-2 mr-3">
            <AiOutlineInstagram className="bg-[#2F9379] rounded-full text-white text-2xl p-[.20rem]" />
          </div>
          <div className=" xl:m-1 xl:p-2 mr-3">
            <BiLogoGmail className="bg-[#2F9379] rounded-full text-white text-2xl p-[.20rem]" />
          </div>
          <div className=" xl:m-1 xl:p-2 mr-3">
            <BsFillTelephoneFill className="bg-[#2F9379] rounded-full text-white text-2xl p-[.20rem]" />
          </div>
        </div>
      </div>

      <div className="xl:text-center text-center xl:mt-10 -mt-2 p-8 text-[#333333]">
        &copy; Perfume 2022 .All right reserved{" "}
      </div>
    </div>
  );
};

export default Footer;
