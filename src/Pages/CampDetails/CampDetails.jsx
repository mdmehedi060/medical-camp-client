
import  { Link, useLoaderData }  from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';


const CampDetails = () => {
    const details=useLoaderData();
    console.log(details);
    const {_id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,
        targetAudience,comprehensiveDescription}= details;
    return (
        <div className='my-6 '>
           <SectionTitle heading={"Camp Details"} subHeading={"Please Join This Camp"}></SectionTitle>
           <div>
           <div className='mx-auto'>
            <div className="max-w-sm  bg-base-100 my-6  rounded-lg shadow-lg">
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
    <div>
        <p><span className='font-bold'>Description:</span> {comprehensiveDescription}</p>
    </div>
 </div>
<Link to={`/joincamp/${_id}`}>
<button className="btn btn-success w-3/4 my-4 ml-12">Join Camp</button>
</Link>
  
    
 
</div> 
        </div>
           </div>
        </div>
    );
};

export default CampDetails;