import { useDispatch, useSelector } from "react-redux";
import DashboardCard from "../../components/Admin/DashboardCard"
import { fetchAllBookings } from "../../redux/slices/bookingSlice";
import { useEffect } from "react";
import { fetchAllCategories } from "../../redux/slices/categorySlice";
import { fetchAllDestinations } from "../../redux/slices/destinationSlice";
import { fetchAllTourPackages } from "../../redux/slices/tourPackageSlice";
import { fetchAllUsers } from "../../redux/slices/userSlice";
import { FaUserCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";

const AdminDashboard = () => {
    const { allBookingData } = useSelector((store) => store.booking);
    const { allCategoryData } = useSelector((store) => store.category);
    const { allDestinationData } = useSelector((store) => store.destination);
    const { allTourPackageData } = useSelector((store) => store.tourPackage);
    const { allUserData } = useSelector((store) => store.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBookings());
        dispatch(fetchAllCategories());
        dispatch(fetchAllDestinations());
        dispatch(fetchAllTourPackages());
        dispatch(fetchAllUsers())
    }, []);

    return (
        <div className="flex bg-gradient-to-r from-cyan-500 to-cyan-900 w-full">
            <div className="flex items-center justify-center flex-wrap gap-12 mx-4 my-16">

                <DashboardCard title="Bookings" count={allBookingData && allBookingData.length} bgColor="bg-[#f694c1]" icon={ <BiSolidPurchaseTag className='h-12 w-12 text-pink-600' />} />

                <DashboardCard title="Categories" count={allCategoryData && allCategoryData.length} bgColor="bg-[#a2d2ff]" icon={ <BiSolidCategory className='h-12 w-12 text-sky-600' />} />

                <DashboardCard title="Destinations" count={allDestinationData && allDestinationData.length} bgColor="bg-[#7be0ad]" icon={ <IoLocation  className='h-12 w-12 text-emerald-600' />} />

                <DashboardCard title="Tour Packages" count={allTourPackageData && allTourPackageData.length} bgColor="bg-[#cdb4db]" icon={ <BiWorld className='h-12 w-12 text-fuchsia-700' />} />

                <DashboardCard title="Users" count={allUserData && allUserData.length} bgColor="bg-[#ffd670]" icon={ <FaUserCircle className='h-12 w-12 text-amber-600' />} />
            </div>


        </div>
    )
}

export default AdminDashboard