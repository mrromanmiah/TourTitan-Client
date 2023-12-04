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
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Details from "../pages/details/Details";
import Dashboard from "../layout/Dashboard";
import UserProfile from "../pages/dashboard/user/UserProfile";
import Bookings from "../pages/dashboard/user/Bookings";
import Wishlist from "../pages/dashboard/user/Wishlist";
import PrivateRoute from "./PrivateRoute";
import AdminProfile from "../pages/dashboard/admin/AdminProfile";
import AddPackage from "../pages/dashboard/admin/AddPackage";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import GuideProfile from "../pages/dashboard/tourGuide/GuideProfile";
import AssignedTour from "../pages/dashboard/tourGuide/AssignedTour";



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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch (`http://localhost:5000/package/${params.id}`)
              },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/dashboard/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist></Wishlist>
            },

            // Admin Dashboard

            {
                path: '/dashboard/adminProfile/:email',
                element: <AdminProfile></AdminProfile>,
                loader: ({params}) => fetch (`http://localhost:5000/users/${params.email}`)
            },
            {
                path: '/dashboard/addPackage',
                element: <AddPackage></AddPackage>
            },
            {
                path: '/dashboard/manageUser',
                element: <ManageUser></ManageUser>
            },

            // Tour Guide Dashboard

            {
                path: '/dashboard/guideProfile',
                element: <GuideProfile></GuideProfile>
            },
            {
                path: '/dashboard/assignedTour',
                element: <AssignedTour></AssignedTour>
            }
        ]
    }
]);