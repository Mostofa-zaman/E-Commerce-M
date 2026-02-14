import React, { useState, useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ApiData } from './ContextApi';

const Navbar = () => {

    let menu = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Blog', path: '/blog' },
        { name: 'Faq', path: '/faq' },
        { name: 'Pages', path: '/pages' },
        { name: 'Contact', path: '/contact' },
    ];

    const [showMenu, setShowMenu] = useState(false);
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();
    let location = useLocation();
    let data = useContext(ApiData);

    const searchResults = searchText
        ? data.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase()))
        : [];

    const handleSearch = () => {
        if (searchText.trim()) {
            navigate('/shop', { state: { search: searchText } });
            setShowMenu(false);
            setSearchText("");
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    const handleProductClick = (id) => {
        navigate(`/productsDetails/${id}`);
        setSearchText("");
        setShowMenu(false);
    };

    return (
        <nav className='lg:py-4 py-2 bg-white sticky top-0 z-50 shadow-sm'>
            <div className="lg:w-9/12 sm:w-10/12 w-[95%] mx-auto relative">

                <div className="flex justify-between items-center">

                    {/* Logo + Menu */}
                    <div className="flex items-center lg:gap-x-20 gap-x-6">

                        <Link
                            className='font-josefin text-[26px] sm:text-[30px] lg:text-[34px] text-[#0D0E43] font-bold'
                            to='/'
                        >
                            Hekto
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-x-8">
                            {menu.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`font-josefin text-[16px] transition-all duration-300 hover:text-[#FB2E86]
                                    ${location.pathname === item.path ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:block relative w-[260px] lg:w-[320px]">

                        <div className="flex items-center border border-[#E7E6EF] rounded-md overflow-hidden">
                            <input
                                type="text"
                                className="w-full px-3 py-2 outline-none text-[14px]"
                                placeholder="Search For products"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={handleEnterKey}
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[#FB2E86] px-4 lg:px-5 py-2.5 flex justify-center items-center hover:bg-[#F94C9B] transition-all">
                                <IoIosSearch className="text-white text-xl" />
                            </button>
                        </div>

                        {/* Search Dropdown */}
                        {searchText && searchResults.length > 0 && (
                            <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-[#E7E6EF]
                            rounded-b-md max-h-60 overflow-y-auto z-50 mt-1">

                                {searchResults.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleProductClick(item.id)}
                                        className="flex items-center gap-3 p-2 hover:bg-[#F6F7FB]
                                        cursor-pointer transition-colors border-b last:border-0 border-[#f0f0f0]"
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-10 h-10 object-contain border border-gray-100 rounded-sm"
                                        />
                                        <div>
                                            <p className="font-josefin text-[14px] text-[#151875] font-semibold truncate w-44">
                                                {item.title}
                                            </p>
                                            <p className="text-[12px] text-[#FB2E86]">
                                                ${item.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-3xl text-[#0D0E43]"
                        >
                            {showMenu ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50
                    flex flex-col px-6 py-6 gap-4 border-t border-gray-200 mt-2 rounded-b-lg">

                        {menu.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`text-[16px] font-josefin transition-colors
                                ${location.pathname === item.path ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Search */}
                        <div className="relative">
                            <div className="flex items-center border border-[#E7E6EF] rounded-md overflow-hidden mt-2">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 outline-none text-[14px]"
                                    placeholder="Search..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyDown={handleEnterKey}
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#FB2E86] px-4 py-2 flex justify-center items-center">
                                    <IoIosSearch className="text-white text-lg" />
                                </button>
                            </div>

                            {searchText && searchResults.length > 0 && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg border
                                border-[#E7E6EF] rounded-b-md max-h-48 overflow-y-auto z-50 mt-1">

                                    {searchResults.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleProductClick(item.id)}
                                            className="flex items-center gap-3 p-2 hover:bg-[#F6F7FB]
                                            cursor-pointer transition-colors border-b last:border-0 border-[#f0f0f0]"
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain border border-gray-100 rounded-sm"
                                            />
                                            <div>
                                                <p className="font-josefin text-[14px] text-[#151875] font-semibold truncate w-40">
                                                    {item.title}
                                                </p>
                                                <p className="text-[12px] text-[#FB2E86]">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
