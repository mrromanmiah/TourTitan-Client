

const UserProfileDetails = ({userProfile}) => {
    const { email, name, photoURL, role } = userProfile || {};
    return (
        <div>
            
            <div className="text-center space-y-4">
                <img className="w-1/6 rounded-full flex justify-center mx-auto mb-4" src={photoURL} alt="" />
                <div className="space-y-2">
                <h1 className="text-3xl font-black text-[#29b3ff]">{name}</h1>
                <h4 className="font-bold">{email}</h4>
                <p>Role: <span className="font-bold">{role}</span></p>
                </div>
                
            </div>
        </div>
    );
};

export default UserProfileDetails;