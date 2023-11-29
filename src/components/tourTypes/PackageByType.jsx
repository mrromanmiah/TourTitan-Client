import { useLoaderData, useParams } from "react-router-dom";
import PackageByTypeCard from "./PackageByTypeCard";



const PackageByType = () => {


    const packagesByType = useLoaderData()

    const { tourType } = useParams()



    return (
        <div className="lg:mx-40 md:mx-10 mx-5 mb-20">
            <div className="text-center my-10">
                <p className="font-medium">See Individual Type of Packages </p>
                <h1 className="text-[#ffb229] font-bold text-3xl">{tourType}</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    packagesByType?.map(packageByType => <PackageByTypeCard key={packageByType._id}
                        packageByType={packageByType} ></PackageByTypeCard>)
                }
            </div>
        </div>
    );
};

export default PackageByType;