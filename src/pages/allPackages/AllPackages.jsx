import { useEffect } from "react";
import { useState } from "react";
import AllPackageCard from "./AllPackageCard";



const AllPackages = () => {
    const [allPackages, setAllPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPackages')
        .then(res => res.json())
        .then(data => setAllPackages(data))
    },[])
    return (
        <div className='lg:mx-40 md:mx-10 mx-5 mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Explore Beautiful Bangladesh</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Our All Packages</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            {
                    allPackages?.map(allPackage => <AllPackageCard key={allPackage._id}
                        allPackage={allPackage}></AllPackageCard>)
                }
        </div>
        </div>
    );
};

export default AllPackages;