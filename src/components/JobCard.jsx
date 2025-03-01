import React from 'react'

const JobCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img src="path-to-image.jpg" alt="Product" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Title</div>
            <p className="text-gray-700 text-base">Product description goes here.</p>
            <p className="text-gray-900 text-lg font-semibold mt-2">$99.99</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default JobCard