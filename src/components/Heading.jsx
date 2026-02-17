import { MdOutlineMail, MdOutlineWifiCalling3, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Heading = () => {
  const cart = useSelector((state) => state.products.carItem);

  return (
    <header className="py-2 bg-[#7E33E0]">
      <div className="w-[95%] sm:w-10/12 lg:w-9/12 mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

          {/* Left Section */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-6 text-white text-[12px] sm:text-[14px] md:text-[16px] font-josefin">

            <div className="flex items-center gap-2">
              <MdOutlineMail />
              <p className="break-all">mhhasanul@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineWifiCalling3 />
              <p>(12345)67890</p>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-5 text-white text-[12px] sm:text-[14px] md:text-[16px] font-josefin">

            <div className="flex items-center gap-2 cursor-pointer">
              <p>Login</p>
              <FaRegUser />
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <p>Wishlist</p>
              <MdOutlineFavoriteBorder />
            </div>

            <Link
              to="/cart"
              className="flex items-center gap-2 cursor-pointer relative"
            >
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#FB2E86] text-white text-[10px] sm:text-xs">
                  {cart.length}
                </span>
              )}

              <RiShoppingCartLine size={20} />
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Heading;
