import { Link } from "react-router-dom"

const Admin = () => {
    return(
        <div className="px-10">
            <h2 className="mb-6 ">Admin Panel</h2>

            <div className="flex flex-col gap-6 w-52">
                <button className="bg-cyan-700 text-white">
                    <Link to="/admin/add-category" >Add New Category</Link>
                    </button>
                <button className="bg-cyan-700 text-white">
                <Link to="/admin/add-location" >Add New Location</Link>
                </button>
            </div>
        </div>
    )
}

export default Admin