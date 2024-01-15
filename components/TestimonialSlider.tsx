"use client";
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenLite, Power3 } from "gsap";

import leftArrow from '../public/assest/arrow-left.svg';
import rightArrow from '../public/assest/arrow-right.svg';
gsap.config({ nullTargetWarn: false });
const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: "/image3.jpg",
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: "/image.jpg",
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: "/image2.jpg",
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

const TestimonialsCarousel: React.FC = () => {
  let imageList = useRef<HTMLUListElement>(null);
  let testimonialList = useRef<HTMLUListElement>(null);
  const imageWidth = 340;
 

  
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    if (testimonialList.current && testimonialList.current.children[0]) {
      TweenLite.to(testimonialList.current.children[0], 0, {
        opacity: 1,
      });
    }
  }, []);

  //Image transition
  const slideLeft = (index: number, duration: number, multiplied = 1) => {
    gsap.to(imageList.current!.children[index], {
      x: -imageWidth * multiplied,
      duration,
      ease: Power3.easeOut,
    });
  };


  const slideRight = (index: number, duration: number, multiplied = 1) => {
    gsap.to(imageList.current!.children[index], {
      x: imageWidth * multiplied,
      duration,
      ease: Power3.easeOut,
    });
  };

  const scale = (index: number, duration: number) => {
    gsap.from(imageList.current!.children[index], {
      scale: 1.2,
      duration,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index: number, duration: number) => {
    if (testimonialList.current) {
      TweenLite.to(testimonialList.current.children[index], duration, {
        opacity: 0,
      });
    }
  };

  const fadeIn = (index: number, duration: number) => {
    gsap.to(testimonialList.current!.children[index], {
      opacity: 1,
      duration,
      delay: 1,
    });
  };


  const nextSlide = () => {
    if (imageList.current) {
      if (imageList.current.children[0].classList.contains('active')) {
        setState({ isActive1: false, isActive2: true, isActive3: false });
        //Image transition
        slideLeft(0, 1);
        slideLeft(1, 1);
        scale(1, 1);
        slideLeft(2, 1);
        slideLeft(2, 0);
        fadeOut(0, 1);
        fadeIn(1, 1);
      } else if (imageList.current.children[1].classList.contains('active')) {
        setState({ isActive1: false, isActive2: false, isActive3: true });
        //Image transition
        slideRight(0, 1);
        slideLeft(1, 1, 2);
        slideLeft(2, 1, 2);
        scale(2, 1);
        //content transition
        fadeOut(1, 1);
        fadeIn(2, 1);
      } else if (imageList.current.children[2].classList.contains('active')) {
        setState({ isActive1: true, isActive2: false, isActive3: false });
        //Image transition
        slideLeft(2, 1, 3);
        slideLeft(0, 1, 0);
        slideLeft(1, 0, 0);
        scale(0, 1);
        //content transition
        fadeOut(2, 1);
        fadeIn(0, 1);
      }
    }
  };

  const prevSlide = () => {
    if (imageList.current) {
      if (imageList.current.children[0].classList.contains('active')) {
        setState({ isActive1: false, isActive2: false, isActive3: true });
        //Image transition
        slideLeft(2, 0, 3);
        slideLeft(2, 1, 2);
        scale(2, 1);
        slideRight(0, 1);
        slideRight(1, 1);
        //content transition
        fadeOut(0, 1);
        fadeIn(2, 1);
      } else if (imageList.current.children[1].classList.contains('active')) {
        setState({ isActive1: true, isActive2: false, isActive3: false });
        //Image transition
        slideLeft(0, 0);
        slideRight(0, 1, 0);
        slideRight(1, 1, 0);
        slideRight(2, 1, 2);
        scale(0, 1);
        //content transition
        fadeOut(1, 1);
        fadeIn(0, 1);
      } else if (imageList.current.children[2].classList.contains('active')) {
        setState({ isActive1: false, isActive2: true, isActive3: false });
        slideLeft(2, 1);
        slideLeft(1, 0, 2);
        slideLeft(1, 1);
        scale(1, 1);
        //content transition
        fadeOut(2, 1);
        fadeIn(1, 1);
      }
    }
  };

  return (
    <div className="testimonial-section customfont">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow.src} alt="left arrow" className='text-custom' />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={imageList}>
              <li className={state.isActive1 ? 'active' : ''}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? 'active' : ''}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li className={state.isActive3 ? 'active' : ''}>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={testimonialList}>
              <li className={state.isActive1 ? 'active' : ''}>
                <div className="content-inner">
                  <p className="quote ">{testimonials[0].quote}</p>
                  <h3 className="name text-custom">{testimonials[0].name}</h3>
                  <h4 className="title text-custom">{testimonials[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? 'active' : ''}>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name text-custom">{testimonials[1].name}</h3>
                  <h4 className="title text-custom">{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? 'active' : ''}>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name text-custom">{testimonials[2].name}</h3>
                  <h4 className="title text-custom">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right text-custom" onClick={nextSlide}>
          <img src={rightArrow.src} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
