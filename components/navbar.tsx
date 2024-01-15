"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsHeart, BsCart2 } from 'react-icons/bs';
import Link from 'next/link'
export default function Navbar(): JSX.Element {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = (): void => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <>   
    <div className={shadow ? 'fixed w-full h-20 shadow-lg z-[100] border-b-4 border-red-600 bg-white bg-opacity-40 py-2 backdrop-blur-md transition-all duration-300 ease-in-out dark:bg-slate-700 dark:bg-opacity-40' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-evenly items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/assest/logo.png" alt="/" width='125' height='50' />

        <div className='customfont NewAnimate'>
          <ul className='hidden md:flex font-bold uppercase'>
            <a href='/'>
              <li className='ml-10 text-sm hover:hover:text-custom'>Men</li>
            </a>
            <a href='/#about'>
              <li className='ml-10 text-sm  hover:hover:text-custom'>Women</li>
            </a>
            <a href='/#skills'>
              <li className='ml-10 text-sm hover:hover:text-custom'>Kids</li>
            </a>
            <Link href='/#products'>
              <li className='ml-10 text-sm  hover:hover:text-custom'>All Products</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <input
          type="text"
          className="border text-gray-600 focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
          placeholder="Search in Our Store"
        />
     
          <BsCart2 size={24} className="hover:text-custom" />
          <BsHeart size={24} className="hover:text-custom" />
   
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[100%] top-0  p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/assest/logo.png" alt="/" width='87' height='35' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Lets Build Something Special Together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <a href='/'>
                <li className='py-4 text-sm'>Home</li>
              </a>
              <a href='/#about'>
                <li className='py-4 text-sm'>About</li>
              </a>
              <a href='/#skills'>
                <li className='py-4 text-sm'>Skills</li>
              </a>
              <a href='/#projects'>
                <li className='py-4 text-sm'>Projects</li>
              </a>
              <a href='/#contact'>
                <li className='py-4 text-sm'>Contact</li>
              </a>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-custom'>Lets Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:2-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}