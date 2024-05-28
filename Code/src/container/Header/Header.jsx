import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

import './Header.css';

const Header = () => (
  <header className=' w-full p-3 flex flex-col md:flex-row items-center justify-start bg-black mt-8' id='home'>
    <div className=' w-full md:flex-1 flex flex-col justify-start items-start md:mr-5 text-white'>
      <SubHeading title="Welcome to our restaurant" />
      <h1 className=' w-full tracking-wide text-yellow-600 mb-4 font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, veniam.</h1>
      <p className=' mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus ab ipsam similique iure accusantium hic enim excepturi rem vitae.</p>
      <button className=' text-black bg-slate-400 p-3 transition hover:shadow-sm hover:shadow-yellow-600'>Explore more</button>
    </div>
    <div className=' w-full md:flex-1 flex items-center justify-center md:justify-end mt-10 md:mt-0'>
      <img className=' md:w-[80%] w-[70%]' src= {images.welcome} alt="" />
    </div>
  </header>
);

export default Header;
