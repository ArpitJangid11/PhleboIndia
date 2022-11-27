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
          <h1 className="flex  justify-center text-white pb-[36px] font-sans uppercase font-normal  underline underline-offset-[12px] decoration-red-500">
            PHELBOINDIA
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
