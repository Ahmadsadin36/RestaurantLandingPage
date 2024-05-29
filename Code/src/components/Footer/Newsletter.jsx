import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className=' w-[80%] md:w-[60%] flex flex-col items-center justify-center border border-yellow-600 text-white p-3'>
    <SubHeading title='Newsletter' />
    <h1 className=' text-yellow-600 tracking-wide text-xl'>Lorem ipsum dolor sit.</h1>
    <p className=' text-white'>Lorem ipsum dolor sit amet.</p>
    <div className=' flex flex-row items-center justify-center'>
      <input className=' outline-none bg-transparent text-gray-700 py-3 px-5 border border-yellow-600' type="email" placeholder='email?' />
      <button className=' bg-slate-500 text-black p-3 ml-2'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
