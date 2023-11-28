
import  { Link, useLoaderData }  from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useCamp from './../../assets/Hooks/useCamp';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../assets/Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from './../../assets/Hooks/useAxiosSecure';


const CampDetails = () => {
    const details=useLoaderData();
    console.log(details);
    const {_id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,targetAudience,comprehensiveDescription}= details;
    const {user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();
    const [refatch]=useCamp();


    const handelJoinCamp = () => {
        if(user && user.email){
          // sent cart item to the database
    
    const campItem={
    campId:_id,
    email: user.email,
    campName,
    image,
    campFees,
    scheduledDateTime,
    venueLocation,
    specializedServices,
    healthcareProfessionals,
    targetAudience,
    comprehensiveDescription
    }
    axiosSecure.post('/joincamp',campItem)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${campName} added to your camp`,
          showConfirmButton: false,
          timer: 1500
        });
        // refatch the card update the item count
        refatch();
      }
    })
        }
        else{
          Swal.fire({
            title: "You are not Login",
            text: "Please Login to add to the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!"
          }).then((result) => {
            if (result.isConfirmed) {
            //  send to the navigate
            navigate('/login',{state:{from:location}})
            }
          });
        }
      };
   
   
   
   
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
<Link >
<button onClick={handelJoinCamp} className="btn btn-outline w-3/4 mb-4 my-4 ml-12 border-0 border-b-4 flex items-center
             text-green-400 mx-auto">Join Camp</button>
</Link>
  
    
 
</div> 
        </div>
           </div>
        </div>
    );
};

export default CampDetails;