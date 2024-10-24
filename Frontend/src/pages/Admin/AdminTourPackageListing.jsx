import React, { useEffect } from 'react'
import ListingTable from '../../components/Admin/ListingTable'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTourPackages } from '../../redux/slices/tourPackageSlice';

const AdminTourPackageListing = () => {
    const { allTourPackageData } = useSelector((store) => store.tourPackage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTourPackages())
    }, [dispatch])
    

    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold'>Tour Package List</h3>
                <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'><Link to="/admin/tour-package/add-tour-package">Add Tour Package</Link></button>
            </div>

            <ListingTable tableHead = {["_id", "name", "category", "destination", "price"]} data={allTourPackageData} obj={{ _id: 1, name: 1, category: 1, destination: 1, price: 1 }} />

        </div>
    )
}

export default AdminTourPackageListing