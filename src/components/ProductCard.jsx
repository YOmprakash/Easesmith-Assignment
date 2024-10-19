import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // React Icon for the wishlist heart
import Img from '../assets/plant1.png'; // Example image from your assets

import {Link} from 'react-router-dom';
import AddToCartModal from './AddToCartModal';
import Ratings from '../assets/ratings.png';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

const ProductCard = ({ product }) => {
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

    // Display success toast
    toast.success("closeAfter10Seconds", {
      autoClose: 3000
      });

    setIsModalOpen(false); // Close the modal after confirming
  };

  return (
    <div className="w-full mx-auto overflow-hidden sm:w-64 ">
      {/* Product Image with Wishlist Icon */}
      <div className="relative border-2">
        <img src={Img} alt={name} className="w-full max-w-[196px] h-[296px] object-contain mx-auto" />
        <button className="absolute text-gray-500 top-3 right-3 hover:text-red-500">
          <AiOutlineHeart size={24} />
        </button>
        <Link to="/thank-you">
        <button className="absolute bottom-0 w-full bg-[#165315] text-white text-center py-2 font-semibold">
          View Product
        </button>
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="mb-1 text-xl font-bold">{name}</h2>
        <p className="mb-3 text-sm text-gray-500">{description}</p>

        {/* Ratings */}
        <div className="flex items-center mb-2">
         <img src={Ratings} alt='Ratings' />
          <span className="ml-1 font-semibold text-gray-700">{ratings}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center mb-4">
          <span className="mr-2 text-sm text-gray-500 line-through">₹{totalPrice}</span>
          <span className="text-xl font-bold text-black">₹{discountedPrice}</span>
        </div>

        {/* Add to Cart & Buy on Rent Buttons */}
        <div className="flex items-center justify-between">
          <button  onClick={handleAddToCartClick} className=" text-sm bg-[#165315] text-white py-2 px-2 rounded-lg font-semibold ">
            - Add to Cart +
          </button>
          <button className="text-sm border bg-[#165315] text-white py-2 px-2 rounded-lg font-semibold ">
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
        <ToastContainer position="top-right"   />
    </div>
  );
};

export default ProductCard;
