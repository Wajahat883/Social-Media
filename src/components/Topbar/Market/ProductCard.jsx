import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white rounded shadow border">
    <img src={product.image} className="w-full h-48 object-cover" alt={product.title} />
    <div className="p-4">
      <h3 className="text-lg font-bold">PKR {product.price.toLocaleString()}</h3>
      <p className="text-sm text-gray-700">{product.title}</p>
      <p className="text-xs text-gray-500">{product.location}</p>
    </div>
  </div>
);

export default ProductCard;
