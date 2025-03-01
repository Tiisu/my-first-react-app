import React from 'react'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-transparent shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center w-full p-4">
                <div className="font-bold text-2xl items-center align-middle flex mb-4 md:mb-0">
                    <img src={reactLogo} alt="React Logo" className="h-8 mr-2" />
                    <h1> Odin <span>Shop</span></h1>
                </div>
                <div className="w-full md:w-auto flex-2 text-center mb-4 md:mb-0">
                    <input type="text" placeholder="Search..." className="w-full md:w-3/5 p-2 border rounded" />
                </div>
                <div className="w-full md:w-auto flex-1 flex justify-center md:justify-end items-center font-semibold text-lg">
                    <Link to="/" className="mx-2">Home</Link>
                    <Link to="/shop" className="mx-2">Shop</Link>
                    <img src={reactLogo} alt="Cart" className="h-8 ml-2" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar