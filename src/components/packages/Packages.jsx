import { useEffect } from "react";
import { useState } from "react";
import PackagesCard from "./PackagesCard";
import { Link } from "react-router-dom";


const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://tour-titan-server.vercel.app/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])


    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            {
                    packages?.slice(0, 4).map(tourPackage => <PackagesCard key={tourPackage._id}
                        tourPackage={tourPackage}
                        ></PackagesCard>)
                }
        </div>
        <div>
            <Link to='/allPackages'><button className='bg-[#ffb229] text-sm text-white font-bold px-4 py-3 rounded-md mt-6 hover:bg-white hover:text-[#ffb229]'>All Packages</button></Link>
        </div>
        </div>
    );
};

export default Packages;