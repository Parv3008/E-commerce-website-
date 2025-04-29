import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.scss";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="container">
        <div className="navbar">
          <h2 className="logo">TrendyCart</h2>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Cart
          </button>
        </div>
        <ProductList />
        <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            ✖
          </button>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
