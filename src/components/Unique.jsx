import React from 'react'
import uiImg from '../assets/image/ui.png'

const Unique = () => {
  return (
    <section className='bg-[#F1F0FF] py-10 lg:py-20'>
        <div className="lg:w-9/12 w-11/12 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
                <div className="w-full lg:w-1/2 flex justify-center relative">
                    <div className="absolute bg-[#F5E1FC] rounded-full w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    <img src={uiImg} alt="Unique Sofa" className='relative z-10 w-full max-w-120 object-contain' />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className='font-josefin text-[#151875] font-bold text-[28px] sm:text-[35px] mb-6 leading-tight tracking-wide'>
                        Unique Features Of leatest & Trending Poducts
                    </h2>
                    <ul className='space-y-4 mb-8'>
                        <li className='flex items-start gap-3'>
                            <span className='w-3 h-3 rounded-full bg-[#F52B70] mt-1.5 shrink-0'></span>
                            <p className='text-[#ACABC3] font-lato text-[16px] leading-7'>
                                All frames constructed with hardwood solids and laminates
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='w-3 h-3 rounded-full bg-[#2B2BF5] mt-1.5 shrink-0'></span>
                            <p className='text-[#ACABC3] font-lato text-[16px] leading-7'>
                                Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='w-3 h-3 rounded-full bg-[#2BF5CC] mt-1.5 shrink-0'></span>
                            <p className='text-[#ACABC3] font-lato text-[16px] leading-7'>
                                Arms, backs and seats are structurally reinforced
                            </p>
                        </li>
                    </ul>
                    <div className="flex items-center gap-5">
                        <button className='bg-[#FB2E86] text-white font-josefin text-[16px] px-8 py-3 rounded-xs hover:bg-[#F94C9B] transition-all duration-300'>
                            Add To Cart
                        </button>
                        <div className='flex flex-col text-[#151875] font-josefin text-[14px] font-semibold'>
                            <span>B&B Italian Sofa</span>
                            <span>$32.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Unique