import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
    <div>
      <div className="bg-black p-4 items-center">
        <div className="flex justify-center pt-10 pb-14 md:pb-9">
          {" "}
          <Image src="/phelboindialogo.png" alt="" width={120} height={48} />
        </div>
        <h1 className="flex  justify-center text-white pb-[36px] font-sans uppercase font-normal  underline underline-offset-[12px] decoration-red-500">PHELBOINDIA</h1>
        <div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
          <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
            <div className="flex justify-start md:mt-10">
              <h1 className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                Inform{" "}
              </h1>{" "}
             
            </div>
            
          </div>
          <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
            <div>
              <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                {" "}
                dates &nbsp;
              </pre>
            </div>
            
          </div>
          
            
            <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
              <div className="flex justify-start md:-mt-32">
                <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  support{" "}
                </h1>{" "}
                
              </div>
              <p className="">
                {" "}
                <a href="/contact" className="hover:text-[#cacaca]">
                  FAQ's
                </a>{" "}
              </p>
            </div>
          
          <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
            <div className="flex justify-start">
              <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                get in touch{" "}
              </h1>{" "}
              
            </div>
            <p className="space-x-3">
              {" "}
              <i className="fa fa-home text-[17px]"></i>
              <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                Our Company
              </strong>{" "}
            </p>
            <div className="leading-7">
              <p className="">
                {" "}
                NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab (INDIA){" "}
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
            >
              <i className="fa fa-facebook"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-twitter"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-instagram"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-linkedin"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-youtube"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-pinterest"></i>
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-telegram"></i>
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
