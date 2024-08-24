import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {PropagateLoader} from 'react-spinners'
import React, { useEffect } from 'react'

export default function Brands() {

  useEffect(() => {
    document.title = 'Brands Page';
  }, []);

function getBrands() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}
  let  {data , isError , error , isLoading} = useQuery({
    queryKey:['gerprand'],
    queryFn:getBrands,
    select:(data)=>data?.data?.data
})


if (isLoading) {
  return  <div className='w-full flex justify-center items-center py-3'>
      <PropagateLoader  />
      </div>
  }

  if (isError) {
      return  <div className='w-full flex justify-center items-center py-3'>
          {error}
          </div>
      }

  return (
    <div className='row pt-0'>
      <h1 className='text-center pb-4 '>All Brands</h1>
      {data.map((brand)=>
        <div key={brand?._id} className='p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 '>
      <div className='brand'>
        <div className='p-3'>
          <img src={brand?.image} alt={brand.name} />
          <p className='text-center'>{brand?.name}</p>
        </div>
      </div>
        </div>
      )}
    </div>
  )
}
