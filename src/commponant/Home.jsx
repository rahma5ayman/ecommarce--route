// import React, {  useEffect } from 'react'

// import RecentProduct from './RecentProduct';
// import CategoresSlider from './CategoresSlider';
// import MinSlider from './MinSlider';

// export default function Home() {

//   useEffect(() => {
//     document.title = 'Home Page';
//   }, []);


//   return (
//     <>
//     <MinSlider></MinSlider>
//     <CategoresSlider></CategoresSlider>
//     <RecentProduct/>
//     </>
//   )
// }


import React, { useEffect } from 'react';
import RecentProduct from './RecentProduct';
import CategoresSlider from './CategoresSlider';
import MinSlider from './MinSlider';

export default function Home({ onAddToFavorites }) {  // تمرير onAddToFavorites كـ props

  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <>
      <MinSlider />
      <CategoresSlider />
      <RecentProduct onAddToFavorites={onAddToFavorites} /> {/* تمرير onAddToFavorites للـ RecentProduct */}
    </>
  );
}