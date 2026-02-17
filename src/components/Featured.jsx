import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Featured = () => {
  const data = useContext(ApiData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-6 h-1 bg-[#FEBAD7] rounded-full cursor-pointer hover:bg-[#FB2E86] transition-all duration-300"></div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] text-center font-josefin text-[#1A0B5B] font-bold mb-10">
          Featured Products
        </h2>

        <Slider {...settings}>
          {data.slice(0, 5).map((item, index) => (
            <div key={index} className="px-2 sm:px-3 pb-8 sm:pb-10 pt-2">
              <div className="group relative shadow-[0_0_25px_0_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_0_rgba(0,0,0,0.2)] transition-all duration-300 bg-white rounded-md">

                {/* Image & Hover Actions */}
                <div className="w-full h-56 sm:h-60 lg:h-64 bg-[#F6F7FB] flex justify-center items-center relative overflow-hidden">
                
                  <div className="absolute top-3 left-3 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0 z-10">
                    <Link
                      to={`/productsDetails/${item.id}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent border border-transparent hover:border-[#EEEFFB]"
                    >
                      <BsCart2 size={18} />
                    </Link>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent">
                      <FaRegHeart size={16} />
                    </div>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#1389FF] hover:text-[#151875] hover:bg-[#EEEFFB] cursor-pointer bg-transparent">
                      <LuZoomIn size={16} />
                    </div>
                  </div>

                  {/* Product Image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-32 sm:w-36 lg:w-38.5 group-hover:scale-110 transition-all duration-300"
                  />

                  {/* View Details Button */}
                  <Link
                    to={`/productsDetails/${item.id}`}
                    className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-[#08D15F] text-white font-josefin text-[10px] sm:text-[12px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 hover:bg-[#07b552] cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>

                {/* Product Info */}
                <div className="bg-white group-hover:bg-[#2F1AC4] p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3 transition-colors duration-300 border-t border-transparent group-hover:border-[#2F1AC4] rounded-b-md">
                  <h3 className="font-josefin text-[16px] sm:text-[18px] font-bold text-[#FB2E86] group-hover:text-white transition-colors text-center">
                    {item.title}
                  </h3>

                  <div className="flex gap-1">
                    <span className="w-3 h-1 sm:w-4 sm:h-1 bg-[#05E6B7] rounded-full"></span>
                    <span className="w-3 h-1 sm:w-4 sm:h-1 bg-[#F701A8] rounded-full"></span>
                    <span className="w-3 h-1 sm:w-4 sm:h-1 bg-[#00009D] rounded-full group-hover:bg-white transition-colors"></span>
                  </div>

                  <p className="font-josefin text-[12px] sm:text-[14px] text-[#151875] group-hover:text-white transition-colors">
                    Code - Y523201
                  </p>

                  <p className="font-josefin text-[12px] sm:text-[14px] text-[#151875] group-hover:text-white transition-colors">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
