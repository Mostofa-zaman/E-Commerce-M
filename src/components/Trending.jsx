import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiData } from "./ContextApi";

import t1 from "../assets/image/t1.png";
import t2 from "../assets/image/t2.png";
import t3 from "../assets/image/t3.png";

/* ---------- Product Card ---------- */
const ProductCard = ({ item }) => {
  const { id, thumbnail, title, price } = item;

  return (
    <Link
      to={`/productsDetails/${id}`}
      className="bg-white p-4 shadow-[0px_8px_40px_rgba(49,32,138,0.05)] 
      flex flex-col items-center text-center rounded-md 
      transition-all duration-300 hover:shadow-lg group"
    >
      <div className="w-full bg-[#F5F6F8] flex justify-center items-center py-6 mb-4 overflow-hidden rounded-sm">
        <img
          src={thumbnail}
          alt={title}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain 
          transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="font-lato text-[15px] sm:text-[16px] font-bold text-[#151875] mb-1 line-clamp-2">
        {title}
      </h3>

      <span className="font-josefin text-[14px] text-[#151875]">
        ${price}
      </span>
    </Link>
  );
};

/* ---------- Sidebar Item ---------- */
const SidebarItem = ({ item }) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-20 h-16 sm:w-24 sm:h-20 bg-[#F5F6F8] flex justify-center items-center rounded-sm overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div>
        <h4 className="font-josefin text-[15px] sm:text-[16px] font-semibold text-[#151875] mb-1 group-hover:text-[#FB2E86] transition-colors">
          {item.title}
        </h4>

        <p className="font-josefin text-[13px] sm:text-[14px] text-[#151875] line-through">
          ${item.price}
        </p>
      </div>
    </div>
  );
};

/* ---------- Main Component ---------- */
const Trending = () => {
  const data = useContext(ApiData);

  const sidebarList = [
    { id: 1, img: t3, title: "Executive Seat Chair", price: "32.00" },
    { id: 2, img: t3, title: "Executive Seat Chair", price: "32.00" },
    { id: 3, img: t3, title: "Executive Seat Chair", price: "32.00" },
  ];

  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="w-11/12 lg:w-9/12 mx-auto">

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[42px] text-center font-josefin text-[#151875] font-bold mb-10">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          {data.slice(10, 14).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Promo 1 */}
          <div className="bg-[#FFF6FB] p-6 relative min-h-[250px] rounded-md shadow-sm hover:shadow-md transition">
            <h3 className="font-josefin text-[22px] sm:text-[24px] lg:text-[26px] text-[#151875] font-semibold mb-2 leading-tight">
              23% off in all products
            </h3>

            <button className="font-lato text-[15px] font-semibold text-[#FB2E86] underline underline-offset-4 hover:no-underline">
              Shop Now
            </button>

            <img
              src={t1}
              alt="Promo"
              className="absolute right-2 bottom-2 w-36 sm:w-44 lg:w-48 object-contain"
            />
          </div>

          {/* Promo 2 */}
          <div className="bg-[#EEEFFB] p-6 relative min-h-[250px] rounded-md shadow-sm hover:shadow-md transition">
            <h3 className="font-josefin text-[22px] sm:text-[24px] lg:text-[26px] text-[#151875] font-semibold mb-2 leading-tight">
              23% off in all products
            </h3>

            <button className="font-lato text-[15px] font-semibold text-[#FB2E86] underline underline-offset-4 hover:no-underline">
              View Collection
            </button>

            <img
              src={t2}
              alt="Promo"
              className="absolute right-2 bottom-2 w-40 sm:w-52 lg:w-60 object-contain"
            />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col justify-between gap-4">
            {sidebarList.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trending;