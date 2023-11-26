import { Link } from "react-router-dom";


const CampsCard = ({camp}) => {
const {id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,targetAudience}= camp;
    return (
       

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="w-full h-[200px]" src={image} alt="camp" />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{campName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{specializedServices}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{healthcareProfessionals}</p>
       <div className="gap-4 flex">
        <a href="">$ {campFees}</a>
        <a href="">{scheduledDateTime}</a>
       </div>
       <div className="flex">
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