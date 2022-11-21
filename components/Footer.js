import Link from "next/link";
import Image from "next/image";
import React from "react";
// import { BsGoogle } from "react-icons/bs";
// import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-2 max-w-5xl items-center">
          <div className="flex flex-col items-center">
            {" "}
            <Image src="/phelboindialogo.png" alt="" width={120} height={48} />
            <h1 className="text-black font-bold pt-1 justify-center text-center inline-block align-middle" >PHELBOINDIA</h1>
            <div className="m-2">
              {" "}
              <Link
                href="/"
                className="w-9 h-10 text-center border-current border-2 text-violet-600 hover:text-black pt-1 inline-block align-middle"
              >
                <svg className="w-6 h-6 mt-auto ml-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </Link>{" "}
              <Link
                href="/contact"
                className="w-9 h-10 text-center border-current border-2 text-blue-600 hover:text-black pt-1 inline-block align-middle justify-center"
              >
                <svg className="w-6 h-6 ml-1 mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </Link>{" "}
              
            </div>
            <div className="flex md:flex-row flex-col">
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <Link href="/">Home</Link>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <Link href="/">About us </Link>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <Link href="/">Services </Link>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <Link href="/contact">Contact Us </Link>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <Link href="/"> Privacy Policy </Link>{" "}
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
