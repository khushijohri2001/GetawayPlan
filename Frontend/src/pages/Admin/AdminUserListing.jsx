import { useDispatch, useSelector } from 'react-redux';
import ListingTable from '../../components/Admin/ListingTable'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchAllUsers } from '../../redux/slices/userSlice';

const AdminUserListing = () => {
    const { allUserData } = useSelector((store) => store.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])

    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold'>User List</h3>
                <button className='font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700'><Link to="/admin/tour-package/add-tour-package">Add User</Link></button>
            </div>

            <ListingTable tableHead = {["_id", "name", "email"]} data={allUserData} obj={{ _id: 1, name: 1, email: 1 }} />

        </div>
    )
}

export default AdminUserListing