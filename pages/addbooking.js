import React, { useState } from "react";
import {MdDelete} from "react-icons/md";
const Addbooking = () => {
  const[assign,setAssign] = useState("");
  const[comment,setComment] = useState("");
  const[payment_type,setPayment_Type] = useState("");
  const[total_amount,setTotal_Amount] = useState("");
  const[amount_paid,setAmount_Paid] = useState("");
  const[amount_to_be_collected,setAmount_To_Be_Collected] = useState("");
  const[test,setTest] = useState("");
  const[blood,setBlood] = useState("");
  const[covid,setCovid] = useState("");
  const[other,setOther] = useState("");
  const[sample,setSample] = useState("");
  const Addbooking_Save = () =>{
    console.log(assign,comment,payment_type,total_amount,amount_paid,amount_to_be_collected,test,blood,covid,other,sample)
  }
  return (
    <>
        <div className="m-5  ">
            <div className="block text-xl font-bold text-gray-900 mb-5">Add Booking</div>
          <div className="grid grid-cols-6 gap-6 ">
            <div className="col-span-5 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Assign Phlebo
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country" value={assign} onChange={(e)=>setAssign(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              >
                <option className="text-gray-500">Select Affillate</option>
                <option>Select or Search Phlebo</option>
                <option>hello</option>
              </select>
            </div>

            <div className="col-span-5 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Comment
              </label>
              <input
                type="comment"
                name="first_name"
                id="first_name"
                autoComplete="given-name" value={comment} onChange={(e)=>setComment(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 "
              />
            </div>

            <div className="col-span-5 sm:col-span-2 gap-10">
              <label className="block text-sm font-medium text-gray-700">
                Payment Type*
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country" value={payment_type} onChange={(e)=>setPayment_Type(e.target.value)}
                className="mt-1 block w-50% py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              >
                <option className="text-gray-500">Select Payment Type</option>
                <option>POSTPAID</option>
                <option>PREPAID</option>
              </select>
            </div>

            <div className="col-span-5 sm:col-span-1 gap-10">
              <label className="block text-sm font-medium text-gray-700">
                Total Amount
              </label>
              <input
                type="comment"
                name="first_name"
                id="first_name"
                autoComplete="given-name" value={total_amount} onChange={(e)=>setTotal_Amount(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50% py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 "
                />
            </div>

            <div className="col-span-5 sm:col-span-2 gap-10">
              <label className="block text-sm font-medium text-gray-700">
                Amount Paid
              </label>
              <input
                type="comment"
                name="first_name"
                id="first_name"
                autoComplete="given-name" value={amount_paid} onChange={(e)=>setAmount_Paid(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50% py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 "
              />
            </div>

            <div className="col-span-5 sm:col-span-1 gap-10">
              <label className="block text-sm font-medium text-gray-700">
                Amount To Be Collected
              </label>
              <input
                type="comment"
                name="first_name"
                id="first_name" value={amount_to_be_collected} onChange={(e)=>setAmount_To_Be_Collected(e.target.value)}
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50% py-2 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 "
              />
            </div>

            <div className="col-span-6 sm:col-span-6 ">
              <label className="block text-sm font-medium text-gray-700">
                Test
              </label>
              <div className="inline-grid grid-cols-2 gap-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country" value={test} onChange={(e)=>setTest(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
                >
                  <option className="text-gray-500">Select Type</option>
                  <option>Hospital</option>
                  <option>hi</option>
                </select>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 tan hover:bg-green-700 focus:outline-none "
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-5 sm:col-span-5">
              <label className="block text-sm font-medium text-gray-700">
                Test Type*
              </label>
              <div className="inline-flex grid-cols-5 gap-10">
                <div className="inline-flex grid-cols-2 gap-2">
                  <input
                    type="checkbox"
                    id="default-checkbox" value={blood} onChange={(e)=>setBlood(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-sm w-40% font-medium text-gray-700">
                    Blood
                  </label>
                </div>

                <div className="inline-flex grid-cols-2 gap-2">
                  <input
                    type="checkbox"
                    id="default-checkbox" value={covid} onChange={(e)=>setCovid(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-sm w-40% font-medium text-gray-700 ">
                    Covid
                  </label>
                </div>

                <div className="inline-flex grid-cols-2 gap-2">
                  <input
                    type="checkbox"
                    id="default-checkbox" value={other} onChange={(e)=>setOther(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="block text-sm w-40% font-medium text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="col-span-5 sm:col-span-5 overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6"></th>
                    <th scope="col" className="py-3 px-6">
                      # 
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Test Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Lab Discount
                    </th>
                    <th scope="col" className="py-3 px-6">
                      CH Discount
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <MdDelete/>
                
                    </th>
                    <td className="py-4 px-6">1</td>
                    <td className="py-4 px-6">platelet count</td>
                    <td className="py-4 px-6">150</td>
                    <td className="py-4 px-6">0</td>
                    <td className="py-4 px-6">0</td>
                    <td className="py-4 px-6">150</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td className="py-4 px-6"></td>
                    <td className="py-4 px-6"></td>
                    <td className="py-4 px-6"></td>
                    <td className="py-4 px-6">0</td>
                    <td className="py-4 px-6">0</td>
                    <td className="py-4 px-6">150</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-span-5 sm:col-span-5 ">
              <label className="block text-sm font-medium text-gray-700">
                Sample
              </label>
              <div className="inline-grid grid-cols-3 gap-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country" value={sample} onChange={(e)=>setSample(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
                >
                  <option className="text-gray-500">Select Sample</option>
                </select>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-green-700 focus:outline-none f"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-5 sm:col-span-6 overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6"></th>
                    <th scope="col" className="py-3 px-6">
                      #
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <MdDelete/>
                    </th>
                    <td className="py-4 px-6">1</td>
                    <td className="py-4 px-6">EDTA</td>
                    <td className="py-4 px-6">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
            <div className="inline-grid grid-cols-2 w-full ">
              <div className="px-4 py-3 bg-gray-50 sm:px-6 ">
                <button
                  type="submit" action="#" 
                  className="inline-flex justify-center py-2 px-4 border-transparent shadow-sm text-lg font-semibold rounded-md text-indigo-600 bg-white hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Previous
                </button>
              </div>

              <div className="ml-1 px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit" onClick={Addbooking_Save}
                  className="inline-flex justify-center py-2 px-4  border-transparent shadow-sm text-lg font-semibold rounded-md text-indigo-600 bg-white hover:text-green-700 focus:outline-none  "
                >
                  Save
                </button>
              </div>
            </div>
        </div>
        </>
  );
};

export default Addbooking;
