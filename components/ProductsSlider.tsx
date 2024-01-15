"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ProductSliderProps {
  products: Product[];
}

interface SliderSettings extends SliderSettings {
  beforeChange: (current: number, next: number) => void;
}

const useClient = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  const onClientEntry = () => {
    setIsClient(true);
  };

  const onClientExit = () => {
    setIsClient(false);
  };

  return {
    isClient,
    onClientEntry,
    onClientExit,
  };
};

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const { isClient } = useClient();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  const handleChange = (current: number, next: number) => {
    if (isClient) {
      // Add a smooth animation when the user changes the slide
      setCurrentIndex(next);
    } else {
      // No animation on the server side
      setCurrentIndex(next);
    }
  };

  return (
    <div className="product-slider-container relative overflow-hidden">
      <Slider
        {...settings}
        className="product-slider overflow-hidden"
        beforeChange={handleChange}
      >
        {products.map((product, index) => (
          <div className="product-card p-4 mx-2" key={index}>
            <div className="product-image relative h-48 rounded-lg overflow-hidden">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <h3 className="product-name text-lg font-semibold mt-2">{product.name}</h3>
            <p className="product-description text-sm text-gray-600">{product.description}</p>
            <p className="product-price text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </Slider>
      <div className="dots absolute bottom-0 left-0 right-0 flex justify-center mt-3">
        {products.map((_, index) => (
          <div
            key={index}
            className={`dot w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-900 mx-1 ${
              index === currentIndex ? 'active bg-gray-900' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
