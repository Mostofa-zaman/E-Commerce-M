import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CartBanner = () => {
  return (
    <section className="bg-[#F6F5FF] py-10 md:py-14 lg:py-20">
      <div className="w-11/12 max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="font-josefin font-bold text-[#101750]
                       text-2xl sm:text-3xl lg:text-4xl">
          Shopping Cart
        </h1>

        {/* Breadcrumb */}
        <nav
          className="flex items-center flex-wrap gap-2 mt-2 text-sm sm:text-base"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="text-gray-600 hover:text-primary transition">
            Home
          </Link>

          <IoIosArrowForward className="text-gray-400" />

          <Link
            to="/shop"
            className="text-gray-600 hover:text-primary transition"
          >
            Pages
          </Link>

          <IoIosArrowForward className="text-gray-400" />

          <span className="text-[#FB2E86] font-medium">Cart</span>
        </nav>

      </div>
    </section>
  );
};

export default CartBanner;
