import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import resume from "../assets/resume.pdf"
import { IoCall, IoMailSharp } from 'react-icons/io5';

const HomeInfo = ({ currentStage }) => {





  if (currentStage === 5) {
    return (
      <div className="title justify-center items-center flex flex-col md:gap-6 gap-2 md:px-3">
        <h2 className='md:text-5xl text-2xl md:font-bold font-semibold text-white flex'>Welcome to my Portfolio</h2>
        <p className='md:text-2xl text-base sm:font-semibold font-light text-white flex'>Grab and Rotate the earth to navigate.</p>
               
      </div>
    );
  }

  if (currentStage === 1) {
    return (
      <div className="flex flex-col justify-center md:gap-10 gap-3">
        <div className="title justify-cener flex flex-col md:gap-6 gap-1 ">
          <h1 className='md:text-6xl text-xl  font-bold text-cyan-600 flex'>Hello!</h1>
          <h2 className='md:text-5xl text-2xl font-bold text-white flex'>I'm Abhay Pratap</h2>
          <h3 className='md:text-3xl text-base font-bold text-gray-300 flex'>MERN Stack and C++ Developer</h3>
        </div>
        <div className='flex items-center justify-start gap-4 '>
              <a href='tel:+918788091946' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 p-2 md:p-3 text-nowrap text-slate-200 md:text-2xl text-base font-bold rounded-full hover:text-white hover:bg-cyan-950'>
                  <IoCall />
                </button>
              </a>
              <a href='mailto:abhaypratap41234@gmail.com' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 p-2 md:p-3 text-nowrap text-slate-200 md:text-2xl text-base font-bold rounded-full hover:text-white hover:bg-cyan-950'>
                  <IoMailSharp />
                </button>
              </a>

              <a href={resume} target='_blank' rel='noreferrer' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 md:p-3  text-nowrap text-slate-200 md:text-lg text-xs font-semibold p-2 rounded-full hover:text-white hover:bg-cyan-950'>
                CV
                </button>
              </a>

        </div>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <h2 className='font-bold text-white flex'>About Me</h2>
        <p className='font-medium text-wrap text-center'>
         Have a look at my socials and previous experiences. <br /> Get to know me as a person and as a professional.
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <h2 className='text-4xl font-bold text-white flex'>Skills & Projects</h2>
        <p className='font-medium text-center sm:text-xl'>
        Built up multiple skills, and projects using them. <br /> Curious about the impact?
        </p>
        <Link to='/skills' className='neo-brutalism-white neo-btn'>
          My portfolio
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <h2 className='text-4xl font-bold text-white flex'>Contact Me</h2>
        <p className='font-medium sm:text-xl text-center'>
            Need a project done or looking for a developer? <br /> I'm just a few keystrokes away.
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
