
import { useLoaderData } from 'react-router-dom';
import  Swal  from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Update = () => {
    const update = useLoaderData();
    console.log(update);
    const { _id,title,category,shortdiscription,longdiscription,photo } = update;

    const handleUpdateBlog=event=>{
        event.preventDefault();
    
        const form=event.target;
    
        const title= form.title.value;
    const category= form.category.value;
    const shortdiscription= form.shortdiscription.value;
    const longdiscription= form. longdiscription.value;
    const photo= form.photo.value;
   const updateCamp={title,category,shortdiscription,longdiscription,photo}
   console.log(updateCamp);
    
    //    send data to the server
    fetch(`http://localhost:5000/addcamp/${_id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updateCamp)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            title: "Good job!",
            text: "Blog Update Successfully!",
            icon: "success"
          });
        }
    })
    
    }
    return (
       <div className='my-8'>
        <SectionTitle heading={"Update Camp"} subHeading={"Please update This camp"}></SectionTitle>
         <div className="bg-[#F4F3F0] p-24 mt-6 mb-8">
        
        <form onSubmit={handleUpdateBlog}>
          {/* form name & quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <label className="input-group ">
                <input
                  name="title"
                  type="text"
                  defaultValue={title}
                  placeholder="Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  name="category"
                  type="text"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supllier & test row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Discription</span>
              </label>
              <label className="input-group ">
                <input
                  name="shortdiscription"
                  type="text"
                  defaultValue={shortdiscription}
                  placeholder="Short Discription"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Long Discription</span>
              </label>
              <label className="input-group">
                <input
                  name="longdiscription"
                  type="text"
                  defaultValue={longdiscription}
                  placeholder="Long Discription"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
         
          {/* form photo row */}
          <div className="mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group ">
                <input
                  name="photo"
                  type="text"
                  defaultValue={photo}
                  placeholder="Photo RRL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
         
          </div>
          
          <input className="btn btn-block bg-orange-400 text-white" type="submit" value="Update Blog"  />
        </form>
      </div>
       </div>
    );
};

export default Update;








