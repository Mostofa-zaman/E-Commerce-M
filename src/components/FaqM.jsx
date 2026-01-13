import React from 'react'

const FaqM = () => {
  const faqList = [
    {
      id: 1,
      question: "Eu dictumst cum at sed euismood condimentum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
    },
    {
      id: 2,
      question: "Magna bibendum est fermentum eros.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
    },
    {
      id: 3,
      question: "Odio muskana hak eris consecdtur scelerisque?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
    },
    {
      id: 4,
      question: "Elit id blandit sabara boi velit gua mara?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
    },
  ];

  return (
    <section className='py-12 lg:py-24 bg-white'>
        <div className="lg:w-9/12 w-11/12 mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
                <div className="lg:w-1/2 w-full">
                    <h2 className='text-[#151875] font-josefin text-[36px] font-bold mb-10'>
                        General Information
                    </h2>
                    
                    <div className="flex flex-col gap-8">
                        {faqList.map((item) => (
                            <div key={item.id}>
                                <h3 className='text-[#1D3178] font-josefin font-bold text-[17px] mb-2 leading-7'>
                                    {item.question}
                                </h3>
                                <p className='text-[#A1ABCC] font-lato text-[16px] leading-7'>
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full bg-[#F8F8FD] p-8 lg:p-12 rounded-sm h-fit">
                    <h2 className='text-[#151875] font-josefin text-[24px] font-bold mb-8'>
                        Ask a Question
                    </h2>
                    
                    <form className='flex flex-col gap-6'>
                        <input 
                            type="text" 
                            placeholder='Your Name*' 
                            className='w-full border border-[#CDCEDC] rounded-[3px] px-4 py-3 outline-none text-[#151875] placeholder:text-[#8990B2] font-lato text-[16px] focus:border-[#FB2E86] transition-colors'
                        />
                        <input 
                            type="email" 
                            placeholder='Subject*' 
                            className='w-full border border-[#CDCEDC] rounded-[3px] px-4 py-3 outline-none text-[#151875] placeholder:text-[#8990B2] font-lato text-[16px] focus:border-[#FB2E86] transition-colors'
                        />
                        <textarea 
                            rows="5"
                            placeholder='Type Your Message*' 
                            className='w-full border border-[#CDCEDC] rounded-[3px] px-4 py-3 outline-none text-[#151875] placeholder:text-[#8990B2] font-lato text-[16px] focus:border-[#FB2E86] transition-colors resize-none'
                        ></textarea>
                        
                        <button className='bg-[#FB2E86] text-white font-josefin text-[16px] px-8 py-3 rounded-[3px] hover:bg-[#F94C9B] transition-all duration-300 w-fit cursor-pointer shadow-md mt-2'>
                            Send Mail
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default FaqM