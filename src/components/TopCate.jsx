import React, { useContext, useMemo } from "react";
import Slider from "react-slick";
import { ApiData } from "./ContextApi";
import mestoni from "../assets/image/mestoni.png";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCate = () => {
  const data = useContext(ApiData);

  /* ----------- Memoized Data ----------- */
  const categories = useMemo(() => {
    return data?.slice(10, 15) || [];
  }, [data]);

  /* ----------- Slider Settings ----------- */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],

    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),

    customPaging: () => (
      <div className="w-3 h-3 rounded-full border border-[#FB2E86] hover:bg-[#FB2E86] transition" />
    ),
  };

  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        
        {/* Heading */}
        <h2
          className="text-center font-josefin font-bold text-[#151875]
                     text-2xl sm:text-3xl lg:text-[40px] mb-10"
        >
          Top Categories
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {categories.map((item) => (
            <div key={item.id} className="px-3 py-4">
              <div className="group flex flex-col items-center text-center">
                
                {/* Circle Card */}
                <div
                  className="relative flex items-center justify-center
                             w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48
                             bg-[#F6F7FB] rounded-full overflow-hidden
                             transition-all duration-300
                             group-hover:shadow-[-6px_6px_0px_#9877E7]"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 sm:w-28 lg:w-32 object-contain"
                  />

                  {/* Hover Button */}
                  <div
                    className="absolute bottom-4 opacity-0
                               group-hover:opacity-100 transition"
                  >
                    <Link
                      to="/shop"
                      className="bg-[#08D15F] text-white text-xs
                                 px-3 py-1.5 rounded
                                 hover:bg-[#06b853] transition"
                    >
                      View Shop
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <h3 className="font-josefin text-[#151875] text-lg">
                    {item.title}
                  </h3>
                  <p className="font-josefin text-[#151875] text-sm">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Banner */}
        <div className="mt-10 lg:mt-16">
          <img
            src={mestoni}
            alt="promotion"
            className="w-full object-cover mx-auto"
          />
        </div>
      </div>

      {/* Active Dot Style */}
      <style jsx>{`
        .slick-dots li.slick-active div {
          background-color: #fb2e86;
        }
      `}</style>
    </section>
  );
};

export default TopCate;
