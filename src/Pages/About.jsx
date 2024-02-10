import React from 'react'
import img from '../assets/img-4.jpeg'
import resume from '../assets/abhay_resume.pdf'
const About = () => {
  return (
    <section id='about' className='bg-gray-800 w-full mt-10 flex justify-center py-5 md:py-24'>
        <div className="px-6 w-full lg:px-20">
                <div className='w-10/12 flex justify-center mb-5'>
                    <h1 className='text-4xl font-bold lg:text-5xl'>About <span className='text-cyan-500'>Me</span></h1>
                </div>
          <div className='container lg:grid flex gap-10 lg:gap-0  flex-col-reverse md:grid-cols-2'>
            <div className='flex flex-wrap gap-5 items-center xl:pl-20'>
                    
                <p className='md:text-xl lg:pl-20'>Hi, I am a web developer . I have a strong background in both front-end 
                and back-end development, as well as a solid understanding of the entire web development process. I am a highly
                motivated individual who is always looking for new challenges and ways to improve my skills. I am a team player
                who is able to work independently when necessary. The main languages in my tech stack are JavaScript, React,Node.js
                and of course HTML/CSS. I’m a lifelong learner (currently learning the depth of backend ) and love to read, run, and 
                find new things.
                </p>

                <div  className='w-full flex justify-center'>
                    <a href={resume} download className='bg-cyan-700 text-gray-200 font-bold text-lg px-4 py-3 rounded-3xl hover:bg-cyan-500 hover:text-cyan-900'>
                    
                        Download CV
                    </a>
                </div>
                   
            </div>
                <div className='flex justify-center'>
                <div className='flex lg:flex w-96 items-center justify-center h-full md:hidden'>
                    <img src={img} className='w-1/2 md:w-10/12 m:h-10/12 rounded-2xl shadow-xl shadow-cyan-600 ' alt="" />
                </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default About


