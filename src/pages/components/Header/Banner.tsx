import React from "react";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../images/slider/sliderImg_1.jpg";
import slider2 from "../../../images/slider/sliderImg_2.jpg";
import slider3 from "../../../images/slider/sliderImg_3.jpg";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <Image className="max-w-[100%] object-cover" src={slider1} alt="slider1" />
        </div>
        <div>
          <Image className="max-w-[100%] object-cover" src={slider2} alt="slider2" />
        </div>
        <div>
          <Image className="max-w-[100%] object-cover" src={slider3} alt="slider3" />
        </div>
       

      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-200 to-transparent absolute bottom-0 z-5"></div>
    </div>
  );
};

export default Banner;
