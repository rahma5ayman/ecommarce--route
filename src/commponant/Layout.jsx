import React from 'react'
import { Outlet } from 'react-router-dom'
import ANavbar from './Navbar'

export default function Layout() {
  return (
    <>
    <ANavbar></ANavbar>
    <div className='container  my-6 py-6'>
      <Outlet></Outlet>
    </div>
    </>
  )
}
