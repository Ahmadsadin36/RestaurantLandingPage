import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags }) => (
  <div className=' flex flex-col items-center justify-center w-full h-full '>
    <div className=' flex flex-row items-center justify-start w-full'>
    <div className=' flex w-2/3 flex-col items-start justify-start p-3'>
      <h2 className=' w-full text-sm md:text-lg'>{title}</h2>
      <span className=' w-full text-xs'>{tags}</span> 
    </div>
    <div className='flex flex-1 w-[100px] h-[0.2px] bg-white mx-3'></div>
    <div className=' flex flex-1 p-3'>
      <p className=' text-white'>{price}</p>
    </div>
    </div>
  </div>
);

export default MenuItem;
