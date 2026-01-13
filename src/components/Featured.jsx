import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

const Featured = () => {
    let data = useContext(ApiData);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div style={{ bottom: "-40px" }}>
                <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-6 h-1 bg-[#FEBAD7] rounded-full cursor-pointer hover:bg-[#FB2E86] transition-all duration-300 dot-item"></div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='py-8 lg:py-12'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#1A0B5B] font-bold mb-10'>Featured Products</h2>

                <Slider {...settings}>
                    {data.slice(0, 5).map((item, index) => (
                        <div key={index} className="px-3 pb-10 pt-2">
                            <div className="group relative shadow-[0_0_25px_0_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_0_rgba(0,0,0,0.2)] transition-all duration-300 bg-white">
                                <div className="w-full h-59 bg-[#F6F7FB] flex justify-center items-center relative overflow-hidden">

                                    <div className="absolute top-3 left-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0 z-10">
                                        <Link to={`/productsDetails/${item.id}`} className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent border border-transparent hover:border-[#EEEFFB]">
                                            <BsCart2 size={18} />
                                        </Link>
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent">
                                            <FaRegHeart size={16} />
                                        </div>
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent">
                                            <LuZoomIn size={16} />
                                        </div>
                                    </div>
                                    <img src={item.thumbnail} alt="chair" className='w-38.5 sm:w-30.5 group-hover:scale-110 transition-all duration-300' />
                                    <Link to={`/productsDetails/${item.id}`} className="absolute bottom-4 left-[50%] -translate-x-[50%] bg-[#08D15F] text-white font-josefin text-[12px] px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 hover:bg-[#07b552] cursor-pointer">
                                        View Details
                                    </Link>
                                </div>
                                <div className="bg-white group-hover:bg-[#2F1AC4] p-4 flex flex-col items-center gap-3 transition-colors duration-300 border-t border-transparent group-hover:border-[#2F1AC4]">
                                    <h3 className="font-josefin text-[18px] font-bold text-[#FB2E86] group-hover:text-white transition-colors">{item.title}</h3>
                                    <div className="flex gap-1">
                                        <span className="w-4 h-1 bg-[#05E6B7] rounded-full"></span>
                                        <span className="w-4 h-1 bg-[#F701A8] rounded-full"></span>
                                        <span className="w-4 h-1 bg-[#00009D] rounded-full group-hover:bg-white transition-colors"></span>
                                    </div>

                                    <p className="font-josefin text-[14px] text-[#151875] group-hover:text-white transition-colors">Code - Y523201</p>
                                    <p className="font-josefin text-[14px] text-[#151875] group-hover:text-white transition-colors">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Featured;