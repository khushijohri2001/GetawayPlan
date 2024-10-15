import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App"
import TourPackages from "../pages/TourPackages";
import SingleTourPackage from "../pages/SingleTourPackage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AddCategory from "../pages/Admin/AddCategory";
import AddDestination from "../pages/Admin/AddDestination";
import AddTourPackage from "../pages/Admin/AddTourPackage";
import AdminCategoryListing from "../pages/Admin/AdminCategoryListing";
import AdminWrapper from "../pages/Admin/AdminWrapper";

export const AllRoutes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <App/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: "tour-packages",
                        children: [
                            {
                                index: true,
                                element: <TourPackages/>
                            },
                            {
                                path: ":destination",
                                element: <SingleTourPackage/>
                            }
                        ]
                    },
                    {
                        path: "about",
                        element: <About/>
                    },
                    {
                        path: "contact",
                        element: <Contact/>
                    }
                ]
            },
        ]
        
    },
    {
        path: "admin",
        element: <AdminWrapper/>,
        children:[
            {
                index: true,
                element: <AdminDashboard/>
            },
            {
                path: "category",
                element: <AdminCategoryListing/>
            },
            {
                path: "add-category",
                element: <AddCategory/>
            },
            {
                path: "add-destination",
                element: <AddDestination/>
            },
            {
                path: "add-tour-package",
                element: <AddTourPackage/>
            }
        ]
    }
    
])