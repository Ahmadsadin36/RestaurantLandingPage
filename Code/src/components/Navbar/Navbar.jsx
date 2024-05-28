import {react, useState} from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <nav className=' w-full flex justify-between items-center flex-row p-3'>
      <div className=' flex-1 flex items-center justify-start '>
        <img className=' md:w-40 w-36' src= {images.gericht} alt="" />
      </div> 
      <div className=' hidden lg:flex flex-1 items-center justify-center flex-row'>
        <ul className=' w-full flex items-center justify-center flex-row text-white '>
          <li className=' p-2 transition-colors hover:text-yellow-600'><a href="#home">Home</a></li>
          <li className=" p-2 transition-colors hover:text-yellow-600"><a href="#about">About</a></li>
          <li className=" p-2 transition-colors hover:text-yellow-600"><a href="#menu">Menu</a></li>
          <li className=" p-2 transition-colors hover:text-yellow-600"><a href="#awards">Awards</a></li>
          <li className=" p-2 transition-colors hover:text-yellow-600"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className=' hidden lg:flex flex-1 flex-row items-center justify-end text-white'>
        <a href="#login">Log In / Registration</a>
        <div className=' w-[1px] h-5 bg-white ml-2 mr-2'></div>
        <a href="/">Book Table</a>
      </div>
      <div className=' flex flex-1 justify-end items-center lg:hidden'>
        <GiHamburgerMenu className=' md:w-10 w-8 h-8 text-white cursor-pointer' onClick={() => setShowMenu (true)}/>
        {showMenu && (
          <div className=' fixed top-0 left-0 bg-black w-full h-[100vh] flex flex-col items-center justify-center slide-bottom'>
            <MdOutlineRestaurantMenu className=' absolute top-5 right-5 md:w-10 w-8 h-8 text-white slide-up cursor-pointer' onClick={() => setShowMenu(false)}/>
            <ul className=' w-full h-full flex flex-col items-center justify-center text-white'>
              <li className=' p-4 transition-colors hover:text-yellow-600'><a href="#home" onClick={() => setShowMenu (false)}>Home</a></li>
              <li className=' p-4 transition-colors hover:text-yellow-600'><a href="#about" onClick={() => setShowMenu (false)} >About</a></li>
              <li className=' p-4 transition-colors hover:text-yellow-600'><a href="#menu" onClick={() => setShowMenu (false)}>Menu</a></li>
              <li className=' p-4 transition-colors hover:text-yellow-600'><a href="#awards" onClick={() => setShowMenu (false)}>Awards</a></li>
              <li className=' p-4 transition-colors hover:text-yellow-600'><a href="#contact" onClick={() => setShowMenu (false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
