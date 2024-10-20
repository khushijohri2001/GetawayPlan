import { Link } from "react-router-dom"
import { BookingSvg, CategorySvg, DashboardSvg, DestinationSvg, LoginSvg, Logout, SignUp, TourPackageSvg, UserSvg } from "../../assets/svgs"
import { useDispatch } from "react-redux"
import {  logoutUser } from "../../redux/slices/userSlice";

const SideNav = () => {
    const dispatch = useDispatch();
    
    return (
        <aside id="default-sidebar" className="z-40 w-64 py-4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 bg-gray-50">
                <div className="flex justify-between pb-5">
                    <h2 className="px-4 font-bold text-cyan-800 text-xl pb-6">I am Admin</h2>
                </div>

                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/admin">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <DashboardSvg />
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/category">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <CategorySvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/destination">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <DestinationSvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Destination</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/tour-package">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <TourPackageSvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Tour Packages</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <UserSvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/booking">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <BookingSvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/login">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <LoginSvg />
                                <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/signup">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <SignUp />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => dispatch(logoutUser())}>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <Logout />
                            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}



export default SideNav