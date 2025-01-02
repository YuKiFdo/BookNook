'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/img/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-primary rounded-t-lg">
      <div className="flex items-center justify-between px-4 py-6 mx-4 sm:px-6 lg:px-24 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt='logo' />
          <h1 className='font-prosto text-base sm:text-lg'>BookNook</h1>
        </div>

        <ul className="hidden sm:flex gap-8 text-base font-medium absolute left-1/2 transform -translate-x-1/2">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Browse</li>
          <li className="hover:text-gray-600 cursor-pointer">About Us</li>
          <li className="hover:text-gray-600 cursor-pointer">Request a book</li>
        </ul>

        <button className='hidden sm:flex bg-primarybtn h-auto rounded-md justify-center px-6 py-3 border border-black/75 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] font-semibold text-btntext text-base hover:opacity-90'>
          Sign In
        </button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div 
        className={`sm:hidden absolute top-full left-0 right-0 bg-primary shadow-lg transform transition-transform duration-200 ease-in-out rounded-b-lg
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <ul className="flex flex-col text-center py-4 px-6 space-y-4">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Browse</li>
          <li className="hover:text-gray-600 cursor-pointer">About Us</li>
          <li className="hover:text-gray-600 cursor-pointer">Request a book</li>
          <li>
            <button className='w-full bg-primarybtn rounded-md px-6 py-3 border border-black/75 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] font-semibold text-btntext text-base hover:opacity-90'>
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;