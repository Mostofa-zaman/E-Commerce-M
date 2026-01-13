import React from 'react'
import b from '../assets/image/b.png'
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const Blog = () => {
  
  const blogData = [
    {
        id: 1,
        author: "SaberAli",
        date: "21 August,2020",
        title: "Top essential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        img: b
    },
    {
        id: 2,
        author: "Surfauxion",
        date: "21 August,2020",
        title: "Top essential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        img: b
    },
    {
        id: 3,
        author: "SaberAli",
        date: "21 August,2020",
        title: "Top essential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        img: b
    },
  ]

  return (
    <section className='py-12 lg:py-24 bg-white'>
        <div className="lg:w-9/12 w-11/12 mx-auto">
            <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#151875] font-bold mb-10'>
                Latest Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((item) => (
                    <div key={item.id} className="group bg-white rounded-md shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] hover:shadow-[0px_8px_40px_0px_rgba(49,32,138,0.1)] transition-all duration-300 cursor-pointer">
                        
                        <div className="w-full h-62.5 rounded-t-md overflow-hidden relative">
                            <img src={item.img} alt="blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="px-5 py-6">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="flex items-center gap-2">
                                    <FaPenNib className="text-[#FB2E86] text-[14px]" />
                                    <span className="text-[#151875] font-josefin text-[14px] bg-[#FFE7F9] px-2 py-0.5 rounded-sm group-hover:bg-[#FB2E86] group-hover:text-white transition-colors duration-300">
                                        {item.author}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuCalendarDays className="text-[#FFA454] text-[14px]" />
                                    <span className="text-[#151875] font-josefin text-[14px]">
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-josefin text-[18px] font-bold text-[#151875] mb-4 group-hover:text-[#FB2E86] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="font-lato text-[16px] text-[#72718F] leading-7 mb-4">
                                {item.desc}
                            </p>
                            <a  className="font-lato text-[16px] font-semibold text-[#151875] underline underline-offset-4 group-hover:text-[#FB2E86] transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog