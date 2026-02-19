import React from "react";

import s1 from "../assets/image/s.png";
import s2 from "../assets/image/s2.png";
import s3 from "../assets/image/s3.png";
import s4 from "../assets/image/s4.png";

const supportData = [
  {
    id: 1,
    img: s1,
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 2,
    img: s2,
    title: "Free Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 3,
    img: s3,
    title: "Money Back",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 4,
    img: s4,
    title: "Secure Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Support = () => {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        
        {/* Heading */}
        <h2
          className="text-center font-josefin font-bold text-[#151875]
                     text-2xl sm:text-3xl lg:text-[40px] mb-10 lg:mb-14"
        >
          What Shopex Offer!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {supportData.map((item) => (
            <div
              key={item.id}
              className="group bg-white px-6 py-10 rounded-md
                         shadow-[0px_8px_30px_rgba(49,32,138,0.05)]
                         flex flex-col items-center text-center
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-lg
                         border-b-2 border-transparent hover:border-[#FF9100]"
            >
              {/* Icon */}
              <div className="mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#151875] font-bold font-josefin text-lg sm:text-xl mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-6 max-w-[250px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
