import React from 'react';

const AddToCartModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Add {product.name} to Cart</h3>
        <p>Price: ${product.price}</p>
        <button className="bg-green-500 text-white p-2 mt-4 rounded-lg" onClick={onClose}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
