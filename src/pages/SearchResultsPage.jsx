import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SearchResultsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`https://fakestoreapi.com/products`);
                if (!res.ok) throw new Error('Failed to fetch products');
                const data = await res.json();
                const filteredProducts = data.filter(product =>
                    product.title.toLowerCase().includes(query.toLowerCase()) ||
                    product.description.toLowerCase().includes(query.toLowerCase())
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchProducts();
        }
    }, [query]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
                
                {loading && <p>Loading...</p>}
                
                {error && <p className="text-red-500">{error}</p>}
                
                {!loading && !error && products.length === 0 && (
                    <p>No products found matching your search.</p>
                )}
                
                {!loading && !error && products.length > 0 && (
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
        </>
    );
};

export default SearchResultsPage;