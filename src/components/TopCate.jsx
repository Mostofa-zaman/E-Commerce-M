import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiData } from './ContextApi';
import mestoni from '../assets/image/mestoni.png';
import { Link } from 'react-router-dom';

const TopCate = () => {
    let data = useContext(ApiData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        appendDots: dots => (
            <div style={{ bottom: "-25px" }}>
                <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 rounded-full border border-[#FB2E86] hover:bg-[#FB2E86] cursor-pointer transition-colors duration-300 dot-active-check"></div>
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
        <section className='py-12 lg:pb-15 lg:pt-15 bg-white'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#151875] font-bold mb-10'>
                    Top Categories
                </h2>

                <Slider {...settings} className="pb-10">
                    {data.slice(10,15).map((item, index) => (
                        <div key={index} className="px-4 pt-2 pb-2">
                            <div className="group flex flex-col items-center">
                                
                                <div className="relative w-37.5 h-37.5 sm:w-50 sm:h-50 bg-[#F6F7FB] rounded-full flex justify-center items-center overflow-hidden transition-all duration-300 group-hover:shadow-[-5px_5px_0px_0px_#9877E7]">
                                    
                                    <img src={item.thumbnail} alt={item.title} className="w-24 sm:w-32 object-contain" />
                                    <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link to={'shop'} className="bg-[#08D15F] text-white font-josefin text-[12px] px-3 py-1.5 rounded-xs cursor-pointer hover:bg-[#06b853]">
                                            View Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <h3 className="font-josefin text-[#151875] text-[20px] font-normal mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="font-josefin text-[#151875] text-[16px]">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            <div className="lg:mt-20 mt-8">
                <img src={mestoni} alt="Mestoni" className=' mx-auto w-full'/>
            </div>
            </div>
            <style jsx>{`
                .slick-dots li.slick-active div {
                    background-color: #FB2E86;
                }
            `}</style>
        </section>
    );
};

export default TopCate;