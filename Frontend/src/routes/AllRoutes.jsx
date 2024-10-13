import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App"
import TourPackages from "../pages/TourPackages";
import SingleTourPackage from "../pages/SingleTourPackage";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/tour-packages",
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
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])