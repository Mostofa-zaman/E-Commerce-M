import React from 'react';
import blogM from '../assets/image/blogM.png'; 
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const BlogLeft = () => {
  const blogs = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
    },
  ];

  return (
    <div className='flex flex-col gap-10'>
      {blogs.map((blog) => (
        <div key={blog.id} className="group">
          <div className="w-full h-75 sm:h-113.25 rounded-md overflow-hidden mb-6">
            <img 
              src={blogM} 
              alt={blog.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-[#FFE7F9] px-3 sm:px-4 py-1 rounded-sm">
                <FaPenNib className="text-[#FB2E86] text-[12px] sm:text-[14px]" />
                <span className="text-[#151875] font-josefin text-[12px] sm:text-[14px]">
                    {blog.author}
                </span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFECE2] px-3 sm:px-4 py-1 rounded-sm">
                <LuCalendarDays className="text-[#FFA454] text-[12px] sm:text-[14px]" />
                <span className="text-[#151875] font-josefin text-[12px] sm:text-[14px]">
                    {blog.date}
                </span>
            </div>
          </div>
          <h3 className="font-josefin text-[20px] sm:text-[30px] font-bold text-[#151875] mb-4 leading-tight">
            {blog.title}
          </h3>
          <p className="font-lato text-[14px] sm:text-[16px] text-[#8A8FB9] leading-6 sm:leading-7 mb-6 text-justify">
            {blog.desc}
          </p>
          <div className="flex items-center gap-2 cursor-pointer group-hover:text-[#FB2E86] transition-colors w-fit">
            <span className="font-lato text-[16px] sm:text-[18px] font-bold text-[#151875] group-hover:text-[#FB2E86]">Read More</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FB2E86]"></span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogLeft