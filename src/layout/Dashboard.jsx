import { FaEnvelope, FaHeart, FaInfo, FaPlusCircle, FaShoppingCart, FaThList, FaUser, FaUsersCog } from "react-icons/fa";
import { FaHouse, FaNewspaper } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useGuide from "../hooks/useGuide";
import { MdAssignment } from "react-icons/md";
import useAuth from "../hooks/useAuth";



const Dashboard = () => {
const {user} =useAuth()
    const [isAdmin] = useAdmin()
    const [isGuide] = useGuide()

    return (
        <div className="lg:flex md:flex-none flex-none lg:m-0 m-4 gap-4">
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex justify-between items-center">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><GiHamburgerMenu /></label>
                        <div className="flex items-center my-4 mr-4 lg:hidden">
                            <img src="https://i.ibb.co/0CqrHSh/Asset-2.png" className="mr-3 h-6" alt="TourTitan Logo" />
                            <span className="self-center whitespace-nowrap text-xl text-black font-semibold"><span className='text-[#ffb229]'>Tour</span>Titan</span>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu px-8 min-h-full bg-white">
                            <div className="flex items-center my-4">
                                <img src="https://i.ibb.co/0CqrHSh/Asset-2.png" className="mr-3 h-8" alt="TourTitan Logo" />
                                <span className="self-center whitespace-nowrap text-2xl text-black font-semibold"><span className='text-[#ffb229]'>Tour</span>Titan</span>
                            </div>
                            <div className="divider"></div>
                            {isAdmin?(<h3 className="text-xl text-[#29b3ff] text-center font-bold">Admin</h3>):
                            isGuide?(<h3 className="text-xl text-[#29b3ff] text-center font-bold">Tour Guide</h3>):
                            (<h3 className="text-xl text-[#29b3ff] text-center font-bold">Tourist</h3>)
                
                            }
                            <div className="divider"></div>

                            {/* Sidebar content here */}

                            {
                                isAdmin ? (<>
                                    <li><Link to={`/dashboard/adminProfile/${user?.email}`}><FaUser></FaUser> My Profile</Link></li>
                                    <li><Link to='/dashboard/addPackage'><FaPlusCircle></FaPlusCircle> Add Package</Link></li>
                                    <li><Link to='/dashboard/manageUser'><FaUsersCog></FaUsersCog> Manage Users</Link></li>
                                </>) :
                                isGuide ? (<>
                                    <li><Link to='/dashboard/guideProfile'><FaUser></FaUser> My Profile</Link></li>
                                    <li><Link to='/dashboard/assignedTour'><MdAssignment></MdAssignment> My Assigned Tours</Link></li>
                                </>)
                                    :(<>
                                        <li><Link to={`/dashboard/userProfile/${user?.email}`}><FaUser></FaUser> My Profile</Link></li>
                                        <li><Link to='/dashboard/bookings'><FaShoppingCart></FaShoppingCart> My Bookings</Link></li>
                                        <li><Link to='/dashboard/wishlist'><FaHeart></FaHeart> My Wishlist</Link></li></>)
                            }
                            <div className="divider"></div>
                            <li><Link to='/'><FaHouse></FaHouse> Home</Link></li>
                            <li><Link to='/allPackages'><FaThList></FaThList> All Packages</Link></li>
                            <li><Link to='/community'><RiCommunityFill></RiCommunityFill> Community</Link></li>
                            <li><Link to='/blogs'><FaNewspaper></FaNewspaper> Blogs</Link></li>
                            <li><Link to='/aboutUs'><FaInfo></FaInfo> About Us</Link></li>
                            <li><Link to='/contactUs'><FaEnvelope></FaEnvelope> Contact Us</Link></li>

                        </ul>

                    </div>
                </div>

            </div>
            <div className="bg-gray-100 w-full rounded-lg my-4 mr-4 py-4 px-10">
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;