import { Link } from "react-router-dom";


const TourTypeCard = ({tourTypeName, icon}) => {
    const { tourType } = tourTypeName || {};
    return (
        <Link to= {`/packages/${tourType}`} >
        <div className="border-2 rounded-3xl text-center p-4 space-y-2">
            <div className="text-4xl text-[#29b3ff] flex justify-center hover:text-[#ffb229]">
            {icon}
            </div>
            <div className="font-light text-[#ffb229] text-center hover:text-[#29b3ff]">
            <h3>{tourType}</h3>
            </div>
        </div>
        </Link>
    );
};

export default TourTypeCard;