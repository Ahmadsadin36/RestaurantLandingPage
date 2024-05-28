import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [play, setPlay] = React.useState(false);
  const videoRef = React.useRef(null);
  return (
    <section className=' container m-auto flex items-center justify-center flex-col mt-8 rounded-xl'>
      <video loop muted controls = {false}  src={meal} type="video/mp4" ref={videoRef} className=' sm:rounded-xl w-full h-full' >
        Your browser does not support the video tag.
      </video>
      <div className=' w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-transparent border-white border-2 rounded-full absolute flex text-white'>
        {play ? <BsPauseFill onClick={() => {
          videoRef.current.pause();
          setPlay(false);
        }
        } className='w-8 h-8 m-auto cursor-pointer' /> : <BsFillPlayFill onClick={() => {
          videoRef.current.play();
          setPlay(true);
        }
        } className='w-8 h-8 m-auto cursor-pointer' />}
      </div>
    </section>
  )
}

export default Intro
