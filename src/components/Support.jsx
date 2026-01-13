import React from 'react'
import s1 from '../assets/image/s.png'
import s2 from '../assets/image/s2.png'
import s3 from '../assets/image/s3.png'
import s4 from '../assets/image/s4.png'

const Support = () => {
  const offerData = [
    {
        id: 1,
        img: s1,
        title: "24/7 Support",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: 2,
        img: s2,
        title: "24/7 Support",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: 3,
        img: s3,
        title: "24/7 Support",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: 4,
        img: s4,
        title: "24/7 Support",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
  ]

  return (
    <section className='py-8 lg:py-14 bg-white'>
        <div className="lg:w-9/12 w-11/12 mx-auto">
          <h2 className='text-[30px] sm:text-[42px] text-center font-josefin text-[#151875] font-bold mb-14'>
            What Shopex Offer!
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {offerData.map((item) => (
                <div key={item.id} className='bg-white px-6 py-12 shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer border-b-2 border-transparent hover:border-[#FF9100]'>
                    <div className='mb-6'>
                        <img src={item.img} alt={item.title} className='w-16 h-16 object-contain' />
                    </div>
                    <h3 className='text-[#151875] font-bold font-josefin text-[22px] mb-4'>
                        {item.title}
                    </h3>
                    <p className='text-[#1A0B5B]/30 font-bold font-josefin text-[16px] leading-7'>
                        {item.des}
                    </p>
                </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Support