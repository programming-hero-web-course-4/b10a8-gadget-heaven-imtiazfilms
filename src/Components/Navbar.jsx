import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {
    const location = useLocation();
    const backgroundColor = location.pathname === "/Dashboard" ? "#F7F7F7" : "#9538E2";
    const color = location.pathname === "/Dashboard" ? "black" : "#FFFFFF"
    return (
        <div className="max-w-[95%] mx-auto px-32  rounded-t-2xl" style={{ backgroundColor, color }}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Home</Link></li>
                            <li><Link>Statistics</Link></li>
                            <li><Link to="/Dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl" >Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 font-medium gap-12">
                        <li><NavLink className={({ isActive }) =>
                            [
                                isActive ? "underline" : "hover:underline",
                            ]
                        } to="/">Home</NavLink></li>
                        <li><NavLink >Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            [
                                isActive ? "underline" : "hover:underline",
                            ]
                        } to="/Dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <Link className="bg-white p-2 rounded-full text-black"><BsCart4 /></Link>
                    <Link className="bg-white p-2 rounded-full text-black"><FaRegHeart /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;