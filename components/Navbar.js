import Link from "next/link";
import Image from 'next/image';
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <Link href='/'><Image src="/phelboindialogo.png" alt="" width={120} height={48} /></Link>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                  <Link href="/adminLogin">Admin Login</Link>
              </li>
              <li >
                  <Link href="/services" className="px-7 py-3 bg-green-500 text-white rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0" >Book Appointment</Link>
              </li>
            </ul>
            
            
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
