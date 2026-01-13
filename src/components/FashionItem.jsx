import React, { useContext, useState } from 'react'
import { FaTh, FaListUl } from "react-icons/fa";
import LeftSite from './LeftSite';
import RightSite from './RightSite';
import { ApiData } from './ContextApi'; 

const FashionItem = () => {
    const [view, setView] = useState('grid');
    const data = useContext(ApiData);
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');

    // Filter Logic
    let filteredProducts = data;
    if (selectedBrand !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.brand === selectedBrand);
    }
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.category === selectedCategory);
    }
    if (selectedPrice !== 'all') {
        filteredProducts = filteredProducts.filter(item => {
            if (selectedPrice === 1) return item.price >= 0 && item.price <= 150;
            if (selectedPrice === 2) return item.price > 150 && item.price <= 350;
            if (selectedPrice === 3) return item.price > 350 && item.price <= 500;
            if (selectedPrice === 4) return item.price > 500;
            return true;
        });
    }
    const handleBrandChange = (brand) => {
        setSelectedBrand(brand === selectedBrand ? 'all' : brand);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === selectedCategory ? 'all' : category);
    };

    const handlePriceChange = (priceId) => {
        setSelectedPrice(priceId === selectedPrice ? 'all' : priceId);
    };

    return (
        <section className='py-12 lg:py-20 bg-white'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
                    <div className="text-center lg:text-left">
                        <h2 className='text-[#151875] font-josefin text-[22px] font-bold mb-2'>
                            Ecommerce Accessories & Fashion item
                        </h2>
                        <p className='text-[#8A8FB9] font-lato text-[12px]'>
                            About {filteredProducts.length} results
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <label htmlFor="perPage" className='text-[#3F509E] font-lato text-[16px]'>Per Page:</label>
                            <input type="text" className='w-14 h-6 border border-[#E7E6EF] outline-none px-2 text-[#8A8FB9] text-[12px]' />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className='text-[#3F509E] font-lato text-[16px]'>View:</span>
                            <div className="flex items-center gap-2">
                                <FaTh 
                                    size={15} 
                                    onClick={() => setView('grid')}
                                    className={`cursor-pointer transition-colors ${view === 'grid' ? 'text-[#FB2E86]' : 'text-[#151875]'}`} 
                                />
                                <FaListUl 
                                    size={15} 
                                    onClick={() => setView('list')}
                                    className={`cursor-pointer transition-colors ${view === 'list' ? 'text-[#FB2E86]' : 'text-[#151875]'}`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:mt-10 mt-6">
                  <div className="lg:flex gap-5">
                     <div className="lg:w-2/10 w-full">
                       <LeftSite 
                            selectedBrand={selectedBrand}
                            handleBrandChange={handleBrandChange}
                            selectedCategory={selectedCategory}
                            handleCategoryChange={handleCategoryChange}
                            selectedPrice={selectedPrice}
                            handlePriceChange={handlePriceChange}
                       />
                     </div>
                     <div className="lg:w-8/10">
                       {/* Pass filtered products to RightSite */}
                       <RightSite view={view} products={filteredProducts} />
                     </div>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default FashionItem