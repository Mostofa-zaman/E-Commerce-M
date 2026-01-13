import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { RemoveItem, increaseQuantity, decreaseQuantity } from './slice/productSlice';

const CartD = () => {
  const cartItems = useSelector((state) => state.products.carItem);
  const dispatch = useDispatch();
  let handleRemove = (id) => {
    dispatch(RemoveItem(id));
  }
  let handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  }
  let handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 1;
      const discount = item.discountPercentage || 0;
      const finalPrice = price - (price * discount) / 100;
      return total + (finalPrice * quantity);
    }, 0);
  };
  const totalPrice = calculateTotal();

  return (
    <section className='py-12 lg:py-24 bg-white'>
      <div className="container mx-auto px-4 lg:w-9/12 w-11/12">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 w-full">
              <div className="hidden sm:grid grid-cols-12 gap-4 mb-8 text-[#1D3178] font-josefin font-bold text-[20px] pb-4">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="flex flex-col gap-8">
                {cartItems.map((item, index) => {
                  const originalPrice = item.price || 0;
                  const discount = item.discountPercentage || 0;
                  const finalPrice = originalPrice - (originalPrice * discount) / 100;
                  const itemTotal = finalPrice * (item.quantity || 1);

                  return (
                    <div key={index} className="flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center border-b border-[#E1E1E4] pb-6 last:border-0">
                      
                      {/* Product Info */}
                      <div className="col-span-6 w-full flex items-center gap-4">
                        <div className="relative group">
                          <div className="w-20 h-20 bg-[#E1E1E4] rounded-sm overflow-hidden flex justify-center items-center relative">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
                            {/* Delete Button */}
                            <div 
                                onClick={() => handleRemove(item.id)}
                                className="absolute top-0 right-0 w-4 h-4 bg-black text-white flex justify-center items-center rounded-full cursor-pointer  text-[10px]"
                            >
                              <RxCross2 />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[#000000] font-josefin text-[14px] font-normal leading-tight mb-1">{item.title}</h4>
                          <p className="text-[#A1ABCC] font-josefin text-[12px]">Color: Brown</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-[#151875] font-josefin text-[14px] w-full flex justify-between sm:justify-center">
                        <span className="sm:hidden font-bold">Price:</span>
                        ${finalPrice.toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-span-2 w-full flex justify-between sm:justify-center">
                        <span className="sm:hidden font-bold text-[#151875] font-josefin text-[14px]">Quantity:</span>
                        <div className="flex items-center bg-[#F0EFF2]">
                          <button 
                            onClick={() => handleDecrement(item.id)}
                            className="px-2 py-1 text-[#BEBFC2] hover:text-black cursor-pointer"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="w-8 text-center bg-transparent text-[#151875] font-josefin text-[13px] outline-none"
                          />
                          <button 
                            onClick={() => handleIncrement(item.id)}
                            className="px-2 py-1 text-[#BEBFC2] hover:text-black cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-2 text-[#151875] font-josefin text-[14px] font-bold w-full flex justify-between sm:justify-end">
                        <span className="sm:hidden font-bold">Total:</span>
                        ${itemTotal.toFixed(2)}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-8">
                <Link to={'/shop'} className="bg-[#FB2E86] text-white font-josefin text-[16px] px-6 py-2 rounded-xs hover:bg-[#F94C9B] transition-colors">Go to Shop</Link>
                <button className="bg-[#FB2E86] text-white font-josefin text-[16px] px-6 py-2 rounded-xs hover:bg-[#F94C9B] transition-colors">Clear Cart</button>
              </div>
            </div>

            {/* --- Right Side: Cart Totals --- */}
            <div className="lg:w-1/3 w-full mt-10 lg:mt-0">
              <div className="flex flex-col gap-8">
                <h2 className="text-[#151875] font-josefin font-bold text-[20px] text-center">Cart Totals</h2>
                <div className="bg-[#F4F4FC] p-8 rounded-[3px]">
                  <div className="flex justify-between items-center border-b border-[#E8E6F1] pb-3 mb-8">
                    <span className="text-[#1D3178] font-lato font-semibold text-[16px]">Subtotals:</span>
                    <span className="text-[#151875] font-lato text-[16px]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E8E6F1] pb-3 mb-8">
                    <span className="text-[#1D3178] font-lato font-semibold text-[16px]">Totals:</span>
                    <span className="text-[#151875] font-lato text-[16px]">${totalPrice.toFixed(2)}</span>
                  </div>

                  <p className="text-[#8A91AB] text-[12px] font-lato mb-6 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#19D16F]"></span>
                    Shipping & taxes calculated at checkout
                  </p>

                  <Link to="/checkout" className="block w-full text-center bg-[#19D16F] text-white font-lato font-bold text-[14px] py-3 rounded-[3px] hover:bg-[#15b35d] transition-colors">
                    Proceed To Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-[#151875] font-josefin font-bold text-[24px] mb-4">Your Cart is Empty!</h2>
            <Link to="/shop" className="bg-[#FB2E86] text-white font-josefin px-6 py-3 rounded hover:bg-[#F94C9B]">Go to Shop</Link>
          </div>
        )}

      </div>
    </section>
  )
}

export default CartD