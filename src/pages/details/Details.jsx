import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { useState } from "react";
import { useEffect } from "react";


const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    console.log(id);

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const guideUsers = data.filter(user => user.role === 'guide');
                console.log(guideUsers);
                setGuides(guideUsers);
            });
    }, []);




    return (
        <div>
            <DetailsCard details={details} filteredData={guides}></DetailsCard> <div></div>
        </div>
    );
};

export default Details;