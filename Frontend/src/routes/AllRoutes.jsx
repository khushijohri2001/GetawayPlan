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
import AdminDestinationListing from "../pages/Admin/AdminDestinationListing";
import AdminTourPackageListing from "../pages/Admin/AdminTourPackageListing";
import Wrapper from "../components/Wrapper";
import Destinations from "../pages/Destinations";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper/>,
        children: [
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: ":categoryId",
                        children: [
                            {
                                index: true,
                                element: <Destinations/>,
                            },
                            {
                                path: ":destinationId",
                                element: <TourPackages />
                            }
                        ]

                    },
                    {
                        path: ":destination",
                        children: [
                            {
                                index: true,
                                element: <TourPackages />
                            },
                            {
                                path: ":destination",
                                element: <SingleTourPackage />
                            }
                        ]
                    },
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "contact",
                        element: <Contact />
                    }
                ]
            },
            {
                path: "admin",
                element: <AdminWrapper />,
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />
                    },
                    {
                        path: "category",
                        children: [
                            {
                                index: true,
                                element: <AdminCategoryListing />,
                            },
                            {
                                path: "add-category",
                                element: <AddCategory />
                            },
                        ]
                    },
                    {
                        path: "destination",
                        children: [
                            {
                                index: true,
                                element: <AdminDestinationListing />,
                            },
                            {
                                path: "add-destination",
                                element: <AddDestination />
                            },
                        ]
                    },
                    {
                        path: "tour-package",
                        children: [
                            {
                                index: true,
                                element: <AdminTourPackageListing />,
                            },
                            {
                                path: "add-tour-package",
                                element: <AddTourPackage />
                            }
                        ]
                    },
                ]
            },
            {
                path: "admin/login",
                element: <Login/>
            },
            {
                path: "admin/signup",
                element: <SignUp/>
            },
        ]
    },
    

])