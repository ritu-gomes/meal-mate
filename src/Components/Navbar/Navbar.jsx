import React, { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import logo from './logo_transparent.png';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    // const {user} = useContext(AuthContext);
    // console.log("user from nav", user.email);
    // const[loggedIn,setLoggedIn] = useState();
    const locData = localStorage.getItem('logged');

    // if(locData == true){
    //     setLoggedIn(true);
    // }
    console.log(locData);
    // console.log(loggedIn);

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="bg-emerald-900 text-white p-4">
            <div className="flex justify-between items-center mx-12">
                <div>
                    <Link to="/">
                        <div className="flex items-center bg-fuchsia-200 px-3 py-1 rounded-md">
                            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                            <span className="text-emerald-900 text-lg font-semibold">Meal Mate</span>
                        </div>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="text-xl" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
                    <ul
                    className={`md:flex md:space-x-4 ${menuActive ? "block" : "hidden"} mt-4 md:mt-0 items-center`}
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu_plan">Meal-Plan</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/caloriecalculator">Calorie-Calculator</Link></li>
                        <Link to="/login"><button className='btn bg-fuchsia-950 text-white hover:text-gray-950 font-bold px-8'>Login</button></Link>
                        {
                            locData && <button onClick={() => localStorage.removeItem("logged")} className='btn bg-fuchsia-950 text-white hover:text-gray-950 font-bold px-8'>LogOut</button>
                        }
                        
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;