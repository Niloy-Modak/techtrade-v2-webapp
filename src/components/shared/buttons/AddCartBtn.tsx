"use client"
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const AddCartBtn = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
      };

    return (
        <button onClick={handleClick} className='px-4 py-2 rounded-full
              bg-primary/90 text-white
              backdrop-blur-md
              hover:bg-primary
              text-sm font-medium cursor-pointer
              transition'>
           <ShoppingCart />
        </button>
    );
};

export default AddCartBtn;