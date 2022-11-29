import React, { useState, useEffect } from "react";
import { MdCall, MdPendingActions } from "react-icons/md";
const AdminLogin = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("http://localhost:5500/api/fetch-appointment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();

    setUsers(data);
  };
  console.warn(user);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Users
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    S.no
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                 
                 
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Status
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Zone
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Address
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    SPL
                  </th>

                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"> Date</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                   call
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                 
                  </th>
                </tr>
               
              </thead>
              <tbody>
                {user.map((item, index) => (
                  <tr>
                    <td class="px-4 py-3">{index}</td>
                    <td class="px-4 py-3">{item.patientName}</td>
                    <td class="px-4 py-3">{item.patientStatus}</td>
                    <td class="px-4 py-3">{item.zone}</td>
                    <td class="px-4 py-3">{item.address}</td>
                    <td class="px-4 py-3">{item.spl}</td>

                    <td class="px-4 py-3 text-lg text-gray-900">{item.collectionDate}</td>
                    <td class="w-10 text-center">
                      <MdCall />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              {" "}
              More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
