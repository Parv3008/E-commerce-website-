import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="100%" height="200px" />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
