import { useLoaderData, useParams } from "react-router-dom";
import UserProfileDetails from "./UserProfileDetails";


const UserProfile = () => {
    const userProfile = useLoaderData()
    const {email} = useParams()
    console.log(email);
    return (
        <div className='mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Information As A Tourist</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">My Profile</h1>
            </div>
            <UserProfileDetails userProfile={userProfile}></UserProfileDetails>
        </div>
    );
};

export default UserProfile;