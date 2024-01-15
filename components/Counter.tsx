"use client";
import React from 'react';
import { useState } from 'react';
import { FaShippingFast, FaShoppingCart, FaBoxOpen, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
function Counter() {
  const [countingFinished, setCountingFinished] = useState<boolean>(false);

  const handleComplete = () => {
    setCountingFinished(true);
  };

  return (

    <section className="customfont">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
              <FaShippingFast className="text-custom w-12 h-12 mb-3 inline-block icon icon-bounce" />
              <h2 className="title-font font-medium text-3xl">
                <CountUp end={150} duration={7} className="text-custom" />
              </h2>
              <p className="leading-relaxed text-black">Daily Shipping</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
              <FaUsers className="text-custom w-12 h-12 mb-3 inline-block icon icon-bounce" />
              <h2 className="title-font font-medium text-3xl">
                <CountUp end={1000} duration={5} className="text-custom" onEnd={handleComplete} />
                {countingFinished && <span className="plus-sign text-custom">+</span>}
              </h2>
              <p className="leading-relaxed">Customers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
              <FaShoppingCart className="text-custom w-12 h-12 mb-3 inline-block icon icon-bounce" />
              <h2 className="title-font font-medium text-3xl">
                <CountUp end={300} duration={7} className="text-custom" /></h2>
              <p className="leading-relaxed text-black">Daily Orders</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
              <FaBoxOpen className="text-custom w-12 h-12 mb-3 inline-block icon icon-bounce" />
              <h2 className="title-font font-medium text-3xl">
                <CountUp end={50} duration={10} className="text-custom" />
              </h2>
              <p className="leading-relaxed text-black">Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Counter;