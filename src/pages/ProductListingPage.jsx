import React from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from "../data";
import img91 from "../assets/image91.png";
import { FiSearch } from "react-icons/fi";

const ProductListingPage = () => {
  return (
    <div className="container mx-auto p-6 ">
      {/* Search Bar Section */}
      <div className="flex items-center justify-center max-w-[500px] mx-auto mb-10 border-b-2">
        <FiSearch color="#838383" className="text-3xl " />
        <input
          type="text"
          placeholder="Search Plant"
          className="w-full max-w-lg p-3   focus:outline-none"
        />
        <img src={img91} alt="Logo" className="w-10 ml-4" />
      </div>

      {/* Category Buttons */}
      <div className="flex justify-start space-x-4 mb-8">
        <button className="bg-[#165315]
] text-white px-6 py-2 ">
          Plants
        </button>
        <button className="  text-black border px-6 py-2  hover:bg-blue-600">
          Pots
        </button>
      </div>

      <p className="text-[#838383]
 text-left font-normal  leading-relaxed">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>

      {/* Slider Section Placeholder */}
      <div className="mb-10">
        <p className="text-center text-lg text-gray-500 italic">*slider*</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
