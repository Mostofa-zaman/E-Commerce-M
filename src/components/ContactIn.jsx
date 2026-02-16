import React from 'react';
import conImg from '../assets/image/conImg.png';

const ContactIn = () => {
    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Info & Contact Way */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
                    
                    {/* About Info */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Information About Us
                        </h2>
                        <p className="text-[#8A8FB9] font-lato text-base sm:text-lg leading-7 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#5625DF]"></span>
                            <span className="w-6 h-6 rounded-full bg-[#FF27B7]"></span>
                            <span className="w-6 h-6 rounded-full bg-[#37DAF3]"></span>
                        </div>
                    </div>

                    {/* Contact Way */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                            Contact Way
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { color: '#5726DF', lines: ['Tel: 877-67-88-99', 'E-Mail: shop@store.com'] },
                                { color: '#FB2E86', lines: ['Support Forum', 'For over 24hr'] },
                                { color: '#FFB265', lines: ['20 Margaret St, London', 'Great Britain, 3NM98-LK'] },
                                { color: '#1BE982', lines: ['Free standard shipping', 'on all orders.'] },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className={`w-11 h-11 rounded-full shrink-0`} style={{ backgroundColor: item.color }}></div>
                                    <div className="text-[#8A8FB9] font-lato text-base sm:text-[16px]">
                                        {item.lines.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Get in Touch Form & Image */}
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Form */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-[#8A8FB9] font-lato text-base sm:text-[16px] leading-7 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>

                        <form className="flex flex-col gap-6 sm:gap-8">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="input-field"
                                />
                                <input
                                    type="email"
                                    placeholder="Your E-mail"
                                    className="input-field"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject*"
                                className="input-field"
                            />

                            <textarea
                                placeholder="Type Your Message*"
                                rows="6"
                                className="input-field resize-none"
                            ></textarea>

                            <button className="bg-[#FB2E86] text-white font-josefin text-[16px] px-10 py-3 rounded-md hover:bg-[#F94C9B] transition-all duration-300 shadow-md">
                                Send Mail
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                        <img src={conImg} alt="Contact Illustration" className="w-full max-w-md object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactIn;
