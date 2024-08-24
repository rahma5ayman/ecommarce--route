
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {PropagateLoader} from 'react-spinners'
import React, { useEffect } from 'react'

export default function Brands() {

  useEffect(() => {
    document.title = 'Categores Page';
  }, []);

function getCategories() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
  let  {data , isError , error , isLoading} = useQuery({
    queryKey:['getcategories'],
    queryFn:getCategories,
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
    <div className='row pt-0 categoriess'>
      {data.map((categories)=>
        <div key={categories?._id} className='p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 '>
      <div className='categories'>
        <div className='p-3'>
          <img className='h-60 w-full' src={categories?.image} alt={categories.name} />
          <p className='text-center py-2'>{categories?.name}</p>
        </div>
      </div>
        </div>
      )}
    </div>
  )
}
