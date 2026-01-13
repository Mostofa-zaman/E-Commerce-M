import React, { useContext } from 'react'
import t1 from '../assets/image/t1.png'
import t2 from '../assets/image/t2.png'
import t3 from '../assets/image/t3.png'
import { ApiData } from './ContextApi'
import { Link } from 'react-router-dom'

const Trending = () => {
    let data = useContext(ApiData);
    const sidebarList = [
        { id: 1, img: t3, title: "Executive Seat chair", price: "32.00" },
        { id: 2, img: t3, title: "Executive Seat chair", price: "32.00" },
        { id: 3, img: t3, title: "Executive Seat chair", price: "32.00" },
    ];

    return (
        <section className='py-12 lg:py-24 bg-white'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#151875] font-bold mb-10'>
                    Trending Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {data.slice(10, 14).map((item) => (
                        <Link to={`/productsDetails/${item.id}`} key={item.id} className="p-3 bg-white shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] flex flex-col items-center group transition-all duration-300 hover:shadow-lg">
                            <div className='w-full bg-[#F5F6F8] flex justify-center items-center py-6 mb-4 relative overflow-hidden'>
                                <img src={item.thumbnail} alt={item.title} className='w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300' />
                            </div>
                            <h3 className='font-lato text-[16px] font-bold text-[#151875] mb-2'>{item.title}</h3>
                            <div className='flex gap-3 font-josefin text-[14px]'>
                                <span className='text-[#151875]'>${item.price}</span>

                            </div>
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-[#FFF6FB] p-6 relative h-67.5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-josefin text-[26px] text-[#151875] font-semibold mb-2 leading-tight">
                            23% off in all products
                        </h3>
                        <a href="#" className="font-lato text-[16px] font-semibold text-[#FB2E86] underline underline-offset-4 hover:no-underline">
                            Shop Now
                        </a>
                        <img src={t1} alt="Promo Clock" className="absolute right-2 bottom-2 max-w-50 h-45 object-contain" />
                    </div>
                    <div className="bg-[#EEEFFB] p-6 relative h-67.5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-josefin text-[26px] text-[#151875] font-semibold mb-2 leading-tight">
                            23% off in all products
                        </h3>
                        <a href="#" className="font-lato text-[16px] font-semibold text-[#FB2E86] underline underline-offset-4 hover:no-underline">
                            View Collection
                        </a>
                        <img src={t2} alt="Promo Shelf" className="absolute right-2 bottom-2 max-w-70 h-37.5 object-contain" />
                    </div>
                    <div className="flex flex-col justify-between h-auto lg:h-67.5 gap-4 lg:gap-0">
                        {sidebarList.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-25 h-18.75 bg-[#F5F6F8] flex justify-center items-center rounded-sm overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-josefin text-[16px] font-semibold text-[#151875] mb-1 group-hover:text-[#FB2E86] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="font-josefin text-[14px] text-[#151875] line-through">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Trending