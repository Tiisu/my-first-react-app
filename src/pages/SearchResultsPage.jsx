import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products`);
                const data = await res.json();
                const filteredProducts = data.filter(product =>
                    product.title.toLowerCase().includes(query.toLowerCase())
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.log('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, [query]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{product.title}</div>
                                <p className="text-gray-700 text-base">{product.description}</p>
                                <p className="text-gray-900 text-lg font-semibold mt-2">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;