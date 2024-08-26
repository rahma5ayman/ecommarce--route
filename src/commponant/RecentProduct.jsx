
// import { Link } from 'react-router-dom';
// import { PropagateLoader } from 'react-spinners';
// import useBroudct from '../Hoks/useBroudct';
// import useMutationCart from '../Hoks/useMutationCart';
// import addtoCardApi from '../Apis/Card';
// import { toast } from 'react-toastify';
// import { useState } from 'react';

// export default function RecentProduct() {
//     var { status, mutate: addmutate, data } = useMutationCart(addtoCardApi);
//     if (status === 'success') {
//         toast.success(data?.data?.message);
//     }

//     var { data: productsData, isError, error, isLoading } = useBroudct();

//     const [searchTerm, setSearchTerm] = useState('');


//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredProducts = productsData?.data.data.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (isLoading) {
//         return (
//             <div className='w-full flex justify-center items-center py-3'>
//                 <PropagateLoader />
//             </div>
//         );
//     }

//     if (isError) {
//         return (
//             <div className='w-full flex justify-center items-center py-3'>
//                 {error}
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto">
//             <div className="w-full flex justify-center py-4 my-10">
//                 <input
//                     type="text"
//                     placeholder="Search for Products ....."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className="form-control"
//                 />
//             </div>
//             <div className="row">
//                 {filteredProducts.map((product) => (
//                     <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4' key={product.id}>
//                         <div className="product py-4 px-3">
//                             <Link to={`/productdeatils/${product.id}`}>
//                                 <img className='w-full' src={product.imageCover} alt={product.title} />
//                                 <span className='py-3'>{product.category.name}</span>
//                                 <h3 className='text-2xl'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
//                                 <div className="flex justify-between items-center">
//                                     <span className='py-2'>{product.price} EGP</span>
//                                     <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-300'></i></span>
//                                 </div>
//                             </Link>
//                             <div className="flex justify-between items-center mt-4">
//                                 <button onClick={() => { addmutate(product.id) }} className='btn'>Add to Cart</button>

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import useBroudct from '../Hoks/useBroudct';
import useMutationCart from '../Hoks/useMutationCart';
import addtoCardApi from '../Apis/Card';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function RecentProduct({ onAddToFavorites }) { // تمرير onAddToFavorites كـ props
    const { status, mutate: addmutate, data } = useMutationCart(addtoCardApi);
    if (status === 'success') {
        toast.success(data?.data?.message);
    }

    const { data: productsData, isError, error, isLoading } = useBroudct();
    const [searchTerm, setSearchTerm] = useState('');
    const [likedProducts, setLikedProducts] = useState([]); // إدارة المنتجات اللي عليها لايك

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLikeClick = (product) => {
        setLikedProducts((prevLikedProducts) => {
            if (prevLikedProducts.includes(product.id)) {
                return prevLikedProducts.filter((id) => id !== product.id);
            } else {
                onAddToFavorites(product);
                return [...prevLikedProducts, product.id];
            }
        });
    };

    const filteredProducts = productsData?.data.data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className='w-full flex justify-center items-center py-3'>
                <PropagateLoader />
            </div>
        );
    }

    if (isError) {
        return (
            <div className='w-full flex justify-center items-center py-3'>
                {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="w-full flex justify-center py-4 my-10">
                <input
                    type="text"
                    placeholder="Search for Products ....."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control"
                />
            </div>
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4' key={product.id}>
                        <div className="product py-4 px-3">
                            <Link to={`/productdeatils/${product.id}`}>
                                <img className='w-full' src={product.imageCover} alt={product.title} />
                                <span className='py-3'>{product.category.name}</span>
                                <h3 className='text-2xl'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                                <div className="flex justify-between items-center">
                                    <span className='py-2'>{product.price} EGP</span>
                                    <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-300'></i></span>
                                </div>
                            </Link>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={() => addmutate(product.id)} className='btn'>Add to Cart</button>
                                <button onClick={() => handleLikeClick(product)}>
                                    <i className={`fas fa-heart ${likedProducts.includes(product.id) ? 'text-red-500' : 'text-gray-400'}`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}