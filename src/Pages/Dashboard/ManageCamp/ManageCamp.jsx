import useCamp from './../../../assets/Hooks/useCamp';
import useAxiosSecure from './../../../assets/Hooks/useAxiosSecure';
import  Swal  from 'sweetalert2';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageCamp = () => {
    const [joincamp,refetch]=useCamp();
    const totalFees= joincamp.reduce((total,item)=>total + item.campFees,0);
    const axiosSecure = useAxiosSecure();
    
    const handleUpdate = user =>{
      axiosSecure.put(`/joincamp/organizer/${user?._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Organizer Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
  }


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
        <div className="flex justify-evenly">
        <h2 className="text-3xl ">Manage Profile:{joincamp.length}</h2>
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
      <th>Name</th>
      <th>Fees</th>
      <th>Update</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      joincamp.map((item,index)=>   <tr key={item._id}>
          <th>{index + 1}</th>
          <td><img className='w-[60px] h-[60px] rounded-lg' src={item.image} alt="" /></td>
          <td>{item.campName}</td>
          <td>{item.campFees}</td>
          <td>
        <Link to={`/update/${item.id}`}>
        <button
            onClick={()=>handleUpdate(item._id)}
            className="btn bg-orange-400 btn-lg">
             <FaUsers className="text-white text-2xl"></FaUsers>
              </button>
        </Link>
          </td>
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
    );
};

export default ManageCamp;