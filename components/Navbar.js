import Link from "next/link";
import Image from 'next/image';
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <divmage src="/phelboindialogo.png" alt="" width={120} height={48} />
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/">Contact</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/form">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                  <Link href="/login">Login</Link>
              </li>
            </ul>
            <div className=" text-center text-base pr-5  inline-flex">
              {" "}
              <Link
                href="/"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <div className="fa fa-twitter"></div>
              </Link>{" "}
              <Link
                href="/"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <div className="fa fa-instagram"></div>
              </Link>{" "}
              <Link
                href="/"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <div className="fa fa-facebook"></div>
              </Link>{" "}
              <Link
                href="/"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <div className="fa fa-google"></div>
              </Link>{" "}
              <Link href="/" className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500">
                <div className="fa fa-linkedin"></div>
              </Link>{" "}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
