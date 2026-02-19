import React, { useState, useMemo } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 9;

const RightSite = ({ view = "grid", products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------------- Pagination Logic ---------------- */
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, products]);

  const paginate = (page) => setCurrentPage(page);

  /* ---------------- Price Calculation ---------------- */
  const getPrice = (item) => {
    const original = item?.price || 0;
    const discount = item?.discountPercentage || 0;
    const final = original - (original * discount) / 100;

    return {
      original,
      final,
    };
  };

  /* ---------------- Star Renderer ---------------- */
  const renderStars = (rating = 0) => {
    const rounded = Math.round(rating);

    return (
      <div className="flex gap-1 text-xs">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rounded ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  /* ===================================================== */

  return (
    <div className="w-full">
      {/* ================= GRID VIEW ================= */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {currentItems.length ? (
            currentItems.map((item) => {
              const price = getPrice(item);

              return (
                <Link
                  key={item.id}
                  to={`/productsDetails/${item.id}`}
                  className="group bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="w-full h-52 sm:h-56 lg:h-60 bg-[#F6F7FB] flex items-center justify-center relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-32 sm:w-36 lg:w-40 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="font-josefin text-[#151875] text-base lg:text-lg font-bold mb-2 line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Colors */}
                    <div className="flex justify-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#DE9034]" />
                      <span className="w-3 h-3 rounded-full bg-[#EC42A2]" />
                      <span className="w-3 h-3 rounded-full bg-[#8568FF]" />
                    </div>

                    {/* Price */}
                    <div className="flex justify-center gap-2 text-sm font-josefin">
                      <span className="text-[#151875] font-semibold">
                        ${price.final.toFixed(2)}
                      </span>
                      <span className="text-pink-500 line-through">
                        ${price.original.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="col-span-full text-center py-10 text-[#151875] font-semibold">
              No products found matching your filter.
            </p>
          )}
        </div>
      ) : (
        /* ================= LIST VIEW ================= */
        <div className="flex flex-col gap-6">
          {currentItems.length ? (
            currentItems.map((item) => {
              const price = getPrice(item);

              return (
                <div
                  key={item.id}
                  className="group flex flex-col md:flex-row gap-5 bg-white p-4 rounded-md shadow-sm hover:shadow-md transition"
                >
                  {/* Image */}
                  <Link
                    to={`/productsDetails/${item.id}`}
                    className="w-full md:w-56 lg:w-64 h-48 bg-[#F6F7FB] flex items-center justify-center rounded"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-32 object-contain group-hover:scale-105 transition"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-josefin text-[#111C85] text-lg font-bold mb-2">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-[#111C85] font-semibold">
                          ${price.final.toFixed(2)}
                        </span>
                        <span className="text-pink-500 line-through">
                          ${price.original.toFixed(2)}
                        </span>

                        {renderStars(item.rating)}
                      </div>

                      <p className="text-gray-500 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                      <button className="iconBtn">
                        <BsCart2 size={16} />
                      </button>
                      <button className="iconBtn">
                        <FaRegHeart size={15} />
                      </button>
                      <button className="iconBtn">
                        <LuZoomIn size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center py-10 text-[#151875] font-semibold">
              No products found matching your filter.
            </p>
          )}
        </div>
      )}

      {/* ================= Pagination ================= */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap gap-2">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              const active = currentPage === page;

              return (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`w-9 h-9 flex items-center justify-center border rounded text-sm transition
                  ${
                    active
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-white text-gray-400 hover:bg-pink-500 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSite;
