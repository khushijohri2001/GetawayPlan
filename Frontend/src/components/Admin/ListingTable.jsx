/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ListingTable = ({ tableHead, lastTableHead, data, obj }) => {
  const {pathname} = useLocation();
  const currentPath = pathname.split("/");
  
  const [tableBody, setTableBody] = useState([]);

  const tableBodyHandler = (arr, dataObj) => {
    const res = arr?.map((el) => {
      let obj = {};

      for (let key in el) {
        if (dataObj[key]) {
          
          if (key === "destination" || (currentPath[2] === "tour-package" && key === "category")) {
            obj[key] = el[key].name;

            continue;
          } else if(key === "category"){
            obj[key] = el[key].map((ele) => ele.name).join(", ")
            
          }else{
            obj[key] = el[key];
          }
        }
      }
      return obj;
    });

    return res;
  };

  useEffect(() => {
    let res = tableBodyHandler(data, obj);
    res && setTableBody(res);
  }, [data, obj]);

  return (
    <div className="shadow-md border border-cyan-700">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHead.map((name) => (
              <th scope="col" className="px-6 py-3" key={name}>
                {name}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              {lastTableHead}
            </th>
          </tr>
        </thead>

        <tbody>
          {tableBody?.length > 0 &&
            tableBody.map((bodyData, index) => {
              const bodyHead = Object.keys(bodyData);

              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  {bodyHead.map((head) => (
                    <td className="px-6 py-4" key={head}>
                      {bodyData[head]}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Add
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
