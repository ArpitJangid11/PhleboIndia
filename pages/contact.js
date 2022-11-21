import React, { useState } from "react";
const Contact = () => {
  
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-4/5 my-5 mx-auto flex flex-col items-center md:flex-row ">
          <div className="border w-[70%] h-full bg-cyan-200 text-black p-10">
            <span>
              <h1 className="text-3xl font-semibold text-center mb-4 text-green-700">
                Contact Us
              </h1>
              <p className="text-xs font-normal mt-2 text-center">
                Contact us by filling this contact form.{" "}
              </p>
            </span>
            <div className="mt-6 leading-7 text-center">
              <input
                type="text"
                name=""
                placeholder="Full Name"
                id=""
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-gray-700 placeholder:opacity-80 text-sm bg-cyan-100 focus:outline-none"
              />
              <input
                type="email"
                name=""
                placeholder="Email Address"
                id=""
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-gray-700 placeholder:opacity-80 text-sm bg-cyan-100 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                id="phone"
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-gray-700 placeholder:opacity-80 text-sm bg-cyan-100 focus:outline-none"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Write us a message"
                className="w-[80%] bg-cyan-100 border-2 border-white h-44 text-sm outline-none placeholder:text-gray-700 placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"
              ></textarea>
              <button className="block m-auto w-[60%] md:w-[50%] text-center border bg-green-700 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-green-400">
                Send
              </button>
            </div>
            
          </div>
          <div className="border w-[70%] md:w-[40%] bg-gray-100  flex flex-col  leading-7 space-y-8 p-8 h-full"> 
          <div className="text-black m-6 font-medium"> 
          <h1 className="text-3xl font-semibold text-center mb-4 text-green-700" >Contact Information</h1> </div> 
          <div className="text-black m-6 text-sm flex"> 
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
          </div> 
          <div className="text-black m-6 text-sm flex"> 
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 
          <div> +1 987-6543-210 </div> 
          </div> 
          <div className="text-black m-6 text-sm flex"> 
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
          <div> admin@phelboindia.org </div> 
          </div> 
          <div className="text-black m-6 text-sm flex"> 
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> 
          <div> www.phelboindia.org </div>
          </div> 
          </div>
          </div> 
          </div> 
    </>
  );
};
export default Contact;
