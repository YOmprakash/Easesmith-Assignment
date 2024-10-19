import React from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from "../data";
import img91 from "../assets/image91.png";
import { FiSearch } from "react-icons/fi";
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";
const ProductListingPage = () => {
  return (
    <>
    <div className="container p-6 mx-auto ">
      {/* Search Bar Section */}
      <div className="flex items-center justify-center max-w-[500px] mx-auto mb-10 border-b-2">
        <FiSearch color="#838383" className="text-3xl " />
        <input
          type="text"
          placeholder="Search Plant"
          className="w-full max-w-lg p-3 focus:outline-none"
        />
        <img src={img91} alt="Logo" className="w-10 ml-4" />
      </div>

      {/* Category Buttons */}
      <div className="flex justify-start mb-8 space-x-4">
        <button
          className="bg-[#165315]
] text-white px-6 py-2 "
        >
          Plants
        </button>
        <button className="px-6 py-2 text-black border hover:bg-blue-600">
          Pots
        </button>
      </div>

      <p
        className="text-[#838383]
 text-left font-normal  leading-relaxed"
      >
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>

      {/* Slider Section Placeholder */}
      <div className="mb-10">
        <p className="text-lg italic text-center text-gray-500">*slider*</p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
      <aside className="w-full md:w-1/4">
          <FilterSection />
        </aside>
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
    <Footer/> 
    </>
  );
};

export default ProductListingPage;
