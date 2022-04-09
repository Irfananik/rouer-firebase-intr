import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
            <div className="hidden md:block">
                <Link to='/' className="font-serif font-bold text-3xl text-gray-600">Travel World</Link>
            </div>
            <div className="text-xl flex gap-4">
                <NavLink className={({ isActive }) => isActive ? "text-gray-600" : "text-slate-400"} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-gray-600" : "text-slate-400"} to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;