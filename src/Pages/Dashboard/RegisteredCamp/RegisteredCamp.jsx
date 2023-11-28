import { Link } from "react-router-dom";
import useCamp from "../../../assets/Hooks/useCamp";
import useAxiosSecure from './../../../assets/Hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { FaTrashAlt } from 'react-icons/fa';


const RegisteredCamp = () => {
    
    const [joincamp,refetch]=useCamp();
    const totalFees= joincamp.reduce((total,item)=>total + item.campFees,0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
      
              axiosSecure.delete(`/joincamp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your Camp has been Cancel.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
      }





    return (
        <div>
          <div className="flex justify-between">
          <h2 className="text-3xl">Total Registered Camp: {joincamp.length} </h2> 
          <h2 className="text-3xl">Total Fees:$ {totalFees} </h2> 
          { joincamp.length ?   <Link to='/dashboard/payment'>
       <button  className="btn btn-primary">Pay</button>
       </Link>:
        <button disabled  className="btn btn-primary">Pay</button>
      }
          </div>
          <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="text-xl font-bold text-black">
        <th>
        <p>No.</p>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        joincamp.map((item,index)=> <tr key={item._id}>
            <th>
            {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
              </div>
            </td>
            <td>
              {item.campName}
            </td>
            <td>$ {item.campFees}</td>
            <th>
              <button
              onClick={()=>handleDelete(item._id)}
              className="btn btn-ghost btn-lg">
                <p className="font-bold text-center">Cancel</p>
              
                </button>
            </th>
          </tr>)
      }
     
  
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default RegisteredCamp;