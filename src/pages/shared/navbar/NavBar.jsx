import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (


        <Navbar fluid rounded className="lg:px-16 md:px-5 px-5 py-5 relative z-10 bg-transparent">
            <Navbar.Brand href="/">
                <img src="https://i.ibb.co/0CqrHSh/Asset-2.png" className="mr-3 h-10" alt="TourTitan Logo" />
                <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white"><span className='text-[#ffb229]'>Tour</span>Titan</span>
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
                
                {
                    user? <div className='flex gap-2'>
                        <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={user?.photoURL} rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm font-bold">{user?.displayName}</span>
                        <span className="block truncate text-xs font-medium">{user?.email}</span>
                    </Dropdown.Header>
                    <NavLink to='/dashboard/userProfile'><Dropdown.Item>Dashboard</Dropdown.Item></NavLink>
                    <Dropdown.Item>Offers</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogOut} className='text-red-600 font-bold'>Sign Out</Dropdown.Item>
                </Dropdown>
                
                
                <Navbar.Toggle />
                    </div> : <Link to='/login'><button className='bg-[#ffb229] text-sm text-white font-bold px-3 py-2 rounded-md hover:bg-white hover:text-[#ffb229]'>Login</button></Link>
                }
                
                
            </div> 
            
            <Navbar.Collapse>
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229] font-black" : "hover:border-b-2 hover:border-[#ffb229] font-black"
                }><Navbar.Link>Home</Navbar.Link></NavLink>
                <NavLink to='/community' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229] font-black" : "hover:border-b-2 hover:border-[#ffb229] font-black"
                }><Navbar.Link>Community</Navbar.Link></NavLink>
                <NavLink to='/blogs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229] font-black" : "hover:border-b-2 hover:border-[#ffb229] font-black"
                }><Navbar.Link>Blogs</Navbar.Link></NavLink>
                <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229] font-black" : "hover:border-b-2 hover:border-[#ffb229] font-black"
                }><Navbar.Link>About Us</Navbar.Link></NavLink>
                <NavLink to='/contactUs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229] font-black" : "hover:border-b-2 hover:border-[#ffb229] font-black"
                }><Navbar.Link>Contact Us</Navbar.Link></NavLink>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;