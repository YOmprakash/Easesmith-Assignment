import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // React Icon for the wishlist heart
import Img from '../assets/plant1.png'; // Example image from your assets

const ProductCard = ({ product }) => {
  const { name, description, image, ratings, totalPrice, discountedPrice } = product;

  return (
    <div className="bg-white  rounded-lg overflow-hidden w-full sm:w-64 mx-auto ">
      {/* Product Image with Wishlist Icon */}
      <div className="relative border-2">
        <img src={Img} alt={name} className="w-full max-w-[196px] h-[296px] object-contain mx-auto" />
        <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <AiOutlineHeart size={24} />
        </button>
        <button className="absolute bottom-0 w-full bg-[#165315] text-white text-center py-2 font-semibold">
          View Product
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-500 mb-3">{description}</p>

        {/* Ratings */}
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 text-lg font-bold">★</span>
          <span className="ml-1 font-semibold text-gray-700">{ratings}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through mr-2 text-sm">₹{totalPrice}</span>
          <span className="text-black font-bold text-xl">₹{discountedPrice}</span>
        </div>

        {/* Add to Cart & Buy on Rent Buttons */}
        <div className="flex space-x-2">
          <button className="flex-grow bg-[#165315] text-white py-2 rounded-lg font-semibold hover:bg-green-700">
            - Add to Cart +
          </button>
          <button className="flex-grow border bg-[#165315] text-white py-2 rounded-lg font-semibold hover:bg-green-50">
            Buy on Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
