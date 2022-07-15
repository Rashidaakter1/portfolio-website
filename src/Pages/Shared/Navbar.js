import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold'><Link to='about'>About</Link></li>
                        <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold' tabindex="0">    <Link to='blogs'>Blogs</Link> </li>
                        <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold'><Link to='contacts'>Contact</Link></li>
                    </ul>
                </div>
                <Link className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold hover:ml-5 btn btn-ghost normal-case text-xl' to='/' ><img  style={{'width':'80px','height':'50px'}} src="https://t3.ftcdn.net/jpg/03/68/95/08/360_F_368950850_aMW6C9P5SV7udFGHWgz97fvgNVsnOvpp.jpg" alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold'><Link to='about'>About</Link></li>
                    <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold' tabindex="0"><Link to='blogs'>Blogs</Link> </li>
                    <li className='hover:scale-125 transition delay-600 ease-in-out hover:text-red-800 hover:font-bold'><Link to='contacts'>Contact</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;