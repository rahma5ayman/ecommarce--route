import { useQuery } from '@tanstack/react-query';
import React from 'react'
import {  getCardApi ,deleteItem , updateItem, clearCart } from '../Apis/Card';
import { PropagateLoader } from 'react-spinners';
import useMutationCart from '../Hoks/useMutationCart';
import { Link } from 'react-router-dom';

export default function Card() {

  let {isLoading , error , isError , data} =useQuery({
    queryKey:["getcart"], 
    queryFn:getCardApi
  })

  let {mutate : deletemutate } = useMutationCart(deleteItem)
  let {mutate : updatemutate } = useMutationCart(updateItem)
  let {mutate : clearmutate , status} = useMutationCart(clearCart)

  if (status == 'success') {
    console.log('done clear');
  }
  if (status == 'error') {
    console.log('error');
  }

    console.log(data?.data.numOfCartItems);
    console.log(data?.data?.data);

  if (isLoading) {
    return  <div className='w-full flex justify-center items-center py-3'>
        <PropagateLoader/>
        </div>
    }

    if (isError) {
      return (
        <div className=" bg-slate-100 my-40  p-5 w-full">
          <h2 className="py-4 fs-2 fw-medium">Cart Shope</h2>
          <h2 className="py-4 fs-2 fw-medium">your cart is empty</h2>
        </div>
      );

      }

  return (
    <>

<div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
<div className="block md:flex items-center justify-between py-3 mx-10">
  <h2 className='py-6 md:py-0'>Cart Shop</h2>
  <Link to={`/detealischeck?cartId=${data?.data?.data._id}`} className='link' variant="primary my-6">Check Out</Link>
</div>

<div className="block md:flex items-center justify-between py-3 mx-10">
<h5 className='py-3 pr-20 fs-5 fw-medium'>total price: <span>{data?.data?.data.totalCartPrice}</span></h5>
<h5 className='py-3 pr-20 fs-5 fw-medium'>total number of items: <span>{data?.data.numOfCartItems}</span></h5>
</div>

  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className=" hidden lg:table-header-group text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action 
        </th>
      </tr>
    </thead>

    <tbody>
    {data?.data?.data?.products.map((ele)=>
        <tr key={ele.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 block lg:table-cell">
                    <img src={ele.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 block lg:table-cell py-4 font-semibold text-gray-900 dark:text-white">
                  {ele.product.title}
                  </td>
                  <td className="px-6 block lg:table-cell py-4">
                    <div className="flex items-center">
                      <button onClick={()=> {
                        {ele?.count == 1 ? deletemutate(ele?.product?._id) : 
                          updatemutate({
                            id: ele?.product?._id , 
                            count: ele?.count ? ele?.count-1 : ele.count
                          })}}
                        }
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span>{ele?.count}</span>
                      </div>
                      <button onClick={()=> {updatemutate({
                        id: ele?.product?._id , 
                        count: ele?.count+1
                      })}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 block lg:table-cell py-4 font-semibold text-gray-900 dark:text-white">
                    {ele?.price} EGP
                  </td>
                  <td className="px-6  block lg:table-cell">
                    <button onClick={()=> {deletemutate(ele?.product?._id)}}   href="#" 
                    className="font-medium text-red-600 dark:text-red-500 my-4 lg:my-0">
                      Remove
                    </button>
                    <i className="fa-solid fa-trash text-red-900 mx-2 "></i>
                  </td>
        </tr>
    )}

    </tbody>
  </table>
  <div className="text-center">
  <button onClick={()=>{clearmutate()}} type="button" class=" text-green-700 my-7 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
    Clear Your Cart
  </button>

  </div>
</div>
    </>
  )
}



