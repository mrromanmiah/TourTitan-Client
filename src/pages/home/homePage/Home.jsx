import Banner from "../../../components/banner/Banner";
import TourType from "../../../components/tourTypes/TourType";
import TravelGuide from "./travelGuide/TravelGuide";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
        </div>
    );
};

export default Home;