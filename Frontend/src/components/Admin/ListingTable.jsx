/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBooking } from "../../redux/slices/bookingSlice";

const ListingTable = ({ tableHead, lastTableHead, data, obj }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/");

  const [tableBody, setTableBody] = useState([]);

  const tableBodyHandler = (arr, dataObj) => {
    const res = arr?.map((el) => {
      let obj = {};

      for (let key in el) {
        if (dataObj[key]) {
          if (
            key === "destination" ||
            (currentPath[2] === "tour-package" && key === "category")
          ) {
            obj[key] = el[key].name;

            continue;
          } else if (key === "category") {
            obj[key] = el[key].map((ele) => ele.name).join(", ");
          } else if (currentPath[2] === "booking") {
            if (key === "user" || key === "tourPackage") {
              obj[key] = el[key].name;
            } else {
              obj[key] = el[key];
            }
          } else {
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
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
          <tr>
            {tableHead.map((name) => (
              <th scope="col" className="px-6 py-3" key={name}>
                {name}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              {lastTableHead && lastTableHead}
            </th>
          </tr>
        </thead>

        <tbody>
          {tableBody?.length > 0 &&
            tableBody.map((bodyData, index) => {
              const bodyHead = Object.keys(bodyData);
              
              return (
                <tr className="bg-white border-b " key={index}>
                  {bodyHead.map((head) => (
                    <td className="px-6 py-4" key={head}>
                      {bodyData[head]}
                    </td>
                  ))}

                  {currentPath[2] === "booking" ? (
                    <td className="px-6 py-4 gap-6 flex " colSpan={2}>
                      <button
                        className="font-medium mr-4 text-green-600  hover:underline"
                        onClick={() =>
                          dispatch(updateBooking({id: bodyData._id, status:"accepted"}))
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="font-medium text-red-600  hover:underline"
                        onClick={() =>
                          dispatch(updateBooking({id: bodyData._id, status:"rejected"}))
                        }
                      >
                        Reject 
                      </button>
                    </td>
                  ) : (
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Add
                      </a>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
