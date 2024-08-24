import axios from 'axios';
import React, { useEffect } from 'react'
import  { useState  } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import addtoCardApi from '../Apis/Card';

import useMutationCart from '../Hoks/useMutationCart';
import { toast } from 'react-toastify';

export default function ProductDeatils() {

  let {mutate:addmutate,status,data}=useMutationCart(addtoCardApi)

if (status == 'success') {
  toast.success(data?.data?.message)
}
let {id} =useParams();

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const [ProductDeatils, setProductDeatils] = useState(null)

function getProductDeatils(id) {
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then(({data})=>{
    setProductDeatils(data.data);
  })
  .catch(()=>{
console.log();
  })
}

useEffect(()=>{
  getProductDeatils(id);
},[])

  return <>
  <div className="row ">
    <div className="w-full md:w-1/2 lg:w-1/3 ">
    <Slider {...settings}>
      {ProductDeatils?.images.map((src)=> 
        <img key={id} className='p-7' src={src} alt={ProductDeatils?.title} />
      )}
    </Slider>
      
    </div>

    <div className="my-5 w-full md:w-1/2 lg:w-2/3">
      <h1 className='text-2xl md:text-3xl lg:text-4xl py-3 text-gray-900'>{ProductDeatils?.title}</h1>
      <p >{ProductDeatils?.description}</p>
      <div className="flex justify-between items-center">
                <span className='py-4'>{ProductDeatils?.price}EGP</span>
                <span>{ProductDeatils?.ratingsAverage} <i className='fas fa-star text-yellow-300'></i></span>
            </div>
            <Button onClick={()=>{addmutate(ProductDeatils?.id)}}  className='w-full' variant="success">Add to Card</Button>
    </div>
  </div>
  
  </>
}
