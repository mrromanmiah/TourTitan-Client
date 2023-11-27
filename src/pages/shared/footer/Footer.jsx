import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="divide-y bg-black text-white">
            <div className="lg:px-20 md:px-10 px-5 container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a href="/" className="flex items-center">
                        <img src="https://i.ibb.co/0CqrHSh/Asset-2.png" className="h-12 mr-3" alt="TourTitan Logo" />
                        <div>
                            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-[#ffb229]'>Tour</span>Titan</h1>
                            <p className='text-xs tracking-wider text-gray-400 dark:text-gray-400'>GUIDING YOUR MEMORIES</p>
                        </div>
                    </a>
                    <p className="text-xs font-light mt-4 lg:w-64">Unlock the door to wanderlust wonders. Guided by experts, embark on unforgettable journeys that redefine exploration at its best.</p>
                    <h3 className="mt-4 mb-2 font-semibold text-[#ffb229]">Social Media</h3>
                    <div className="flex gap-2">
                        <button className="rounded-lg hover:bg-[#ffb229] p-2 hover:text-white border border-[#ffb229] text-lg"><FaFacebookF /></button>
                        <button className="rounded-lg hover:bg-[#ffb229] p-2 hover:text-white border border-[#ffb229] text-lg"><FaInstagram/></button>
                        <button className="rounded-lg hover:bg-[#ffb229] p-2 hover:text-white border border-[#ffb229] text-lg"><FaXTwitter /></button>
                        <button className="rounded-lg hover:bg-[#ffb229] p-2 hover:text-white border border-[#ffb229] text-lg"><FaLinkedinIn/></button>
                    </div>
                </div>


                <div className="grid lg:grid-cols-4 md:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3 grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#ffb229]">About Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Our Team</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Pricing Plan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#ffb229]">Useful Information</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Cost Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#ffb229]">Additional Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Services</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Our Projects</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#ffb229]" rel="noopener noreferrer" href="#">Work Process</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">

                        <div className="flex flex-col justify-start">
                            <h4 className="font-semibold text-[#ffb229]">Download APP</h4>
                            <img className="w-28" src="https://i.ibb.co/z4qBFWY/pngwing-com-copy.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-20 md:px-10 px-5  flex justify-between py-6 lg:gap-0 md:gap-0 gap-6 text-xs dark:text-gray-400 bg-[#1f1606]">
                <p>© 2023 TourTitan. Designed By Roman</p>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-[#ffb229]">Site Index</li>
                    <li className="cursor-pointer hover:text-[#ffb229]">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-[#ffb229]">Terms of Use</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;