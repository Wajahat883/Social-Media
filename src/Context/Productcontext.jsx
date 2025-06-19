import React, { createContext, useContext, useState } from 'react';
import {dummyProducts} from '../components/Topbar/Market/DummyMarket'; 

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('laptop');

  const products = dummyProducts[activeCategory] || [];

  return (
    <ProductContext.Provider value={{ products, activeCategory, setActiveCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
