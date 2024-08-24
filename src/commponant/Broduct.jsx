import React from 'react'
import RecentProduct from './RecentProduct'
import  { useEffect } from 'react'
export default function Broduct() {

  useEffect(() => {
    document.title = 'Broduct Page';
  }, []);

  return (
    <RecentProduct></RecentProduct>
  )
}
