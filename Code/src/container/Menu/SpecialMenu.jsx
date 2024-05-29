import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <section className=' w-full flex flex-col items-center justify-center mt-8 p-3  sec-bg' id='menu'>
      <div className=' w-full h-auto flex justify-center items-center flex-col text-white'>
        <SubHeading title='Special Menu' />
        <h1 className=' w-full text-2xl text-center text-yellow-600'>Special Menu of Today </h1>
      </div>
      <div className=' w-full flex flex-col md:flex-row items-center justify-center mt-3 mb-10'>
        <div className=' w-1/3 h-full flex flex-col items-center justify-center md:justify-start'>
        <h1 className=' text-white  text-xl mb-3'>Wine & Bear</h1>
          <div className=' text-yellow-600'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
          </div>
        </div>
        <div className=' w-1/3 flex items-center justify-center'>
          <img className=' w-full h-full md:w-[90%] my-3 md:my-0' src={images.menu} alt="" />
        </div>
        <div className=' w-1/3 h-full flex flex-col items-center justify-center md:justify-start'>
          <h1 className=' text-white text-xl mb-3'>Cocktails</h1>
          <div className='text-yellow-600'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
          </div>
        </div>
      </div>
      <button className=' bg-slate-500 p-3'>Lorem, ipsum dolor.</button>
    </section>
  )
}

export default SpecialMenu
