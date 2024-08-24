import React, { useState } from 'react'
import  { useEffect  } from 'react'
import axios from 'axios';
import Slider from "react-slick";

export default function CategoresSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768, 
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576, 
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 400, 
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };

    const [categories,setCategores ] = useState([])

    function getCategores() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>{
        setCategores(data.data);
    })
    .catch(()=>{
    console.log();
    })
    }
    
    useEffect(()=>{
        getCategores();
    },[])
return (
    <>
<div className=''>
<Slider {...settings}>
        {categories.map((category,id)=>
            <div key={id}>
                <img className='img-categoris w-full object-cover'  src={category.image} alt={category.name} />
                <h3 className='h-category'>{category.name}</h3>
            </div>
        )}
    </Slider>
</div>
    </>
)
}
