import { FaEnvelope, FaHeart, FaInfo, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaHouse, FaNewspaper } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
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
                            <h3 className="text-xl text-[#29b3ff] text-center font-bold">Dashboard</h3>
                            <div className="divider"></div>
                            
                            {/* Sidebar content here */}
                            <li><Link to='/dashboard/userProfile'><FaUser></FaUser> My Profile</Link></li>
                            <li><Link><FaShoppingCart></FaShoppingCart> My Bookings</Link></li>
                            <li><Link><FaHeart></FaHeart> My Wishlist</Link></li>
                            <div className="divider"></div>
                            <li><Link to='/'><FaHouse></FaHouse> Home</Link></li>
                            <li><Link><RiCommunityFill></RiCommunityFill> Community</Link></li>
                            <li><Link><FaNewspaper></FaNewspaper> Blogs</Link></li>
                            <li><Link><FaInfo></FaInfo> About Us</Link></li>
                            <li><Link><FaEnvelope></FaEnvelope> Contact Us</Link></li>
                            
                        </ul>

                    </div>
                </div>

            </div>
            <div className="bg-gray-100 w-full rounded-lg my-4 mr-4 py-4 px-10">
                <Outlet></Outlet>
                <h1>roman</h1>
                <h1>roman</h1>
                <h1>roman</h1>
                <h1>roman</h1>
            </div>
        </div>
    );
};

export default Dashboard;