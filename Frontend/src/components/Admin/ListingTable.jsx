import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAllCategories } from '../../redux/slices/categorySlice';
import { fetchAllDestinations } from '../../redux/slices/destinationSlice';
import { fetchAllTourPackages } from '../../redux/slices/tourPackageSlice';

let categoryObj = { _id: 1, name: 1, destinations: 1 }
let destinationObj = { _id: 1, name: 1, category: 1, type: 1, tourPackages: 1 }
let tourPackageObj = { _id: 1, name: 1, destination: 1, category: 1, price: 1 }

const ListingTable = () => {
    const [tableHead, setTableHead] = useState([]);
    const [tableBody, setTableBody] = useState([]);
    const [lastTableHead, setLastTableHead] = useState("")

    const location = useLocation();
    const dispatch = useDispatch();

    const { allCategoryData } = useSelector((store) => store.category);
    const { allDestinationData } = useSelector((store) => store.destination);
    const { allTourPackageData } = useSelector((store) => store.tourPackage);

    const pathArray = location.pathname.split("/")
    const currentPath = pathArray[pathArray.length - 1];


    const tableBodyHandler = (arr, dataObj) => {
        const res = arr?.map((el) => {
            let obj = {}

            for (let key in el) {
                if (dataObj[key]) {
                    if(key=="destination"||key=="category"){
                        obj[key]=el[key].name
                        continue
                    }
                    obj[key] = el[key]

                }
            }
            return obj
        })

        return res;
    }

    useEffect(() => {
        if (currentPath === "category") {
            dispatch(fetchAllCategories());

            const tHead = ["_id", "name", "destinations"];
            setTableHead(tHead);
            setLastTableHead("Add Destination")

        } else if (currentPath === "destination") {
            dispatch(fetchAllDestinations())

            const tHead = ["_id", "name", "category", "type", "tourPackages"];
            setTableHead(tHead);
            setLastTableHead("Add Tour Packages")

        } else {
            dispatch(fetchAllTourPackages())

            const tHead = ["_id", "name", "destination", "category", "price"];
            setTableHead(tHead);
        }
    }, [currentPath])


    useEffect(() => {
        if (currentPath === "category") {
            let res = tableBodyHandler(allCategoryData, categoryObj)
            res && setTableBody(res)

        } else if (currentPath === "destination") {
            let res = tableBodyHandler(allDestinationData, destinationObj)
            res && setTableBody(res)

        } else{
            let res = tableBodyHandler(allTourPackageData, tourPackageObj)
            res && setTableBody(res)
            
            
        }
    }, [tableHead, allCategoryData, allDestinationData, allTourPackageData])
    
    console.log(allTourPackageData);

    return (
        <div className="shadow-md border border-cyan-700">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            tableHead.map((name) => (
                                <th scope="col" className="px-6 py-3">
                                    {name}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">
                           {lastTableHead}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tableBody?.length > 0 && tableBody.map((bodyData) => {
                            const bodyHead = Object.keys(bodyData);

                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {
                                        bodyHead.map(head => (
                                            <td className="px-6 py-4">
                                                {bodyData[head]}
                                            </td>
                                        ))
                                    }
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListingTable