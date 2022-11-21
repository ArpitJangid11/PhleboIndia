import React from 'react'

const Form = () => {
  return (
    <>
       <div className="mt-5 md:mt-0 md:col-span-2" >
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Select Affillate*</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Itoby Healthcare Pvt. Ltd.</option>
                  <option>hello</option>
                  <option>hi</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Select SPL*</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Benekind Medics Global Pvt. Ltd.</option>
                  <option>hello</option>
                  <option>hi</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Collection Date*</label>
                <input type="date" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Collection Slot*</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
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

              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Patient Name*</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="email_address" className="block text-sm font-medium text-gray-700">Patient Email*</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label for="last_name" className="block text-sm font-medium text-gray-700">Patient Age*</label>
                <input type="age" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200"/>
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Gender*</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label for="default-checkbox" className="block text-sm font-medium text-gray-700">Mark this as VIP</label>
                <input type="checkbox" id="default-checkbox"  className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="default-checkbox" className="block text-sm font-medium text-gray-700">Mark this as Weak Vein</label>
                <input type="checkbox" id="last_name" className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Landmark</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Pincode*</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Zone*</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200">
                  <option>Ajmer</option>
                  <option>Bharatpur</option>
                  <option>Bikaner</option>
                  <option>Jaipur</option>
                  <option>Jodhpur</option>
                  <option>Kota</option>
                  <option>Udaipur</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Patient Address*</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 px-3 shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-200 " />
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form
