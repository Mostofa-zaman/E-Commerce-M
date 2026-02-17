import React, { useContext, useState } from "react";
import { ApiData } from "./ContextApi";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { Link } from "react-router-dom";

const TABS = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const Latest = () => {
  const data = useContext(ApiData);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  // Products by category
  const allProducts = {
    "New Arrival": data?.slice(0, 6),
    "Best Seller": data?.slice(6, 12),
    Featured: data?.slice(12, 18),
    "Special Offer": data?.slice(18, 24),
  };

  const products = allProducts[activeTab] || [];

  // Price calculation helper
  const getOldPrice = (price, discount) => {
    if (!discount) return null;
    return (price / (1 - discount / 100)).toFixed(2);
  };

  return (
    <section className="py-10 lg:py-16">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#1A0B5B] font-josefin mb-8 lg:mb-12">
          Latest Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 lg:mb-14">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-lato text-sm sm:text-lg font-medium pb-1 transition-all duration-300
                ${
                  activeTab === tab
                    ? "text-[#FB2E86] underline underline-offset-4"
                    : "text-[#151875] hover:text-[#FB2E86]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.length ? (
            products.map((item) => {
              const currentPrice = item.price;
              const oldPrice = getOldPrice(
                currentPrice,
                item.discountPercentage
              );

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-md overflow-hidden 
                  hover:shadow-[0px_8px_40px_rgba(49,32,138,0.08)] transition-all duration-300"
                >
                  <div className="relative bg-[#F7F7F7] flex items-center justify-center h-64 sm:h-72 overflow-hidden">
                    <div
                      className="absolute left-3 bottom-6 flex flex-col gap-3 opacity-0 
                      group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500 z-10"
                    >
                      <Link
                        to={`/productsDetails/${item.id}`}
                        className="icon-btn"
                      >
                        <BsCart2 size={18} />
                      </Link>

                      <button className="icon-btn">
                        <FaRegHeart size={16} />
                      </button>

                      <button className="icon-btn">
                        <LuZoomIn size={18} />
                      </button>
                    </div>

                    <Link to="/shop">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-44 h-44 object-contain p-2 
                        group-hover:scale-105 transition duration-300"
                      />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="flex justify-between items-end px-3 py-4">
                    <h3
                      className="font-josefin text-[#151875] text-sm sm:text-base font-bold 
                      border-b border-[#EEEFFB] pb-1 truncate w-[60%]"
                    >
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 font-josefin">
                      <span className="text-[#151875] text-sm">
                        ${currentPrice}
                      </span>

                      {oldPrice && (
                        <span className="text-[#FB2E86] text-xs line-through">
                          ${oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Latest;
