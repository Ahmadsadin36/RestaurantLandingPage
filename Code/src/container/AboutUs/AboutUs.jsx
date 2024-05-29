import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';


const AboutUs = () => {
  // when the button is clicked the img should rotate in mobile view
  function rotateImg() {
    const img = document.querySelector('.special-img');
    img.style.transform = 'rotate(-90deg)';
  }
  function rotateImgBack() {
    const img = document.querySelector('.special-img');
    img.style.transform = 'rotate(0deg)';
  }
  function rotateImg2() {
    const img = document.querySelector('.special-img');
    img.style.transform = 'rotate(90deg)';
  }
  // when the button is clicked the img should rotate in medium and large view
  function rotateImg3() {
    const img = document.querySelector('.knife');
    img.style.transform = 'rotate(-30deg)';
  }
  function rotateImgBack3() {
    const img = document.querySelector('.knife');
    img.style.transform = 'rotate(0deg)';
  }
  function rotateImg4() {
    const img = document.querySelector('.knife');
    img.style.transform = 'rotate(30deg)';
  }



  return (
    <section className=' w-full flex justify-center items-center bg-black p-3 relative h-[600px] md:h-auto mt-8' id='about'>
    <div className=' inset-0 relative z-0 items-center justify-center flex h-[500px] md:h-auto'>
      <img className=' md:w-[65%] w-[70%]' src={images.G} alt="" />
    </div>
    <div className=' hidden absolute z-10 container m-auto md:flex flex-row items-center'>
      <div className=' flex flex-col items-end justify-end flex-1'>
        <h1 className=' text-xl text-yellow-600'>Lorem, ipsum dolor.</h1>
        <img src= {images.spoon} alt="" />
        <p className=' text-white text-right mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vero corrupti sequi, quod voluptates veniam adipisci saepe voluptas sit possimus.</p>
        <button className=' p-3 bg-slate-600 text-black' onClick={
          () => {
            if (document.querySelector('.knife').style.transform === 'rotate(-30deg)') {
              rotateImgBack3();
            }
            else {
              rotateImg3();
            }
          }
        }>Lorem, ipsum.</button>
      </div>
      <div className=' flex-1 flex justify-center items-center'>
        <img className=' h-96 md:h-[500px] knife' src={images.knife} alt="" />
      </div>
      <div className=' flex flex-col items-start justify-start flex-1'>
        <h1 className=' text-xl text-yellow-600'>Lorem, ipsum dolor.</h1>
        <img src= {images.spoon} alt="" />
        <p className=' text-white mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vero corrupti sequi, quod voluptates veniam adipisci saepe voluptas sit possimus.</p>
        <button className=' p-3 bg-slate-600 text-black' onClick={
          () => {
            if (document.querySelector('.knife').style.transform === 'rotate(30deg)') {
              rotateImgBack3();
            }
            else {
              rotateImg4();
            }
          }
        }>Lorem, ipsum.</button>
      </div>
    </div>


    <div className=' md:hidden flex flex-col items-start justify-start top-0 absolute p-3'>

    <div className=' flex flex-col items-start justify-start flex-1'>
        <h1 className=' text-xl text-yellow-600'>Lorem, ipsum dolor.</h1>
        <img src= {images.spoon} alt="" />
        <p className=' text-white mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vero corrupti sequi, quod voluptates veniam adipisci saepe voluptas sit possimus.</p>
        <button className=' p-3 bg-slate-600 text-black' onClick={
          () => {
            if (document.querySelector('.special-img').style.transform === 'rotate(90deg)') {
              rotateImgBack();
            }
            else {
              rotateImg2();
            }
          }
        }>Lorem, ipsum.</button>
      </div>

      <div className=' flex justify-center items-center w-full -rotate-90'>
        <img className=' h-40 special-img' src={images.knife} alt="" />
      </div>
      
      <div className=' flex flex-col items-start justify-start flex-1'>
        <h1 className=' text-xl text-yellow-600'>Lorem, ipsum dolor.</h1>
        <img src= {images.spoon} alt="" />
        <p className=' text-white mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vero corrupti sequi, quod voluptates veniam adipisci saepe voluptas sit possimus.</p>
        <button className=' p-3 bg-slate-600 text-black' onClick={() => {
          if (document.querySelector('.special-img').style.transform === 'rotate(-90deg)') {
            rotateImgBack();
          }
          else {
            rotateImg();
          }
        }}>Lorem, ipsum.</button>
      </div>

    </div>


  </section>
  )
}

export default AboutUs
