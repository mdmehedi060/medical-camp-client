import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import  Swal  from 'sweetalert2';

const AddCamp = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();

    const form = event.target;

    const campName = form.campName.value;
    const campFees = form.campFees.value;
    const dateTime = form.dateTime.value;
    const venueLocation = form.venueLocation.value;
    const specializedServices = form.specializedServices.value;
    const healthcareProfessionals = form.healthcareProfessionals.value;
    const targetAudience = form.targetAudience.value;
    const comprehensiveDescriptio = form.comprehensiveDescriptio.value;
    const photo = form.photo.value;
    const newCamp = {
        campName,
        campFees,
      dateTime,
      venueLocation,
      photo,
      specializedServices,
      healthcareProfessionals,
      targetAudience,
      comprehensiveDescriptio
    };
    console.log(newCamp);

    //    send data to the server
    fetch("https://asaigntment-twelve-server.vercel.app/addcamp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCamp),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <SectionTitle
        heading="Add An Item"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="bg-[#F4F3F0] p-24 mt-6 mb-8">
    
        <form onSubmit={handleAddBlog}>
          {/* form name & fee row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Camp Name</span>
              </label>
              <label className="input-group ">
                <input
                  name="campName"
                  type="text"
                  placeholder="Title"
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
                  name="campFees"
                  type="text"
                  placeholder="Category"
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
                  name="dateTime"
                  type="text"
                  placeholder="Short Discription"
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
                  name="venueLocation"
                  type="text"
                  placeholder="Long Discription"
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
                  name="specializedServices"
                  type="text"
                  placeholder="Short Discription"
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
                  name="healthcareProfessionals"
                  type="text"
                  placeholder="Long Discription"
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
                  name="targetAudience"
                  type="text"
                  placeholder="Short Discription"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Comprehensive Descriptio</span>
              </label>
              <label className="input-group">
                <input
                  name="comprehensiveDescriptio"
                  type="text"
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

export default AddCamp;









