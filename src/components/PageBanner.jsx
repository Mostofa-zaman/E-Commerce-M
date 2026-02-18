import React from 'react'

const PageBanner = () => {
  return (
    <section className='bg-[#F6F5FF] py-8 sm:py-10 lg:py-20'>
      <div className="w-11/12 lg:w-9/12 mx-auto">
        
        <h2 className='text-[#101750] font-bold font-josefin 
                       text-[24px] sm:text-[28px] lg:text-[36px]'>
          Pages
        </h2>

        <div className="flex items-center flex-wrap gap-1 mt-1 lg:mt-2 text-[14px] sm:text-[15px] lg:text-[16px]">
          <p>Home . Pages .</p>
          <p className='text-[#FB2E86]'>Pages</p>
        </div>

      </div>
    </section>
  )
}

export default PageBanner
