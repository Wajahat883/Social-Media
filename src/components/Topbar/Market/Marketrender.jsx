import React from 'react';
import Sidebar from './SidebarMarket';
import MainContent from './MainContentMarket';
import { ProductProvider } from '../../../Context/Productcontext';

const Marketplace = () => {
  return (
    <ProductProvider>
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <MainContent />
      </div>
    </ProductProvider>
  );
};

export default Marketplace;
