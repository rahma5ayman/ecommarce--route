import React from 'react'
import notfound from '../assets/images/page-found-concept-illustration_114360-1869.avif'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
    <>
    <div className='flex justify-center items-center'>
      <img width={400} src={notfound} alt="not found" />
    </div>
   <div className="text-center">
   <Link type="button" className=" text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700">
    Back to Home
    </Link>
   </div>
    </>
  )
}
