
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import useCamp from './../../../assets/Hooks/useCamp';
import useAxiosSecure from './../../../assets/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const ManageRegisteredCamp = () => {
    const [addcamp,refetch]=useCamp();
    const totalFees= addcamp.reduce((total,item)=>total + item.campFees,0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
      
              axiosSecure.delete(`/joincamp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
      }

    return (
        <div>
           <SectionTitle heading={" Manage Registered Camp"} subHeading={"Manage Your Registered Camp"}></SectionTitle>
           <div>
        <div className="flex justify-evenly">
        <h2 className="text-3xl ">Manage Profile:{addcamp.length}</h2>
        <h2 className="text-3xl ">Total Manage Fees: {totalFees}</h2>
     
        </div>
        <div className="overflow-x-auto mt-8">
<table className="table w-full">
  {/* head */}
  <thead>
    <tr className="text-xl font-bold text-black">
      <th>
      <p>No.</p>
      </th>
      <th>Image</th>
      <th>Camp Name</th>
      <th>Fees</th>
      <th>Venue</th>
      <th>Date and Time</th>
      <th>Payment Status</th>
      <th>Confirmation Status</th>
      <th>Action</th>
       
    </tr>
  </thead>
  <tbody>
    {
      addcamp.map((item,index)=>   <tr key={item._id}>
          <th>{index + 1}</th>
          <td><img className='w-[60px] h-[60px] rounded-lg' src={item.image} alt="" /></td>
          <td>{item.campName}</td>
          <td>{item.campFees}</td>
          <td>{item.venueLocation}</td>
          <td>{item.scheduledDateTime}</td>
          <td><p>Paid</p></td>
          <td><p>Joining</p> </td>
          <td>
          <button
            onClick={()=>handleDelete(item._id)}
            className="btn btn-ghost btn-lg">
             <FaTrashAlt className="text-red-600"></FaTrashAlt>
              </button>
          </td>
        </tr>)
    }
 
 
  </tbody>

  
</table>
</div>
      </div>
        </div>
    );
};

export default ManageRegisteredCamp;