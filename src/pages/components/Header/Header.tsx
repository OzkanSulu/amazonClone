import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import cart from "../../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { StateProps } from "@/type";
import { useSelector } from "react-redux";

const Header = () => {
  const {productData,favoriteData} = useSelector((state : StateProps)=>state.next)
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-6">
        <Link href={"/"}><Image className="w-28 object-cover" src={logo} alt="logo" /></Link>
        <div className="px-2 gap-2 border border-transparent hover:border-white cursor-pointer duration-300 md:flex items-center justify-center h-[70%] hidden xl:inline-flex">
          <SlLocationPin className="text-white font-bold text-2xl"/>
          <div className="text-xs">
            <p className="text-bold">Deliver,</p>
            <p className="text-white font-bodyFont uppercase">Republic of Korea</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex relative items-center justify-between">
          <input
            className="w-full h-full rounded-md px-3 placeholder:text-sm text-base text-black border-[2px] outline-none border-transparent focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search"
          />
          <span className="w-12 h-full bg-amazon_yellow text-white text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md cursor-pointer">
            <HiOutlineSearch />
          </span>
        </div>
        <div className="text-xs p-3 text-gray-100 flex flex-col justify-center items-center border border-transparent hover:border-white duration-300 cursor-pointer h-100%">
          <p>Hello, Sign In</p>
          <div className="text-white font-bold">
            <p>
              Account & Lists{""}
              {/*<span>
                <BiCaretDown />
              </span>*/}
            </p>
          </div>
        </div>
        <div className="text-xs p-3 text-gray-100 flex flex-col justify-center items-center border border-transparent relative hover:border-white duration-300 cursor-pointer h-100%">
        <Link href="/favorites">
   
      <p>Marked</p>
      <p className="text-white font-bold">& Favorites</p>
      {favoriteData.length > 0 && (
        <span className="absolute right-1 top-3 w-4 h-4 border-[1px] rounded-sm border-gray-400 text-amazon_yellow flex item-center justify-center">
          {favoriteData.length}
        </span>
      )}
    
  </Link>
</div>

        <div className="h-[70%] flex justify-center items-center cursor-pointer px-4 py-3 border border-transparent hover:border-white relative">
          <Link href={"/cart"}><Image className="w-12 h-full object-contain" src={cart} alt="cart"/></Link>
          <span className="text-sm  absolute left-10 top-1 font-bold  text-amazon_yellow">{productData? productData.length :0}</span>
          <p className=" text-sm font-bold text-white">Cart</p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
