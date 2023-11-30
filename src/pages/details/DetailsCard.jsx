

const DetailsCard = ({details}) => {
    const {tripTitle, gallery} = details || {};
    return (
        <div>
            <h1>{tripTitle}</h1>
<img src={gallery[2]} alt="" />
        </div>
    );
};

export default DetailsCard;