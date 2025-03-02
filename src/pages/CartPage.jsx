import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import Navbar from '../components/Navbar';

const CartPage = () => {
    const { cart } = useContext(CartContext);

    return (
        <>  
        <Navbar />
            <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-bold">{item.title}</h2>
                                <p className="text-gray-700">${item.price}</p>
                                <p className="text-gray-700">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
        
    );
};

export default CartPage;