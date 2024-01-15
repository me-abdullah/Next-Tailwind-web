"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

interface TiltProps {
  options: VanillaTilt.Options;
  className: string;
  children: React.ReactNode;
}

const Tilt: React.FC<TiltProps> = ({ options, className, children }) => {
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);

  return (
    <div ref={tilt} className={className}>
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const options: VanillaTilt.Options = {
    speed: 400,
    max: 25,
  };

  return (
    <div className="py-16 px-10 space-y-5">
      {/* Heading */}
      <div className="text-center space-y-3">
        <p className="text-custom text-sm tracking-widest">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold customfont">
          Our Promotions Events
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-800 mx-auto">
        {/* first grid */}
        <Tilt
          className="w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cat1 px-12 box"
          options={options}
        >
          <div className="max-w-[13rem] py-8">
            <h4 className="customfont text-3xl font-extrabold">
              GET UP TO 60%
            </h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-64">
            <Image
              src="/assest/h1.png"
              width={1500}
              height={1500}
              alt="summer season"
            />
          </div>
        </Tilt>

        {/* second grid */}
        <Tilt
          className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-gray-200 box"
          options={options}
        >
          {/* text */}
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>

          {/* image */}
          <div className="w-64">
            <Image
              src="/assest/h2.png"
              alt="sweaters"
              width={1000}
              height={1000}
            />
          </div>
        </Tilt>

        {/* third grid */}
        <Tilt
          className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat4 box"
          options={options}
        >
          {/* text */}
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>

          {/* image */}
          <div className="w-64">
            <Image
              src="/assest/h3.png"
              alt="sweaters"
              width={1000}
              height={1000}
            />
          </div>
        </Tilt>

        {/* fourth grid */}
        <Tilt
          className="py-9 text-white w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center space-y-3 box"
          options={options}
        >
          <h3 className="font-extrabold text-4xl customfont">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
            aria-label="Redirect user to Dine Week End Sale"
            className="py-1 px-8 text-lg font-medium bg-[#474747] rounded-lg tracking-widest"
          >
            JORDANWEEKENDSALE
          </button>
        </Tilt>
      </div>
    </div>
  );
};

export default About;
