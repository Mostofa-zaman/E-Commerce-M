import React from 'react'

const BlogBanner = () => {
    return (
        <section className='py-8 sm:py-10 lg:py-20 bg-[#F6F5FF]'>
            <div className="max-w-[1320px] w-11/12 mx-auto">

                <h2 className='text-[#101750] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-josefin'>
                    Blog Page
                </h2>

                <div className="flex items-center mt-1 sm:mt-2 text-[14px] sm:text-[15px]">
                    <p>Home . Pages .</p>
                    <p className='text-[#FB2E86] ml-1'>Blog</p>
                </div>

            </div>
        </section>
    )
}

export default BlogBanner
