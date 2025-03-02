import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';

const DisplayAllJobs = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantities, setQuantities] = useState({});
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => { 
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                const initialQuantities = {};
                data.forEach(product => {
                    initialQuantities[product.id] = 0;
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.log('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleIncrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    };

    const handleDecrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] - 1, 0)
        }));
    };

    const handleInputChange = (id, value) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue) && newValue >= 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: newValue
            }));
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product, quantities[product.id]);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">{product.description}</p>
                        <p className="text-gray-900 text-lg font-semibold mt-2">${product.price}</p>
                        <div className="flex items-center mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleDecrement(product.id)}
                            >
                                ---
                            </button>
                            <input
                                type="number"
                                className="mx-2 text-center w-12"
                                value={quantities[product.id]}
                                onChange={(e) => handleInputChange(product.id, e.target.value)}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleIncrement(product.id)}
                            >
                                +++
                            </button>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayAllJobs;