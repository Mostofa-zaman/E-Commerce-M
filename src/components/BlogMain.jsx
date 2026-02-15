import React from 'react'
import BlogLeft from './BlogLeft'
import BlogRight from './BlogRight'

const BlogMain = () => {
  return (
    <section className='py-10 lg:py-20'>
      <div className="max-w-[1320px] w-11/12 mx-auto">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">

          {/* Left Content */}
          <div className="w-full lg:w-[70%]">
            <BlogLeft />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%]">
            <BlogRight />
          </div>

        </div>

      </div>
    </section>
  )
}

export default BlogMain
