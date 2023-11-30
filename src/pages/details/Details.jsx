import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <DetailsCard details={details}></DetailsCard>
        </div>
    );
};

export default Details;