import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <section className=' flex flex-col md:flex-row justify-center items-center w-full h-auto p-3 mt-8 bg-black'>
    <div className=' w-1/2 flex items-center justify-center mb-4 md:mb-0'>
      <img className=' md:w-[60%]' src= {images.chef} alt="" />
    </div>
    <div className=' w-1/2 flex justify-start items-start flex-col text-white'>
      <SubHeading title= "Our chef" />
      <h1 className=' text-2xl text-yellow-600 w-full text-left my-4'>Lorem ipsum dolor sit.</h1>
      <div className=' w-full flex justify-start items-center flex-row mb-4'>
        <img className=' mr-2' width={30} height={30}  src= {images.quote} alt="" />
        <p className=' text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
      </div>
      <div className=' w-full text-white mb-6'>
        <p className=' w-full h-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab pariatur natus recusandae voluptates autem dolorum adipisci placeat animi quidem?</p>
      </div>
      <div className=' flex w-full flex-col justify-start items-start text-white'>
        <h4 className=' text-yellow-600 text-left w-full'>name lastname</h4>
        <p className=' text-left w-full text-sm mb-6'>chef & founder</p>
        <img className=' w-[60%] md:w-[30%]' src={images.sign} alt="" />
      </div>
    </div>
  </section>
);

export default Chef;
