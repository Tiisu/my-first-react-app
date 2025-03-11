import React, { useContext, useState } from 'react';
import reactLogo from '../assets/react.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <nav className="bg-transparent shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center w-full p-4">
                <div className="font-bold text-2xl items-center align-middle flex mb-4 md:mb-0">
                    <img src={reactLogo} alt="React Logo" className="h-8 mr-2" />
                    <h1> Odin <span>Shop</span></h1>
                </div>
                <form onSubmit={handleSearch} className="w-full md:w-auto flex-2 text-center mb-4 md:mb-0">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..." 
                        className="w-full md:w-3/5 p-2 border rounded" 
                    />
                </form>
                <div className="w-full md:w-auto flex-1 flex justify-center md:justify-end items-center font-semibold text-lg">
                    <Link to="/" className="mx-2">Home</Link>
                    <Link to="/shop" className="mx-2">Shop</Link>
                    <Link to="/cart" className="relative">
                        <img src={reactLogo} alt="Cart" className="h-8 ml-2" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;