import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  RemoveItem,
  increaseQuantity,
  decreaseQuantity,
} from "./slice/productSlice";

const CartD = () => {
  const cartItems = useSelector((state) => state.products.carItem);
  const dispatch = useDispatch();

  /* ---------------- handlers ---------------- */
  const handleRemove = (id) => dispatch(RemoveItem(id));
  const handleIncrement = (id) => dispatch(increaseQuantity(id));
  const handleDecrement = (id) => dispatch(decreaseQuantity(id));

  /* ---------------- price utils ---------------- */
  const getFinalPrice = (price = 0, discount = 0) =>
    price - (price * discount) / 100;

  const totalPrice = cartItems.reduce((total, item) => {
    const finalPrice = getFinalPrice(item.price, item.discountPercentage);
    return total + finalPrice * (item.quantity || 1);
  }, 0);

  /* ---------------- UI ---------------- */
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="w-11/12 max-w-6xl mx-auto">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex-1">

              {/* Header */}
              <div className="hidden sm:grid grid-cols-12 mb-6 pb-3 border-b
                              text-[#1D3178] font-josefin font-bold
                              text-lg lg:text-xl">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-6">
                {cartItems.map((item) => {
                  const finalPrice = getFinalPrice(
                    item.price,
                    item.discountPercentage
                  );

                  const itemTotal = finalPrice * (item.quantity || 1);

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col sm:grid sm:grid-cols-12
                                 gap-4 items-center border-b pb-5"
                    >
                      {/* Product */}
                      <div className="col-span-6 w-full flex gap-4 items-center">
                        <div className="relative">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-20 h-20 object-contain bg-gray-100 rounded"
                          />

                          <button
                            onClick={() => handleRemove(item.id)}
                            className="absolute -top-2 -right-2
                                       w-5 h-5 rounded-full bg-black text-white
                                       flex items-center justify-center text-xs"
                          >
                            <RxCross2 />
                          </button>
                        </div>

                        <div>
                          <h4 className="text-sm lg:text-base text-black font-josefin">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-400">
                            Color: Brown
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 w-full flex justify-between sm:justify-center text-sm">
                        <span className="sm:hidden font-semibold">
                          Price:
                        </span>
                        ${finalPrice.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 w-full flex justify-between sm:justify-center">
                        <span className="sm:hidden font-semibold">
                          Qty:
                        </span>

                        <div className="flex items-center bg-gray-100 rounded">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="px-3 py-1 hover:bg-gray-200"
                          >
                            −
                          </button>

                          <span className="px-3 text-sm">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="px-3 py-1 hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-2 w-full flex justify-between sm:justify-end font-semibold text-sm">
                        <span className="sm:hidden">Total:</span>
                        ${itemTotal.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                <Link
                  to="/shop"
                  className="bg-[#FB2E86] text-white px-6 py-2 text-center
                             rounded hover:bg-pink-600 transition"
                >
                  Continue Shopping
                </Link>

                <button
                  className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:w-80 w-full">
              <div className="bg-[#F4F4FC] p-6 rounded">

                <h2 className="text-center font-josefin font-bold
                               text-lg lg:text-xl mb-6">
                  Cart Totals
                </h2>

                <div className="flex justify-between mb-4 border-b pb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-6 border-b pb-2 font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <p className="text-xs text-gray-500 mb-6">
                  Shipping & taxes calculated at checkout
                </p>

                <Link
                  to="/checkout"
                  className="block text-center bg-[#19D16F] text-white
                             py-3 rounded font-semibold
                             hover:bg-green-600 transition"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ================= EMPTY ================= */
          <div className="text-center py-20">
            <h2 className="text-xl font-bold mb-4">
              Your Cart is Empty!
            </h2>

            <Link
              to="/shop"
              className="bg-[#FB2E86] text-white px-6 py-3 rounded
                         hover:bg-pink-600 transition"
            >
              Go To Shop
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartD;
