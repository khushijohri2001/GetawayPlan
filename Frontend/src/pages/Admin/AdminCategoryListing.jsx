import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListingTable from '../../components/Admin/ListingTable'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from '../../redux/slices/categorySlice';

const AdminCategoryListing = () => {
    const { allCategoryData } = useSelector((store) => store.category);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [])

    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold'>Category List</h3>
                <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'><Link to="/admin/category/add-category">Add Category</Link></button>
            </div>

            <ListingTable tableHead={["_id", "name", "destinations"]} lastTableHead="Add Destination" data={allCategoryData} obj={{ _id: 1, name: 1, destinations: 1 }} />
        </div>
    )
}

export default AdminCategoryListing