
import {useLoaderData, Link } from 'react-router-dom';


const Details = () => {
   const details =useLoaderData();
   const {id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,targetAudience}= details;
    return (
       <div>
        <h2>Details Page</h2>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className={image} alt="" />
    </a>
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
    </div>
<Link to={`/camp-details/${id}`}>
<button className="btn btn-accent ">Join
Camp Button</button>
</Link>
     
       
    
</div>
       </div>
    );
};

export default Details;