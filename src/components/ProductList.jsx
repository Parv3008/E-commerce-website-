import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => console.log("Error fetching products"));
  }, []);

  const categories = useMemo(() => {
    const all = products.map((p) => p.category);
    return [...new Set(all)];
  }, [products]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = useMemo(() => {
    let temp = [...products];

    if (selectedCategories.length > 0) {
      temp = temp.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (sortOrder === "low-to-high") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      temp.sort((a, b) => b.price - a.price);
    }

    return temp;
  }, [products, selectedCategories, sortOrder]);

  return (
    <>
      <div className="filter-sort-container">
        <div className="filter-bar">
          <h3>Filter by Category:</h3>
          {categories?.map((category) => (
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

        <div className="sort-options">
          <div className="sort-container">
            <label htmlFor="sort" className="sort-label">
              Sort by Price:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Default</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
