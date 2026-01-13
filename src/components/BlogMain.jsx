import React from 'react'
import BlogLeft from './BlogLeft'
import BlogRight from './BlogRight'

const BlogMain = () => {
  return (
    <>
      <>
        <section className='lg:py-20 py-10'>
          <div className="lg:w-9/12 w-11/12 mx-auto">
            <div className="lg:flex justify-between gap-5">
                <div className="lg:w-7/10 w-full">
                  <BlogLeft></BlogLeft>
                </div>
                <div className="lg:w-3/10 w-full">
                  <BlogRight></BlogRight>
                </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default BlogMain