import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/homePage/Home";
import Community from "../pages/navbarPages/Community";
import Blogs from "../pages/navbarPages/Blogs";
import AboutUs from "../pages/navbarPages/AboutUs";
import ContactUs from "../pages/navbarPages/ContactUs";
import AllPackages from "../pages/allPackages/AllPackages";
import PackageByType from "../components/tourTypes/PackageByType";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/allPackages',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/packages/:tourType',
                element: <PackageByType></PackageByType>,
                loader: ({params}) => fetch (`http://localhost:5000/packages/${params.tourType}`)
            }
        ],
    },
]);