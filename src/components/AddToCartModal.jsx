import React from 'react';

const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Do not render modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="object-contain w-full h-48" />

        {/* Product Details */}
        <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
        <p className="mb-2 text-sm text-gray-600">{product.description}</p>

        {/* Product Price */}
        <div className="flex items-center">
          <span className="text-xl font-bold">₹{product.discountedPrice}</span>
          {product.totalPrice !== product.discountedPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">₹{product.totalPrice}</span>
          )}
        </div>

        {/* Confirm and Cancel Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
