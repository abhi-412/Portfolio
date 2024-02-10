import {React,useState} from 'react'
import { MdWork } from "react-icons/md";
import ProjectCard from '../Components/ProjectCard'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

SwiperCore.use([Pagination]);



const work = [
{img:img1,name:"Portfolio",desc:"sxdcfvgnjcncdksdj jkbfkaibvlor",github:"https://github.com/abhi-412/portfolio",live:"https://myshare-abhi.netlify.app/"},
{img:img2,name:"MyShare",desc:"sxdcfvgnjcncdksdj jkbfkaibvlor",github:"https://github.com/abhi-412/myShare",live:"https://myshare-abhi.netlify.app/"},
{img:img3,name:"YelpCamp",desc:"sxdcfvgnjcncdksdj jkbfkaibvlor",github:"https://github.com/abhi-412/Yelp-Camp",live:"myShare-abhi.netlify.app"},
{img:img3,name:"Shopme",desc:"sxdcfvgnjcncdksdj jkbfkaibvlor",github:"https://github.com/abhi-412/Shopme",live:"shopme-abhi.netlify.app"}


,]

const Projects = () => {
    const [swiper, setSwiper] = useState(null);
  return (
    <section id='projects' className='py-5 mt-10 flex bg-gray-900'>
    <div className="flex w-full flex-col gap-10 justify-center">
        <div className='title flex items-center gap-10 justify-center'>
            <MdWork  className='text-6xl text-white-600'/>
            <h1 className='text-4xl'>My <span className='text-cyan-500'>Projects</span></h1>
        </div>

        <div className='flex justify-center items-center'>
            <div className='w-10/12 items-center'>
            <Swiper className=''
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
              className="button text-4xl   bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="button text-4xl  bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600"
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
