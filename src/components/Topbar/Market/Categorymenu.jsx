import React from 'react';
import { useProducts } from '../../../Context/Productcontext';

const CategoryMenu = () => {
  const { activeCategory, setActiveCategory } = useProducts();

  const categories = ['computerparts', 'mobile', 'laptop', 'perfume', 'tshirt'];

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Categories</h2>
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border ${
              activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
