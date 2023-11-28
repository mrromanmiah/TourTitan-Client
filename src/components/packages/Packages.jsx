import { useEffect } from "react";
import { useState } from "react";
import PackagesCard from "./PackagesCard";


const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])


    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            {
                    packages?.slice(0, 4).map(tourPackage => <PackagesCard key={tourPackage._id}
                        tourPackage={tourPackage}
                        ></PackagesCard>)
                }
        </div>
    );
};

export default Packages;