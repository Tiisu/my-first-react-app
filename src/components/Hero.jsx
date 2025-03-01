import React from 'react'
import reactLogo from '../assets/react.svg'
import backgroundImage from '../assets/bgimage.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to Our Clothing Shop</h1>
            <p className="text-lg md:text-xl mb-6 text-center">Discover the latest trends in fashion</p>
            <div className="flex mb-6">
                <Link  to="/shop">
                <button className="p-3 md:p-4 bg-blue-500 rounded-full">Shop Now!!!</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Hero
