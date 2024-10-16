import React from 'react'
import { Link } from 'react-router-dom'
import ListingTable from '../../components/Admin/ListingTable'

const AdminDestinationListing = () => {
  return (
    <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold'>Destination List</h3>
                <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'><Link to="/admin/destination/add-destination">Add Destination</Link></button>
            </div>

            <ListingTable/>

        </div>
  )
}

export default AdminDestinationListing