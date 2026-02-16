import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
        <section className="py-10 lg:py-16 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-2xl lg:text-3xl font-bold text-[#151875] mb-8">
                    Checkout
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT FORM */}
                    <div className="lg:col-span-2 bg-white p-6 lg:p-8 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg text-[#151875] mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6">

                            <input
                                type="email"
                                name="email"
                                placeholder="Email or mobile number"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input"
                            />

                            <div>
                                <h3 className="font-semibold text-lg text-[#151875] mb-4">
                                    Shipping Address
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="input"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="input"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="input mt-4"
                                />

                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="input"
                                    />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Postal Code"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#FB2E86] text-white py-3 rounded-lg font-semibold hover:bg-[#e91e75] transition"
                            >
                                Continue Shipping
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="bg-white p-6 rounded-xl shadow-sm h-fit">

                        <div className="space-y-4 border-b pb-4 mb-4">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, i) => {
                                    const price = item.price || 0;
                                    const discount = item.discountPercentage || 0;
                                    const finalPrice = price - (price * discount) / 100;

                                    return (
                                        <div key={i} className="flex justify-between items-center">
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    src={item.thumbnail}
                                                    alt=""
                                                    className="w-14 h-14 object-contain bg-gray-100 rounded"
                                                />
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        Qty: {item.quantity}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="font-semibold">
                                                ${(finalPrice * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center text-gray-400">
                                    No items in cart
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SUCCESS */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white p-8 rounded-xl text-center max-w-sm w-full shadow-xl">
                        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Order Completed!</h3>
                        <p className="text-gray-500 mb-6">
                            Your order has been placed successfully.
                        </p>

                        <button
                            onClick={handleContinueShopping}
                            className="w-full bg-[#FB2E86] text-white py-3 rounded-lg"
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={closePopup}
                            className="mt-3 text-sm underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* ERROR */}
            {showErrorPopup && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white p-8 rounded-xl text-center max-w-sm w-full shadow-xl">
                        <MdError className="text-red-500 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Order Failed!</h3>
                        <p className="text-gray-500 mb-6">
                            {cartItems.length === 0
                                ? "Your cart is empty."
                                : "Please fill all required fields."}
                        </p>

                        <button
                            onClick={closePopup}
                            className="w-full bg-[#FB2E86] text-white py-3 rounded-lg"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CheckOutM;
