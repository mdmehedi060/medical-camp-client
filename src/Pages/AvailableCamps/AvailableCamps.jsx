import { useLoaderData } from "react-router-dom";
import AvailableCard from "./AvailableCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";



const AvailableCamps = () => {
    const camps=useLoaderData();
    console.log(camps);
   
    return (
        <div className="my-6">
            <SectionTitle 
            heading={"Available Camps"} 
            subHeading={"Check it out"}
            ></SectionTitle>
           <div  className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
           {
                camps?.map(camp=><AvailableCard key={camp._id}camp={camp}></AvailableCard>)
            }
           </div>
        </div>
    );
};

export default AvailableCamps;