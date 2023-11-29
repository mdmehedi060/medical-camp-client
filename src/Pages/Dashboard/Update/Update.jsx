
import { useLoaderData } from 'react-router-dom';
import  Swal  from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Update = () => {
    const update = useLoaderData();
    console.log(update);
    const { _id,campName,image,campFees,scheduledDateTime,venueLocation,specializedServices,healthcareProfessionals,targetAudience,comprehensiveDescription } = update;
    


    const handleUpdateCamp=event=>{
      event.preventDefault();

      const form = event.target;
  
      const campName = form.campName.value;
      const campFees = form.campFees.value;
      const scheduledDateTime = form.scheduledDateTime.value;
      const venueLocation = form.venueLocation.value;
      const specializedServices = form.specializedServices.value;
      const healthcareProfessionals = form.healthcareProfessionals.value;
      const targetAudience = form.targetAudience.value;
      const comprehensiveDescription = form.comprehensiveDescription.value;
      const photo = form.photo.value;
      const updateCamp = {
          campName,
          campFees,
        scheduledDateTime,
        venueLocation,
        photo,
        specializedServices,
        healthcareProfessionals,
        targetAudience,
        comprehensiveDescription
      };
      console.log(updateCamp);
    
  

    fetch(`http://localhost:5000/joincamp/${_id}`,{
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
    
        <form onSubmit={handleUpdateCamp}>
          {/* form name & fee row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Camp Name</span>
              </label>
              <label className="input-group ">
                <input
                defaultValue={campName}
                  name="campName"
                  type="text"
                  placeholder="Camp Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Camp Fees</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={campFees}
                  name="campFees"
                  type="text"
                  placeholder="Camp Fees"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Date & Time & Location row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date & Time</span>
              </label>
              <label className="input-group ">
                <input
                defaultValue={scheduledDateTime}
                  name="scheduledDateTime"
                  type="text"
                  placeholder="Date & Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Venue Location</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={venueLocation}
                  name="venueLocation"
                  type="text"
                  placeholder="Venue Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Services & Healthcare Professionals row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Specialized Services</span>
              </label>
              <label className="input-group ">
                <input
                defaultValue={specializedServices}
                  name="specializedServices"
                  type="text"
                  placeholder="Specialized Services"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Healthcare Professionals</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={healthcareProfessionals}
                  name="healthcareProfessionals"
                  type="text"
                  placeholder="Healthcare Professionals"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form targetAudience & Healthcare Professionals row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Target Audience</span>
              </label>
              <label className="input-group ">
                <input
                defaultValue={targetAudience}
                  name="targetAudience"
                  type="text"
                  placeholder="Target Audience"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Comprehensive Description</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={comprehensiveDescription}
                  name="comprehensiveDescription"
                  type="text"
                  placeholder="Comprehensive Description"
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
                defaultValue={image}
                  name="photo"
                  type="text"
                  placeholder="Photo RRL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            className="btn btn-block bg-orange-400 text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
        
       </div>
    );
};

export default Update;








