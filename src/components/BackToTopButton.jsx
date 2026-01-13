import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-[#FB2E86] text-white w-12 h-12 rounded-full shadow-lg flex justify-center items-center hover:bg-[#F94C9B] transition-all duration-300 cursor-pointer animate-bounce"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;