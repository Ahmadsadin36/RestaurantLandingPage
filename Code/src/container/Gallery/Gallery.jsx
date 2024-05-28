import React, { useState, useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04
  ];
  const [currentImg, setCurrentImg] = useState(0);
  const imageRef = useRef(null);

  // Next Image
  const nextImg = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % galleryImages.length);
  };

  // Previous Image
  const prevImg = () => {
    setCurrentImg((prevImg) => (prevImg === 0 ? galleryImages.length - 1 : prevImg - 1));
  };

  return (
    <section className='w-full flex items-center justify-center flex-col md:flex-row p-3 mt-8'>
      <div className='flex-1 flex flex-col items-start justify-start p-2 w-full md:w-auto'>
        <SubHeading title='Gallery' />
        <h1 className='text-yellow-600 text-2xl tracking-wide mb-2'>Lorem, ipsum.</h1>
        <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quod sint consequatur. Deserunt mollitia adipisci culpa!</p>
        <button className='p-3 bg-slate-500'>view more</button>
      </div>
      <div className='flex-1 flex-row flex items-center justify-center md:justify-end gap-x-2 md:w-auto w-full'>
        <BsArrowLeftShort className='text-3xl text-slate-500 cursor-pointer' onClick={prevImg} />
        <div className='flex items-center justify-center mt-10 md:mt-0'>
          <img src={galleryImages[currentImg]} alt='gallery' className='object-cover rounded-xl w-[500px] h-[300px]' ref={imageRef} />
        </div>
        <BsArrowRightShort className='text-3xl text-slate-500 cursor-pointer' onClick={nextImg} />
      </div>
    </section>
  );
};

export default Gallery;
