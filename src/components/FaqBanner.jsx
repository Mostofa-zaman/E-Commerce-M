import React from "react";

const FaqBanner = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-20 bg-[#F6F5FF]">
      <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#101750] font-josefin">
          FAQ
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 mt-1 sm:mt-2 text-sm sm:text-base">
          <p>Home.Pages.</p>
          <p className="text-[#FB2E86] font-medium">Faq</p>
        </div>

      </div>
    </section>
  );
};

export default FaqBanner;
