import './App.css'
import React from 'react';
import FilterBar from './components/FilterBar';
import SortOptions from './components/SortOptions';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      <h1>🛒 E-Commerce Product Listing</h1>
      <FilterBar />
      <SortOptions />
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
