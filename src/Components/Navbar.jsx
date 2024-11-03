import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="max-w-[95%] mx-auto px-32 bg-[#9538E2] rounded-t-2xl text-white">
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
                            <li><Link to="/Statistics">Statistics</Link></li>
                            <li><Link to="/Dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Statistics">Statistics</Link></li>
                        <li><Link to="/Dashboard">Dashboard</Link></li>
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