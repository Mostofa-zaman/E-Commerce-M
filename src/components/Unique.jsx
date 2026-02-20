import React from "react";
import uiImg from "../assets/image/ui.png";

/* ---------- Feature Item ---------- */
const FeatureItem = ({ color, text }) => (
  <li className="flex items-start gap-3">
    <span
      className="w-3 h-3 rounded-full mt-1.5 shrink-0"
      style={{ backgroundColor: color }}
    ></span>
    <p className="text-[#ACABC3] font-lato text-[15px] sm:text-[16px] leading-7">
      {text}
    </p>
  </li>
);

/* ---------- Main Component ---------- */
const Unique = () => {
  const features = [
    {
      color: "#F52B70",
      text: "All frames constructed with hardwood solids and laminates",
    },
    {
      color: "#2B2BF5",
      text:
        "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    },
    {
      color: "#2BF5CC",
      text: "Arms, backs and seats are structurally reinforced",
    },
  ];

  return (
    <section className="bg-[#F1F0FF] py-12 lg:py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute bg-[#F5E1FC] rounded-full w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <img
              src={uiImg}
              alt="Unique Sofa"
              className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">

            <h2 className="font-josefin text-[#151875] font-bold 
            text-[24px] sm:text-[30px] lg:text-[35px] 
            mb-6 leading-tight">
              Unique Features Of Latest & Trending Products
            </h2>

            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <FeatureItem
                  key={index}
                  color={item.color}
                  text={item.text}
                />
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              <button
                className="bg-[#FB2E86] text-white font-josefin 
                text-[15px] sm:text-[16px] px-7 py-3 
                rounded-sm hover:bg-[#F94C9B] 
                transition-all duration-300 w-fit"
              >
                Add To Cart
              </button>

              <div className="flex flex-col text-[#151875] font-josefin text-[14px] font-semibold">
                <span>B&B Italian Sofa</span>
                <span>$32.00</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;