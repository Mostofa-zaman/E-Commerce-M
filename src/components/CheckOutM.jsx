import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { clearCart } from './slice/productSlice'; 

const CheckOutM = () => {
    const cartItems = useSelector((state) => state.products.carItem);
    const dispatch = useDispatch(); 

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = item.price || 0;
            const quantity = item.quantity || 1;
            const discount = item.discountPercentage || 0;
            const finalPrice = price - (price * discount) / 100;
            return total + (finalPrice * quantity);
        }, 0);
    };
    const subTotal = calculateTotal();
    const shipping = 50;
    const total = subTotal + shipping;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        const { email, firstName, lastName, address, city, postalCode } = formData;
        if (email && firstName && lastName && address && city && postalCode && cartItems.length > 0) {
            setShowSuccessPopup(true);
            setShowErrorPopup(false);
        } else {
            setShowErrorPopup(true);
            setShowSuccessPopup(false);
        }
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
        setShowErrorPopup(false);
    };
    const handleContinueShopping = () => {
        dispatch(clearCart());
        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            postalCode: '',
        });
        setShowSuccessPopup(false);
    };

    return (
        <div className="py-12 lg:py-20 bg-white relative">
            <div className="container mx-auto px-4 lg:w-9/12 w-11/12">
                <h2 className="text-[#151875] font-josefin text-[24px] font-bold mb-8">Hekto Demo</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                     <div className="lg:w-2/3 w-full bg-[#F8F8FD] p-6 lg:p-8 rounded-md">
                        <h3 className="text-[#151875] font-josefin text-[18px] font-bold mb-6">Contact Information</h3>
                        <div className="flex flex-col gap-6">
                            <input type="email" name="email" placeholder="Email or mobile phone number" value={formData.email} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                            
                            <div className="mt-6">
                                <h3 className="text-[#151875] font-josefin text-[18px] font-bold mb-6">Shipping Address</h3>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <input type="text" name="firstName" placeholder="First name (optional)" value={formData.firstName} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                                        <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                                    </div>
                                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                                        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleInputChange} className="w-full bg-transparent border-b-2 border-[#BFC6E0] py-2 outline-none text-[#151875] placeholder:text-[#C1C8E1] font-lato text-[14px] focus:border-[#FB2E86] transition-colors"/>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleCheckout} className="mt-8 bg-[#FB2E86] text-white font-josefin font-bold text-[16px] px-8 py-3 rounded-[3px] hover:bg-[#F94C9B] transition-colors w-full sm:w-auto text-center">
                                Continue Shipping
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full">
                         <div className="bg-white p-6 shadow-none lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] rounded-md">
                            <div className="flex flex-col gap-4 border-b border-[#E1E1E4] pb-6 mb-6">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item, index) => {
                                         const price = item.price || 0;
                                        const discount = item.discountPercentage || 0;
                                        const finalPrice = price - (price * discount) / 100;
                                        return (
                                            <div key={index} className="flex items-center gap-4 justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-16 h-16 bg-[#F6F7FB] rounded-sm overflow-hidden flex justify-center items-center relative">
                                                        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
                                                        <span className="absolute -top-1 -right-1 bg-[#C1C8E1] text-white text-[10px] w-4 h-4 rounded-full flex justify-center items-center">{item.quantity}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[#000000] font-josefin text-[14px] truncate w-32">{item.title}</h4>
                                                        <p className="text-[#A1ABCC] font-josefin text-[12px]">Size: XL</p>
                                                    </div>
                                                </div>
                                                <span className="text-[#151875] font-josefin text-[14px] font-bold">${(finalPrice * (item.quantity || 1)).toFixed(2)}</span>
                                            </div>
                                        )
                                    })
                                ) : (<p className="text-center text-[#8A8FB9] font-lato italic">No items in cart</p>)}
                            </div>
                             <div className="flex flex-col gap-4 bg-[#F4F4FC] p-6 rounded-[3px]">
                                <div className="flex justify-between items-center border-b border-[#E8E6F1] pb-3">
                                    <span className="text-[#1D3178] font-lato font-semibold text-[16px]">Subtotals:</span>
                                    <span className="text-[#151875] font-lato text-[16px]">${subTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-[#E8E6F1] pb-3">
                                    <span className="text-[#1D3178] font-lato font-semibold text-[16px]">Shipping:</span>
                                    <span className="text-[#151875] font-lato text-[16px]">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-[#1D3178] font-lato font-bold text-[18px]">Total:</span>
                                    <span className="text-[#151875] font-lato font-bold text-[18px]">${total.toFixed(2)}</span>
                                </div>
                                <p className="text-[#8A91AB] text-[10px] mt-2 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#19D16F]"></span>Shipping & taxes calculated at checkout</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* --- Success Popup --- */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
                    <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center text-center max-w-sm w-full animate-bounce-in">
                        <FaCheckCircle className="text-[#19D16F] text-6xl mb-4" />
                        <h3 className="text-[#151875] font-josefin font-bold text-[24px] mb-2">Order Completed!</h3>
                        <p className="text-[#8A8FB9] font-lato text-[16px] mb-6">
                            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
                        </p>
                        <button 
                            onClick={handleContinueShopping} 
                            className="bg-[#FB2E86] text-white font-josefin px-8 py-3 rounded hover:bg-[#F94C9B] transition-colors w-full cursor-pointer"
                        >
                            Continue Shopping
                        </button>

                        <button onClick={closePopup} className="mt-4 text-[#151875] underline text-sm hover:text-[#FB2E86]">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* --- Error Popup --- */}
            {showErrorPopup && (
                <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
                    <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center text-center max-w-sm w-full animate-shake">
                        <MdError className="text-red-500 text-6xl mb-4" />
                        <h3 className="text-[#151875] font-josefin font-bold text-[24px] mb-2">Order Failed!</h3>
                        <p className="text-[#8A8FB9] font-lato text-[16px] mb-6">
                            {cartItems.length === 0
                                ? "Your cart is empty. Please add products first."
                                : "Please fill in all the required shipping fields correctly."}
                        </p>
                        <button onClick={closePopup} className="bg-[#FB2E86] text-white font-josefin px-8 py-3 rounded hover:bg-[#F94C9B] transition-colors w-full">
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckOutM;