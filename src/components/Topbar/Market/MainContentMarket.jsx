import React from 'react';
import Header from './HeaderMarketPlace';
import ProductCard from './ProductCard';
import { useProducts } from '../../../Context/Productcontext';
import CategoryMenu from './Categorymenu';

const MainContent = () => {
  const { products } = useProducts();

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <Header />
      <CategoryMenu />

      {products.length === 0 ? (
        <p className="text-gray-500 mt-6">No products in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;
