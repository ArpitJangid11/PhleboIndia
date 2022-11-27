import React, { useState } from 'react'

const Form = () => {
  const[affillate,setAffillate] = useState("");
  const[spl,setSPL] = useState("");
  const[date,setDate] = useState("");
  const[slot,setSlot] = useState("");
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[age,setAge] = useState("");
  const[gender,setGender] = useState("");
  const[vip,setVip] = useState("");
  const[weak,setWeak] = useState("");
  const[landmark,setLandmark] = useState("");
  const[pincode,setPincode] = useState("");
  const[zone,setZone] = useState("");
  const[address,setAddress] = useState("");
  const Form1 = () =>{
        console.log(affillate,spl,date,slot,name,email,age,gender,vip,weak,landmark,pincode,zone,address)
  }
  return (
    <>
       <div className="mt-5 md:mt-0 md:col-span-2" >
      <div >
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Select Affillate*</label>
                <select value={affillate} onChange={(e)=>setAffillate(e.target.value)} id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Dr Pathcare</option>
                  <option>Itoby HealthCare</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Select SPL*</label>
                <select value={spl} onChange={(e)=>setSPL(e.target.value)} id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Benikind Medics Global Pvt. Ltd.</option>
                  <option>Augmentum Diagnostics</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Collection Date*</label>
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Collection Slot*</label>
                <select value={slot} onChange={(e)=>setSlot(e.target.value)} id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>6:00-6:30</option>
                  <option>6:30-7:00</option>
                  <option>7:00-7:30</option>
                  <option>7:30-8:00</option>
                  <option>8:00-8:30</option>
                  <option>8:30-9:00</option>
                  <option>9:00-9:30</option>
                  <option>9:30-10:00</option>
                  <option>10:00-10:30</option>
                  <option>10:30-11:00</option>
                  <option>11:00-11:30</option>
                  <option>11:30-12:00</option>
                  <option>12:00-12:30</option>
                  <option>12:00-1:00</option>
                  <option>1:00-1:30</option>
                  <option>1:30-2:00</option>
                  <option>2:00-2:30</option>
                  <option>2:00-3:00</option>
                  <option>3:00-3:30</option>
                  <option>3:30-4:00</option>
                  <option>4:00-4:30</option>
                  <option>4:30-5:00</option>
                  <option>5:30-6:00</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Patient Name*</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-65% py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Patient Email*</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-65% py-2 px-3 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
              </div>
              
              <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Patient Age*</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} type="age" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50% py-2 px-3 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200"/>
              </div>
              
              <div className="col-span-6 sm:col-span-1 gap-10">
                <label className="block text-sm font-medium text-gray-700">Gender*</label>
                <select value={gender} onChange={(e)=>setGender(e.target.value)} id="country" name="country" autoComplete="country" className="mt-1 block w-50% py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              
              {/* <div className="inline-grid grid-cols-3"> */}
                <div className="col-span-4 sm:col-span-2 inline-flex grid-cols-2 gap-2">
                  <input value={vip} onChange={(e)=>setVip(e.target.value)} type="checkbox" id="default-checkbox"  className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="block text-sm w-40% font-medium text-gray-700">Mark this as VIP</label>
                </div>

                <div className="col-span-4 sm:col-span-2 inline-flex grid-cols-2 gap-2">
                  <input value={weak} onChange={(e)=>setWeak(e.target.value)} type="checkbox" id="last_name" className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="block text-sm font-medium text-gray-700">Mark this as Weak Vein</label>
                </div>

                <div className="col-span-4 sm:col-span-2 inline-flex grid-cols-2 gap-2">
                  <input value={weak} onChange={(e)=>setWeak(e.target.value)} type="checkbox" id="last_name" className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="block text-sm font-medium text-gray-700">Mark this as PPMC </label>
                </div>
              {/* </div> */}

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Landmark</label>
                <input value={landmark} onChange={(e)=>setLandmark(e.target.value)} type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Pincode*</label>
                <input value={pincode} onChange={(e)=>setPincode(e.target.value)} type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Zone*</label>
                <select value={zone} onChange={(e)=>setZone(e.target.value)} id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option className="text-gray-500">Select Zone</option>
                  <option>Ajmer</option>
                  <option>Bikaner</option>
                  <option>Gurugram</option>
                  <option>Jaipur</option>
                  <option>Jodhpur</option>
                  <option>Kota</option>
                  <option>Udaipur</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Patient Address*</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" onClick={Form1} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form
