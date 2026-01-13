import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts } from './slice/productSlice';

const ProductsD = () => {
    let { id } = useParams();
    let [singleProduct, setSingleProduct] = useState({});
    let [activeImg, setActiveImg] = useState("");
    const originalPrice = singleProduct?.price || 0;
    const discount = singleProduct?.discountPercentage || 0;
    const discountAmount = (originalPrice * discount) / 100;
    const finalPrice = originalPrice - discountAmount;
    let dispatch = useDispatch();
    let handleCart = (item) => {
        dispatch(AllProducts({...item, quantity:1}));
    }
    let getSingleProduct = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setSingleProduct(res.data);
                setActiveImg(res.data.thumbnail);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getSingleProduct();
    }, [id])
    if (!singleProduct) {
        return <div className="text-center py-20 text-[#151875] font-bold text-2xl">Loading...</div>;
    }
    const renderStars = (rating) => {
        const totalStars = 5;
        return (
            <div className="flex gap-1 text-[#FFC416] text-[14px]">
                {[...Array(totalStars)].map((_, index) => (
                    <FaStar key={index} className={index < Math.round(rating) ? "text-[#FFC416]" : "text-gray-300"} />
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="bg-white py-12 lg:py-24">
                <div className="container mx-auto px-4 lg:w-9/12 w-11/12 shadow-[0px_0px_25px_10px_#F6F4FD] bg-white p-4 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2 w-full flex flex-col-reverse lg:flex-row gap-4">
                            <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
                                {singleProduct.images?.slice(0, 4).map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveImg(img)}
                                        className={`w-20 h-20 bg-[#F6F7FB] p-2 cursor-pointer border hover:border-[#FB2E86] transition-all duration-300 ${activeImg === img ? 'border-[#FB2E86]' : 'border-transparent'}`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 bg-[#F6F7FB] h-75 lg:h-121.75 flex justify-center items-center p-5 rounded-md">
                                <img src={activeImg || singleProduct.thumbnail} alt={singleProduct.title} className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* Right Side - Details */}
                        <div className="lg:w-1/2 w-full pt-5">
                            <h2 className="text-[#0D134E] text-[36px] font-bold font-josefin mb-3">
                                {singleProduct.title}
                            </h2>

                            <div className="flex items-center gap-2 mb-4">
                                {renderStars(singleProduct.rating)}
                                <span className="text-[#151875] text-[14px] font-josefin">({singleProduct.rating})</span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[#151875] text-[16px] font-bold font-josefin">
                                    ${finalPrice.toFixed(2)}
                                </span>
                                <span className="text-[#FB2E86] text-[16px] line-through font-josefin">
                                    ${singleProduct.price}
                                </span>
                            </div>

                            <p className="text-[#0D134E] font-semibold text-[16px] font-josefin mb-2">Description</p>
                            <p className="text-[#A9ACC6] text-[16px] font-lato leading-7 mb-8 text-justify">
                                {singleProduct.description}
                            </p>

                            {/* Add To Cart Section */}
                            <div className="flex items-center gap-6 mb-8">
                                <Link onClick={() => handleCart(singleProduct)} to={'/cart'} className="text-[#151875] font-josefin font-bold text-[16px] px-8 py-3 bg-transparent border  border-[#151875] hover:bg-[#FB2E86] hover:text-[#FFFF] transition-all duration-300 shadow-none cursor-pointer">
                                    Add To Cart
                                </Link>
                                <button className="text-[#151875] hover:text-[#FB2E86] transition-colors cursor-pointer">
                                    <FaHeart size={20} />
                                </button>
                            </div>

                            {/* Meta Info: Category & Brand */}
                            <div className="flex flex-col gap-3 mt-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#151875] font-bold font-josefin text-[16px]">Brand:</span>
                                    <span className="text-[#A9ACC6] font-lato text-[16px] capitalize">{singleProduct.brand || "No Brand"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#151875] font-bold font-josefin text-[16px]">Category:</span>
                                    <span className="text-[#A9ACC6] font-lato text-[16px] capitalize">{singleProduct.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-10 mt-5">
                    <div className="lg:w-9/12 w-11/12 mx-auto p-4 lg:p-10 bg-white shadow-[0px_0px_25px_10px_#F6F4FD]">
                        <h3 className="text-[#0D134E] font-josefin font-bold text-2xl mb-6">Reviews</h3>

                        <div className="flex flex-col gap-8">
                            {singleProduct.reviews && singleProduct.reviews.length > 0 ? (
                                singleProduct.reviews.map((review, index) => (
                                    <div key={index} className="border-b border-[#E0D3F5] pb-6 last:border-0 last:pb-0">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                            <div className="flex items-center gap-4">
                                                <h4 className="text-[#151875] font-josefin font-bold text-[18px] capitalize">
                                                    {review.reviewerName}
                                                </h4>
                                                <span className="text-[#A9ACC6] font-lato text-[14px]">
                                                    {new Date(review.date).toDateString()}
                                                </span>
                                            </div>
                                            <div className="mt-2 sm:mt-0">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                        <p className="text-[#A9ACC6] font-lato text-[16px] leading-7 mt-2">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-[#151875] font-lato text-[16px]">No reviews yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsD