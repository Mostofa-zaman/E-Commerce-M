import React from "react";
import { Link } from "react-router-dom";

const ShopBanner = () => {
  return (
    <section className="bg-[#F6F5FF] py-10 md:py-14 lg:py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        
        {/* Title */}
        <h2 className="text-[#101750] font-bold font-josefin 
                       text-2xl sm:text-3xl lg:text-4xl">
          Shop
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-2 text-sm sm:text-base font-lato">
          <Link
            to="/"
            className="text-gray-500 hover:text-[#FB2E86] transition"
          >
            Home
          </Link>

          <span className="text-gray-400">.</span>

          <span className="text-gray-500">Pages</span>

          <span className="text-gray-400">.</span>

          <span className="text-[#FB2E86] font-medium">Shop</span>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
