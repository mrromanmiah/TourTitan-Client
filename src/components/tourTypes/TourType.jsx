import { useEffect } from "react";
import { useState } from "react";
import TourTypeCard from "./TourtypeCard";


import { MdForest } from "react-icons/md";
import { GiIsland, GiTigerHead } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6";
import { FaMosque, FaUmbrellaBeach } from "react-icons/fa";



const TourType = () => {

    const [tourTypes, setTourTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tourType')
            .then(res => res.json())
            .then(data => setTourTypes(data))
    }, [])


    const iconMapping = {
        Nature: <MdForest />,
        Island: <GiIsland />,
        Adventure: <FaPersonHiking />,
        Wildlife: <GiTigerHead />,
        Cultural: <FaMosque />,
        Beach: <FaUmbrellaBeach />

    };



    return (
        <div className="bg-[url(https://i.ibb.co/d2k9qC4/Gokul-Medh-Bogra-September-2016-10-Customv2.jpg)] bg-cover bg-no-repeat lg:py-20 md:py-10 py-5 lg:space-y-20 md:space-y-14 space-y-10">
            <div className="text-center">
                <p className="font-medium text-white">Types of Our Packages</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Tour Types</h1>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 lg:px-40 md:px-10 px-5 ">
                {
                    tourTypes?.map(tourTypeName => <TourTypeCard key={tourTypeName._id}
                        tourTypeName={tourTypeName} icon={iconMapping[tourTypeName.tourType]}></TourTypeCard>)
                }
            </div>

        </div>
    );
};

export default TourType;