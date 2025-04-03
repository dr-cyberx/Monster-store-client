import React, { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiOutlineShoppingCart,
    AiOutlineHeart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation: React.FC = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleSidebar = () => setShowSidebar(!showSidebar);
    const closeSidebar = () => setShowSidebar(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLoginMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall({}).unwrap(); // Pass an empty object or the required argument here
            dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav
            style={{ zIndex: 999 }}
            className={`${showSidebar ? "hidden" : "flex"
                } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[4%] hover:w-[15%] h-[100vh] fixed top-0`}
            id="navigation-container"
        >
            <div className="flex flex-col space-y-4">
                <Link
                    to={"/"}
                    className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                >
                    <AiOutlineHome className="mr-2 mt-[3rem] transition-all" size={26} />
                    <span className="hidden nav-item-name mt-[3rem] transition-all">
                        Home
                    </span>
                </Link>
                <Link
                    to={"/shop"}
                    className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                >
                    <AiOutlineShopping
                        className="mr-2 mt-[3rem] transition-all"
                        size={26}
                    />
                    <span className="hidden nav-item-name mt-[3rem] transition-all">
                        Shop
                    </span>
                </Link>
                <Link
                    to={"/cart"}
                    className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                >
                    <AiOutlineShoppingCart
                        className="mr-2 mt-[3rem] transition-all"
                        size={26}
                    />
                    <span className="hidden nav-item-name mt-[3rem] transition-all">
                        Cart
                    </span>
                </Link>
                <Link
                    to={"/favourite"}
                    className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                >
                    <AiOutlineHeart className="mr-2 mt-[3rem] transition-all" size={26} />
                    <span className="hidden nav-item-name mt-[3rem] transition-all">
                        Favourite
                    </span>
                </Link>
            </div>

            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-800  focus:outline-none"
                >
                    {userInfo ? (
                        <span className="text-white">{userInfo.username}</span>
                    ) : (
                        <></>
                    )}
                </button>
            </div>

            <ul>
                <li>
                    <Link
                        to={"/login"}
                        className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                    >
                        <AiOutlineLogin
                            className="mr-2 mt-[3rem] transition-all"
                            size={26}
                        />
                        <span className="hidden nav-item-name mt-[3rem] transition-all">
                            Login
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/register"}
                        className="flex items-center transition-transform transform hover:translate-x-2 !text-white"
                    >
                        <AiOutlineUserAdd
                            className="mr-2 mt-[3rem] transition-all"
                            size={26}
                        />
                        <span className="hidden nav-item-name mt-[3rem] transition-all">
                            Login
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
