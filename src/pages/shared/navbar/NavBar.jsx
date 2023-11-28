import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (


        <Navbar fluid rounded className="lg:px-16 md:px-5 px-5 py-5 relative z-10 bg-transparent">
            <Navbar.Brand href="/">
                <img src="https://i.ibb.co/0CqrHSh/Asset-2.png" className="mr-3 h-10" alt="TourTitan Logo" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"><span className='text-[#ffb229]'>Tour</span>Titan</span>
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Offers</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229]" : "hover:border-b-2 hover:border-[#ffb229]"
                }><Navbar.Link>Home</Navbar.Link></NavLink>
                <NavLink to='/community' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229]" : "hover:border-b-2 hover:border-[#ffb229]"
                }><Navbar.Link>Community</Navbar.Link></NavLink>
                <NavLink to='/blogs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229]" : "hover:border-b-2 hover:border-[#ffb229]"
                }><Navbar.Link>Blogs</Navbar.Link></NavLink>
                <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229]" : "hover:border-b-2 hover:border-[#ffb229]"
                }><Navbar.Link>About Us</Navbar.Link></NavLink>
                <NavLink to='/contactUs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#ffb229]" : "hover:border-b-2 hover:border-[#ffb229]"
                }><Navbar.Link>Contact Us</Navbar.Link></NavLink>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;