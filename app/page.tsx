"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import ImageSlider from '../components/ImageSlider';
import About from '../components/about';
import Blog from '../components/Blog';
import Contact from '../components/contact';
import Nutshell from '../components/nutshell';
import Design from '../components/design';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import TestimonialSlider from '../components/TestimonialSlider';
import ProductCard from '../components/ProductCard';
import LogoSlider from '../components/LogoSlider';
import Quote from '../components/Quote';

const Home: React.FC = () => {
  const [isScaling, setIsScaling] = useState<boolean>(false);

  return (
    <>
      <Design />
      <Navbar />
      <Cursor scaling={isScaling} />
      <ImageSlider />
      <About />
      <ProductCard />
      <Quote />
      <Counter />
      <TestimonialSlider />
      <Blog/>
      <LogoSlider />
      <Nutshell />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
