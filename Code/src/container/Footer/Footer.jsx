import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter, SubHeading } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <footer className=' w-full bg-black flex flex-col items-center justify-center p-3 mt-8'>
    <Newsletter />
    <div className=' w-[80%] flex items-center justify-center md:flex-row flex-col mt-3'>
      <div className=' flex-1 flex flex-col items-center justify-center text-white'>
        <h2>Lorem, ipsum.</h2>
        <address className=' text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi.</address>
        <p>+1 1236542125</p>
        <p>+39 4568422354</p>
      </div>
      <div className=' flex-1 flex flex-col items-center justify-center text-white'>
        <img className=' w-1/2' src= {images.gericht} alt="" />
        <SubHeading title='Social Media' />
        <div className=' flex flex-row items-center justify-center'>
          <FiFacebook className=' text-white text-2xl mr-2 cursor-pointer' />
          <FiTwitter className=' text-white text-2xl mr-2 cursor-pointer' />
          <FiInstagram className=' text-white text-2xl cursor-pointer' />
          </div> 
      </div>
      <div className=' flex-1 flex flex-col items-center justify-center text-white'>
        <h2 className=' my-2'>Working hours</h2>
        <p>Monday - Friday: 09:00 - 17:00</p>
        <p>Saturday: 10:00 - 15:00</p>
      </div>
    </div>
    <div className=' flex flex-row items-center justify-center text-yellow-600 mt-8'>
      <p> Developed by <a className=' text-white transition duration-150 hover:text-yellow-600' href="https://github.com/Ahmadsadin36">Ahmad Sadin</a></p>
      <div className=' mx-2'>|</div>
      <p> All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
