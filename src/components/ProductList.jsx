import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setProducts(data);
      })
      .catch(() => console.log('Error'));
  }, []);
  

  const categories = useMemo(() => {
    const all = products.map((p) => p.category);
    console.log(all)
    return [...new Set(all)];
  }, [products]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => {
            c !== category
            console.log(c)
        });
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return products;
    return products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }, [products, selectedCategories]);

  return (
    <>
      <div className="filter-bar">
        <h3>Filter by Category:</h3>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
