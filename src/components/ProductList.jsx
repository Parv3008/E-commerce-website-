import React from 'react';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'Cool T-Shirt',
    price: 29.99,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UX679_.jpg',
  },
  {
    id: 2,
    title: 'Silver Ring',
    price: 15.5,
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 3,
    title: 'Leather Jacket',
    price: 59.0,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Women’s Dress',
    price: 34.9,
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
