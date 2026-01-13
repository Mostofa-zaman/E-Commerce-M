import React from 'react'
import conImg from '../assets/image/conImg.png'

const ContactIn = () => {
    return (
        <section className='py-12 lg:py-24 bg-white'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 mb-20">
                    <div className="lg:w-1/2 w-full">
                        <h2 className='text-[#151875] font-josefin text-[36px] font-bold mb-4'>
                            Information About us
                        </h2>
                        <p className='text-[#8A8FB9] font-lato text-[16px] leading-7 mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#5625DF]"></span>
                            <span className="w-6 h-6 rounded-full bg-[#FF27B7]"></span>
                            <span className="w-6 h-6 rounded-full bg-[#37DAF3]"></span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <h2 className='text-[#151875] font-josefin text-[36px] font-bold mb-6'>
                            Contact Way
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#5726DF] shrink-0"></div>
                                <div className='text-[#8A8FB9] font-lato text-[16px]'>
                                    <p>Tel: 877-67-88-99</p>
                                    <p>E-Mail: shop@store.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#FB2E86] shrink-0"></div>
                                <div className='text-[#8A8FB9] font-lato text-[16px]'>
                                    <p>Support Forum</p>
                                    <p>For over 24hr</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#FFB265] shrink-0"></div>
                                <div className='text-[#8A8FB9] font-lato text-[16px]'>
                                    <p>20 Margaret st, London</p>
                                    <p>Great britain, 3NM98-LK</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#1BE982] shrink-0"></div>
                                <div className='text-[#8A8FB9] font-lato text-[16px]'>
                                    <p>Free standard shipping</p>
                                    <p>on all orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 mt-10 lg:mt-30">
                    <div className="lg:w-1/2 w-full">
                        <h2 className='text-[#151875] font-josefin text-[36px] font-bold mb-4'>
                            Get In Touch
                        </h2>
                        <p className='text-[#8A8FB9] font-lato text-[16px] leading-7 mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>

                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col sm:flex-row gap-8">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="w-full border border-[#A4B6C8]/70 rounded-[3px] px-4 py-3 text-[#8A8FB9] font-lato text-[16px] outline-none focus:border-[#FB2E86] transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your E-mail"
                                    className="w-full border border-[#A4B6C8]/70 rounded-[3px] px-4 py-3 text-[#8A8FB9] font-lato text-[16px] outline-none focus:border-[#FB2E86] transition-colors"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject*"
                                className="w-full border border-[#A4B6C8]/70 rounded-[3px] px-4 py-3 text-[#8A8FB9] font-lato text-[16px] outline-none focus:border-[#FB2E86] transition-colors"
                            />
                            <textarea
                                placeholder="Type Your Message*"
                                rows="6"
                                className="w-full border border-[#A4B6C8]/70 rounded-[3px] px-4 py-3 text-[#8A8FB9] font-lato text-[16px] outline-none focus:border-[#FB2E86] transition-colors resize-none"
                            ></textarea>

                            <div>
                                <button className="bg-[#FB2E86] text-white font-josefin text-[16px] px-10 py-3 rounded-[3px] hover:bg-[#F94C9B] transition-all duration-300 shadow-md">
                                    Send Mail
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                        <img src={conImg} alt="Contact Illustration" className="w-full max-w-lg object-contain" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactIn