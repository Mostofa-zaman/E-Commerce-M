import React from 'react';

const ConBanner = () => {
    return (
        <section className="bg-[#F6F5FF] py-10 lg:py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h1 className="text-[#101750] font-josefin font-bold 
                               text-2xl sm:text-3xl lg:text-4xl">
                    Contact Us
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mt-2 text-sm sm:text-base">
                    <span className="text-gray-600">Home</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-gray-600">Pages</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-[#FB2E86] font-medium">
                        Contact Us
                    </span>
                </div>

            </div>
        </section>
    );
};

export default ConBanner;
