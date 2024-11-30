import React from 'react'
import pro from '../assets/hero.svg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
import Portfolio from './Portfolio';


function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b
          from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-4xl sm:text-7xl font-bold">I'm Full Stack Developer</h2>
            <p className="text-gray-500 py-4 max-w-md">
              I am always curious that how software are works.
              Currently, I love love to workm on web application
               using technologies like 
              Java, Spring boot, React, Tailwind
            </p>
            <div>
              <Link to={portfolio} smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500
                cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25}  className=" ml-1"/>
                </span>
              </Link>
            </div>
            </div>
          <div className=''>
          <img src={pro} alt="My profile" className="rounded-2xl w-96 md:w-[500px] md:h-[400px]"/>
        </div>
          
        </div>
    </div>
  )
}

export default Home