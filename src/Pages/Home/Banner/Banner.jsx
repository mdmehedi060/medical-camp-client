import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
      
            <Carousel className="text-center mt-6  ">
        <div className="h-[500px]">
            <img src="https://i.ibb.co/DR8cttg/banner-4.jpg" />
        </div >
        <div className="h-[500px]">
            <img  src="https://i.ibb.co/vPbZSpy/banner-5.jpg" />
        </div>
        <div className="h-[500px]">
            <img  src="https://i.ibb.co/zG4cdg8/banner3.jpg" />
        </div>
        <div className="h-[500px]">
            <img  src="https://i.ibb.co/ySKdyQY/banner-6.jpg" />
        </div>
        <div className="h-[500px]">
            <img  src="https://i.ibb.co/9c38QBT/banner8.jpg" />
        </div>
     
    </Carousel>
       
    );
};

export default Banner;








