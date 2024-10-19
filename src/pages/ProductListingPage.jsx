
import ProductCard from "../components/ProductCard";
import mockProducts from "../data";

import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";
// import NurserySlider from "../components/NurserySlider";
import SearchBar from "../components/SearchBar"; // Import your new SearchBar component

const ProductListingPage = () => {
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
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div >
     {/* //paginaton */}
      </div>
     
      </div>
      
      </div>
    </div>
    <Footer/> 
    </>
  );
};

export default ProductListingPage;
