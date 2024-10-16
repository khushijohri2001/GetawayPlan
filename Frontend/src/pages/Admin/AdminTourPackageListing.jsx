import React from 'react'
import ListingTable from '../../components/Admin/ListingTable'
import { Link } from 'react-router-dom'

const AdminTourPackageListing = () => {
    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold'>Tour Package List</h3>
                <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'><Link to="/admin/tour-package/add-tour-package">Add Tour Package</Link></button>
            </div>

            <ListingTable />

        </div>
    )
}

export default AdminTourPackageListing