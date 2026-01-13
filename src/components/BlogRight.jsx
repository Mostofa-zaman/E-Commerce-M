import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ApiData } from './ContextApi'; 

const BlogRight = () => {
    let data = useContext(ApiData);
    const categories = [
        { name: "Hobbies", count: 14 },
        { name: "Women", count: 21 },
        { name: "Women", count: 21 },
        { name: "Women", count: 21 },
        { name: "Women", count: 21 },
        { name: "Women", count: 21 },
    ];
    const tags = ["General", "Atsanil", "Insas", "Bibsaas", "Nulla"];

    return (
        <div className='flex flex-col gap-10 mt-10 lg:mt-0 pl-0 lg:pl-4'>
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-4">Search</h3>
                <div className="flex items-center border border-[#BDBDD8] rounded-sm overflow-hidden p-1">
                    <input 
                        type="text" 
                        placeholder="Search For Posts" 
                        className="w-full px-2 py-1 outline-none text-[#151875]/70 placeholder:text-[#151875]/20 font-lato"
                    />
                    <button className="px-2 text-[#BDBDD8] hover:text-[#FB2E86] transition-colors">
                        <IoIosSearch size={20}/>
                    </button>
                </div>
            </div>

            {/* --- Categories Widget --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-4">Categories</h3>
                <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className={`font-josefin text-[14px] cursor-pointer hover:text-[#FB2E86] transition-colors ${index === 0 ? 'bg-[#F939BF] text-white px-2 py-1 rounded-xs' : 'text-[#3F509E]'}`}>
                                {cat.name} ({cat.count})
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Recent Post Widget (Using API Data visually) --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-6">Recent Post</h3>
                <div className="flex flex-col gap-6">
                    {data.slice(0, 4).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 group cursor-pointer">
                            <img src={item.thumbnail} alt={item.title} className="w-16 h-14 object-cover rounded-xs" />
                            <div>
                                <h4 className="font-josefin text-[14px] font-medium text-[#3F509E] group-hover:text-[#FB2E86] leading-tight mb-1">
                                    {item.title.substring(0, 20)}...
                                </h4>
                                <p className="font-lato text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Sale Product Widget (Using API Data) --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-6">Sale Product</h3>
                <div className="flex flex-col gap-6">
                    {data.slice(5, 8).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 group cursor-pointer">
                            <img src={item.thumbnail} alt={item.title} className="w-16 h-14 object-cover rounded-xs" />
                            <div>
                                <h4 className="font-josefin text-[14px] font-medium text-[#3F509E] group-hover:text-[#FB2E86] leading-tight mb-1">
                                    {item.title.substring(0, 20)}...
                                </h4>
                                <p className="font-lato text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Offer Product Widget (Using API Data) --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-6">Offer Product</h3>
                <div className="grid grid-cols-2 gap-4">
                    {data.slice(8, 12).map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className='w-full h-24 overflow-hidden mb-2'>
                                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-lato text-[14px] font-semibold text-[#151875] text-center group-hover:text-[#FB2E86] mb-1">
                                {item.title.substring(0, 10)}...
                            </h4>
                            <p className="font-lato text-[12px] text-[#8A8FB9] text-center">
                                ${item.price} - <span className='text-[#8A8FB9]/50 line-through'>$150</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Follow Widget --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-6">Follow</h3>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#5625DF] text-white flex justify-center items-center cursor-pointer hover:bg-[#FB2E86] transition-colors shadow-md">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#FF27B7] text-white flex justify-center items-center cursor-pointer hover:bg-[#FB2E86] transition-colors shadow-md">
                        <FaInstagram size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#37DAF3] text-white flex justify-center items-center cursor-pointer hover:bg-[#FB2E86] transition-colors shadow-md">
                        <FaTwitter size={14} />
                    </div>
                </div>
            </div>

            {/* --- Tags Widget --- */}
            <div>
                <h3 className="font-josefin text-[22px] font-bold text-[#151875] mb-6">Tags</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {tags.map((tag, index) => (
                        <a key={index} href="#" className={`font-lato text-[16px] underline underline-offset-4 hover:text-[#FB2E86] transition-colors ${index === 0 || index === 1 ? 'text-[#151875]' : 'text-[#8A8FB9]'}`}>
                            {tag}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogRight