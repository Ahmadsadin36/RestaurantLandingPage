import React from 'react';
import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
      <div className=' flex flex-row items-center justify-start m-2 w-full md:w-1/3'>
        <img className=' w-1/3' src= {imgUrl} alt="" />
        <div className=' ml-2 w-2/3 flex items-center justify-start flex-col'>
        <h4 className=' text-left w-full'>{title}</h4>
        <p className=' text-left text-xs'>{subtitle}</p>
        </div>
      </div>
  )
}

const Laurels = () => {
  return (
    <section className=' bg-black w-full mt-8 flex md:flex-row flex-col items-center justify-start p-3'>
      <div className=' w-1/2 flex flex-col justify-start items-start md:items-center md:justify-center text-white'>
        <SubHeading title= "Laurels" />
        <h1 className='text-left text-yellow-600'>Our Laurels</h1>
        <div className=' flex flex-row w-full flex-wrap justify-start md:justify-center items-center p-2'>
          {data.awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>
      <div className=' w-1/2 flex items-center justify-center'>
        <img className=' md:w-[50%]' src= {images.laurels} alt="" />
      </div>
    </section>
  )
}

export default Laurels
