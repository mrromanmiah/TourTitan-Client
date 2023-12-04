import { useLoaderData, useParams } from "react-router-dom";
import AdminProfileDetails from "./AdminProfileDetails";



const AdminProfile = () => {
    const adminProfile = useLoaderData()
    const {email} = useParams()
    console.log(email);
    return (
        <div className='mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Information As An Admin</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">My Profile</h1>
            </div>          
            <AdminProfileDetails adminProfile={adminProfile}></AdminProfileDetails>
        </div>
    );
};

export default AdminProfile;