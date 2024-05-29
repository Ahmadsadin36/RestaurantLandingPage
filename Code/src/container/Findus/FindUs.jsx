import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <section className=' w-full flex flex-col md:flex-row items-center justify-start p-3 mt-8 bg-black' id='contact'>
    <div className=' flex-1 flex justify-start items-start flex-col text-white'>
      <SubHeading title='Contact' />
      <h1 className=' text-xl text-yellow-600'>Find Us</h1>
      <p className=' text-white my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quam culpa! Unde labore in esse.</p>
      <div className=' flex flex-col items-start justify-start text-white'>
        <h2 className=' text-yellow-600 mb-2'>Openning hours</h2>
        <p>Monday - Friday: 9:00 - 22:00</p>
        <p>Saturday - Sunday: 9:00 - 23:00</p>
      </div>
      <button className=' p-3 bg-slate-500 text-black mt-8'>Lorem, ipsum.</button>
    </div>
    <div className=' flex-1 flex items-center justify-center mt-10 md:mt-0'>
      <img className=' md:w-[70%] w-[80%]' src={images.findus} alt="" />
    </div>

  </section>
);

export default FindUs;
