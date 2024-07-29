import {React,useState} from 'react'
import { MdWork } from "react-icons/md";
import ProjectCard from '../Components/ProjectCard'
import img1 from '../assets/p-1.png'
import img2 from '../assets/p-2.png'
import img3 from '../assets/p-3.png'
import img4 from '../assets/p-4.png'
import img5 from '../assets/p-5.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FaRegFolderOpen } from "react-icons/fa6";

SwiperCore.use([Pagination]);



const work = [
{img:img3,name:"Shopme",desc:"A MERN Stack shopping app. Has every feature of a modern Shopping Application. It's my best showcase of work.",github:"https://github.com/abhi-412/Shopme",live:"https://shopme-ebon.vercel.app/"},
{img:img1,name:"Portfolio",desc:"A catalogue of one's Skills and Projects for Recruiters and Collegues to see. Made using ReactJS and Tailwindcss, fully responsive.",github:"https://github.com/abhi-412/portfolio",live:"https://abhi412-portfolio.netlify.app/"},
{img:img2,name:"MyShare",desc:"A ReactJS Image Gallary for you to manage your images and view what others are into. Boasts CRUD operations and using Sanity backend and auth with google Oauth.",github:"https://github.com/abhi-412/myShare",live:"https://myshare-abhi.netlify.app/"},
{img:img4,name:"ChatterBox",desc:"Simple React UI with Firebase storage and authentication for a chatting application. A simple self practice project",github:"https://github.com/abhi-412/chat-app",live:"https://abhi-412-chatapp.netlify.app/"},
{img:img5,name:"YelpCamp",desc:"A traditional full Stack web app Yelp clone for Campgrounds. Features like CRUD, Auth Session and Cookies etc. Uses Vanilla JS Bootstrap and MEN Stack for Backend.",github:"https://github.com/abhi-412/Shopme",live:"shopme-abhi.netlify.app"}



,]

const Projects = () => {
    const [swiper, setSwiper] = useState(null);
  return (
    <section id='projects' className='py-5 mt-10 w-full flex bg-gray-800'>
    <div className="flex w-full flex-col gap-10 justify-center">
        <div className='title flex items-center gap-10 justify-center'>
            <FaRegFolderOpen  className='text-6xl text-white-600'/>
            <h1 className='text-4xl'>My <span className='text-cyan-500'>Projects</span></h1>
        </div>

        <div className='flex justify-center items-center'>
            <div className='md:w-10/12 w-full items-center'>
            <Swiper className='md:w-10/12 w-full'
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              900: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            modules={[Pagination]}
        >
            {work.map((item,i)=>{
                return (

                <SwiperSlide key={i}>
                    <ProjectCard img={item.img} desc={item.desc} github={item.github} live={item.live} name={item.name}/>
                </SwiperSlide>
                
                )
                
            })}

        </Swiper>
            </div>

        </div>
        <div className="flex justify-center gap-10 mt-5 items-center  rounded-full">
            <button
              className="button text-4xl rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="button text-4xl  rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <GrLinkNext />
            </button>
          </div>

    </div>
</section>
  )
}

export default Projects
