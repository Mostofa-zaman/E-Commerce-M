import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { Link } from 'react-router-dom';

const RightSite = ({ view, products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Dynamic Star Rendering Logic
    const renderStars = (rating) => {
        const validRating = rating || 0;
        const roundedRating = Math.round(validRating);

        return (
            <div className="flex text-[12px] gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        className={index < roundedRating ? "text-[#FFC107]" : "text-[#B2B2B2]"}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            {view === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => {
                            // Price Calculation
                            const originalPrice = item.price || 0;
                            const discount = item.discountPercentage || 0;
                            const discountAmount = (originalPrice * discount) / 100;
                            const finalPrice = originalPrice - discountAmount;

                            return (
                                <Link to={`/productsDetails/${item.id}`} key={item.id} className="group w-full bg-white shadow-none hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                    <div className="w-full h-65 bg-[#F6F7FB] flex justify-center items-center relative overflow-hidden group-hover:bg-[#EBF4F3] transition-colors">
                                        <img src={item.thumbnail} alt={item.title} className="w-45 h-45 object-contain group-hover:scale-110 transition-transform duration-300" />
                                        <div className="absolute left-3 bottom-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0">
                                            {/* <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#151875] hover:bg-white cursor-pointer transition-colors">
                                                <BsCart2 size={16} />
                                            </div>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#151875] hover:bg-white cursor-pointer transition-colors">
                                                <LuZoomIn size={16} />
                                            </div>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#151875] hover:bg-white cursor-pointer transition-colors">
                                                <FaRegHeart size={15} />
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="py-4 text-center">
                                        <h3 className="font-josefin text-[#151875] text-[18px] font-bold mb-2">
                                            {item.title}
                                        </h3>
                                        <div className="flex justify-center gap-2 mb-3">
                                            <span className="w-3 h-3 rounded-full bg-[#DE9034]"></span>
                                            <span className="w-3 h-3 rounded-full bg-[#EC42A2]"></span>
                                            <span className="w-3 h-3 rounded-full bg-[#8568FF]"></span>
                                        </div>
                                        <div className="flex justify-center gap-3 font-josefin">
                                            <span className="text-[#151875] text-[14px]">${finalPrice.toFixed(2)}</span>
                                            <span className="text-[#FB2E86] text-[14px] line-through">${originalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div className="col-span-3 text-center py-10">
                            <h3 className="text-[#151875] font-josefin text-[20px]">No products found matching your filter.</h3>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-8">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => {
                            // Price Calculation
                            const originalPrice = item.price || 0;
                            const discount = item.discountPercentage || 0;
                            const discountAmount = (originalPrice * discount) / 100;
                            const finalPrice = originalPrice - discountAmount;

                            return (
                                <div key={item.id} className="group w-full flex flex-col sm:flex-row gap-6 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <Link to={`/productsDetails/${item.id}`} className="w-full sm:w-1/3 lg:w-75 h-52 bg-[#F6F7FB] flex justify-center items-center shrink-0">
                                        <img src={item.thumbnail} alt={item.title} className="w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-300" />
                                    </Link>
                                    <div className="flex flex-col justify-center w-full">
                                        <div className="flex items-center gap-4 mb-3">
                                            <h3 className="font-josefin text-[#111C85] text-[18px] font-bold">
                                                {item.title}
                                            </h3>
                                            <div className="flex gap-2">
                                                <span className="w-3 h-3 rounded-full bg-[#DE9034]"></span>
                                                <span className="w-3 h-3 rounded-full bg-[#EC42A2]"></span>
                                                <span className="w-3 h-3 rounded-full bg-[#8568FF]"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="flex items-center gap-3 font-josefin">
                                                <span className="text-[#111C85] text-[14px]">${finalPrice.toFixed(2)}</span>
                                                <span className="text-[#FF2AAA] text-[14px] line-through">${originalPrice.toFixed(2)}</span>
                                            </div>
                                            {renderStars(item.rating)}
                                        </div>
                                        <p className="font-lato text-[#9295AA] text-[14px] leading-6 mb-4 line-clamp-2 pr-4">
                                            {item.description}
                                        </p>
                                        <div className="flex gap-4">
                                            <Link to={`/productsDetails/${item.id}`} className="w-8 h-8 rounded-full bg-white shadow-md text-[#535399] flex justify-center items-center cursor-pointer hover:bg-[#EEEFFB] transition-colors">
                                                <BsCart2 size={16} />
                                            </Link>
                                            <div className="w-8 h-8 rounded-full bg-white shadow-md text-[#535399] flex justify-center items-center cursor-pointer hover:bg-[#EEEFFB] transition-colors">
                                                <FaRegHeart size={15} />
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white shadow-md text-[#535399] flex justify-center items-center cursor-pointer hover:bg-[#EEEFFB] transition-colors">
                                                <LuZoomIn size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-10">
                            <h3 className="text-[#151875] font-josefin text-[20px]">No products found matching your filter.</h3>
                        </div>
                    )}
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-12 mb-4">
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`w-8 h-8 flex justify-center items-center border font-josefin text-[14px] rounded-sm transition-all duration-300
                                    ${currentPage === i + 1
                                        ? 'bg-[#FB2E86] text-white border-[#FB2E86]'
                                        : 'bg-white text-[#E0D3F5] border-[#E0D3F5] hover:bg-[#FB2E86] hover:text-white hover:border-[#FB2E86]'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default RightSite