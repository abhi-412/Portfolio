import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import img from '../assets/img-me.jpg'

const Contact = [
    {icon:FaInstagram,link:"https://www.instagram.com/abhiyadav_412?igsh=OGQ5ZDc2ODk2ZA=="},
    {icon:FaFacebook,link:"https://www.facebook.com/login"},
    {icon:FaLinkedin,link:"www.linkedin.com/in/abhay-yadav-sd"},
    {icon:FaGithub,link:"https://github.com/abhi-412"},
    {icon:FaDiscord,link:"https://discord.com/"},
]

const Home = () => {
  return (
    <>
    <section className='flex w-full h-full justify-center bg-gray-900 py-20'>
    <div className='py-5 w-full flex justify-center h-full'>
        <div className='grid w-10/12 py-5 gap-6 md:grid-cols-2'>
        <div className='flex justify-center '>
            <div className="w-10/12 flex items-center  justify-center">
                <img src={img} className="object-fill w-96 h-96 lg:w-96 rounded-xl lg:h-full shadow-xl shadow-cyan-400" alt='me' />
                </div>
            </div>
            <div className='flex flex-col gap-10 mt-24 px-4'>
                <div className="title justify-center flex flex-col gap-6 px-3">
                    <h1 className='text-6xl font-bold text-cyan-600 flex '>Hello!</h1>
                    <h2 className='text-5xl font-bold text-white-600 flex '>I'm Abhay Pratap</h2>
                    <h3 className='text-3xl font-bold text-gray-500 flex '>MERN Stack and C++ Developer</h3>
                </div>
                
                <a href='tel:+918788091946' className='flex flex-wrap justify-center md:justify-start px-3 gap-10'>
                    <button className='bg-cyan-700 px-5 text-lg font-bold py-3 rounded-3xl hover:text-cyan-900 hover:bg-cyan-500'>Contact Me</button>
                </a>
                <div className='flex justify-start ml-4 items-center gap-10'>
                    {Contact.map((social,i)=>{
                        return <a key={i} href={social.link}><social.icon
                        className='text-3xl text-gray-600 hover:text-white cursor-pointer'
                        />
                        </a>
                    })}
                </div>
            </div>
            
        </div>
    </div>
</section>
                    
    
    </>
  )
}

export default Home
