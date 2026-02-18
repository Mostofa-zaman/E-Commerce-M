import React, { useContext } from 'react'
import { ApiData } from './ContextApi';

const LeftSite = ({
  selectedBrand,
  handleBrandChange,
  selectedCategory,
  handleCategoryChange,
  selectedPrice,
  handlePriceChange
}) => {

  let data = useContext(ApiData);

  const uniqueBrands = [...new Set(data.map((item) => item.brand))];
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const priceRanges = [
    { id: 1, label: "$0.00 - $150.00" },
    { id: 2, label: "$150.00 - $350.00" },
    { id: 3, label: "$350.00 - $500.00" },
    { id: 4, label: "$500.00 +" }
  ];

  return (
    <div className="w-full px-2 sm:px-0">

      {/* scroll support for small device */}
      <div className="max-h-full sm:max-h-none overflow-y-auto">

        {/* Brand */}
        <div>
          <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] font-josefin font-bold text-[#101750] pb-3'>
            Product Brand
          </h2>

          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="all-brands"
              className='cursor-pointer accent-[#FF3EB2]'
              checked={selectedBrand === 'all'}
              onChange={() => handleBrandChange('all')}
            />
            <label
              htmlFor="all-brands"
              className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer ${
                selectedBrand === 'all' ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
              }`}
            >
              All Brand
            </label>
          </div>

          {uniqueBrands.map((brand, index) => {
            if (!brand) return null;
            return (
              <div key={index} className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={brand}
                  className='cursor-pointer accent-[#FF3EB2]'
                  checked={selectedBrand === brand}
                  onChange={() => handleBrandChange(brand)}
                />
                <label
                  htmlFor={brand}
                  className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer capitalize break-words ${
                    selectedBrand === brand ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
                  }`}
                >
                  {brand}
                </label>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="mt-6 lg:mt-10">
          <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] font-josefin font-bold text-[#101750] pb-3'>
            Categories
          </h2>

          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="all-categories"
              className='cursor-pointer accent-[#FF3EB2]'
              checked={selectedCategory === 'all'}
              onChange={() => handleCategoryChange('all')}
            />
            <label
              htmlFor="all-categories"
              className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer ${
                selectedCategory === 'all' ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
              }`}
            >
              All Categories
            </label>
          </div>

          {uniqueCategories.map((category, index) => {
            if (!category) return null;
            return (
              <div key={index} className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={category}
                  className='cursor-pointer accent-[#FF3EB2]'
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
                <label
                  htmlFor={category}
                  className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer capitalize break-words ${
                    selectedCategory === category ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
                  }`}
                >
                  {category}
                </label>
              </div>
            );
          })}
        </div>

        {/* Price */}
        <div className="mt-6 lg:mt-10">
          <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] font-josefin font-bold text-[#101750] pb-3'>
            Price Filter
          </h2>

          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="all-price"
              className='cursor-pointer accent-[#FF3EB2]'
              checked={selectedPrice === 'all'}
              onChange={() => handlePriceChange('all')}
            />
            <label
              htmlFor="all-price"
              className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer ${
                selectedPrice === 'all' ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
              }`}
            >
              All Price
            </label>
          </div>

          {priceRanges.map((range) => (
            <div key={range.id} className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                id={`price-${range.id}`}
                className='cursor-pointer accent-[#FF3EB2]'
                checked={selectedPrice === range.id}
                onChange={() => handlePriceChange(range.id)}
              />
              <label
                htmlFor={`price-${range.id}`}
                className={`font-lato text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer ${
                  selectedPrice === range.id ? 'text-[#FF3EB2]' : 'text-[#3F509E]'
                }`}
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LeftSite;
