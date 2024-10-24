import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListingTable from '../../components/Admin/ListingTable'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDestinations } from '../../redux/slices/destinationSlice';

const AdminDestinationListing = () => {
  const { allDestinationData } = useSelector((store) => store.destination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDestinations())
  }, [dispatch])

  return (
    <div className='p-6 w-full'>
      <div className='flex justify-between items-center mb-10'>
        <h3 className='font-semibold'>Destination List</h3>
        <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'>
          <Link to="/admin/destination/add-destination">Add Destination</Link>
        </button>
      </div>

      <ListingTable tableHead = {["_id", "name", "category", "type"]} lastTableHead="Add Tour Packages" data={allDestinationData} obj={{ _id: 1, name: 1, category: 1, type: 1 }} />

    </div>
  )
}

export default AdminDestinationListing