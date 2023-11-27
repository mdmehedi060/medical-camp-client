import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimoniles = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/testimonile')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='my-20 bg-gray-200 shadow-lg'>
               <SectionTitle 
            heading={"Testimonials"} 
            subHeading={"What Our Clients Say"}
            ></SectionTitle>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
        reviews?.map(review=> <SwiperSlide key={review._id}>
              <div  className="flex flex-col items-center my-16 mx-24">
              <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    />
    <FaQuoteLeft className="w-20 h-20"></FaQuoteLeft>
        <p>{review.details}</p>
        <h3 className="text-2xl text-orange-400">{review.name}</h3>
       </div>
        </SwiperSlide>)
       }
     
      </Swiper>
        </div>
    );
};

export default Testimoniles;