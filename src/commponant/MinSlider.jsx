
import React from 'react'
import minSlider from '../assets/images/41nN4nvKaAL._AC_SY200_.jpg'
import min1Slider from '../assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
import min2Slider from '../assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import min3Slider from '../assets/images/gold.jpg'
import min4Slider from '../assets/images/61cSNgtEISL._AC_SY200_.jpg'
import Slider from "react-slick";

export default function MinSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

return (
    <>
<div className="row flex flex-wrap justify-center">
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <Slider {...settings}>
        <img className='w-full' src={minSlider}  />
        <img className='w-full' src={min4Slider}  />
        <img className='w-full' src={min3Slider}  />
    </Slider>
    </div>
<div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <img src={min2Slider} className='w-full'  />
    <img src={min1Slider} className='w-full'  />
</div>
</div>
    </>
)
}
