import { Link } from "react-router-dom";


const CampsCard = ({camp}) => {
const {id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,targetAudience}= camp;
    return (
       

<div className="max-w-sm h-[500px] bg-teal-100   rounded-lg shadow-lg">
<img className="w-full h-[200px]" src={image} alt="camp" />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{campName}</h5>
        </a>
       <div className="font-bold gap-1 my-2">
       <p className="my-2">{specializedServices}</p>
        <p className="">{healthcareProfessionals}</p>
       </div>
       <div className="gap-4 flex font-bold my-2">
        <a href="">$Fees: {campFees}</a>
        <a href="">{scheduledDateTime}</a>
       </div>
       <div className="gap-4 flex font-bold">
        <p>{venueLocation}</p>
        <p>{targetAudience}</p>
       </div>
    </div>
<Link to={`/camp-details/${id}`}>
<button className="btn btn-success w-3/4 my-4 ml-12">Details</button>
</Link>
     
       
    
</div>

    );
};

export default CampsCard;