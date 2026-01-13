import React, { useContext, useState } from 'react'
import { ApiData } from './ContextApi';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Latest = () => {
    let data = useContext(ApiData);
    const [activeTab, setActiveTab] = useState('New Arrival');
    const allProducts = {
        'New Arrival': data.slice(0, 6),
        'Best Seller': data.slice(6, 12),
        'Featured': data.slice(12, 18),
        'Special Offer': data.slice(18, 24)
    };

    const tabs = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer'];
    const productsToShow = allProducts[activeTab] || [];

    return (
        <section className='py-8 lg:py-12'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#1A0B5B] font-bold mb-8'>
                    Latest Products
                </h2>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`font-lato text-[16px] sm:text-[18px] font-medium transition-all duration-300 pb-1
                                ${activeTab === tab
                                    ? 'text-[#FB2E86] underline underline-offset-4'
                                    : 'text-[#151875] hover:text-[#FB2E86]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsToShow.length > 0 ? (
                        productsToShow.map((item) => {
                            const currentPrice = item.price;
                            const discount = item.discountPercentage || 0;
                            const oldPrice = discount > 0 ? (currentPrice / (1 - discount / 100)).toFixed(2) : null;

                            return (
                                <div key={item.id} className="group w-full bg-white relative shadow-none hover:shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] transition-shadow duration-300">

                                    <div className="w-full h-75 bg-[#F7F7F7] group-hover:bg-white flex justify-center items-center relative transition-colors duration-300 overflow-hidden rounded-t-md">

                                        <div className="absolute left-3 bottom-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-12 z-10">
                                            <Link to={`/productsDetails/${item.id}`} className="w-9 h-9 rounded-full bg-transparent hover:bg-[#EEEFFB] text-[#2F1AC4] hover:text-[#FB2E86] flex justify-center items-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-[#EEEFFB]">
                                                <BsCart2 size={18} />
                                            </Link>
                                            <div className="w-9 h-9 rounded-full bg-transparent hover:bg-[#EEEFFB] text-[#2F1AC4] hover:text-[#FB2E86] flex justify-center items-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-[#EEEFFB]">
                                                <FaRegHeart size={16} />
                                            </div>
                                            <div className="w-9 h-9 rounded-full bg-transparent hover:bg-[#EEEFFB] text-[#2F1AC4] hover:text-[#FB2E86] flex justify-center items-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-[#EEEFFB]">
                                                <LuZoomIn size={18} />
                                            </div>
                                        </div>
                                        <Link to={'shop'}>
                                            <img src={item.thumbnail} alt={item.title} className="w-50 h-50 object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                    <div className="py-4 flex justify-between items-end bg-white rounded-b-md px-2">
                                        <h3 className="font-josefin text-[#151875] text-[16px] font-bold border-b-2 border-[#EEEFFB] pb-1 pr-1 truncate w-[60%]">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 font-josefin pb-1">
                                            <span className="text-[#151875] text-[14px]">${currentPrice}</span>
                                            {oldPrice && (
                                                <span className="text-[#FB2E86] text-[12px] line-through">${oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p className="text-center col-span-3">Loading products...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Latest