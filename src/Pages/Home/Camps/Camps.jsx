import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';
import CampsCard from "./CampsCard";


const Camps = () => {
    const [camps,setCamps]=useState();
const [isShow,setIsShow]= useState(false)
    useEffect(()=>{
        fetch('https://asaigntment-twelve-server.vercel.app/addcamp')
        .then(res=>res.json())
        .then(data=>setCamps(data))
    },[])
    return (
        <div>
            <SectionTitle 
            heading={"Popular Medical Camps"} 
            subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
                {
                    isShow ? camps?.map(camp=><CampsCard key={camp._id} camp={camp}></CampsCard>)
                    :camps?.slice(0, 6).map(camp=><CampsCard key={camp._id} camp={camp}></CampsCard>)
                }
            </div>
            {
                camps?.length > 4 &&  <button onClick={()=> setIsShow(!isShow)}
                className="px-5 mt-5 bg-green-200 block mx-auto mb-5">
                 See More Blog
               </button>
            }
        </div>
    );
};

export default Camps;



