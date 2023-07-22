import React, { useState } from "react";
// import { logo } from "";
import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
// import { useState } from "react";

const Navbar = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  return (
    <div>
      <div className="xl:flex xl:flex-row bg-[#FEFEFE] xl:mt-4 xl:p-4 xl:items-center xl:justify-between flex flex-col ">
        <div className="img xl:ml-9 flex justify-between items-center">
          <Image
            className="xl:ml-0 ml-6 "
            src="/g8.png"
            width={100}
            height={100}
            alt="logo"
          />
          <RxHamburgerMenu
            onClick={handleChange}
            className={
              change
                ? "xl:hidden text-2xl xl:mr-0 mr-8 cursor-pointer"
                : "xl:hidden text-2xl xl:mr-0 mr-8 rotate-45 cursor-pointer ease-in duration-300"
            }
          />
        </div>

        <div>
          <ul
            className={
              change
                ? " hidden xl:block  xl:flex xl:m-0  xl:space-x-5 xl:-left-0 -left-96  mt-6"
                : "show   xl:flex xl:m-0  xl:space-x-5  mt-6 absolute right-0 transition-colors ease-in duration-300 "
            }
          >
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0  hover:translate-x-6 transition-all   p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>Attars</Link>
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0  hover:translate-x-6 transition-all p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>Bodyspray</Link>
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all  p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>Bakhoor</Link>
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>Perfume</Link>
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all   p-2 border-4 border-[#2F9379]">
              insense sticks
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all   p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>islamic Products</Link>
            </li>
            <li className="xl:cursor-pointer xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all  p-2 border-4 border-[#2F9379]">
              <Link href={"#"}>Essential OIL</Link>
            </li>
            <li className=" xl:cursor-pointer flex  xl:p-0 xl:border-0 bg-[#2F9379] xl:bg-white xl:hover:translate-x-0 hover:translate-x-6 transition-all  p-2 border-4 border-[#2F9379]">
              Orders <MdOutlineArrowDropDown className="xl:mt-1 xl:text-2xl" />
            </li>
          </ul>
        </div>
        <div className="show  xl:flex xl:items-center hidden">
          <div className="xl:flex xl:mr-10 xl:cursor-pointer">
            <Link href="#">
              {" "}
              <AiTwotoneHeart className=" text-[#FF0000]  xl:cursor-pointer xl:mr-1 xl:text-2xl" />
            </Link>
            <Link href={"#"}>
              {" "}
              <BsSearch className="xl:ml-1 xl:mr-1 xl:cursor-pointer xl:text-2xl" />
            </Link>
            <Link href={"#"}>
              {" "}
              <FaShoppingCart className="xl:ml-1 xl:cursor-pointer xl:mr-1 xl:text-2xl" />
            </Link>
          </div>
          <div>
            <button className="xl:pl-8 xl:pt-2 xl:pb-2 xl:rounded-3xl xl:cursor-pointer xl:pr-8 xl:border-2 xl:text-[#2F9379] xl:border-[#2F9379]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
