import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center mx-auto text-[#ffb229]">Loading...</span>
    }

    if (user && isAdmin) {
        return children;
    }

    return Navigate(location?.state ? location.state : '/')

};

export default AdminRoute;