
import React, { useEffect } from 'react';
import useMutationCart from '../Hoks/useMutationCart';
import addtoCardApi from '../Apis/Card';

export default function Favorites({ favorites }) {
    useEffect(() => {
        document.title = 'Wish List Page';
    }, []);

    const { mutate: addmutate } = useMutationCart(addtoCardApi);

    return (
        <div>
            <h2>Your Favorites</h2>
            {favorites.length > 0 ? (
                favorites.map((product) => (
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 block lg:table-cell">
                      <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                    </td>
                    <td className="px-6 block lg:table-cell py-4 font-semibold text-gray-900 dark:text-white">
                    {product.title}
                    </td>

                    <td className="px-6 block lg:table-cell py-4 font-semibold text-gray-900 dark:text-white">
                      {product.price} EGP
                    </td>
                    <td className="px-6 block lg:table-cell py-4 font-semibold text-gray-900 dark:text-white">
                    <button onClick={() => addmutate(product.id)} className='btn'>Add to Cart</button>
                    </td>
                    <td className="px-6  block lg:table-cell">
                      <button onClick={()=> {deletemutate(product?._id)}}   href="#" 
                      className="font-medium text-red-600 dark:text-red-500 my-4 lg:my-0">
                        Remove
                      </button>
                      <i className="fa-solid fa-trash text-red-900 mx-2 "></i>
                    </td>
          </tr>
                ))
            ) : (
                <p>No favorites yet!</p>
            )}
        </div>
    );
}