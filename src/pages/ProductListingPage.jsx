
import ProductCard from "../components/ProductCard";
import mockProducts from "../data";

import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";
// import NurserySlider from "../components/NurserySlider";
import SearchBar from "../components/SearchBar"; // Import your new SearchBar component
import { useState } from "react";

const ProductListingPage = ({updateCartQuantity}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages needed
  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className="container p-6 mx-auto ">
      {/* Search Bar Section */}
      <SearchBar />
      

      {/* Category Buttons */}
      <div className="flex justify-start mb-8 space-x-4">
        <button
          className="bg-[#165315]
] text-white w-[114px] py-2  "
        >
          Plants
        </button>
        <button className=" w-[114px] py-2 text-black border ">
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

     
<div className="py-5">
{/* <NurserySlider /> */}
<p>slider</p>
</div>
     

      <div className="flex flex-col gap-6 md:flex-row">
      <aside className="w-full md:w-1/4">
          <FilterSection />
        </aside>
      {/* Product Grid */}
      <div>
      <div className="flex ">
      <p className="font-normal text-[15px] text-[#6A6A6A]">300 products</p>
      <div className="mb-4 ml-4">
          
          <select 
            id="sort" 
            
            className="p-2 w-[139px] border text-white  bg-[#165315] border-none outline-none"
          >
            <option value="default">SORT BY</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      
      
      
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} updateCartQuantity={updateCartQuantity} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 mb-6">
  <button
    className={`px-4 py-2 mr-2 ${currentPage === 1 ? 'bg-[#F3A939] text-[#F0FFE5] cursor-not-allowed' : 'bg-[#165315] text-[#F0FFE5] hover:bg-[#144D14]'}`}
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-[#F0FFE5] border border-[#165315] text-[#000]' : 'bg-[#6A6A6A] text-white hover:bg-[#575757]'}`}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button
    className={`px-4 py-2 ml-2 ${currentPage === totalPages ? 'bg-[#F3A939] text-[#F0FFE5] cursor-not-allowed' : 'bg-[#165315] text-[#F0FFE5] hover:bg-[#144D14]'}`}
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

     
      </div>
      
      </div>
    </div>
    <Footer/> 
    </>
  );
};

export default ProductListingPage;
