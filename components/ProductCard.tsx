import React from 'react';
import ProductSlider from './ProductsSlider';

interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    name: 'Air Jordan 1 Mid SE',
    image: '/pitem1.jpg',
    description: "Women's Shoes",
    price: 135.0,
  },
  {
    name: 'Air Jordan 1 Elevate High SE',
    image: '/pitem2.jpg',
    description: "Women's Shoes",
    price: 155.5,
  },
  {
    name: 'Air Jordan 1 Elevate Low SE',
    image: '/pitem3.jpg',
    description: "Men's Shoes",
    price: 120.5,
  },
  {
    name: 'Jordan 1 Mid TD',
    image: '/pitem4.jpg',
    description: "Men's Football Cleat",
    price: 150.0,
  },
];

const ProductCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductSlider products={products} />
    </div>
  );
};

export default ProductCard;
