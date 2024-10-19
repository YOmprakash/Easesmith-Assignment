
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons from react-icons

const FilterSection = () => {
 
  // Toggle function for expanding/collapsing each category

  return (
    <div className="w-full max-w-md text-[16px] space-y-6 p-4 font-normal text-[#6E6E6E] bg-[#F0FFE5]
  ">
      {/* Filter and Clear All Buttons */}
      <div className="flex justify-between pb-3 mb-4 border-[#A8A8A8] border-b">
        <span className="">Filter</span>
        <button className="uppercase">Clear All</button>
      </div>

      {/* Types of Plants */}
      <div className="pb-3  mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" >
          <h3 className="">Types of Plants</h3>
           <FaPlus  />
        </div>
        
      </div>

      {/* Price */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("price")}>
          <h3 >Price</h3>
         <FaPlus />
        </div>
       
      </div>

      {/* Nursery */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("nursery")}>
          <h3 >Nursery</h3>
          <FaPlus />
        </div>
     
      </div>

      {/* Ideal Plant Location */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("location")}>
          <h3 >Ideal Plant Location</h3>
          <FaPlus />
        </div>
        
      </div>

      {/* Indoor/Outdoor */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("indoorOutdoor")}>
          <h3>Indoor/Outdoor</h3>
        <FaPlus />
        </div>
        
      </div>

      {/* Maintenance */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("maintenance")}>
          <h3 >Maintenance</h3>
           <FaPlus />
        </div>
        
      </div>

      {/* Plant Size */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("size")}>
          <h3 >Plant Size</h3>
          <FaPlus />
        </div>
       
      </div>

      {/* Water Schedule */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("water")}>
          <h3 >Water Schedule</h3>
           <FaPlus />
        </div>
      
      </div>

      {/* Color */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("color")}>
          <h3 >Color</h3>
          <FaPlus />
        </div>
       
      </div>

      {/* Seasonal */}
      <div className="pb-3 mb-2 border-b border-[#A8A8A8]">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("seasonal")}>
          <h3 >Seasonal</h3>
           <FaPlus />
        </div>
       
      </div>

      {/* Light Efficient */}
      <div className="pb-3 mb-2">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("light")}>
          <h3 >Light Efficient</h3>
           <FaPlus />
        </div>
       
      </div>
    </div>
  );
};

export default FilterSection;
