import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // React Icon for the wishlist heart
import { AiOutlineDown } from 'react-icons/ai'; 

import {Link} from 'react-router-dom';
import AddToCartModal from './AddToCartModal';
import Ratings from '../assets/ratings.png';
import {  toast } from 'react-toastify';

const ProductCard = ({ product,updateCartQuantity }) => {
  const { name, description, image, ratings, totalPrice, discountedPrice } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalOpen(true); // Open the modal when "Add to Cart" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  const handleConfirmAddToCart = () => {
    console.log("Product added to cart:", product);
    updateCartQuantity(1)
   // Display success toast with valid options
   toast.success("Product added to cart",);
  
  // Manually dismiss the toast if needed


    setIsModalOpen(false); // Close the modal after confirming
  };

  return (
    <div className="w-full mx-auto overflow-hidden sm:w-64 ">
      {/* Product Image with Wishlist Icon */}
      <div className="relative border border-[#000] border-opacity-30 md:max-w-[268px]  h-[310px] ">
        <img src={image} alt={name} className="object-contain w-full max-w-[230px] h-[230px] mt-8 mx-auto " />
        <button className="absolute text-gray-500 top-3 right-3 ">
          <AiOutlineHeart size={25}  className='hover:text-[#165315] text-[#575757]'  />
        </button>
        <Link to="/thank-you">
        <button className="absolute bottom-0  w-full bg-[#165315] text-white text-center py-2 font-semibold">
          View Product
        </button>
        </Link>
      </div>

      {/* Product Details */}
      <div className="py-4">
        <h2 className="mb-1 text-xl font-[500]">{name}</h2>
        <p className="mb-3 text-sm font-normal text-[#838383]">{description}</p>

        {/* Ratings */}
        <div className="flex items-center mb-2">
         <img src={Ratings} alt='Ratings' />
          <span className="ml-1 font-[500] text-[16px] text-[#A5A1A1]">{ratings}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center mb-2">
          <span className="mr-2 text-[16px] font-normal text-[#5E5A5A] opacity-70 line-through">₹{totalPrice}</span>
          <span className="text-xl font-semibold text-[#5E5A5A]">₹{discountedPrice}</span>
        </div>

        {/* Add to Cart & Buy on Rent Buttons */}
        <div className="flex items-center justify-between w-full ">
          <button  onClick={handleAddToCartClick} className=" text-sm bg-[#165315] text-white py-2 px-2 rounded-lg font-semibold ">
            - Add to Cart +
          </button>
          <button className="px-2 py-2  text-sm font-[500] text-[#144D14] border-[#165315]  bg-transparent border rounded-lg ">
            Buy on Rent
          </button>
        </div>
      </div>
      <AddToCartModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAddToCart}
       
      />
        
    </div>
  );
};

export default ProductCard;
