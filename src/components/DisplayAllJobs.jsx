import React from 'react';

const products = [
    { id: 1, title: 'Product 1', description: 'Description for product 1', price: 99.99, image: 'path-to-image1.jpg' },
    { id: 2, title: 'Product 2', description: 'Description for product 2', price: 89.99, image: 'path-to-image2.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    { id: 3, title: 'Product 3', description: 'Description for product 3', price: 79.99, image: 'path-to-image3.jpg' },
    // Add more products as needed
];

const DisplayAllJobs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">{product.description}</p>
                        <p className="text-gray-900 text-lg font-semibold mt-2">${product.price}</p>
                        <div className="flex items-center mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                ---
                            </button>
                            <input
                                type="number"
                                className="mx-2 text-center w-12"
                                value={0} // Dummy value
                                readOnly
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                +++
                            </button>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayAllJobs;