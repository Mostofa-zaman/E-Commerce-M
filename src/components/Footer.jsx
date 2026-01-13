import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#EEEFFB]'>
      <div className='lg:w-9/12 w-11/12 mx-auto pt-20 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-6'>
            <Link to='/' className='font-josefin text-[34px] text-[#0D0E43] font-bold'>Hekto</Link>
            
            <div className='flex items-center bg-white p-1 rounded w-full max-w-75'>
              <input 
                type="email" 
                placeholder='Enter Email Address'
                className='w-full px-3 py-2 text-sm outline-none text-[#8A8FB9] bg-transparent placeholder:text-[#8A8FB9]/70'
              />
              <button className='bg-[#FB2E86] text-white px-5 py-2 text-sm font-medium font-josefin rounded-sm hover:bg-[#F94C9B] transition-all'>
                Sign Up
              </button>
            </div>

            <div className='space-y-2'>
              <p className='text-[#8A8FB9] font-josefin text-[16px]'>Contact Info</p>
              <p className='text-[#8A8FB9] font-josefin text-[16px] leading-6'>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          <div>
            <h3 className='font-josefin text-[22px] text-[#0D0E43] font-bold mb-6'>Categories</h3>
            <ul className='space-y-4 text-[#8A8FB9] font-josefin text-[16px]'>
              {['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones'].map((item, index) => (
                <li key={index} className='cursor-pointer hover:text-[#FB2E86] transition-colors'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-josefin text-[22px] text-[#0D0E43] font-bold mb-6'>Customer Care</h3>
            <ul className='space-y-4 text-[#8A8FB9] font-josefin text-[16px]'>
              {['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'].map((item, index) => (
                <li key={index} className='cursor-pointer hover:text-[#FB2E86] transition-colors'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-josefin text-[22px] text-[#0D0E43] font-bold mb-6'>Pages</h3>
            <ul className='space-y-4 text-[#8A8FB9] font-josefin text-[16px]'>
              {['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages'].map((item, index) => (
                <li key={index} className='cursor-pointer hover:text-[#FB2E86] transition-colors'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className='bg-[#E7E4F8] py-4'>
        <div className='lg:w-9/12 w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-[#9DA0AE] font-josefin text-[16px]'>
            ©Webecy - All Rights Reserved
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-full bg-[#151875] flex justify-center items-center text-white cursor-pointer hover:bg-[#FB2E86] transition-all'>
              <FaFacebookF size={16}/>
            </div>
            <div className='w-8 h-8 rounded-full bg-[#151875] flex justify-center items-center text-white cursor-pointer hover:bg-[#FB2E86] transition-all'>
              <FaInstagram size={16}/>
            </div>
            <div className='w-8 h-8 rounded-full bg-[#151875] flex justify-center items-center text-white cursor-pointer hover:bg-[#FB2E86] transition-all'>
              <FaTwitter size={16}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer